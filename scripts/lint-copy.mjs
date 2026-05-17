import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const checkedExtensions = new Set([
  ".md",
  ".mdx",
  ".html",
  ".htm",
  ".tsx",
  ".jsx",
  ".ts",
  ".js",
  ".astro",
  ".vue",
  ".svelte",
  ".txt",
  ".yml",
  ".yaml",
  ".json",
  ".css",
  ".svg",
]);

const copyCheckedExtensions = new Set([
  ".md",
  ".mdx",
  ".html",
  ".htm",
  ".tsx",
  ".jsx",
  ".ts",
  ".js",
  ".astro",
  ".vue",
  ".svelte",
  ".txt",
  ".yml",
  ".yaml",
  ".json",
]);

const skipDirs = new Set([
  ".git",
  "node_modules",
  "dist",
  "build",
  ".next",
  ".vercel",
  "coverage",
  "artifacts",
  "fixtures",
  "generated",
  "vendor",
]);

const copySkipFiles = new Set([
  "AGENTS.md",
  "COPY_STYLE.md",
  "CLAUDE.md",
  "scripts/lint-copy.mjs",
  "package-lock.json",
]);

const styleRules = [
  {
    name: "not-reframe-but",
    pattern: /\bnot\s+(?:just|only|merely|simply)?\s*[^.!?\n]{1,120}\s+but\s+(?:also\s+)?[^.!?\n]{1,120}/gi,
  },
  {
    name: "does-not-reframe-but",
    pattern: /\b(?:does|do|did)\s+not\s+[^.!?\n]{1,120}\s+but\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "comma-but-reframe",
    pattern: /\b(?:this|that|it|they|we|the\s+(?:goal|point|question|claim|site|page|demo|repo|product|value|story))\s+(?:is|are|was|were)\s+[^.!?\n]{1,80},\s+but\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "more-than-reframe",
    pattern: /\bmore\s+than\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "merely-reframe",
    pattern: /\b(?:is|are|was|were|isn't|aren't|wasn't|weren't)\s+(?:merely|simply|just)\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "beyond-reframe",
    pattern: /\b(?:goes?|extends?|moves?)\s+beyond\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "rather-than-reframe",
    pattern: /\brather\s+than\s+[^.!?\n]{1,120}/gi,
  },
  {
    name: "generic-platform-copy",
    pattern: /\b(platform capabilities|technology overview|where the platform applies|start a conversation|complete picture|all-in-one|end-to-end)\b/gi,
  },
  {
    name: "generic-discovery-positioning",
    pattern: /\bmaterials discovery\b/gi,
  },
  {
    name: "empty-marketing-verb",
    pattern: /\b(unlock|empower|transformative|revolutionary|revolutionize|seamless|robust|holistic|game[- ]changing|cutting[- ]edge)\b/gi,
  },
  {
    name: "ai-throat-clearing",
    pattern: /\b(in today'?s rapidly evolving|it is important to note|it is worth noting|in conclusion|ultimately|at its core|in essence)\b/gi,
  },
  {
    name: "public-meta-copy",
    pattern: /\b(website copy|campaign copy|copy style|agent notes|agent guidance|copy cleanup|llm-facing|repo text|website project guidelines)\b/gi,
  },
];

const publicMetaRules = [
  {
    name: "public-editorial-scaffold",
    pattern:
      /\b(website copy|campaign copy|website claims|default website claims|public story|public framing|copy style|agent notes|agent guidance|copy cleanup|llm-facing|repo text|website project guidelines|research basis section should show|section should show|how the sweep changes|feature the campaign|feature electrocatalyst|use the site to show|what the literature supports on the site|siteUse|keep the section compact|keep\s+[^.!?\n]{0,90}\bwording\b)\b/gi,
  },
  {
    name: "internal-research-scaffold",
    pattern:
      /\b(what the literature supports|research basis|local capability guide|support a narrow claim|the evidence supports|appears directly|literature supports|how the sweep changes)\b/gi,
  },
];

const legacyServedPageStyleAllowlist = new Set([
  "index.html",
  "index.original.html",
  "js/main.js",
  "revamped/index.html",
  "revamped/js/main.js",
]);

const brandPattern = /\b(?:XemX|XEMX|xEMX)\b/g;
const failures = [];

const textFiles = [];
walk(root);
checkPagesExposure();

for (const file of textFiles) {
  checkBrand(file.fullPath, file.relativePath);
  if (shouldCheckPublicMeta(file)) checkCopy(file.fullPath, file.relativePath, publicMetaRules, { rawHtml: true });
  if (shouldCheckStyle(file)) checkCopy(file.fullPath, file.relativePath, styleRules, { rawHtml: false });
}

if (failures.length > 0) {
  console.error("\nCopy lint failed:\n");

  for (const failure of failures) {
    console.error(`${failure.file}:${failure.line ?? 1} [${failure.rule}] ${failure.text}`);
  }

  console.error("\nUse `xemX`, keep guidance files out of served Pages output, and rewrite public text as direct material claims instead of editing notes.\n");
  process.exit(1);
}

console.log("Copy lint passed.");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = toPosix(path.relative(root, fullPath));

    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) walk(fullPath);
      continue;
    }

    if (!entry.isFile()) continue;
    if (!checkedExtensions.has(path.extname(entry.name))) continue;

    textFiles.push({ fullPath, relativePath });
  }
}

