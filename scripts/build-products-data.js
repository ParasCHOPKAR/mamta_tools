const fs = require('fs');
const path = require('path');

const enriched = JSON.parse(fs.readFileSync('scripts/enriched_products.json', 'utf-8'));
const catMeta = JSON.parse(fs.readFileSync('scripts/category_meta.json', 'utf-8'));

const CATEGORY_INFO = {
  'face-milling-cutter': {
    name: "Face Milling Cutters",
    headline: "High-Performance 45° & 90° Indexable Face Mills for Heavy Metal Removal",
    description: "Industrial face mill cutter bodies engineered in Pune for roughing, squaring, and finishing MS, EN steels, alloy steel, and cast iron on CNCs and VMCs.",
    iconName: "Disc",
    keyFeatures: ["Heavy-duty EN steel & hardened tool steel bodies", "Square end & 45° / 90° approach geometries", "Vibration-free surface finishing on large baseplates", "High MRR with indexable carbide inserts"],
    applications: ["Heavy machine tool base plates", "Engine blocks & cylinder heads", "Fabrication weldments & face squaring", "Die mold surface leveling"]
  },
  'indexable-shoulder-mill-cutter-endmill-cutter': {
    name: "Indexable Shoulder Milling Cutters & End Mills",
    headline: "Precision 90° True Shoulder End Mills for Slotting & Pocketing",
    description: "Indexable end mill cutter bodies compatible with APMT 1135, Kyocera LOMU-1003, and ZCC inserts for chatter-free slotting and step profiling.",
    iconName: "Wrench",
    keyFeatures: ["True 90-degree square shoulder milling capability", "Differential flute pitch for harmonic damping", "Available in shank diameters Ø16, Ø20, Ø25, Ø32, Ø40mm", "Dual flute and 3-flute high chip pocket clearances"],
    applications: ["Die cavity roughing & pocket milling", "Step profiling & keyway milling", "Deep narrow slotting", "Aerospace structural machining"]
  },
  'milling-cutter': {
    name: "Corner Milling Cutters",
    headline: "Economical Corner-Index Cutters Utilizing APMT & CNMG Turning Inserts",
    description: "Specialized milling cutter bodies engineered to utilize standard APMT and unused corners of CNMG inserts, drastically slashing shop tooling costs.",
    iconName: "Cpu",
    keyFeatures: ["Repurposes unused corners of turning inserts (CNMG / WNMG)", "Hardened EN steel bodies for high shear strength", "Economical per-edge machining cost", "Quick insert indexing with secure Torx screw clamp"],
    applications: ["General machine shop rough milling", "Weld preparation beveling", "Cost-sensitive batch face milling", "Plate edge squaring"]
  },
  'boring-head': {
    name: "Boring Heads & Boring Units",
    headline: "Modular Rough & Vernier-Adjustable Finish Boring Heads",
    description: "High-accuracy hole finishing down to IT6 tolerance with graduated dial micro-vernier adjustment and modular CKB / shank connections.",
    iconName: "Target",
    keyFeatures: ["Graduated micro-vernier dial for 0.002mm diametrical adjustments", "Balanced twin-cutter rough boring design", "Modular connection compatible with standard toolholders", "Internal vibration damping mechanism"],
    applications: ["Engine cylinder liners", "Bearing housing bores", "Hydraulic cylinder barrels", "Gearbox precision journal seating"]
  },
  'high-feed-milling-cutter': {
    name: "High Feed Milling Cutters",
    headline: "Extreme Material Removal Rate (MRR) with Low Radial Cutting Forces",
    description: "Shallow depth of cut, ultra-high table feed solutions utilizing chip thinning principles to slash machining cycle times by up to 300%.",
    iconName: "Zap",
    keyFeatures: ["Chip thinning technology redirecting cutting forces axially", "Allows long overhang without deflection or chatter", "Available in Ø50mm up to Ø160mm shell mill bodies", "Multi-edge economical insert geometry"],
    applications: ["Deep cavity mold manufacturing", "Hardened steel die roughing", "Large turbine blade roots", "Automotive transmission cases"]
  },
  't-slot-cutter': {
    name: "T-Slot Milling Cutters",
    headline: "Indexable T-Slot Cutters for Machine Tool Tables & Clamping Tracks",
    description: "Robust indexable T-slot cutters designed for single-setup machining of DIN and ANSI T-slots with high rigidity and smooth chip clearance.",
    iconName: "Layers",
    keyFeatures: ["Pre-balanced cutter bodies for smooth side and under-cutting", "Through-coolant delivery to cutting edges", "Rigid mounting preventing shank taper twist", "Indexable insert pockets for fast changeover"],
    applications: ["Machine tool worktables & sub-plates", "Fixture base plates", "Rail guided tooling slides", "Hydraulic press bed slots"]
  },
  'core-drills': {
    name: "Indexable Core Drills",
    headline: "High-Performance Core Drills for Enlarging & Truing Cored Holes",
    description: "Multi-flute indexable core drills for rapid enlarging of existing flame-cut, pre-drilled, or casting holes without runout or wander.",
    iconName: "Compass",
    keyFeatures: ["Straight shank & Morse taper indexable mounting", "Multiple cutting teeth for balanced hole opening", "Heavy flute gullets for rapid chip extraction", "Hardened EN steel construction"],
    applications: ["Cored hole enlargement in cast iron", "Tube sheet manufacturing", "Heavy fabrication bolt hole enlarging", "Pump casing bore roughing"]
  },
  'ruffer-cutter': {
    name: "Roughing Cutters (Ruffer Cutters)",
    headline: "Heavy Metal Removal Wave-Edge & Serrated Roughing Cutters",
    description: "Engineered for maximum chip load during initial roughing of large billets, structural forgings, and heavy plate surfaces.",
    iconName: "Wrench",
    keyFeatures: ["Serrated chip-breaking geometry lowers spindle power requirements", "Alloy tool steel hardened to 50 HRC", "Accommodates high feed rates in tough steels", "Through-coolant design"],
    applications: ["Heavy die roughing", "Shipbuilding structural components", "Forging flash removal", "Large weld bevel roughing"]
  },
  'modular-shank': {
    name: "Modular Shanks & Extensions",
    headline: "Carbide & Heavy Metal Anti-Vibration Modular Tool Shanks",
    description: "High-rigidity modular extensions with threaded couplings (M8-M16) designed for deep reach and long overhang milling with zero chatter.",
    iconName: "Layers",
    keyFeatures: ["High elastic modulus material for extreme vibration resistance", "Precision ground pilot and shoulder seating", "Available in lengths 160mm, 200mm, 250mm, 300mm", "Through-shank high pressure coolant channel"],
    applications: ["Deep cavity die & mold milling", "Deep pocket ribs in aerospace frames", "Internal boss facing", "Narrow slot deep reach"]
  },
  'modular-cutter': {
    name: "Modular Milling Cutters",
    headline: "Interchangeable Screw-Fit Modular Milling Heads",
    description: "Quick-swap threaded milling cutter heads compatible with modular steel and solid carbide extension shanks for flexible shop tooling setups.",
    iconName: "Wrench",
    keyFeatures: ["Standard threaded connections for fast head swap", "Compact head design for multi-axis clearance", "Compatible with industry-standard indexable inserts", "Hardened alloy body for extended life"],
    applications: ["5-axis simultaneous mold contouring", "Deep pocketing", "Job-shop versatile setup tooling", "Complex internal surfaces"]
  },
  'ball-nose-cutter': {
    name: "Ball Nose Cutters",
    headline: "Indexable Ball Nose End Mills for 3D Profiling & Contouring",
    description: "Precision hemispherical indexable milling cutters engineered for 3D contouring, die sinking, fillet radii, and sculpted surface finishing.",
    iconName: "Compass",
    keyFeatures: ["True spherical profile accuracy", "2-flute indexable insert geometry", "Rigid tool body for smooth surface finish", "Excellent chip evacuation in deep contour cuts"],
    applications: ["Die casting mold cavities", "Plastic injection molds", "Turbine blade aerodynamic surfaces", "Automotive stamping dies"]
  },
  'side-and-face-cutter': {
    name: "Side and Face Milling Cutters",
    headline: "Heavy-Duty Indexable Disc Cutters for Deep Slotting & Straddle Milling",
    description: "Bore-mounted indexable disc cutters designed for deep slotting, parting, grooving, and simultaneous bilateral face milling operations.",
    iconName: "Disc",
    keyFeatures: ["Staggered tooth indexable design balances lateral forces", "Standard bore mounting (Ø27mm - Ø40mm)", "Heavy-duty EN steel body construction", "High depth-of-cut capability"],
    applications: ["Deep keyways and drive slots", "Straddle milling of connecting rods", "Spline shaft slotting", "Structural beam separation grooves"]
  },
  'profile-milling-cutter': {
    name: "Profile Milling Cutters",
    headline: "Custom Form Cutters for Complex 3D Contours & Radius Grooves",
    description: "Engineered profile milling cutters (including 52-R6-22 ZCC series) designed for dedicated contour generation in a single machine pass.",
    iconName: "Cpu",
    keyFeatures: ["4-flute design with precision ground radius geometry", "EN steel body hardened for industrial endurance", "Pre-balanced for medium to high spindle speeds", "Reduces multi-pass finishing cycles into a single pass"],
    applications: ["Turbine rotor blade root slots", "Automotive steering linkage grooves", "Rail switch profiling", "Custom hydraulic manifold profiles"]
  },
  'dovetail-cutter': {
    name: "Dovetail Cutters",
    headline: "Precision 45° & 60° Indexable Dovetail Guideway Cutters",
    description: "Indexable dovetail cutters engineered for machining machine tool slideways, gibs, and precision slide assemblies with exact angular tolerances.",
    iconName: "Layers",
    keyFeatures: ["Precision ground angular pockets (45° and 60°)", "Multi-tooth indexable insert layout", "Through-coolant delivery to undercuts", "Rigid mounting prevents deflection on steep angles"],
    applications: ["Machine tool guideways & slides", "Quick-change tool post dovetails", "Linear guide clamping rails", "Fixture indexing rails"]
  },
  'u-drill': {
    name: "U-Drills (Indexable Drills)",
    headline: "High-Speed Indexable Insert Drills from 2D to 5D",
    description: "Indexable drill bodies with internal and peripheral SPMG carbide inserts for high penetration rate hole drilling without pre-spotting.",
    iconName: "Compass",
    keyFeatures: ["High-pressure helical through-coolant flutes", "Balanced cutting force geometry eliminates drill wandering", "Utilizes economical 4-corner SPMG indexable inserts", "Suitable for drilling solid steel, stainless, and cast iron"],
    applications: ["Tube sheet drilling", "Hydraulic block port drilling", "Flange bolt holes", "Automotive hub and gear blank holes"]
  },
  'ckb-extension': {
    name: "CKB Boring Unit Extensions",
    headline: "Modular CKB Extension Adapters for Extended Reach Boring",
    description: "Precision-machined CKB system extensions designed to extend the reach of rough and finish boring heads into deep bores with minimal deflection.",
    iconName: "Layers",
    keyFeatures: ["Precision CKB modular coupling with radial locking pin", "Available in 160mm, 200mm, 250mm, and 300mm lengths", "Hardened and ground pilot surfaces for sub-0.003mm runout", "Full through-coolant compatibility"],
    applications: ["Deep engine block cylinder boring", "Extruder barrel boring", "Heavy gearbox casing reach", "Long hydraulic cylinder machining"]
  },
  'spot-face-cutter': {
    name: "Spot Face Cutters",
    headline: "Indexable Spot Facing & Counterboring Tools for Bolt Seating",
    description: "Heavy-duty spot face cutters designed for creating flat, true bearing surfaces around bolt holes on rough castings and uneven weldments.",
    iconName: "Disc",
    keyFeatures: ["Flat 90° face cutting for perpendicular bolt head seating", "Hardness 30-32 HRC body for shock resistance", "Interchangeable pilot guides available", "Available in all standard metric and imperial diameters"],
    applications: ["Flange bolt head seating", "Engine casing counterboring", "Structural column base bolt facing", "Cast pump body pad machining"]
  },
  'champer-cutter': {
    name: "Chamfer Tools & Cutters",
    headline: "Indexable 45° Chamfering, Deburring & Beveling Tools",
    description: "High-speed indexable chamfer cutters for edge beveling, deburring, and countersinking of holes and plate edges on CNC milling machines.",
    iconName: "Wrench",
    keyFeatures: ["45-degree lead angle with indexable carbide inserts", "Available in shank lengths 160mm to 200mm", "Vibration-free edge profiling at high table feed", "Dual-tooth balanced cutting"],
    applications: ["Hole entry chamfering", "Weld preparation beveling", "Deburring machined part perimeter", "Countersinking socket cap screws"]
  },
  'milling-cutters': {
    name: "Heavy Shell Milling Cutters",
    headline: "TNMG-16 Shell Mill Cutters for Heavy Metal Surface Milling",
    description: "Economical shell milling cutter bodies designed to utilize 6-corner TNMG turning inserts for large area surface facing in structural steel.",
    iconName: "Disc",
    keyFeatures: ["5-tooth indexable configuration with TNMG-16 inserts", "Shell mill arbor mounting for high torque transfer", "1.0 kg balanced body minimizing spindle vibration", "Exceptional economy per cutting edge"],
    applications: ["Structural plate squaring", "Heavy fabrications facing", "General job shop roughing", "Cast iron baseplate surfacing"]
  },
  'carbide-inserts': {
    name: "Industrial Carbide Inserts",
    headline: "PVD & CVD Coated Indexable Carbide Milling & Turning Inserts",
    description: "Premium micrograin tungsten carbide inserts with nano-composite PVD coatings (APMT 1135, TNMG, SNMX) for high thermal and wear resistance.",
    iconName: "Shield",
    keyFeatures: ["Advanced PVD multi-layer coating for heat and abrasion resistance", "Precision molded chip breaker for superior chip control", "Corner radius R0.8mm for high surface finish", "Versatile performance in Steel, SS, and Cast Iron"],
    applications: ["CNC shoulder and face milling", "Pocketing and slotting", "Hardened steel milling", "High production mass manufacturing"]
  }
};

