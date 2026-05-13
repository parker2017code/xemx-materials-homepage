export type DetailGroup = {
  title: string
  intro: string
  items: Array<{
    name: string
    status?: "core" | "ecosystem" | "verify"
    plain: string
    technical?: string
    note?: string
  }>
}

export const capabilityGroups: DetailGroup[] = [
  {
    title: "Core campaign platform",
    intro:
      "The physical campaign layer: real libraries, composition gradients, sputtering routes, and follow-up samples where the screen points to a useful region.",
    items: [
      {
        name: "Combinatorial thin-film material libraries",
        status: "core",
        plain: "Many related material compositions are created in one campaign instead of one sample at a time.",
        technical: "Composition-spread thin-film libraries, usually built around a defined material question.",
      },
      {
        name: "100 mm wafer library format",
        status: "core",
        plain: "A single wafer can contain many related material variations across its surface.",
        technical: "Wafer-scale libraries with measured positions across the composition space.",
      },
      {
        name: "Hundreds of measured points",
        status: "core",
        plain: "The customer gets a measured map, not just a handful of isolated samples.",
        technical: "Use approved project numbers when Lars/Sven confirm the public count.",
      },
      {
        name: "Multisource magnetron co-sputtering",
        status: "core",
        plain: "Several source materials can be deposited together so composition changes across the sample.",
        technical: "Co-sputtered lateral composition-gradient libraries.",
      },
      {
        name: "Multicomponent material spaces",
        status: "core",
        plain: "Campaigns can explore more than simple binary systems when the question requires it.",
        technical: "Use approved cathode and element counts only after confirmation.",
      },
      {
        name: "Reactive sputtering",
        status: "core",
        plain: "Nitride and oxide libraries can be created where nitrogen or oxygen is part of the material system.",
        technical: "Reactive sputtering routes for selected oxide and nitride spaces.",
      },
      {
        name: "Metals, alloys, nitrides, and oxides",
        status: "core",
        plain: "The practical material universe includes several thin-film families, not only one class.",
      },
      {
        name: "Follow-on uniform depositions",
        status: "verify",
        plain: "Promising regions may be prepared as more uniform follow-up samples for validation.",
        note: "Keep this conditional until the standard delivery model is confirmed.",
      },
    ],
  },
  {
    title: "Measurement stack",
    intro:
      "The measurement plan changes with the decision: what formed, how properties changed, and where tradeoffs appear.",
    items: [
      {
        name: "Composition mapping",
        status: "core",
        plain: "Shows which elements are present, where they are, and in what ratio.",
        technical: "EDX / WDX composition mapping.",
      },
      {
        name: "Phase and structure mapping",
        status: "core",
        plain: "Shows which crystal structures form across the material library.",
        technical: "Automated XRD phase and structure mapping.",
      },
      {
        name: "Electrical screening",
        status: "core",
        plain: "Measures useful conductivity or resistivity behavior across the material space.",
        technical: "Four-point probe, sheet resistance, resistivity.",
      },
      {
        name: "Mechanical screening",
        status: "core",
        plain: "Compares hardness and stiffness for coatings, hard films, and mechanically constrained layers.",
        technical: "Nanoindentation for hardness and elastic modulus.",
      },
      {
        name: "Optical screening",
        status: "core",
        plain: "Maps how reflectance, absorption, or transparency changes across the library.",
        technical: "UV-VIS reflectance or related optical response mapping.",
      },
      {
        name: "Magnetic screening",
        status: "core",
        plain: "Shows where useful magnetic behavior appears across a composition space.",
        technical: "MOKE magnetic characterization.",
      },
      {
        name: "Localized electrochemical screening",
        status: "core",
        plain: "Compares activity, stability, or surface behavior across many material compositions.",
        technical: "Scanning Droplet Cell for selected electrochemical campaigns.",
      },
      {
        name: "Automated pattern analysis",
        status: "verify",
        plain: "Software can help interpret large sets of structural data from a campaign.",
        technical: "XCA / AI-assisted XRD analysis should be named only if approved.",
      },
    ],
  },
  {
    title: "Campaign intelligence",
    intro:
      "The customer is not buying a random measurement menu. The value is in designing the screen, comparing tradeoffs, and choosing the next test.",
    items: [
      {
        name: "Campaign design",
        status: "core",
        plain: "Define the material family, composition range, constraints, and measurements around the decision.",
        technical: "DoE-style composition, process, and property mapping.",
      },
      {
        name: "Composition-property maps",
        status: "core",
        plain: "The output shows which regions look promising, which fail, and what should be tested next.",
      },
      {
        name: "Multi-property tradeoff comparison",
        status: "core",
        plain: "Compare cases where conductivity, phase, hardness, optical response, magnetics, activity, or stability matter together.",
        technical: "Pareto-style or multi-objective comparison where useful.",
      },
      {
        name: "Data-guided iteration",
        status: "core",
        plain: "Use the first measured map to decide where the next campaign should focus.",
        technical: "Active learning, Bayesian optimization, or Gaussian-process-guided selection when appropriate.",
      },
      {
        name: "Thin-film proxy discipline",
        status: "core",
        plain: "Screening can narrow the search, but final material format validation still matters.",
        note: "This is important for bulk alloys, powders, batteries, devices, and coated hardware.",
      },
    ],
  },
  {
    title: "Extended ecosystem access",
    intro:
      "Selected projects may connect to broader Bochum materials and interfaces resources. This should stay separate from standard xemX-owned deliverables.",
    items: [
      {
        name: "Electron microscopy",
        status: "ecosystem",
        plain: "Follow-up imaging for surfaces, structures, interfaces, or candidate materials.",
        technical: "SEM, TEM, and related microscopy through broader ecosystem support.",
      },
      {
        name: "Cross-section and interface analysis",
        status: "ecosystem",
        plain: "Deeper inspection of thin-film stacks and interfaces when selected candidates need explanation.",
        technical: "FIB preparation, TEM follow-up, advanced interface analysis.",
      },
      {
        name: "Nanoscale composition analysis",
        status: "ecosystem",
        plain: "Advanced composition analysis for selected nanoscale questions.",
        technical: "APT or similar methods only if available for the project.",
      },
      {
        name: "3D structure and surface methods",
        status: "ecosystem",
        plain: "Additional structural or surface analysis where the material question requires it.",
        technical: "X-ray tomography, AFM, scanning probe methods.",
      },
      {
        name: "Localized electrochemistry expertise",
        status: "ecosystem",
        plain: "Broader electrochemical methods can support selected surface or interface questions.",
        technical: "SECM / SECCM-type expertise should be phrased carefully.",
      },
      {
        name: "Micro/nano fabrication support",
        status: "ecosystem",
        plain: "Selected projects may connect screening results to test structures or microfabrication workflows.",
        technical: "Cleanroom, etch, patterning, and related support only through confirmed project routes.",
      },
      {
        name: "Modeling and data analysis",
        status: "ecosystem",
        plain: "Computational analysis can support campaign design and interpretation.",
        note: "Keep physical measured data as the core story.",
      },
      {
        name: "Partner manufacturing or scale-up",
        status: "verify",
        plain: "Selected candidates may move toward customer validation or partner-supported prototype production.",
        note: "Do not imply production scale-up unless formally available.",
      },
    ],
  },
]