function checkBrand(fullPath, relativePath) {
  const text = fs.readFileSync(fullPath, "utf8");
  const lines = text.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    brandPattern.lastIndex = 0;
    const match = brandPattern.exec(lines[i]);
    if (match) {
      failures.push({
        file: relativePath,
        line: i + 1,
        rule: "brand-casing",
        text: lines[i].trim(),
      });
    }
  }
}

function shouldCheckCopy(file) {
  if (!copyCheckedExtensions.has(path.extname(file.relativePath))) return false;
  if (copySkipFiles.has(file.relativePath)) return false;
  if (isPagesExcluded(file.relativePath)) return false;
  return true;
}

function shouldCheckPublicMeta(file) {
  return shouldCheckCopy(file);
}

function shouldCheckStyle(file) {
  if (!shouldCheckCopy(file)) return false;
  if (file.relativePath.includes("/assets/")) return false;
  if (legacyServedPageStyleAllowlist.has(file.relativePath)) return false;
  return true;
}

function checkCopy(fullPath, relativePath, activeRules, options) {
  let text = fs.readFileSync(fullPath, "utf8");
  if (!options.rawHtml && /\.(html|htm)$/i.test(relativePath)) text = stripHtmlCodeBlocks(text);

  const lines = text.split(/\r?\n/);

  for (const rule of activeRules) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (isCodePropertyLine(line, rule.name)) continue;
      rule.pattern.lastIndex = 0;
      const match = rule.pattern.exec(line);

      if (match) {
        failures.push({
          file: relativePath,
          line: i + 1,
          rule: rule.name,
          text: line.trim(),
        });
      }
    }
  }
}

function stripHtmlCodeBlocks(text) {
  return text
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "");
}

function isCodePropertyLine(line, ruleName) {
  if (ruleName !== "empty-marketing-verb") return false;
  return /\b(?:text-)?transform\s*:/.test(line) || /\btransition\s*:[^;]*\btransform\b/.test(line);
}

function checkPagesExposure() {
  if (!fs.existsSync(path.join(root, "CNAME"))) return;

  const configPath = path.join(root, "_config.yml");
  const config = fs.existsSync(configPath) ? fs.readFileSync(configPath, "utf8") : "";
  const requiredExcludes = [
    "AGENTS.md",
    "COPY_STYLE.md",
    "CLAUDE.md",
    "package.json",
    "package-lock.json",
    "revamped/CLAUDE.md",
    "revamped/README.md",
    "scripts/",
    ".github/",
  ];

  for (const exclude of requiredExcludes) {
    if (!config.includes(`- ${exclude}`)) {
      failures.push({
        file: "_config.yml",
        rule: "pages-exclude",
        text: `Missing Pages exclude for ${exclude}`,
      });
    }
  }
}

function isPagesExcluded(relativePath) {
  const configPath = path.join(root, "_config.yml");
  if (!fs.existsSync(configPath)) return false;

  const config = fs.readFileSync(configPath, "utf8");
  const excludes = config
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  return excludes.some((exclude) => {
    if (exclude.endsWith("/")) return relativePath.startsWith(exclude);
    return relativePath === exclude;
  });
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}