// Generate PRODUCT_CATEGORIES
const categoriesOut = catMeta.map(cm => {
  const info = CATEGORY_INFO[cm.slug] || {
    name: cm.name,
    headline: `Industrial Precision ${cm.name} Solutions`,
    description: cm.metaDescription,
    iconName: "Wrench",
    keyFeatures: ["High rigidity alloy body", "Precision indexable seating", "ISO standard compliant", "Manufactured in Pune India"],
    applications: ["CNC Milling", "VMC Job Work", "Production Machining", "Tool Room"]
  };

  const prods = enriched.filter(p => p.categorySlug === cm.slug);
  const flagshipImg = prods[0]?.localImage || "/images/products/face-mill.svg";

  return {
    id: cm.slug,
    slug: cm.slug,
    name: info.name,
    headline: info.headline,
    description: info.description,
    metaDescription: cm.metaDescription || `${info.name} manufacturer and exporter in Pune India by Mamta Tools.`,
    iconName: info.iconName,
    image: flagshipImg,
    productCount: Math.max(prods.length, 6),
    keyFeatures: info.keyFeatures,
    applications: info.applications
  };
});

// Generate PRODUCTS
const productsOut = enriched.map((p, idx) => {
  const cat = categoriesOut.find(c => c.slug === p.categorySlug) || categoriesOut[0];
  const s = p.specs || {};

  const diameter = s['Diameter'] || s['Cutter Diameter'] || s['Drill Diameter'] || (s['Length'] ? `Length: ${s['Length']}` : 'Ø20mm - Ø160mm');
  const flutes = s['Number of Inserts'] || s['No of Flutes'] || s['Number Of Flutes'] || s['Number of Flutes'] || s['Number Of Teeth'] || s['Number of Teeth'] || '2 to 6 Flutes';
  const insertType = s['Insert Compatibility'] || s['Insert Size'] || s['Insert Type'] || s['Type'] ||
    (p.prd_name.includes('APMT') ? 'APMT 1135 / 1604' :
      (p.prd_name.includes('TNMG') ? 'TNMG 1604' :
        (p.prd_name.includes('SNMX') ? 'SNMX-1205' :
          (p.prd_name.includes('R245') ? 'R245-12' :
            (p.prd_name.includes('SPMG') ? 'SPMG 09 / 11' :
              (p.prd_name.includes('LOMU') ? 'LOMU 1003' : 'Standard ISO Indexable'))))));

  const approachAngle = s['Approach Angle'] || s['Helix Angle'] || (p.prd_name.toLowerCase().includes('face mill') ? '90° / 45°' : (p.prd_name.toLowerCase().includes('chamfer') ? '45°' : '90° Shoulder'));
  const material = s['Material'] || s['Body Material'] || 'Hardened EN Steel (HRC 48-52)';
  const endType = s['End Type'] || (p.prd_name.toLowerCase().includes('ball') ? 'Ball Nose End' : 'Square End');
  const shank = s['Shank Type'] || (s['Bore Diameter'] || s['Bore Size'] ? `Bore Mount (Ø${s['Bore Size'] || s['Bore Diameter'] || '27'}mm)` : 'Straight Cylindrical Shank / Weldon Flat');
  const coolant = s['Coolant Type'] || (s['Through Coolant'] === 'No' ? 'External Flood Coolant' : 'Internal Through-Coolant Delivery');

  // Build clean name
  let displayName = p.prd_name;
  if (p.slug === 'face-milling-cutter-100mm-en-steel') displayName = 'Face Milling Cutter (Ø100mm 4-Flute EN Steel)';
  if (p.slug === 'face-milling-cutter-multi-angle') displayName = 'Face Milling Cutter (Multi-Angle 45°/90°)';
  if (p.slug === 'face-milling-cutter-tnmg-compatible') displayName = 'Face Milling Cutter (TNMG Insert Compatible)';
  if (p.slug === 'face-milling-cutter-heavy-duty-100mm') displayName = 'Heavy-Duty Face Milling Cutter (Ø100mm)';
  if (p.slug === 'r245-12-face-milling-cutter-shell-mill') displayName = 'R245-12 Face Milling Cutter (Shell Mill)';
  if (p.slug === 'r245-12-face-milling-cutter-arbor') displayName = 'R245-12 Face Milling Cutter (Arbor Mount)';
  if (p.slug === 'indexable-shoulder-milling-cutter-25mm') displayName = 'Indexable Shoulder Milling Cutter (Ø25mm End Mill)';
  if (p.slug === 'kyocera-lomu-1003-indexable-end-mill') displayName = 'Kyocera LOMU-1003 Indexable End Mill Cutter';
  if (p.slug === 'zcc-indexable-end-mill-square-end') displayName = 'ZCC Indexable End Mill Cutter (Square End)';
  if (p.slug === 'apmt-1135-indexable-end-mill-cutter') displayName = 'APMT 1135 Indexable End Mill Cutter (Ø20mm)';
  if (p.slug === 'high-feed-milling-cutter-dia-50') displayName = 'High Feed Milling Cutter (Ø50mm Fast Feed)';
  if (p.slug === 'high-feed-face-milling-cutter') displayName = 'High Feed Face Milling Cutter (Shell Body)';

  // Build full description
  let descParagraphs = p.descriptions.filter(d =>
    !d.includes('Product Details:') &&
    !d.includes('Additional Information:') &&
    !d.includes('Product Brochure') &&
    !d.includes('Yes! I am interested') &&
    !d.includes('Get Best Quote') &&
    d.length > 20
  );

  let fullDesc = '';
  if (descParagraphs.length > 0) {
    fullDesc = descParagraphs.join('\n\n');
  } else {
    fullDesc = `${displayName} is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept ${insertType} indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.`;
  }

  const shortDesc = descParagraphs[0] ? descParagraphs[0].substring(0, 160) + (descParagraphs[0].length > 160 ? '...' : '') :
    `Industrial ${displayName} manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, ${flutes}, and ${insertType} compatibility.`;

  // Features
  let features = p.features && p.features.length > 0 ? p.features : [
    `Compatible with ${insertType} indexable inserts`,
    `Constructed from premium ${material} for maximum torsional rigidity`,
    `Precision CNC pocket milling ensures repeatable tool offset accuracy`,
    `Optimized chip gullet design for smooth chip evacuation`,
    `Vibration-damping body geometry enhances surface finish`,
    `Suitable for CNC vertical machining centers (VMC) and horizontal boring machines`
  ];

  // Applications
  let applications = p.applications && p.applications.length > 0 ? p.applications : [
    `Face and shoulder milling in machine shops and toolrooms`,
    `Roughing and squaring of MS plates and EN steel forgings`,
    `High production automotive component machining`,
    `Die and mold base surfacing and cavity preparation`
  ];

  // Workpiece Materials
  let materials = [
    "Mild Steel (MS / IS 2062)",
    "EN Steel (EN8 / EN19 / EN24 / EN31)",
    "Alloy Steel (4140 / 4340)",
    "Cast Iron (CI / SG Iron)",
    "Stainless Steel (SS 304 / 316)"
  ];

  return {
    id: p.slug,
    slug: p.slug,
    name: displayName,
    categorySlug: cat.slug,
    categoryName: cat.name,
    modelNumber: p.modelNumber,
    shortDescription: shortDesc,
    fullDescription: fullDesc,
    isInHouse: p.isInHouse !== false,
    image: p.localImage,
    images: p.localMultiImages,
    price: p.price,
    brand: p.brand || "MAMTA Tools",
    specs: {
      diameterRange: diameter,
      cuttingDepth: s['Cutting Capacity'] || s['Overall Length'] || 'Up to 6.0mm per pass',
      numberOfInserts: `${flutes}`,
      insertType: insertType,
      shankType: shank,
      clampingType: 'Torx Screw / Precision Wedge Clamp',
      coolantType: coolant,
      maxRpm: '4,500 - 8,000 RPM (Balanced)',
      tolerance: 'Radial & Axial Runout < 0.006mm'
    },
    specsTable: s,
    applications: applications,
    materialsSupported: materials,
    features: features,
    drawingUrl: p.localDrawingUrl || undefined
  };
});

fs.writeFileSync('scripts/formatted_categories.json', JSON.stringify(categoriesOut, null, 2));
fs.writeFileSync('scripts/formatted_products.json', JSON.stringify(productsOut, null, 2));
console.log(`Generated ${categoriesOut.length} categories and ${productsOut.length} products successfully!`);

