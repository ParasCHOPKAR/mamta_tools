const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const prodDir = path.join(baseDir, 'public', 'images', 'products');
const indDir = path.join(baseDir, 'public', 'images', 'industries');

// End mill
fs.writeFileSync(path.join(prodDir, 'end-mill.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="emMetal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#475569"/><stop offset="35%" stop-color="#cbd5e1"/><stop offset="70%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="emGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Shank -->
  <rect x="70" y="120" width="160" height="60" fill="url(#emMetal)" stroke="#1e293b" stroke-width="2" rx="4"/>
  <rect x="110" y="120" width="40" height="18" fill="#334155" stroke="#1e293b" stroke-width="1"/>
  <text x="130" y="132" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="sans-serif">WELDON</text>
  <!-- Cutting Head with Flutes -->
  <path d="M230 115 L320 115 L340 135 L340 165 L320 185 L230 185 Z" fill="url(#emMetal)" stroke="#1e293b" stroke-width="2"/>
  <!-- Insert 1 & 2 -->
  <rect x="305" y="112" width="28" height="20" rx="3" fill="url(#emGold)" stroke="#78350f" stroke-width="1.5" transform="rotate(-5 319 122)"/>
  <rect x="305" y="168" width="28" height="20" rx="3" fill="url(#emGold)" stroke="#78350f" stroke-width="1.5" transform="rotate(5 319 178)"/>
  <rect x="260" y="140" width="28" height="20" rx="3" fill="url(#emGold)" stroke="#78350f" stroke-width="1.5"/>
  <!-- Coolant Jet -->
  <circle cx="335" cy="150" r="4" fill="#0284c7"/>
  <rect x="20" y="250" width="150" height="28" rx="6" fill="#10243a"/>
  <text x="95" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MT-EM90 INDEXABLE</text>
  <rect x="250" y="250" width="130" height="28" rx="6" fill="#0d9488"/>
  <text x="315" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">90° TRUE SHOULDER</text>
</svg>`);

// High feed cutter
fs.writeFileSync(path.join(prodDir, 'high-feed.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="hfmMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/><stop offset="50%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="hfmGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fef08a"/><stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <path d="M120 100 L260 100 L290 130 L290 170 L260 200 L120 200 Z" fill="url(#hfmMetal)" stroke="#1e293b" stroke-width="2"/>
  <!-- High feed insert bevel pockets (12 degree lead) -->
  <g transform="rotate(12 280 120)"><polygon points="265,110 295,116 290,138 260,132" fill="url(#hfmGold)" stroke="#78350f" stroke-width="1.5"/><circle cx="278" cy="124" r="3" fill="#451a03"/></g>
  <g transform="rotate(-12 280 180)"><polygon points="265,162 295,156 290,178 260,184" fill="url(#hfmGold)" stroke="#78350f" stroke-width="1.5"/><circle cx="278" cy="170" r="3" fill="#451a03"/></g>
  <!-- Coolant ports -->
  <circle cx="275" cy="150" r="4" fill="#0284c7"/>
  <line x1="285" y1="150" x2="330" y2="150" stroke="#0284c7" stroke-width="2" stroke-dasharray="3 3"/>
  <rect x="20" y="250" width="140" height="28" rx="6" fill="#10243a"/>
  <text x="90" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MT-HFM FAST FEED</text>
  <rect x="240" y="250" width="140" height="28" rx="6" fill="#f28c28"/>
  <text x="310" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">UP TO 2.0MM/FZ</text>
</svg>`);

// U-Drill
fs.writeFileSync(path.join(prodDir, 'u-drill.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="udMetal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/><stop offset="30%" stop-color="#cbd5e1"/><stop offset="70%" stop-color="#64748b"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="udGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ea580c"/><stop offset="60%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#7c2d12"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Shank with DIN 9766 flat -->
  <rect x="50" y="115" width="130" height="70" fill="url(#udMetal)" stroke="#1e293b" stroke-width="2" rx="4"/>
  <rect x="90" y="115" width="35" height="15" fill="#1e293b"/>
  <!-- Fluted Drill Body with helical twist -->
  <path d="M180 120 L310 120 L335 150 L310 180 L180 180 Z" fill="url(#udMetal)" stroke="#1e293b" stroke-width="2"/>
  <path d="M180 135 Q 240 170 310 135" fill="none" stroke="#1e293b" stroke-width="4"/>
  <path d="M180 165 Q 240 130 310 165" fill="none" stroke="#1e293b" stroke-width="4"/>
  <!-- Peripheral insert & Central insert -->
  <polygon points="310,120 330,120 330,140 310,135" fill="url(#udGold)" stroke="#78350f" stroke-width="1.5"/>
  <polygon points="318,150 335,150 335,170 318,170" fill="url(#udGold)" stroke="#78350f" stroke-width="1.5"/>
  <!-- Internal coolant streams -->
  <circle cx="328" cy="138" r="3.5" fill="#0284c7"/>
  <circle cx="328" cy="162" r="3.5" fill="#0284c7"/>
  <rect x="20" y="250" width="140" height="28" rx="6" fill="#10243a"/>
  <text x="90" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MT-UD 3D/5D DRILL</text>
  <rect x="240" y="250" width="140" height="28" rx="6" fill="#0d9488"/>
  <text x="310" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">Ø14 TO Ø60 MM</text>
</svg>`);

// Boring Unit
fs.writeFileSync(path.join(prodDir, 'boring-unit.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="buGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/><stop offset="50%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Modular Arbor -->
  <polygon points="60,110 140,125 140,175 60,190" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <!-- Micrometer Dial Body -->
  <rect x="140" y="115" width="85" height="70" fill="url(#buGrad)" stroke="#1e293b" stroke-width="2" rx="4"/>
  <!-- Vernier Scale Lines -->
  <line x1="160" y1="125" x2="160" y2="140" stroke="#0f172a" stroke-width="2"/>
  <line x1="170" y1="125" x2="170" y2="135" stroke="#0f172a" stroke-width="1"/>
  <line x1="180" y1="125" x2="180" y2="140" stroke="#0f172a" stroke-width="2"/>
  <line x1="190" y1="125" x2="190" y2="135" stroke="#0f172a" stroke-width="1"/>
  <line x1="200" y1="125" x2="200" y2="140" stroke="#0f172a" stroke-width="2"/>
  <text x="180" y="160" font-size="10" fill="#b91c1c" font-weight="bold" font-family="monospace" text-anchor="middle">0.002mm</text>
  <!-- Boring Bar Cartridge -->
  <rect x="225" y="135" width="80" height="30" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
  <polygon points="305,140 325,140 325,160 305,160" fill="#fbbf24" stroke="#78350f" stroke-width="1.5"/>
  <rect x="20" y="250" width="150" height="28" rx="6" fill="#10243a"/>
  <text x="95" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MICRO-VERNIER HEAD</text>
  <rect x="250" y="250" width="130" height="28" rx="6" fill="#f28c28"/>
  <text x="315" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">IT6 ACCURACY</text>
</svg>`);

// Modular Shank
fs.writeFileSync(path.join(prodDir, 'modular-shank.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="msCarbide" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/><stop offset="40%" stop-color="#475569"/><stop offset="70%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Carbide body -->
  <rect x="50" y="125" width="230" height="50" fill="url(#msCarbide)" stroke="#0f172a" stroke-width="2" rx="3"/>
  <!-- Threaded Coupling Pilot -->
  <rect x="280" y="132" width="25" height="36" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
  <line x1="285" y1="132" x2="285" y2="168" stroke="#475569" stroke-width="2"/>
  <line x1="292" y1="132" x2="292" y2="168" stroke="#475569" stroke-width="2"/>
  <line x1="299" y1="132" x2="299" y2="168" stroke="#475569" stroke-width="2"/>
  <!-- Modular Cutter Head (Screw-in) -->
  <polygon points="305,122 345,130 345,170 305,178" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <polygon points="335,128 350,136 345,150 330,145" fill="#f59e0b" stroke="#78350f" stroke-width="1.5"/>
  <rect x="20" y="250" width="160" height="28" rx="6" fill="#10243a"/>
  <text x="100" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">SOLID CARBIDE SHANK</text>
  <rect x="250" y="250" width="130" height="28" rx="6" fill="#0d9488"/>
  <text x="315" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">OVERHANG UP TO 8xD</text>
</svg>`);

// Carbide Insert
fs.writeFileSync(path.join(prodDir, 'carbide-insert.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="insGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309"/><stop offset="35%" stop-color="#fbbf24"/><stop offset="70%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="insBlack" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/><stop offset="40%" stop-color="#64748b"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Rhombic Insert CNMG Style -->
  <polygon points="170,70 250,110 210,210 130,170" fill="url(#insGold)" stroke="#78350f" stroke-width="2"/>
  <circle cx="190" cy="140" r="16" fill="#451a03"/>
  <circle cx="190" cy="140" r="10" fill="#f8fafc" fill-opacity="0.3"/>
  <!-- Milling Insert APKT Style -->
  <polygon points="260,140 330,140 320,220 250,220" fill="url(#insBlack)" stroke="#0f172a" stroke-width="2"/>
  <circle cx="290" cy="180" r="12" fill="#020617"/>
  <rect x="20" y="250" width="150" height="28" rx="6" fill="#10243a"/>
  <text x="95" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">PVD / CVD COATED</text>
  <rect x="250" y="250" width="130" height="28" rx="6" fill="#f28c28"/>
  <text x="315" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">NANO-COMPOSITE</text>
</svg>`);

// Special Application Cutter
fs.writeFileSync(path.join(prodDir, 'special-cutter.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="specGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/><stop offset="50%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#f8fafc" rx="12"/>
  <!-- Multi-step body: Shank -> Step 1 (bore) -> Step 2 (chamfer) -> Step 3 (face) -->
  <rect x="40" y="125" width="100" height="50" fill="url(#specGrad)" stroke="#1e293b" stroke-width="2"/>
  <polygon points="140,110 210,110 210,190 140,190" fill="url(#specGrad)" stroke="#1e293b" stroke-width="2"/>
  <polygon points="210,95 280,95 280,205 210,205" fill="url(#specGrad)" stroke="#1e293b" stroke-width="2"/>
  <!-- Insert 1 (Pilot step) -->
  <rect x="200" y="105" width="15" height="15" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
  <!-- Insert 2 (Chamfer 45) -->
  <polygon points="270,92 285,92 285,110 270,105" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
  <!-- Insert 3 (Facing) -->
  <polygon points="270,190 285,190 285,208 270,203" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
  <rect x="20" y="250" width="160" height="28" rx="6" fill="#10243a"/>
  <text x="100" y="268" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">CUSTOM MULTI-STEP</text>
  <rect x="240" y="250" width="140" height="28" rx="6" fill="#f28c28"/>
  <text x="310" y="268" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">CYCLE TIME -60%</text>
</svg>`);

// Industry SVGs
const industries = [
  { name: 'automotive.svg', title: 'AUTOMOTIVE', icon: 'M 100 160 L 140 120 L 260 120 L 300 160 L 320 160 L 320 190 L 80 190 L 80 160 Z' },
  { name: 'aerospace.svg', title: 'AEROSPACE & DEFENSE', icon: 'M 200 80 L 220 140 L 310 170 L 310 190 L 220 180 L 210 220 L 240 240 L 200 235 L 160 240 L 190 220 L 180 180 L 90 190 L 90 170 L 180 140 Z' },
  { name: 'die-mold.svg', title: 'DIE & MOLD', icon: 'M 120 100 L 280 100 L 280 200 L 120 200 Z M 150 130 L 250 130 L 230 170 L 170 170 Z' },
  { name: 'heavy-engineering.svg', title: 'HEAVY ENGINEERING', icon: 'M 100 200 L 160 120 L 240 120 L 300 200 Z M 170 140 L 230 140 L 220 180 L 180 180 Z' },
  { name: 'oil-gas.svg', title: 'OIL & GAS VALVES', icon: 'M 140 100 L 260 100 L 260 140 L 300 140 L 300 180 L 260 180 L 260 220 L 140 220 L 140 180 L 100 180 L 100 140 L 140 140 Z' },
  { name: 'power.svg', title: 'POWER & ENERGY', icon: 'M 200 80 L 230 150 L 190 150 L 210 220 L 160 160 L 190 160 Z' }
];

industries.forEach(ind => {
  fs.writeFileSync(path.join(indDir, ind.name), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <rect width="400" height="300" fill="#0f172a" rx="12"/>
    <circle cx="200" cy="150" r="90" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <path d="${ind.icon}" fill="#f28c28" fill-opacity="0.9" stroke="#fed7aa" stroke-width="2"/>
    <text x="200" y="270" fill="#f8fafc" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">${ind.title}</text>
  </svg>`);
});

console.log('Successfully generated all SVG assets!');