export const methodGroups: DetailGroup[] = [
  {
    title: "Library creation methods",
    intro: "Methods that create the physical search space before measurements begin.",
    items: [
      {
        name: "Magnetron co-sputtering",
        status: "core",
        plain: "Creates composition-gradient thin-film libraries from multiple source materials.",
      },
      {
        name: "Reactive sputtering",
        status: "core",
        plain: "Enables nitride and oxide material libraries where reactive gases are part of the process.",
      },
      {
        name: "Continuous lateral composition gradients",
        status: "core",
        plain: "One sample can cover a range of related compositions, so each point is a different material variant.",
      },
      {
        name: "Uniform follow-up samples",
        status: "verify",
        plain: "A promising region can be prepared as a simpler follow-up sample if that is part of the project scope.",
      },
    ],
  },
  {
    title: "Characterization methods",
    intro: "Methods that turn the library into a material map.",
    items: [
      { name: "XRD", status: "core", plain: "Phase, structure, and texture-relevant mapping across the library." },
      { name: "EDX / WDX", status: "core", plain: "Composition mapping at measured positions." },
      { name: "Four-point probe", status: "core", plain: "Sheet resistance and resistivity screening." },
      { name: "Nanoindentation", status: "core", plain: "Hardness and elastic modulus screening." },
      { name: "UV-VIS", status: "core", plain: "Optical reflectance, absorption, or transparency-related screening." },
      { name: "MOKE", status: "core", plain: "Magnetic response mapping across composition space." },
      { name: "Scanning Droplet Cell", status: "core", plain: "Localized electrochemical activity, stability, or surface behavior screening." },
    ],
  },
  {
    title: "Analysis methods",
    intro: "Methods that help decide where the next experiment should focus.",
    items: [
      { name: "Composition-property maps", status: "core", plain: "Measured maps tying properties to composition regions." },
      { name: "Multi-property comparison", status: "core", plain: "Tradeoff analysis when several properties matter at once." },
      { name: "Active learning", status: "core", plain: "Measured results guide the next campaign instead of guessing the next sample." },
      { name: "Bayesian optimization", status: "core", plain: "Optimization support for large search spaces when the data and question fit." },
      { name: "Automated XRD pattern analysis", status: "verify", plain: "Useful support capability, but avoid leading with software-first language." },
    ],
  },
]

