export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  modelNumber: string;
  shortDescription: string;
  fullDescription: string;
  isInHouse: boolean;
  image: string;
  images?: string[];
  price?: string;
  brand?: string;
  specs: {
    diameterRange: string;
    cuttingDepth: string;
    numberOfInserts: string;
    insertType: string;
    shankType: string;
    clampingType: string;
    coolantType: string;
    maxRpm: string;
    tolerance: string;
  };
  specsTable?: Record<string, string>;
  applications: string[];
  materialsSupported: string[];
  features: string[];
  drawingUrl?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaDescription: string;
  iconName: string;
  image: string;
  productCount: number;
  keyFeatures: string[];
  applications: string[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  machiningChallenges: string[];
  recommendedTools: string[];
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General & Company' | 'Products & Specs' | 'Custom Tooling' | 'Export & Orders' | 'Distributor Network';
}

export const COMPANY_INFO = {
  name: "MAMTA Tools",
  legalName: "Mamta Tools Private Limited",
  founder: "Ambadas Mallappa Ghagare",
  establishedYear: 2004,
  experienceYears: "20+",
  certification: "ISO 9001:2015 Certified by TUV Austria",
  phonePrimary: "+91 98220 54128",
  phoneSecondary: "+91 20 2747 8899",
  whatsappNumber: "+919822054128",
  whatsappDisplay: "+91 98220 54128",
  emailSales: "sales@mamtatools.net",
  emailExports: "exports@mamtatools.net",
  emailSupport: "info@mamtatools.net",
  factoryAddress: {
    title: "Manufacturing Plant & R&D Facility",
    street: "Gat No. 189, Behind Jyotiba Temple, Jyotiba Nagar, Talawade",
    taluka: "Tal. Haveli, Dist. Pune",
    statePin: "Maharashtra 411062, India",
  },
  salesOffice: {
    title: "Corporate & Sales Office",
    street: "Shop No. 1, Navina Apartment, Yashwant Nagar, Telco Road near Gawali Matha",
    locality: "Pimpri, Pune",
    statePin: "Maharashtra 411018, India",
  },
  exportCountries: [
    { name: "United States", code: "USA", region: "North America" },
    { name: "Germany", code: "DEU", region: "Europe" },
    { name: "United Kingdom", code: "GBR", region: "Europe" },
    { name: "United Arab Emirates", code: "UAE", region: "Middle East" },
    { name: "Saudi Arabia", code: "SAU", region: "Middle East" },
    { name: "South Africa", code: "ZAF", region: "Africa" },
    { name: "Indonesia", code: "IDN", region: "Asia Pacific" },
    { name: "Thailand", code: "THA", region: "Asia Pacific" },
    { name: "Malaysia", code: "MYS", region: "Asia Pacific" },
    { name: "Italy", code: "ITA", region: "Europe" },
  ],
  stats: [
    { value: "20+", label: "Years of Precision Engineering" },
    { value: "500+", label: "Active Industrial Clients" },
    { value: "15+", label: "Export Destination Countries" },
    { value: "10,000+", label: "Precision Tools Manufactured Annually" },
  ]
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    "id": "face-milling-cutter",
    "slug": "face-milling-cutter",
    "name": "Face Milling Cutters",
    "headline": "High-Performance 45° & 90° Indexable Face Mills for Heavy Metal Removal",
    "description": "Industrial face mill cutter bodies engineered in Pune for roughing, squaring, and finishing MS, EN steels, alloy steel, and cast iron on CNCs and VMCs.",
    "metaDescription": "Exporter & Manufacturer of Face Milling Cutter - Face Milling Cutters, SNMX-12 KORLOY FACE MILL CUTTER offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Disc",
    "image": "/images/products/face-milling-cutter-100mm-en-steel/main.jpg",
    "productCount": 7,
    "keyFeatures": [
      "Heavy-duty EN steel & hardened tool steel bodies",
      "Square end & 45° / 90° approach geometries",
      "Vibration-free surface finishing on large baseplates",
      "High MRR with indexable carbide inserts"
    ],
    "applications": [
      "Heavy machine tool base plates",
      "Engine blocks & cylinder heads",
      "Fabrication weldments & face squaring",
      "Die mold surface leveling"
    ]
  },
  {
    "id": "indexable-shoulder-mill-cutter-endmill-cutter",
    "slug": "indexable-shoulder-mill-cutter-endmill-cutter",
    "name": "Indexable Shoulder Milling Cutters & End Mills",
    "headline": "Precision 90° True Shoulder End Mills for Slotting & Pocketing",
    "description": "Indexable end mill cutter bodies compatible with APMT 1135, Kyocera LOMU-1003, and ZCC inserts for chatter-free slotting and step profiling.",
    "metaDescription": "Exporter & Manufacturer of Indexable Shoulder Mill Cutter Endmill Cutter - Indexable Shoulder Milling Cutter (End Mill Cutter), Indexable Shoulder Milling Cutter (End mill cutter), Indexable Shoulder Milling Cutter ( End mill cutter ) and APMT 1135 Indexable End Mill Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Wrench",
    "image": "/images/products/indexable-shoulder-milling-cutter-25mm/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "True 90-degree square shoulder milling capability",
      "Differential flute pitch for harmonic damping",
      "Available in shank diameters Ø16, Ø20, Ø25, Ø32, Ø40mm",
      "Dual flute and 3-flute high chip pocket clearances"
    ],
    "applications": [
      "Die cavity roughing & pocket milling",
      "Step profiling & keyway milling",
      "Deep narrow slotting",
      "Aerospace structural machining"
    ]
  },
  {
    "id": "milling-cutter",
    "slug": "milling-cutter",
    "name": "Corner Milling Cutters",
    "headline": "Economical Corner-Index Cutters Utilizing APMT & CNMG Turning Inserts",
    "description": "Specialized milling cutter bodies engineered to utilize standard APMT and unused corners of CNMG inserts, drastically slashing shop tooling costs.",
    "metaDescription": "Exporter & Manufacturer of Milling Cutter - APMT Unused Corner Milling Cutter, Cnmg Unused Corner Milling Cutters offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Cpu",
    "image": "/images/products/apmt-unused-corner-milling-cutter/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Repurposes unused corners of turning inserts (CNMG / WNMG)",
      "Hardened EN steel bodies for high shear strength",
      "Economical per-edge machining cost",
      "Quick insert indexing with secure Torx screw clamp"
    ],
    "applications": [
      "General machine shop rough milling",
      "Weld preparation beveling",
      "Cost-sensitive batch face milling",
      "Plate edge squaring"
    ]
  },
  {
    "id": "boring-head",
    "slug": "boring-head",
    "name": "Boring Heads & Boring Units",
    "headline": "Modular Rough & Vernier-Adjustable Finish Boring Heads",
    "description": "High-accuracy hole finishing down to IT6 tolerance with graduated dial micro-vernier adjustment and modular CKB / shank connections.",
    "metaDescription": "Exporter & Manufacturer of Boring Head - Modular Rough Boring Head, Modular Finish Boring Head offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Target",
    "image": "/images/products/modular-rough-boring-head/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Graduated micro-vernier dial for 0.002mm diametrical adjustments",
      "Balanced twin-cutter rough boring design",
      "Modular connection compatible with standard toolholders",
      "Internal vibration damping mechanism"
    ],
    "applications": [
      "Engine cylinder liners",
      "Bearing housing bores",
      "Hydraulic cylinder barrels",
      "Gearbox precision journal seating"
    ]
  },
  {
    "id": "high-feed-milling-cutter",
    "slug": "high-feed-milling-cutter",
    "name": "High Feed Milling Cutters",
    "headline": "Extreme Material Removal Rate (MRR) with Low Radial Cutting Forces",
    "description": "Shallow depth of cut, ultra-high table feed solutions utilizing chip thinning principles to slash machining cycle times by up to 300%.",
    "metaDescription": "Exporter & Manufacturer of High Feed Milling Cutter - High Feed Face Milling Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Zap",
    "image": "/images/products/high-feed-milling-cutter-dia-50/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Chip thinning technology redirecting cutting forces axially",
      "Allows long overhang without deflection or chatter",
      "Available in Ø50mm up to Ø160mm shell mill bodies",
      "Multi-edge economical insert geometry"
    ],
    "applications": [
      "Deep cavity mold manufacturing",
      "Hardened steel die roughing",
      "Large turbine blade roots",
      "Automotive transmission cases"
    ]
  },
  {
    "id": "t-slot-cutter",
    "slug": "t-slot-cutter",
    "name": "T-Slot Milling Cutters",
    "headline": "Indexable T-Slot Cutters for Machine Tool Tables & Clamping Tracks",
    "description": "Robust indexable T-slot cutters designed for single-setup machining of DIN and ANSI T-slots with high rigidity and smooth chip clearance.",
    "metaDescription": "Exporter & Manufacturer of T Slot Cutter - Indexable T-Slot Milling Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Layers",
    "image": "/images/products/indexable-t-slot-milling-cutter/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Pre-balanced cutter bodies for smooth side and under-cutting",
      "Through-coolant delivery to cutting edges",
      "Rigid mounting preventing shank taper twist",
      "Indexable insert pockets for fast changeover"
    ],
    "applications": [
      "Machine tool worktables & sub-plates",
      "Fixture base plates",
      "Rail guided tooling slides",
      "Hydraulic press bed slots"
    ]
  },
  {
    "id": "core-drills",
    "slug": "core-drills",
    "name": "Indexable Core Drills",
    "headline": "High-Performance Core Drills for Enlarging & Truing Cored Holes",
    "description": "Multi-flute indexable core drills for rapid enlarging of existing flame-cut, pre-drilled, or casting holes without runout or wander.",
    "metaDescription": "Exporter & Manufacturer of Core Drills - Indexable Core Drill offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Compass",
    "image": "/images/products/indexable-core-drill/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Straight shank & Morse taper indexable mounting",
      "Multiple cutting teeth for balanced hole opening",
      "Heavy flute gullets for rapid chip extraction",
      "Hardened EN steel construction"
    ],
    "applications": [
      "Cored hole enlargement in cast iron",
      "Tube sheet manufacturing",
      "Heavy fabrication bolt hole enlarging",
      "Pump casing bore roughing"
    ]
  },
  {
    "id": "ruffer-cutter",
    "slug": "ruffer-cutter",
    "name": "Roughing Cutters (Ruffer Cutters)",
    "headline": "Heavy Metal Removal Wave-Edge & Serrated Roughing Cutters",
    "description": "Engineered for maximum chip load during initial roughing of large billets, structural forgings, and heavy plate surfaces.",
    "metaDescription": "Exporter & Manufacturer of Ruffer Cutter - Indexable Roughing Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Wrench",
    "image": "/images/products/indexable-roughing-cutter-ruffer/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Serrated chip-breaking geometry lowers spindle power requirements",
      "Alloy tool steel hardened to 50 HRC",
      "Accommodates high feed rates in tough steels",
      "Through-coolant design"
    ],
    "applications": [
      "Heavy die roughing",
      "Shipbuilding structural components",
      "Forging flash removal",
      "Large weld bevel roughing"
    ]
  },
  {
    "id": "modular-shank",
    "slug": "modular-shank",
    "name": "Modular Shanks & Extensions",
    "headline": "Carbide & Heavy Metal Anti-Vibration Modular Tool Shanks",
    "description": "High-rigidity modular extensions with threaded couplings (M8-M16) designed for deep reach and long overhang milling with zero chatter.",
    "metaDescription": "Exporter & Manufacturer of Modular Shank - Modular Shank / Modular Extension offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Layers",
    "image": "/images/products/modular-shank-modular-extension/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "High elastic modulus material for extreme vibration resistance",
      "Precision ground pilot and shoulder seating",
      "Available in lengths 160mm, 200mm, 250mm, 300mm",
      "Through-shank high pressure coolant channel"
    ],
    "applications": [
      "Deep cavity die & mold milling",
      "Deep pocket ribs in aerospace frames",
      "Internal boss facing",
      "Narrow slot deep reach"
    ]
  },
  {
    "id": "modular-cutter",
    "slug": "modular-cutter",
    "name": "Modular Milling Cutters",
    "headline": "Interchangeable Screw-Fit Modular Milling Heads",
    "description": "Quick-swap threaded milling cutter heads compatible with modular steel and solid carbide extension shanks for flexible shop tooling setups.",
    "metaDescription": "Exporter & Manufacturer of Modular Cutter - Indexable Modular Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Wrench",
    "image": "/images/products/indexable-modular-cutter-head/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Standard threaded connections for fast head swap",
      "Compact head design for multi-axis clearance",
      "Compatible with industry-standard indexable inserts",
      "Hardened alloy body for extended life"
    ],
    "applications": [
      "5-axis simultaneous mold contouring",
      "Deep pocketing",
      "Job-shop versatile setup tooling",
      "Complex internal surfaces"
    ]
  },
  {
    "id": "ball-nose-cutter",
    "slug": "ball-nose-cutter",
    "name": "Ball Nose Cutters",
    "headline": "Indexable Ball Nose End Mills for 3D Profiling & Contouring",
    "description": "Precision hemispherical indexable milling cutters engineered for 3D contouring, die sinking, fillet radii, and sculpted surface finishing.",
    "metaDescription": "Exporter & Manufacturer of Ball Nose Cutter - Indexable Ball Cutters offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Compass",
    "image": "/images/products/indexable-ball-nose-cutters/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "True spherical profile accuracy",
      "2-flute indexable insert geometry",
      "Rigid tool body for smooth surface finish",
      "Excellent chip evacuation in deep contour cuts"
    ],
    "applications": [
      "Die casting mold cavities",
      "Plastic injection molds",
      "Turbine blade aerodynamic surfaces",
      "Automotive stamping dies"
    ]
  },
  {
    "id": "side-and-face-cutter",
    "slug": "side-and-face-cutter",
    "name": "Side and Face Milling Cutters",
    "headline": "Heavy-Duty Indexable Disc Cutters for Deep Slotting & Straddle Milling",
    "description": "Bore-mounted indexable disc cutters designed for deep slotting, parting, grooving, and simultaneous bilateral face milling operations.",
    "metaDescription": "Exporter & Manufacturer of Side And Face Cutter - Indexabale Side and Face Milling Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Disc",
    "image": "/images/products/indexable-side-and-face-milling-cutter/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Staggered tooth indexable design balances lateral forces",
      "Standard bore mounting (Ø27mm - Ø40mm)",
      "Heavy-duty EN steel body construction",
      "High depth-of-cut capability"
    ],
    "applications": [
      "Deep keyways and drive slots",
      "Straddle milling of connecting rods",
      "Spline shaft slotting",
      "Structural beam separation grooves"
    ]
  },
  {
    "id": "profile-milling-cutter",
    "slug": "profile-milling-cutter",
    "name": "Profile Milling Cutters",
    "headline": "Custom Form Cutters for Complex 3D Contours & Radius Grooves",
    "description": "Engineered profile milling cutters (including 52-R6-22 ZCC series) designed for dedicated contour generation in a single machine pass.",
    "metaDescription": "Exporter & Manufacturer of Profile Milling Cutter - 52-R6-22-ZCC PROFILE MILLING CUTTER offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Cpu",
    "image": "/images/products/profile-milling-cutter-52-r6-zcc/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "4-flute design with precision ground radius geometry",
      "EN steel body hardened for industrial endurance",
      "Pre-balanced for medium to high spindle speeds",
      "Reduces multi-pass finishing cycles into a single pass"
    ],
    "applications": [
      "Turbine rotor blade root slots",
      "Automotive steering linkage grooves",
      "Rail switch profiling",
      "Custom hydraulic manifold profiles"
    ]
  },
  {
    "id": "dovetail-cutter",
    "slug": "dovetail-cutter",
    "name": "Dovetail Cutters",
    "headline": "Precision 45° & 60° Indexable Dovetail Guideway Cutters",
    "description": "Indexable dovetail cutters engineered for machining machine tool slideways, gibs, and precision slide assemblies with exact angular tolerances.",
    "metaDescription": "Exporter & Manufacturer of Dovetail Cutter - Indexable Dovetail Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Layers",
    "image": "/images/products/indexable-dovetail-cutter/main.png",
    "productCount": 6,
    "keyFeatures": [
      "Precision ground angular pockets (45° and 60°)",
      "Multi-tooth indexable insert layout",
      "Through-coolant delivery to undercuts",
      "Rigid mounting prevents deflection on steep angles"
    ],
    "applications": [
      "Machine tool guideways & slides",
      "Quick-change tool post dovetails",
      "Linear guide clamping rails",
      "Fixture indexing rails"
    ]
  },
  {
    "id": "u-drill",
    "slug": "u-drill",
    "name": "U-Drills (Indexable Drills)",
    "headline": "High-Speed Indexable Insert Drills from 2D to 5D",
    "description": "Indexable drill bodies with internal and peripheral SPMG carbide inserts for high penetration rate hole drilling without pre-spotting.",
    "metaDescription": "Exporter & Manufacturer of U DRILL - Indexable U Drills offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Compass",
    "image": "/images/products/indexable-u-drills-spmg/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "High-pressure helical through-coolant flutes",
      "Balanced cutting force geometry eliminates drill wandering",
      "Utilizes economical 4-corner SPMG indexable inserts",
      "Suitable for drilling solid steel, stainless, and cast iron"
    ],
    "applications": [
      "Tube sheet drilling",
      "Hydraulic block port drilling",
      "Flange bolt holes",
      "Automotive hub and gear blank holes"
    ]
  },
  {
    "id": "ckb-extension",
    "slug": "ckb-extension",
    "name": "CKB Boring Unit Extensions",
    "headline": "Modular CKB Extension Adapters for Extended Reach Boring",
    "description": "Precision-machined CKB system extensions designed to extend the reach of rough and finish boring heads into deep bores with minimal deflection.",
    "metaDescription": "Exporter & Manufacturer of CKB Extension - CKB Boring Unit Extension offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Layers",
    "image": "/images/products/ckb-boring-unit-extension/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Precision CKB modular coupling with radial locking pin",
      "Available in 160mm, 200mm, 250mm, and 300mm lengths",
      "Hardened and ground pilot surfaces for sub-0.003mm runout",
      "Full through-coolant compatibility"
    ],
    "applications": [
      "Deep engine block cylinder boring",
      "Extruder barrel boring",
      "Heavy gearbox casing reach",
      "Long hydraulic cylinder machining"
    ]
  },
  {
    "id": "spot-face-cutter",
    "slug": "spot-face-cutter",
    "name": "Spot Face Cutters",
    "headline": "Indexable Spot Facing & Counterboring Tools for Bolt Seating",
    "description": "Heavy-duty spot face cutters designed for creating flat, true bearing surfaces around bolt holes on rough castings and uneven weldments.",
    "metaDescription": "Exporter & Manufacturer of Spot Face Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Disc",
    "image": "/images/products/spot-face-cutter/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Flat 90° face cutting for perpendicular bolt head seating",
      "Hardness 30-32 HRC body for shock resistance",
      "Interchangeable pilot guides available",
      "Available in all standard metric and imperial diameters"
    ],
    "applications": [
      "Flange bolt head seating",
      "Engine casing counterboring",
      "Structural column base bolt facing",
      "Cast pump body pad machining"
    ]
  },
  {
    "id": "champer-cutter",
    "slug": "champer-cutter",
    "name": "Chamfer Tools & Cutters",
    "headline": "Indexable 45° Chamfering, Deburring & Beveling Tools",
    "description": "High-speed indexable chamfer cutters for edge beveling, deburring, and countersinking of holes and plate edges on CNC milling machines.",
    "metaDescription": "Exporter & Manufacturer of Champer Cutter - Indexable Chamfer Tools offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Wrench",
    "image": "/images/products/indexable-chamfer-tools-45-degree/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "45-degree lead angle with indexable carbide inserts",
      "Available in shank lengths 160mm to 200mm",
      "Vibration-free edge profiling at high table feed",
      "Dual-tooth balanced cutting"
    ],
    "applications": [
      "Hole entry chamfering",
      "Weld preparation beveling",
      "Deburring machined part perimeter",
      "Countersinking socket cap screws"
    ]
  },
  {
    "id": "milling-cutters",
    "slug": "milling-cutters",
    "name": "Heavy Shell Milling Cutters",
    "headline": "TNMG-16 Shell Mill Cutters for Heavy Metal Surface Milling",
    "description": "Economical shell milling cutter bodies designed to utilize 6-corner TNMG turning inserts for large area surface facing in structural steel.",
    "metaDescription": "Exporter & Manufacturer of Milling Cutters - TNMG-16 Face Milling Cutter offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Disc",
    "image": "/images/products/tnmg-16-face-milling-cutter/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "5-tooth indexable configuration with TNMG-16 inserts",
      "Shell mill arbor mounting for high torque transfer",
      "1.0 kg balanced body minimizing spindle vibration",
      "Exceptional economy per cutting edge"
    ],
    "applications": [
      "Structural plate squaring",
      "Heavy fabrications facing",
      "General job shop roughing",
      "Cast iron baseplate surfacing"
    ]
  },
  {
    "id": "carbide-inserts",
    "slug": "carbide-inserts",
    "name": "Industrial Carbide Inserts",
    "headline": "PVD & CVD Coated Indexable Carbide Milling & Turning Inserts",
    "description": "Premium micrograin tungsten carbide inserts with nano-composite PVD coatings (APMT 1135, TNMG, SNMX) for high thermal and wear resistance.",
    "metaDescription": "Exporter & Manufacturer of Carbide Inserts - APMT 1135 Carbide Insert offered by Mamta Tools, Pune, Maharashtra.",
    "iconName": "Shield",
    "image": "/images/products/apmt-1135-carbide-insert-pvd/main.jpg",
    "productCount": 6,
    "keyFeatures": [
      "Advanced PVD multi-layer coating for heat and abrasion resistance",
      "Precision molded chip breaker for superior chip control",
      "Corner radius R0.8mm for high surface finish",
      "Versatile performance in Steel, SS, and Cast Iron"
    ],
    "applications": [
      "CNC shoulder and face milling",
      "Pocketing and slotting",
      "Hardened steel milling",
      "High production mass manufacturing"
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "face-milling-cutter-100mm-en-steel",
    "slug": "face-milling-cutter-100mm-en-steel",
    "name": "Face Milling Cutter (Ø100mm 4-Flute EN Steel)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM100-EN4",
    "shortDescription": "Industrial Face Milling Cutter (Ø100mm 4-Flute EN Steel) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and Standard ISO Indexable compatibility.",
    "fullDescription": "Face Milling Cutter (Ø100mm 4-Flute EN Steel) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/face-milling-cutter-100mm-en-steel/main.jpg",
    "images": [
      "/images/products/face-milling-cutter-100mm-en-steel/main.jpg",
      "/images/products/face-milling-cutter-100mm-en-steel/image-1.jpg",
      "/images/products/face-milling-cutter-100mm-en-steel/image-2.jpg",
      "/images/products/face-milling-cutter-100mm-en-steel/image-3.jpg"
    ],
    "price": "Rs 10,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "100 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Diameter": "100 mm",
      "No of Flutes": "4",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "face-milling-cutter-multi-angle",
    "slug": "face-milling-cutter-multi-angle",
    "name": "Face Milling Cutter (Multi-Angle 45°/90°)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM-MA4590",
    "shortDescription": "Industrial Face Milling Cutter (Multi-Angle 45°/90°) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and Standard ISO Indexable compatibility.",
    "fullDescription": "Face Milling Cutter (Multi-Angle 45°/90°) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/face-milling-cutter-multi-angle/main.jpg",
    "images": [
      "/images/products/face-milling-cutter-multi-angle/main.jpg",
      "/images/products/face-milling-cutter-multi-angle/image-1.jpg",
      "/images/products/face-milling-cutter-multi-angle/image-2.jpg",
      "/images/products/face-milling-cutter-multi-angle/image-3.jpg"
    ],
    "price": "Rs 4,199 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Brand": "MAMTA TOOLS",
      "No of Flutes": "4",
      "End Type": "Square End",
      "Helix Angle": "90 Degree / 45 Degree / 1 Degree",
      "Number of Flutes": "4-5 & 10-12"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "face-milling-cutter-tnmg-compatible",
    "slug": "face-milling-cutter-tnmg-compatible",
    "name": "Face Milling Cutter (TNMG Insert Compatible)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM100-TNMG",
    "shortDescription": "Industrial Face Milling Cutter (TNMG Insert Compatible) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and TNMG compatibility.",
    "fullDescription": "Face Milling Cutter (TNMG Insert Compatible) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept TNMG indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/face-milling-cutter-tnmg-compatible/main.jpg",
    "images": [
      "/images/products/face-milling-cutter-tnmg-compatible/main.jpg",
      "/images/products/face-milling-cutter-tnmg-compatible/image-1.jpg",
      "/images/products/face-milling-cutter-tnmg-compatible/image-2.jpg",
      "/images/products/face-milling-cutter-tnmg-compatible/image-3.jpg"
    ],
    "price": "Rs 1,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "100 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "TNMG",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Cutter Diameter": "100 mm",
      "Material": "EN Steel",
      "Approach Angle": "90°",
      "Insert Compatibility": "TNMG",
      "Diameter": "100 mm",
      "No of Flutes": "4"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with TNMG indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "face-milling-cutter-heavy-duty-100mm",
    "slug": "face-milling-cutter-heavy-duty-100mm",
    "name": "Heavy-Duty Face Milling Cutter (Ø100mm)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM100-HD",
    "shortDescription": "Industrial Heavy-Duty Face Milling Cutter (Ø100mm) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and Standard ISO Indexable compatibility.",
    "fullDescription": "Heavy-Duty Face Milling Cutter (Ø100mm) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/face-milling-cutter-heavy-duty-100mm/main.jpg",
    "images": [
      "/images/products/face-milling-cutter-heavy-duty-100mm/main.jpg",
      "/images/products/face-milling-cutter-heavy-duty-100mm/image-1.jpg",
      "/images/products/face-milling-cutter-heavy-duty-100mm/image-2.jpg",
      "/images/products/face-milling-cutter-heavy-duty-100mm/image-3.jpg",
      "/images/products/face-milling-cutter-heavy-duty-100mm/image-4.jpg",
      "/images/products/face-milling-cutter-heavy-duty-100mm/image-5.jpg"
    ],
    "price": "Rs 3,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "100 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Diameter": "100 mm",
      "No of Flutes": "4",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "snmx-12-korloy-face-mill-cutter",
    "slug": "snmx-12-korloy-face-mill-cutter",
    "name": "SNMX-12 KORLOY FACE MILL CUTTER",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM-SNMX12",
    "shortDescription": "SNMX-12 Korloy Face Mill Cutter is a high-performance milling solution designed for precision face milling operations in CNC and conventional machining centers....",
    "fullDescription": "SNMX-12 Korloy Face Mill Cutter is a high-performance milling solution designed for precision face milling operations in CNC and conventional machining centers. Manufactured using premium-grade alloy steel, this face mill cutter ensures excellent rigidity, long tool life, and superior surface finish, even in heavy-duty cutting applications.\n\nThis cutter is compatible with SNMX 1205 / SNMX 12 series carbide inserts, making it ideal for steel, stainless steel, cast iron, and alloy steel machining. Widely used in automotive, aerospace, tool rooms, and heavy engineering industries, the Korloy SNMX-12 face mill delivers consistent performance and high productivity.\n\nCompatible with SNMX-12 Korloy carbide inserts\n\nRobust body for vibration-free cutting\n\nEnsures high metal removal rate\n\nPrecision-engineered for excellent surface finish\n\nSuitable for CNC milling machines &amp; VMCs\n\nLong service life with reduced tooling cost\n\nFace milling operations\n\nRoughing and finishing cuts\n\nMachining of MS, EN steel, alloy steel &amp; cast iron\n\nIndustrial production and job work machining\n\nCutter Type: Face Mill Cutter\n\nUsage: Industrial / CNC Machining",
    "isInHouse": false,
    "image": "/images/products/snmx-12-korloy-face-mill-cutter/main.jpg",
    "images": [
      "/images/products/snmx-12-korloy-face-mill-cutter/main.jpg",
      "/images/products/snmx-12-korloy-face-mill-cutter/image-1.jpg",
      "/images/products/snmx-12-korloy-face-mill-cutter/drawing.png"
    ],
    "price": "Rs 6,199 / Piece",
    "brand": "Korloy",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "6",
      "insertType": "SNMX / SNMU",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Approach Angle": "90°",
      "Insert Compatibility": "SNMX / SNMU",
      "Number of Inserts": "6",
      "Cutter Style": "Shell Mill",
      "End Type": "Square End"
    },
    "applications": [
      "Face milling operations",
      "Roughing and finishing cuts",
      "Machining of MS, EN steel, alloy steel &amp; cast iron",
      "Industrial production and job work machining"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with SNMX-12 Korloy carbide inserts",
      "Robust body for vibration-free cutting",
      "Ensures high metal removal rate",
      "Precision-engineered for excellent surface finish",
      "Suitable for CNC milling machines &amp; VMCs",
      "Long service life with reduced tooling cost"
    ],
    "drawingUrl": "/images/products/snmx-12-korloy-face-mill-cutter/drawing.png"
  },
  {
    "id": "r245-12-face-milling-cutter-shell-mill",
    "slug": "r245-12-face-milling-cutter-shell-mill",
    "name": "R245-12 Face Milling Cutter (Shell Mill)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM-R245-12A",
    "shortDescription": "Industrial R245-12 Face Milling Cutter (Shell Mill) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and R245-12 compatibility.",
    "fullDescription": "R245-12 Face Milling Cutter (Shell Mill) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept R245-12 indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/r245-12-face-milling-cutter-shell-mill/main.jpg",
    "images": [
      "/images/products/r245-12-face-milling-cutter-shell-mill/main.jpg",
      "/images/products/r245-12-face-milling-cutter-shell-mill/image-1.jpg",
      "/images/products/r245-12-face-milling-cutter-shell-mill/image-2.jpg"
    ],
    "price": "Rs 5,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "R245-12",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with R245-12 indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "r245-12-face-milling-cutter-arbor",
    "slug": "r245-12-face-milling-cutter-arbor",
    "name": "R245-12 Face Milling Cutter (Arbor Mount)",
    "categorySlug": "face-milling-cutter",
    "categoryName": "Face Milling Cutters",
    "modelNumber": "MT-FM-R245-12B",
    "shortDescription": "Industrial R245-12 Face Milling Cutter (Arbor Mount) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and R245-12 compatibility.",
    "fullDescription": "R245-12 Face Milling Cutter (Arbor Mount) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept R245-12 indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/r245-12-face-milling-cutter-arbor/main.jpg",
    "images": [
      "/images/products/r245-12-face-milling-cutter-arbor/main.jpg",
      "/images/products/r245-12-face-milling-cutter-arbor/image-1.jpg",
      "/images/products/r245-12-face-milling-cutter-arbor/image-2.jpg"
    ],
    "price": "Rs 3,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "R245-12",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with R245-12 indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-shoulder-milling-cutter-25mm",
    "slug": "indexable-shoulder-milling-cutter-25mm",
    "name": "Indexable Shoulder Milling Cutter (Ø25mm End Mill)",
    "categorySlug": "indexable-shoulder-mill-cutter-endmill-cutter",
    "categoryName": "Indexable Shoulder Milling Cutters & End Mills",
    "modelNumber": "MT-EM-SH25-2F",
    "shortDescription": "Industrial Indexable Shoulder Milling Cutter (Ø25mm End Mill) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 3, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable Shoulder Milling Cutter (Ø25mm End Mill) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-shoulder-milling-cutter-25mm/main.jpg",
    "images": [
      "/images/products/indexable-shoulder-milling-cutter-25mm/main.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/image-1.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/image-2.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/image-3.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/image-4.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/image-5.jpg",
      "/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png",
      "/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png",
      "/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png"
    ],
    "price": "Rs 1,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "25 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "3",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Number Of Flutes": "2",
      "No of Flutes": "3",
      "Diameter": "25 mm",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/indexable-shoulder-milling-cutter-25mm/drawing.png"
  },
  {
    "id": "kyocera-lomu-1003-indexable-end-mill",
    "slug": "kyocera-lomu-1003-indexable-end-mill",
    "name": "Kyocera LOMU-1003 Indexable End Mill Cutter",
    "categorySlug": "indexable-shoulder-mill-cutter-endmill-cutter",
    "categoryName": "Indexable Shoulder Milling Cutters & End Mills",
    "modelNumber": "MT-EM-LOMU1003",
    "shortDescription": "Industrial Kyocera LOMU-1003 Indexable End Mill Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2, and Standard ISO Indexable compatibility.",
    "fullDescription": "Kyocera LOMU-1003 Indexable End Mill Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": false,
    "image": "/images/products/kyocera-lomu-1003-indexable-end-mill/main.jpg",
    "images": [
      "/images/products/kyocera-lomu-1003-indexable-end-mill/main.jpg",
      "/images/products/kyocera-lomu-1003-indexable-end-mill/image-1.jpg",
      "/images/products/kyocera-lomu-1003-indexable-end-mill/image-2.jpg",
      "/images/products/kyocera-lomu-1003-indexable-end-mill/image-3.jpg"
    ],
    "price": "Rs 1,999 / Piece",
    "brand": "Kyocera",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "160 & 200",
      "numberOfInserts": "2",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Shank Diameter": "AVAILABLE IN:-DIA16 DIA20 DIA25 DIA32 DIA40",
      "Brand": "KYOCERA",
      "No of Flutes": "2",
      "Overall Length": "160 & 200",
      "Number Of Flutes": "2-3",
      "End Type": "LOMU-1003 KYOCERA"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "zcc-indexable-end-mill-square-end",
    "slug": "zcc-indexable-end-mill-square-end",
    "name": "ZCC Indexable End Mill Cutter (Square End)",
    "categorySlug": "indexable-shoulder-mill-cutter-endmill-cutter",
    "categoryName": "Indexable Shoulder Milling Cutters & End Mills",
    "modelNumber": "MT-EM-ZCC-SQ",
    "shortDescription": "Industrial ZCC Indexable End Mill Cutter (Square End) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2FL & 3FL, and Standard ISO Indexable compatibility.",
    "fullDescription": "ZCC Indexable End Mill Cutter (Square End) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": false,
    "image": "/images/products/zcc-indexable-end-mill-square-end/main.jpg",
    "images": [
      "/images/products/zcc-indexable-end-mill-square-end/main.jpg",
      "/images/products/zcc-indexable-end-mill-square-end/image-1.jpg",
      "/images/products/zcc-indexable-end-mill-square-end/image-2.jpg",
      "/images/products/zcc-indexable-end-mill-square-end/image-3.jpg"
    ],
    "price": "Rs 1,099 / Piece",
    "brand": "ZCC",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2FL & 3FL",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Brand": "ZCC",
      "Material": "STEEL",
      "End Type": "Square End",
      "Coating": "BLACK",
      "Number of Flutes": "2FL & 3FL",
      "Overall Length Metric (L)": "160 200 250 300"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium STEEL for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "apmt-1135-indexable-end-mill-cutter",
    "slug": "apmt-1135-indexable-end-mill-cutter",
    "name": "APMT 1135 Indexable End Mill Cutter (Ø20mm)",
    "categorySlug": "indexable-shoulder-mill-cutter-endmill-cutter",
    "categoryName": "Indexable Shoulder Milling Cutters & End Mills",
    "modelNumber": "MT-EM-APMT1135",
    "shortDescription": "Industrial APMT 1135 Indexable End Mill Cutter (Ø20mm) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2, and APMT compatibility.",
    "fullDescription": "APMT 1135 Indexable End Mill Cutter (Ø20mm) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept APMT indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/apmt-1135-indexable-end-mill-cutter/main.jpg",
    "images": [
      "/images/products/apmt-1135-indexable-end-mill-cutter/main.jpg",
      "/images/products/apmt-1135-indexable-end-mill-cutter/image-1.jpg",
      "/images/products/apmt-1135-indexable-end-mill-cutter/image-2.jpg",
      "/images/products/apmt-1135-indexable-end-mill-cutter/drawing.png"
    ],
    "price": "Rs 1,399 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "20",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2",
      "insertType": "APMT",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Cutter Diameter": "20",
      "Approach Angle": "90°",
      "Insert Compatibility": "APMT",
      "Number Of Flutes": "2",
      "Number of Inserts": "2",
      "Cutter Style": "End Mill Shank"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with APMT indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/apmt-1135-indexable-end-mill-cutter/drawing.png"
  },
  {
    "id": "apmt-unused-corner-milling-cutter",
    "slug": "apmt-unused-corner-milling-cutter",
    "name": "APMT Unused Corner Milling Cutter",
    "categorySlug": "milling-cutter",
    "categoryName": "Corner Milling Cutters",
    "modelNumber": "MT-MC-APMT-CORNER",
    "shortDescription": "Industrial APMT Unused Corner Milling Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and APMT 1135 / 1604 compatibility.",
    "fullDescription": "APMT Unused Corner Milling Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept APMT 1135 / 1604 indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/apmt-unused-corner-milling-cutter/main.jpg",
    "images": [
      "/images/products/apmt-unused-corner-milling-cutter/main.jpg",
      "/images/products/apmt-unused-corner-milling-cutter/image-1.jpg",
      "/images/products/apmt-unused-corner-milling-cutter/image-2.jpg",
      "/images/products/apmt-unused-corner-milling-cutter/image-3.jpg"
    ],
    "price": "Rs 2,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "100 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "APMT 1135 / 1604",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Color": "Silver",
      "Diameter": "100 mm",
      "No of Flutes": "4",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with APMT 1135 / 1604 indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "cnmg-unused-corner-milling-cutters",
    "slug": "cnmg-unused-corner-milling-cutters",
    "name": "Cnmg Unused Corner Milling Cutters",
    "categorySlug": "milling-cutter",
    "categoryName": "Corner Milling Cutters",
    "modelNumber": "MT-MC-CNMG-CORNER",
    "shortDescription": "Industrial Cnmg Unused Corner Milling Cutters manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and Standard ISO Indexable compatibility.",
    "fullDescription": "Cnmg Unused Corner Milling Cutters is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/cnmg-unused-corner-milling-cutters/main.jpg",
    "images": [
      "/images/products/cnmg-unused-corner-milling-cutters/main.jpg",
      "/images/products/cnmg-unused-corner-milling-cutters/image-1.jpg",
      "/images/products/cnmg-unused-corner-milling-cutters/image-2.jpg",
      "/images/products/cnmg-unused-corner-milling-cutters/image-3.jpg"
    ],
    "price": "Rs 5,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "100 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "Standard ISO Indexable",
      "shankType": "BT",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Tool Type": "Milling cutter",
      "Type of Cutter": "Face Mills",
      "Shank Type": "BT",
      "Color": "Silver",
      "Diameter": "100 mm",
      "No of Flutes": "4"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "modular-rough-boring-head",
    "slug": "modular-rough-boring-head",
    "name": "Modular Rough Boring Head",
    "categorySlug": "boring-head",
    "categoryName": "Boring Heads & Boring Units",
    "modelNumber": "MT-BH-ROUGH-MOD",
    "shortDescription": "Industrial Modular Rough Boring Head manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Straight Shank compatibility.",
    "fullDescription": "Modular Rough Boring Head is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Straight Shank indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/modular-rough-boring-head/main.jpg",
    "images": [
      "/images/products/modular-rough-boring-head/main.jpg",
      "/images/products/modular-rough-boring-head/image-1.jpg",
      "/images/products/modular-rough-boring-head/image-2.jpg",
      "/images/products/modular-rough-boring-head/image-3.jpg"
    ],
    "price": "Rs 7,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Straight Shank",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Head Type": "Rough boring head",
      "Boring Range": "60-150 mm",
      "Mount Size": "32 mm",
      "Type": "Straight Shank",
      "Adjustment Per Div": "0.01 mm",
      "Usage/Application": "Ruffing high metal removal"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Straight Shank indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "modular-finish-boring-head",
    "slug": "modular-finish-boring-head",
    "name": "Modular Finish Boring Head",
    "categorySlug": "boring-head",
    "categoryName": "Boring Heads & Boring Units",
    "modelNumber": "MT-BH-FINISH-MICRON",
    "shortDescription": "Industrial Modular Finish Boring Head manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Straight Shank compatibility.",
    "fullDescription": "Modular Finish Boring Head is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Straight Shank indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/modular-finish-boring-head/main.jpg",
    "images": [
      "/images/products/modular-finish-boring-head/main.jpg",
      "/images/products/modular-finish-boring-head/image-1.png",
      "/images/products/modular-finish-boring-head/image-2.png",
      "/images/products/modular-finish-boring-head/image-3.png",
      "/images/products/modular-finish-boring-head/image-4.jpg"
    ],
    "price": "Rs 8,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Straight Shank",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Head Type": "Fine boring head",
      "Boring Range": "20 to 203 ( Boring range differ with CKB)",
      "Mount Size": "22 mm",
      "Material": "Stainless Steel",
      "Type": "Straight Shank",
      "Adjustment Per Div": "0.01 mm"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Straight Shank indexable inserts",
      "Constructed from premium Stainless Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "high-feed-milling-cutter-dia-50",
    "slug": "high-feed-milling-cutter-dia-50",
    "name": "High Feed Milling Cutter (Ø50mm Fast Feed)",
    "categorySlug": "high-feed-milling-cutter",
    "categoryName": "High Feed Milling Cutters",
    "modelNumber": "MT-HFM-D50-FAST",
    "shortDescription": "Industrial High Feed Milling Cutter (Ø50mm Fast Feed) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4-8, and Standard ISO Indexable compatibility.",
    "fullDescription": "High Feed Milling Cutter (Ø50mm Fast Feed) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/high-feed-milling-cutter-dia-50/main.jpg",
    "images": [
      "/images/products/high-feed-milling-cutter-dia-50/main.jpg",
      "/images/products/high-feed-milling-cutter-dia-50/image-1.jpg",
      "/images/products/high-feed-milling-cutter-dia-50/drawing.png",
      "/images/products/high-feed-milling-cutter-dia-50/drawing.png"
    ],
    "price": "Rs 2,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4-8",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Cutting Diameter(D1)": "DIA 50",
      "Brand": "MAMTA TOOLS",
      "Color": "Silver",
      "End Type": "Square End",
      "Number of Flutes": "4-8",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/high-feed-milling-cutter-dia-50/drawing.png"
  },
  {
    "id": "high-feed-face-milling-cutter",
    "slug": "high-feed-face-milling-cutter",
    "name": "High Feed Face Milling Cutter (Shell Body)",
    "categorySlug": "high-feed-milling-cutter",
    "categoryName": "High Feed Milling Cutters",
    "modelNumber": "MT-HFM-SHELL-HD",
    "shortDescription": "Industrial High Feed Face Milling Cutter (Shell Body) manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Standard ISO Indexable compatibility.",
    "fullDescription": "High Feed Face Milling Cutter (Shell Body) is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/high-feed-face-milling-cutter/main.jpg",
    "images": [
      "/images/products/high-feed-face-milling-cutter/main.jpg",
      "/images/products/high-feed-face-milling-cutter/image-1.jpg",
      "/images/products/high-feed-face-milling-cutter/drawing.png",
      "/images/products/high-feed-face-milling-cutter/drawing.png"
    ],
    "price": "Rs 5,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "50 TO 160",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Tool Type": "Milling cutter",
      "Material": "EN STEEL",
      "Color": "Silver",
      "Cutting Diameter": "63",
      "Usage/Application": "High feed milling (HFM) is a machining process that uses a shallow depth of cut and a large cutting",
      "Diameter": "50 TO 160"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN STEEL for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/high-feed-face-milling-cutter/drawing.png"
  },
  {
    "id": "indexable-t-slot-milling-cutter",
    "slug": "indexable-t-slot-milling-cutter",
    "name": "Indexable T-Slot Milling Cutter",
    "categorySlug": "t-slot-cutter",
    "categoryName": "T-Slot Milling Cutters",
    "modelNumber": "MT-TS-INDEX-SLOT",
    "shortDescription": "Industrial Indexable T-Slot Milling Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable T-Slot Milling Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-t-slot-milling-cutter/main.jpg",
    "images": [
      "/images/products/indexable-t-slot-milling-cutter/main.jpg",
      "/images/products/indexable-t-slot-milling-cutter/image-1.jpg",
      "/images/products/indexable-t-slot-milling-cutter/image-2.jpg",
      "/images/products/indexable-t-slot-milling-cutter/image-3.jpg",
      "/images/products/indexable-t-slot-milling-cutter/image-4.jpg"
    ],
    "price": "Rs 9,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "80 mm",
      "cuttingDepth": "160L-200L",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Standard ISO Indexable",
      "shankType": "Bore Mount (ØShank Type cuttermm)",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "T Slot Width": "10 mm",
      "Cutter Diameter": "80 mm",
      "Material Grade": "EN  STEEL",
      "Bore Diameter": "Shank Type cutter",
      "Material": "Mild Steel",
      "Overall Length": "160L-200L"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Mild Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-core-drill",
    "slug": "indexable-core-drill",
    "name": "Indexable Core Drill",
    "categorySlug": "core-drills",
    "categoryName": "Indexable Core Drills",
    "modelNumber": "MT-CD-CORE-INDEX",
    "shortDescription": "Industrial Indexable Core Drill manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Straight Shank compatibility.",
    "fullDescription": "Indexable Core Drill is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Straight Shank indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-core-drill/main.jpg",
    "images": [
      "/images/products/indexable-core-drill/main.jpg",
      "/images/products/indexable-core-drill/image-1.jpg",
      "/images/products/indexable-core-drill/image-2.jpg",
      "/images/products/indexable-core-drill/image-3.jpg",
      "/images/products/indexable-core-drill/drawing.png",
      "/images/products/indexable-core-drill/drawing.png",
      "/images/products/indexable-core-drill/drawing.png",
      "/images/products/indexable-core-drill/drawing.png",
      "/images/products/indexable-core-drill/drawing.png"
    ],
    "price": "Rs 2,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "25 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Straight Shank",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Through Coolant",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Diameter": "25 mm",
      "Drill Length": "4xD",
      "Insert Shape": "Square",
      "Type": "Straight Shank",
      "Material": "Stainless Steel",
      "Coolant Type": "Through Coolant"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Straight Shank indexable inserts",
      "Constructed from premium Stainless Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/indexable-core-drill/drawing.png"
  },
  {
    "id": "indexable-roughing-cutter-ruffer",
    "slug": "indexable-roughing-cutter-ruffer",
    "name": "Indexable Roughing Cutter",
    "categorySlug": "ruffer-cutter",
    "categoryName": "Roughing Cutters (Ruffer Cutters)",
    "modelNumber": "MT-RC-RUFFER-HEAVY",
    "shortDescription": "Industrial Indexable Roughing Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and LNMT-13 compatibility.",
    "fullDescription": "Indexable Roughing Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept LNMT-13 indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-roughing-cutter-ruffer/main.jpg",
    "images": [
      "/images/products/indexable-roughing-cutter-ruffer/main.jpg",
      "/images/products/indexable-roughing-cutter-ruffer/image-1.jpg",
      "/images/products/indexable-roughing-cutter-ruffer/image-2.jpg",
      "/images/products/indexable-roughing-cutter-ruffer/image-3.jpg",
      "/images/products/indexable-roughing-cutter-ruffer/image-4.jpg",
      "/images/products/indexable-roughing-cutter-ruffer/image-5.jpg"
    ],
    "price": "Rs 1,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "LNMT-13",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Holder/Cutter Type": "Roughing cutter",
      "Tool Type": "RUFFER CUTTER",
      "Insert ISO Shape": "LNMT-13 ISCAR",
      "Insert Type": "LNMT-13",
      "Shank Size": "13",
      "Color": "Silver"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with LNMT-13 indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "modular-shank-modular-extension",
    "slug": "modular-shank-modular-extension",
    "name": "Modular Shank / Modular Extension",
    "categorySlug": "modular-shank",
    "categoryName": "Modular Shanks & Extensions",
    "modelNumber": "MT-MS-EXT-RIGID",
    "shortDescription": "Industrial Modular Shank / Modular Extension manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Straight Shank compatibility.",
    "fullDescription": "Modular Shank / Modular Extension is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Straight Shank indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/modular-shank-modular-extension/main.jpg",
    "images": [
      "/images/products/modular-shank-modular-extension/main.jpg",
      "/images/products/modular-shank-modular-extension/image-1.jpg",
      "/images/products/modular-shank-modular-extension/image-2.jpg",
      "/images/products/modular-shank-modular-extension/image-3.jpg"
    ],
    "price": "Rs 1,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "16-40",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Straight Shank",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Size": "16 mm",
      "Material": "Stainless Steel",
      "Type": "Straight Shank",
      "Length": "150-300 mm",
      "Diameter": "16-40",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Straight Shank indexable inserts",
      "Constructed from premium Stainless Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-modular-cutter-head",
    "slug": "indexable-modular-cutter-head",
    "name": "Indexable Modular Cutter",
    "categorySlug": "modular-cutter",
    "categoryName": "Modular Milling Cutters",
    "modelNumber": "MT-MC-MOD-HEAD",
    "shortDescription": "Industrial Indexable Modular Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable Modular Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-modular-cutter-head/main.jpg",
    "images": [
      "/images/products/indexable-modular-cutter-head/main.jpg",
      "/images/products/indexable-modular-cutter-head/image-1.jpg",
      "/images/products/indexable-modular-cutter-head/image-2.jpg",
      "/images/products/indexable-modular-cutter-head/image-3.jpg"
    ],
    "price": "Rs 4,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "25 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Number Of Flutes": "2",
      "No of Flutes": "2",
      "Diameter": "25 mm",
      "End Type": "Square End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-ball-nose-cutters",
    "slug": "indexable-ball-nose-cutters",
    "name": "Indexable Ball Cutters",
    "categorySlug": "ball-nose-cutter",
    "categoryName": "Ball Nose Cutters",
    "modelNumber": "MT-BN-BALL-20MM",
    "shortDescription": "Industrial Indexable Ball Cutters manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable Ball Cutters is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-ball-nose-cutters/main.jpg",
    "images": [
      "/images/products/indexable-ball-nose-cutters/main.jpg",
      "/images/products/indexable-ball-nose-cutters/image-1.jpg",
      "/images/products/indexable-ball-nose-cutters/image-2.jpg",
      "/images/products/indexable-ball-nose-cutters/image-3.jpg"
    ],
    "price": "Rs 5,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "20 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Diameter": "20 mm",
      "Color": "Black",
      "No of Flutes": "2",
      "Usage/Application": "contouring and profiling to slotting and corner selecting in milling",
      "End Type": "Ball Nose End",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-side-and-face-milling-cutter",
    "slug": "indexable-side-and-face-milling-cutter",
    "name": "Indexabale Side and Face Milling Cutter",
    "categorySlug": "side-and-face-cutter",
    "categoryName": "Side and Face Milling Cutters",
    "modelNumber": "MT-SF-SIDE-FACE",
    "shortDescription": "SIDE N FACE MILLING CUTTER (Price will be differ as per cutter Diameters)",
    "fullDescription": "SIDE N FACE MILLING CUTTER (Price will be differ as per cutter Diameters)\n\nSide and Face Milling Cutter are specially designed with cutting teeth on its side as well as its circumference. The teeth on the side allow the side and face cutter to make unbalanced cuts without deflecting the cutter as would happen with a slitting saw or slot cutter.",
    "isInHouse": true,
    "image": "/images/products/indexable-side-and-face-milling-cutter/main.jpg",
    "images": [
      "/images/products/indexable-side-and-face-milling-cutter/main.jpg",
      "/images/products/indexable-side-and-face-milling-cutter/image-1.jpg",
      "/images/products/indexable-side-and-face-milling-cutter/image-2.jpg",
      "/images/products/indexable-side-and-face-milling-cutter/image-3.jpg",
      "/images/products/indexable-side-and-face-milling-cutter/drawing.png",
      "/images/products/indexable-side-and-face-milling-cutter/drawing.png",
      "/images/products/indexable-side-and-face-milling-cutter/drawing.png"
    ],
    "price": "Rs 24,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Standard ISO Indexable",
      "shankType": "Bore Mount (Ø27-40mm)",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Brand": "Mamta Tools",
      "Bore Size": "27-40",
      "Usage/Application": "Side milling",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/indexable-side-and-face-milling-cutter/drawing.png"
  },
  {
    "id": "profile-milling-cutter-52-r6-zcc",
    "slug": "profile-milling-cutter-52-r6-zcc",
    "name": "52-R6-22-ZCC PROFILE MILLING CUTTER",
    "categorySlug": "profile-milling-cutter",
    "categoryName": "Profile Milling Cutters",
    "modelNumber": "MT-PM-52R6-ZCC",
    "shortDescription": "Industrial 52-R6-22-ZCC PROFILE MILLING CUTTER manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4, and Standard ISO Indexable compatibility.",
    "fullDescription": "52-R6-22-ZCC PROFILE MILLING CUTTER is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/profile-milling-cutter-52-r6-zcc/main.jpg",
    "images": [
      "/images/products/profile-milling-cutter-52-r6-zcc/main.jpg",
      "/images/products/profile-milling-cutter-52-r6-zcc/image-1.jpg",
      "/images/products/profile-milling-cutter-52-r6-zcc/image-2.jpg",
      "/images/products/profile-milling-cutter-52-r6-zcc/image-3.jpg",
      "/images/products/profile-milling-cutter-52-r6-zcc/image-4.jpg"
    ],
    "price": "Rs 2,199 / Piece",
    "brand": "ZCC / MAMTA Tools",
    "specs": {
      "diameterRange": "50-52",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "4",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN Steel",
      "Brand": "MAMTA TOOLS",
      "No of Flutes": "4",
      "End Type": "Ball Nose End",
      "Diameter": "50-52",
      "Usage/Application": "PROFILE MILL CUTTER"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-dovetail-cutter",
    "slug": "indexable-dovetail-cutter",
    "name": "Indexable Dovetail Cutter",
    "categorySlug": "dovetail-cutter",
    "categoryName": "Dovetail Cutters",
    "modelNumber": "MT-DT-DOVETAIL-45",
    "shortDescription": "Industrial Indexable Dovetail Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 4-6, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable Dovetail Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-dovetail-cutter/main.png",
    "images": [
      "/images/products/indexable-dovetail-cutter/main.png",
      "/images/products/indexable-dovetail-cutter/image-1.jpg",
      "/images/products/indexable-dovetail-cutter/image-2.jpg",
      "/images/products/indexable-dovetail-cutter/image-3.png",
      "/images/products/indexable-dovetail-cutter/image-4.png"
    ],
    "price": "Rs 4,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "160 & 200",
      "numberOfInserts": "4-6",
      "insertType": "Standard ISO Indexable",
      "shankType": "Bore Mount (ØDepends upon cutter Diametermm)",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "Stainless Steel",
      "Overall Length": "160 & 200",
      "Number Of Teeth": "4-6",
      "Bore Diameter": "Depends upon cutter Diameter",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Stainless Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-u-drills-spmg",
    "slug": "indexable-u-drills-spmg",
    "name": "Indexable U Drills",
    "categorySlug": "u-drill",
    "categoryName": "U-Drills (Indexable Drills)",
    "modelNumber": "MT-UD-SPMG-4D20",
    "shortDescription": "Industrial Indexable U Drills manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and SPMG-09 11 compatibility.",
    "fullDescription": "Indexable U Drills is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept SPMG-09 11 indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-u-drills-spmg/main.jpg",
    "images": [
      "/images/products/indexable-u-drills-spmg/main.jpg",
      "/images/products/indexable-u-drills-spmg/image-1.png",
      "/images/products/indexable-u-drills-spmg/drawing.png",
      "/images/products/indexable-u-drills-spmg/drawing.png",
      "/images/products/indexable-u-drills-spmg/drawing.png",
      "/images/products/indexable-u-drills-spmg/drawing.png",
      "/images/products/indexable-u-drills-spmg/drawing.png"
    ],
    "price": "Rs 2,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "20 mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "SPMG-09 11",
      "shankType": "BT Taper",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Through Coolant",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Drill Length": "4D",
      "Drill Diameter": "20 mm",
      "Insert Size": "SPMG-09 11",
      "Material": "Stainless Steel",
      "Shank Type": "BT Taper",
      "Coolant Type": "Through Coolant"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with SPMG-09 11 indexable inserts",
      "Constructed from premium Stainless Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/indexable-u-drills-spmg/drawing.png"
  },
  {
    "id": "ckb-boring-unit-extension",
    "slug": "ckb-boring-unit-extension",
    "name": "CKB Boring Unit Extension",
    "categorySlug": "ckb-extension",
    "categoryName": "CKB Boring Unit Extensions",
    "modelNumber": "MT-CKB-EXT-MODULAR",
    "shortDescription": "Industrial CKB Boring Unit Extension manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Standard ISO Indexable compatibility.",
    "fullDescription": "CKB Boring Unit Extension is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/ckb-boring-unit-extension/main.jpg",
    "images": [
      "/images/products/ckb-boring-unit-extension/main.jpg",
      "/images/products/ckb-boring-unit-extension/image-1.jpg",
      "/images/products/ckb-boring-unit-extension/image-2.jpg",
      "/images/products/ckb-boring-unit-extension/image-3.jpg",
      "/images/products/ckb-boring-unit-extension/image-4.jpg",
      "/images/products/ckb-boring-unit-extension/image-5.jpg",
      "/images/products/ckb-boring-unit-extension/drawing.png"
    ],
    "price": "Rs 2,999 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Length: 160-200-250-300",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Length": "160-200-250-300",
      "Brand": "Mamta Tools",
      "Packaging Type": "Box packing",
      "Usage/Application": "These extensions play a crucial role in enhancing the versatility of boring units, allowing machinis",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ],
    "drawingUrl": "/images/products/ckb-boring-unit-extension/drawing.png"
  },
  {
    "id": "spot-face-cutter",
    "slug": "spot-face-cutter",
    "name": "Spot Face Cutter",
    "categorySlug": "spot-face-cutter",
    "categoryName": "Spot Face Cutters",
    "modelNumber": "MT-SF-SPOT-FACE",
    "shortDescription": "Industrial Spot Face Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and Standard ISO Indexable compatibility.",
    "fullDescription": "Spot Face Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/spot-face-cutter/main.jpg",
    "images": [
      "/images/products/spot-face-cutter/main.jpg",
      "/images/products/spot-face-cutter/image-1.jpg",
      "/images/products/spot-face-cutter/image-2.jpg"
    ],
    "price": "Rs 5,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Available in all Diameters",
      "cuttingDepth": "6 mm",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "Standard ISO Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Material": "EN STEEL",
      "Cutting Capacity": "6 mm",
      "Diameter": "Available in all Diameters",
      "Brand": "Mamta Tools",
      "Hardness": "30-32 HRC",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium EN STEEL for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "indexable-chamfer-tools-45-degree",
    "slug": "indexable-chamfer-tools-45-degree",
    "name": "Indexable Chamfer Tools",
    "categorySlug": "champer-cutter",
    "categoryName": "Chamfer Tools & Cutters",
    "modelNumber": "MT-CH-CHAMFER-45",
    "shortDescription": "Industrial Indexable Chamfer Tools manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2, and Standard ISO Indexable compatibility.",
    "fullDescription": "Indexable Chamfer Tools is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Standard ISO Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/indexable-chamfer-tools-45-degree/main.jpg",
    "images": [
      "/images/products/indexable-chamfer-tools-45-degree/main.jpg",
      "/images/products/indexable-chamfer-tools-45-degree/image-1.jpg",
      "/images/products/indexable-chamfer-tools-45-degree/image-2.jpg",
      "/images/products/indexable-chamfer-tools-45-degree/image-3.jpg",
      "/images/products/indexable-chamfer-tools-45-degree/image-4.jpg"
    ],
    "price": "Rs 1,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "160L- 200L",
      "numberOfInserts": "2",
      "insertType": "Standard ISO Indexable",
      "shankType": "Bore Mount (ØShank Type Cuttermm)",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Degree of Elongation": "45 Degree",
      "Overall Length": "160L- 200L",
      "Number Of Teeth": "2",
      "Bore Diameter": "Shank Type Cutter",
      "Country of Origin": "Made in India"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Standard ISO Indexable indexable inserts",
      "Constructed from premium Hardened EN Steel (HRC 48-52) for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "tnmg-16-face-milling-cutter",
    "slug": "tnmg-16-face-milling-cutter",
    "name": "TNMG-16 Face Milling Cutter",
    "categorySlug": "milling-cutters",
    "categoryName": "Heavy Shell Milling Cutters",
    "modelNumber": "MT-FM-TNMG16",
    "shortDescription": "Industrial TNMG-16 Face Milling Cutter manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 5, and Indexable compatibility.",
    "fullDescription": "TNMG-16 Face Milling Cutter is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept Indexable indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/tnmg-16-face-milling-cutter/main.jpg",
    "images": [
      "/images/products/tnmg-16-face-milling-cutter/main.jpg",
      "/images/products/tnmg-16-face-milling-cutter/image-1.jpg"
    ],
    "price": "Rs 2,499 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "63",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "5",
      "insertType": "Indexable",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Insert Type": "Indexable",
      "Material": "EN Steel",
      "Number of Teeth": "5",
      "Diameter": "63",
      "Brand": "MAMTA TOOLS",
      "Weight": "1 kg"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with Indexable indexable inserts",
      "Constructed from premium EN Steel for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  },
  {
    "id": "apmt-1135-carbide-insert-pvd",
    "slug": "apmt-1135-carbide-insert-pvd",
    "name": "APMT 1135 Carbide Insert",
    "categorySlug": "carbide-inserts",
    "categoryName": "Industrial Carbide Inserts",
    "modelNumber": "MT-IN-APMT1135",
    "shortDescription": "Industrial APMT 1135 Carbide Insert manufactured by MAMTA Tools Pune for precision CNC milling, featuring high rigidity, 2 to 6 Flutes, and APMT compatibility.",
    "fullDescription": "APMT 1135 Carbide Insert is manufactured by MAMTA Tools Pune using high-grade hardened alloy steel to deliver outstanding rigidity, chatter-free cutting performance, and long tool body service life in production CNC milling and VMC operations.\n\nEngineered to accept APMT indexable carbide inserts, this tool excels in machining mild steel, EN series steels, alloy steels, and cast iron components with repeatable precision and superior surface finish.",
    "isInHouse": true,
    "image": "/images/products/apmt-1135-carbide-insert-pvd/main.jpg",
    "images": [
      "/images/products/apmt-1135-carbide-insert-pvd/main.jpg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-1.jpeg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-2.png",
      "/images/products/apmt-1135-carbide-insert-pvd/image-3.jpg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-4.jpg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-5.jpg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-6.jpg",
      "/images/products/apmt-1135-carbide-insert-pvd/image-7.jpeg"
    ],
    "price": "Rs 100 / Piece",
    "brand": "MAMTA Tools",
    "specs": {
      "diameterRange": "Ø20mm - Ø160mm",
      "cuttingDepth": "Up to 6.0mm per pass",
      "numberOfInserts": "2 to 6 Flutes",
      "insertType": "APMT",
      "shankType": "Straight Cylindrical Shank / Weldon Flat",
      "clampingType": "Torx Screw / Precision Wedge Clamp",
      "coolantType": "Internal Through-Coolant Delivery",
      "maxRpm": "4,500 - 8,000 RPM (Balanced)",
      "tolerance": "Radial & Axial Runout < 0.006mm"
    },
    "specsTable": {
      "Application": "Milling",
      "Insert Shape": "R 0.8",
      "Type": "APMT",
      "Grade / Material Type": "PVD Coated Carbide",
      "Corner Radius": "0.8 mm",
      "Material": "Carbide"
    },
    "applications": [
      "Face and shoulder milling in machine shops and toolrooms",
      "Roughing and squaring of MS plates and EN steel forgings",
      "High production automotive component machining",
      "Die and mold base surfacing and cavity preparation"
    ],
    "materialsSupported": [
      "Mild Steel (MS / IS 2062)",
      "EN Steel (EN8 / EN19 / EN24 / EN31)",
      "Alloy Steel (4140 / 4340)",
      "Cast Iron (CI / SG Iron)",
      "Stainless Steel (SS 304 / 316)"
    ],
    "features": [
      "Compatible with APMT indexable inserts",
      "Constructed from premium Carbide for maximum torsional rigidity",
      "Precision CNC pocket milling ensures repeatable tool offset accuracy",
      "Optimized chip gullet design for smooth chip evacuation",
      "Vibration-damping body geometry enhances surface finish",
      "Suitable for CNC vertical machining centers (VMC) and horizontal boring machines"
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "automotive",
    slug: "automotive-auto-components",
    name: "Automotive & Auto Components",
    tagline: "High-Volume, Zero-Defect Tooling for Tier-1 & Tier-2 Suppliers",
    description: "Mamta Tools has been a trusted partner to the Pune and Indian automotive hubs (Bajaj, Tata Motors ecosystem, Bharat Forge vendors) for two decades. We supply high-productivity face mills, U-drills, and custom multi-step tools for engine blocks, transmission gears, steering knuckles, and brake components.",
    machiningChallenges: [
      "Extremely tight cycle time targets measured in seconds",
      "Interrupted cuts in forged steel and ductile cast iron",
      "Strict CPK and CP quality repeatability requirements",
      "High tool life predictability for automated unmanned cells"
    ],
    recommendedTools: [
      "45° Face Mills for cylinder head deck finishing",
      "Indexable U-Drills for connecting rod pin drilling",
      "Special step chamfer cutters for manifold porting",
      "High feed cutters for transmission housing dies"
    ],
    image: "/images/industries/automotive.svg"
  },
  {
    id: "aerospace-defense",
    slug: "aerospace-defense",
    name: "Aerospace & Defense",
    tagline: "Micron-Precision Tooling for Superalloys, Titanium & Aluminum Ribs",
    description: "Meeting the uncompromising safety standards of aerospace machining. Our high-rigidity solid carbide shanks and vibration-damped boring bars machine thin-walled titanium brackets, Inconel turbine components, and structural airframe aluminum with zero chatter.",
    machiningChallenges: [
      "Severe work hardening of Inconel 718 and Titanium 6Al-4V",
      "Deep pocketing with long overhangs causing chatter",
      "Tight surface roughness specifications (Ra < 0.4 µm)",
      "Thin-wall deflection during pocket roughing"
    ],
    recommendedTools: [
      "Anti-Vibration Solid Carbide Modular Shanks (MT-CS)",
      "High Feed Cutters with positive rake TiAlN coated inserts",
      "Vernier Micro-Boring Units for landing gear pivots",
      "Precision 90° Shoulder Cutters for structural pocketing"
    ],
    image: "/images/industries/aerospace.svg"
  },
  {
    id: "die-mold",
    slug: "die-mold-manufacturing",
    name: "Die & Mold Manufacturing",
    tagline: "High Speed Cavity Roughing & Deep Pocket Tooling",
    description: "Plastic injection molds, die casting dies, and forging tools demand rapid bulk material removal followed by fine finishing. Our high feed cutters and modular screw-in heads reduce roughing hours by over 50% while protecting machine tool spindles.",
    machiningChallenges: [
      "Roughing hardened tool steels (P20, H13, D2 up to 58 HRC)",
      "Long tool extensions into deep cavities and steep pockets",
      "Minimizing benching and manual polishing time",
      "High thermal shock during dry high-speed machining"
    ],
    recommendedTools: [
      "MT-HFM High Feed Cutters with WNMU/LNMU inserts",
      "Heavy Metal Anti-Vibration Extensions",
      "Indexable Ball Nose & Toroid Cutters",
      "PVD AlCrN Coated Micro-Grain Carbide Inserts"
    ],
    image: "/images/industries/die-mold.svg"
  },
  {
    id: "heavy-engineering",
    slug: "heavy-engineering-infrastructure",
    name: "Heavy Engineering & Infrastructure",
    tagline: "Rugged Cutters for Earthmoving, Mining & Construction Equipment",
    description: "Machining large weldments, excavator boom arms, and structural plates requires heavy-duty cutters that withstand massive depths of cut and scale. Mamta Tools heavy face mills and large diameter boring bars excel in brutal shop conditions.",
    machiningChallenges: [
      "Heavy surface scale, rust, and flame-cut edge hardness",
      "Large diameter boring operations (up to Ø350mm)",
      "Heavy intermittent cuts across structural weld joints",
      "Low rigidity or large manual/horizontal boring machines"
    ],
    recommendedTools: [
      "MT-FM45 Heavy Duty 45° Face Mills (up to Ø250mm)",
      "Twin-Cutter Rough Boring Units for heavy stock removal",
      "Large diameter U-Drills with tough carbide substrates",
      "Double-sided thick carbide inserts with reinforced edge preparation"
    ],
    image: "/images/industries/heavy-engineering.svg"
  },
  {
    id: "oil-gas",
    slug: "oil-gas-valves",
    name: "Oil & Gas, Valves & Flow Control",
    tagline: "Corrosion-Resistant Alloy Machining for High-Pressure Components",
    description: "Machining high-pressure ball valves, subsea manifolds, and pipeline flanges made from Super Duplex Stainless Steel, Monel, and Hastelloy requires tooling with exceptional heat evacuation and sharp edge retention.",
    machiningChallenges: [
      "Extremely abrasive and gummy stainless & duplex grades",
      "Deep blind hole drilling for manifold hydraulic passages",
      "Ring Joint (RTJ) groove profiling to leak-free tolerances",
      "High temperature at the cutting shear zone"
    ],
    recommendedTools: [
      "Through-Coolant Indexable U-Drills with high-pressure fluid",
      "Custom RTJ and O-Ring groove form cutters",
      "Micro-Finish Boring Units for valve seat concentricity",
      "PVD TiAlN coated sharp ground APKT inserts"
    ],
    image: "/images/industries/oil-gas.svg"
  },
  {
    id: "power-generation",
    slug: "power-energy",
    name: "Power Generation & Turbines",
    tagline: "Heavy-Duty Milling for Turbine Casings, Rotors & Wind Mill Hubs",
    description: "Steam and gas turbine casings, generator rotor forgings, and wind turbine pitch bearings demand large format tooling with zero tolerance for tool failure during long multi-hour cuts.",
    machiningChallenges: [
      "Continuous 10+ hour face milling passes without insert breakdown",
      "Large casting porosity and variable depth of cut",
      "Fir-tree root profiling on rotor discs",
      "Massive component clamping stresses"
    ],
    recommendedTools: [
      "Large diameter octagonal and round button face mills",
      "Heavy boring units with modular BT50 and CAT50 shanks",
      "Custom profile fir-tree cutters",
      "Through-coolant core drills for deep casing bolt circles"
    ],
    image: "/images/industries/power.svg"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "high-feed-milling-vs-conventional-face-milling",
    title: "High-Feed Milling vs. Conventional Face Milling: Optimizing Metal Removal Rate (MRR)",
    excerpt: "Discover how chip thinning principles and small enter angles redirect cutting forces axially to slash cycle times and protect machine spindles during deep cavity milling.",
    category: "Machining Best Practices",
    author: "Ambadas Ghagare",
    authorRole: "Managing Director & Tooling Specialist",
    date: "January 18, 2026",
    readTime: "7 min read",
    tags: ["High Feed Milling", "Face Mills", "Cycle Time Reduction", "Tool Life"],
    content: [
      "In modern CNC machining shops, Metal Removal Rate (MRR) directly governs profitability. While conventional 45° and 90° face mills remain essential for squaring and heavy surfacing, high-feed milling (HFM) has revolutionized roughing operations across die & mold, aerospace, and heavy fabrication.",
      "High feed milling operates on the principle of chip thinning. By designing cutting inserts with a lead angle between 10° to 17°, the actual chip thickness (hex) is significantly smaller than the programmed feed per tooth (fz). For instance, with a 12° lead angle, a programmed feed of 1.5mm/tooth produces an actual chip thickness of only ~0.3mm. This permits feed rates that would instantly snap a conventional cutter.",
      "Crucially, the shallow lead angle alters the force vector: 85% of cutting resistance is redirected axially along the machine tool spindle rather than radially against the quill. Because machine tools possess immense axial rigidity, radial vibration and spindle bearing deflection are virtually eliminated. This enables shops to machine with long overhangs (up to 7xD) without inducing chatter.",
      "At Mamta Tools Pune, our tests across pre-hardened Dievar and H13 tool steels (48-52 HRC) demonstrated a 240% increase in volumetric metal removal compared to traditional round button cutters, while doubling insert corner life."
    ]
  },
  {
    slug: "complete-guide-to-indexable-u-drills-feeds-speeds",
    title: "Complete Guide to Indexable U-Drills: Feeds, Speeds, and Coolant Pressure",
    excerpt: "Master the setup of indexable insert drills: balancing central and peripheral insert wear, optimizing through-spindle coolant bar pressure, and troubleshooting chip evacuation.",
    category: "Drilling Engineering",
    author: "Technical Application Team",
    authorRole: "Mamta Tools R&D Division",
    date: "February 04, 2026",
    readTime: "9 min read",
    tags: ["U-Drills", "Hole Making", "Coolant Pressure", "CNC Machining"],
    content: [
      "Indexable U-Drills represent one of the fastest hole-making methods in industrial metalworking, removing the need for center drilling and pecking cycles up to 5xD hole depths. However, improper parameters frequently lead to premature insert chipping or catastrophic body seizure.",
      "A standard U-Drill employs two asymmetric inserts: the Central Insert (which cuts from centerline Ø0 to approximately ØD/2) and the Peripheral Insert (which cuts from ØD/2 to the full outer diameter). Because cutting velocity (Vc) is proportional to diameter, the central insert operates at near-zero surface speed at the axis, relying heavily on substrate toughness. The peripheral insert operates at maximum peripheral speed, demanding high wear-resistant PVD/CVD coatings.",
      "Coolant is not merely a lubricant in indexable drilling—it is the hydraulic mechanism that purges chips out of the hole. For 3xD and 5xD drilling, minimum through-tool coolant pressure of 10 to 15 bar (150-220 PSI) is mandatory. Without sufficient pressure, chips re-circulate, jam in the helical flutes, and destroy both the inserts and tool body.",
      "When drilling on CNC lathes where the drill is stationary and the workpiece rotates, ensure absolute alignment between the machine spindle center and the drill body center within 0.03mm. Radial misalignment will result in oversized holes and rapid central insert breakage."
    ]
  },
  {
    slug: "iso-insert-grade-selection-guide-stainless-steel-inconel",
    title: "ISO Insert Grade Selection: How to Choose the Right Coating for Stainless Steel and Inconel",
    excerpt: "Understand the differences between PVD and CVD coatings, micro-grain substrates, and edge hones for ISO M (Stainless) and ISO S (Heat Resistant Superalloys).",
    category: "Tool Materials & Coatings",
    author: "Metallurgical Lab",
    authorRole: "Quality Assurance Department",
    date: "February 22, 2026",
    readTime: "8 min read",
    tags: ["Carbide Inserts", "PVD Coatings", "Stainless Steel", "Inconel"],
    content: [
      "Selecting the correct carbide insert grade can mean the difference between 45 minutes of reliable cutting life or rapid failure within 3 passes. The ISO classification divides materials into six color-coded groups: P (Blue/Steels), M (Yellow/Stainless Steels), K (Red/Cast Iron), N (Green/Non-Ferrous), S (Orange/Superalloys), and H (Grey/Hardened Materials).",
      "Machining austenitic stainless steels (AISI 304, 316) poses two major hazards: high work-hardening tendencies and adhesive chip welding (built-up edge). For these applications, Mamta Tools recommends sharp, ground PVD AlCrN or TiAlN coated inserts. PVD coatings are deposited at lower temperatures (450°C-500°C), retaining the high transverse rupture strength of the ultra-fine tungsten carbide substrate.",
      "For Nickel-based superalloys like Inconel 718, thermal conductivity is extremely low, meaning over 80% of cutting heat concentrates directly in the insert tip. Positive rake geometries with dedicated wiper flats and rounded hone edge preparations (ER hone of 15-20 µm) minimize notch wear at the depth-of-cut line.",
      "Explore Mamta Tools' in-house application chart or contact our technical team to receive tailored speed and feed recommendations for your specific workpiece hardness."
    ]
  },
  {
    slug: "how-to-prevent-vibration-chatter-extended-reach-boring",
    title: "How to Prevent Vibration & Chatter in Extended Reach Boring Operations",
    excerpt: "Practical shop floor techniques to eliminate harmonic resonance: tuned mass dampers, solid carbide shanks, differential pitch cutters, and micro-vernier tuning.",
    category: "Vibration Engineering",
    author: "Ambadas Ghagare",
    authorRole: "Managing Director",
    date: "March 02, 2026",
    readTime: "6 min read",
    tags: ["Boring Tools", "Vibration Damping", "Surface Finish", "Precision Machining"],
    content: [
      "Machining internal bores with length-to-diameter (L/D) ratios greater than 4xD is one of the most frustrating tasks on horizontal and vertical machining centers. Chatter marks degrade surface finish (Ra), destroy boring insert edges, and cause out-of-round bore geometry.",
      "Vibration in boring bars is governed by cantilever beam physics, where deflection increases with the cube of length (L³). When the overhang doubles from 3xD to 6xD, bar deflection increases eight-fold! To combat this, switching from a conventional steel bar (E = 210 GPa) to a heavy metal or Solid Carbide boring shank (E = 580 GPa) triples rigidity, pushing the natural harmonic resonance above machine operating frequencies.",
      "In finish boring, insert nose radius plays a pivotal role. A large corner radius (e.g., 0.8mm) increases radial cutting resistance, pushing the bar sideways. Reducing the corner radius to 0.2mm or 0.4mm and using a positive 80° or 55° rhombic insert (CCMT or DCMT) dramatically reduces radial push force.",
      "Mamta Tools manufactures micro-vernier finish boring units with internal damping pads and vernier adjustment down to 0.002mm, ensuring IT6 bore tolerance even at extended reaches."
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "General & Company",
    question: "Where is MAMTA Tools located and what are your manufacturing capabilities?",
    answer: "Mamta Tools was established in 2004 in Pune, Maharashtra, India—one of the nation's premier automotive and engineering hubs. Our main manufacturing plant and R&D testing facility is located in Jyotiba Nagar, Talawade, Pune, with our corporate sales office situated on Telco Road, Pimpri. Our facility is equipped with 5-axis CNC tool grinders, vertical machining centers, cylindrical grinders, vacuum heat treatment, and a metrology lab featuring coordinate measuring machines (CMM) and dynamic tool balancers."
  },
  {
    category: "General & Company",
    question: "Is MAMTA Tools an ISO certified company?",
    answer: "Yes, Mamta Tools is an ISO 9001:2015 certified company audited and certified by TUV Austria. We maintain complete material traceability from virgin raw alloy bars to heat-treatment certification and final 100% runout inspection."
  },
  {
    category: "Products & Specs",
    question: "Are your milling cutters and U-drills compatible with standard ISO inserts?",
    answer: "Yes! Our indexable cutters, face mills, end mills, and U-drills are precision-engineered to accept standard ISO insert geometries (such as APKT, APMT, SEET, SEHT, SPMG, WCMX, CCMT, and CNMG). You can use Mamta Tools high-performance inserts or any standard insert from global brands (Sandvik, Kennametal, Korloy, Kyocera, Mitsubishi, TaeguTec)."
  },
  {
    category: "Products & Specs",
    question: "Do you supply tools with internal through-coolant capabilities?",
    answer: "Almost all Mamta Tools face mills, end mills, high-feed cutters, U-drills, and modular shanks come standard with precision through-coolant ports. This ensures directed fluid delivery directly at the cutting zone for immediate chip flushing, thermal control, and maximum insert tool life."
  },
  {
    category: "Custom Tooling",
    question: "Can MAMTA Tools manufacture custom cutting tools from our drawings or 3D models?",
    answer: "Custom tooling is one of our primary core strengths. We engineer custom step drills, multi-diameter combination boring bars, special chamfer tools, and complex form cutters. Simply submit your component drawing (PDF, DWG, DXF, or STEP) on our Request a Quote page, and our engineering team will provide 3D CAD proposal drawings and quotation within 24 to 48 hours."
  },
  {
    category: "Custom Tooling",
    question: "What is the typical lead time for custom manufactured tools?",
    answer: "Standard catalog items are available ex-stock or ship within 2 to 5 business days. Custom engineered tooling typically ships within 10 to 18 business days from final 3D CAD approval, depending on geometry complexity and heat treatment cycles."
  },
  {
    category: "Export & Orders",
    question: "Do you export cutting tools internationally? What are your shipping and packaging protocols?",
    answer: "Yes, Mamta Tools exports precision tooling to clients across the USA, Germany, the UK, UAE, Saudi Arabia, South Africa, Indonesia, Thailand, and Malaysia. Tools are coated with rust-preventive VCI oil, vacuum sealed in heavy gauge plastic, and packed in reinforced export-grade cartons or wooden crates. We handle sea and air freight through Nhava Sheva (JNPT) Mumbai port and Pune/Mumbai International Airports under Incoterms (FOB, CIF, DAP, EXW)."
  },
  {
    category: "Export & Orders",
    question: "What payment currencies and terms are accepted for international buyers?",
    answer: "We accept payments in USD, EUR, GBP, AED, and INR via Wire Transfer (TT / SWIFT), Letter of Credit (L/C) for container/high-volume shipments, and approved corporate credit terms for ongoing distributor contracts."
  },
  {
    category: "Distributor Network",
    question: "How can an industrial distributor or tooling dealer partner with MAMTA Tools?",
    answer: "We actively invite regional and international cutting tool dealers, industrial distributors, and CNC machinery suppliers to join our global network. Authorized dealers receive wholesale tiered pricing, protected regional exclusivity, technical field support, marketing catalogues, and direct lead referrals. You can apply directly through our Distributor / Dealer Enquiry page."
  }
];

export const TESTIMONIALS = [
  {
    clientName: "Rajesh Kulkarni",
    role: "General Manager - Tooling & Production",
    company: "Automotive Precision Components Ltd, Chakan Pune",
    quote: "We switched to Mamta Tools 45° face mills and indexable U-drills for our automotive engine bracket lines. Not only did our tool consumable costs drop by 35%, but the runout consistency and insert pocket durability rival the best European tool brands.",
    rating: 5
  },
  {
    clientName: "Markus Weber",
    role: "Procurement Director",
    company: "Precision Heavy Engineering GmbH, Stuttgart, Germany",
    quote: "Mamta Tools has been our contracted supplier for large diameter modular shanks and custom boring bars since 2021. Their dimensional accuracy, export packaging, and adherence to ISO 9001 quality certificates make them a top-tier international partner.",
    rating: 5
  },
  {
    clientName: "Saeed Al-Maktoum",
    role: "Operations Head",
    company: "Gulf Energy Valve & Pipeline Solutions, Sharjah, UAE",
    quote: "Machining Inconel valve bodies was causing rapid cutter pocket fatigue with our previous tooling. Mamta Tools custom high feed cutters solved the chatter problem and reduced our cycle time by 45%. Outstanding engineering capability.",
    rating: 5
  }
];