export const applicationFamilies = [
  {
    title: "Semiconductor thin films",
    focus: ["low-resistance metals", "barriers, liners, caps, contacts", "memory stacks", "gate insulator-adjacent oxides"],
    measures: "phase, texture, resistivity, composition, and structure screening",
    caution: "Device-level validation remains customer-side.",
  },
  {
    title: "RF acoustic films",
    focus: ["AlN", "AlScN / ScAlN", "film texture", "composition windows"],
    measures: "composition, structure, texture, electrical or mechanical proxies",
    caution: "Resonator-level validation remains customer-side.",
  },
  {
    title: "Electrochemical materials",
    focus: ["water electrolysis catalysts", "CO2 electrolysis catalysts", "electrode surfaces", "activity and stability"],
    measures: "localized electrochemical screening tied to composition and surface behavior",
    caution: "Full cell or hardware validation remains downstream.",
  },
  {
    title: "Conductive protective coatings",
    focus: ["bipolar plates", "electrochemical hardware", "surface layers", "protection plus electrical behavior"],
    measures: "composition, structure, resistance, hardness, and electrochemical behavior where relevant",
    caution: "Hardware testing remains a separate validation stage.",
  },
  {
    title: "Battery interfaces",
    focus: ["current collector coatings", "solid-state interfaces", "protective layers", "thin interface films"],
    measures: "composition, structure, surface behavior, and selected electrochemical response",
    caution: "Full cell validation remains with the customer or validation partner.",
  },
  {
    title: "Magnetic thin films",
    focus: ["magnetic multilayers", "coercivity", "magnetic response", "reduced-rare-earth directions"],
    measures: "MOKE, composition mapping, and phase or structure mapping",
    caution: "Stack-specific validation remains downstream.",
  },
  {
    title: "Optical and functional coatings",
    focus: ["reflectance", "absorption", "transparency", "glass coatings", "photonic thin films"],
    measures: "optical response, composition, phase, and stability-relevant behavior",
    caution: "Final coating stack or photonic device validation remains separate.",
  },
  {
    title: "Advanced packaging interfaces",
    focus: ["bonding layers", "adhesion layers", "diffusion barriers", "surface layers"],
    measures: "composition, structure, mechanical response, and interface-relevant screening",
    caution: "Package-level reliability remains customer-side.",
  },
]
