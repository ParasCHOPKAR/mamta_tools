'use client';

import React, { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';

export default function SpeedFeedCalculator() {
  const [diameter, setDiameter] = useState<number>(50); // mm
  const [cuttingSpeed, setCuttingSpeed] = useState<number>(180); // m/min
  const [numberOfTeeth, setNumberOfTeeth] = useState<number>(5);
  const [feedPerTooth, setFeedPerTooth] = useState<number>(0.15); // mm/tooth

  // Calculations
  // RPM = (Vc * 1000) / (pi * D)
  const rpm = Math.round((cuttingSpeed * 1000) / (Math.PI * diameter)) || 0;
  // Table Feed Vf = RPM * z * fz
  const tableFeed = Math.round(rpm * numberOfTeeth * feedPerTooth) || 0;

  return (
    <div className="bg-white rounded-2xl border border-steel-200 shadow-card p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-steel-100 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-navy-900">Interactive Cutting Speed & Feed Calculator</h3>
            <span className="text-xs text-steel-500">Calculate RPM and Table Feed Rate (mm/min) for CNC Milling & Drilling</span>
          </div>
        </div>
        <button
          onClick={() => {
            setDiameter(50);
            setCuttingSpeed(180);
            setNumberOfTeeth(5);
            setFeedPerTooth(0.15);
          }}
          className="text-xs text-steel-400 hover:text-navy-900 flex items-center gap-1"
          title="Reset Defaults"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Inputs */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-steel-700 mb-1">
              <span>Cutter / Drill Diameter (D):</span>
              <span className="text-navy-900 font-mono font-bold">{diameter} mm</span>
            </div>
            <input
              type="range"
              min="10"
              max="250"
              step="1"
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              className="w-full accent-brand-orange"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-steel-700 mb-1">
              <span>Cutting Speed (Vc):</span>
              <span className="text-navy-900 font-mono font-bold">{cuttingSpeed} m/min</span>
            </div>
            <input
              type="range"
              min="30"
              max="600"
              step="5"
              value={cuttingSpeed}
              onChange={(e) => setCuttingSpeed(Number(e.target.value))}
              className="w-full accent-brand-orange"
            />
            <div className="flex justify-between text-[10px] text-steel-400 mt-0.5">
              <span>Steel: 120-220</span>
              <span>Cast Iron: 100-180</span>
              <span>Aluminium: 300-800</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-steel-700 mb-1">
              <span>Number of Inserts / Teeth (z):</span>
              <span className="text-navy-900 font-mono font-bold">{numberOfTeeth}</span>
            </div>
            <input
              type="range"
              min="1"
              max="16"
              step="1"
              value={numberOfTeeth}
              onChange={(e) => setNumberOfTeeth(Number(e.target.value))}
              className="w-full accent-brand-orange"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-steel-700 mb-1">
              <span>Feed per Tooth (fz):</span>
              <span className="text-navy-900 font-mono font-bold">{feedPerTooth.toFixed(2)} mm/tooth</span>
            </div>
            <input
              type="range"
              min="0.03"
              max="2.00"
              step="0.01"
              value={feedPerTooth}
              onChange={(e) => setFeedPerTooth(Number(e.target.value))}
              className="w-full accent-brand-orange"
            />
            <div className="text-[10px] text-steel-400 mt-0.5">
              <span>Tip: High-feed cutters typically operate between 0.8mm to 2.0mm/fz.</span>
            </div>
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="bg-navy-900 text-white p-6 rounded-xl border border-navy-800 space-y-6">
          <div>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
              Calculated Spindle Speed (n)
            </span>
            <div className="text-4xl font-black font-mono text-white flex items-baseline gap-2">
              {rpm.toLocaleString()}
              <span className="text-sm font-sans font-normal text-steel-400">RPM</span>
            </div>
            <span className="text-[11px] text-steel-400 mt-1 block">Formula: n = (Vc × 1000) / (π × D)</span>
          </div>

          <div className="pt-4 border-t border-navy-800">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider block mb-1">
              Calculated Table Feed Rate (Vf)
            </span>
            <div className="text-4xl font-black font-mono text-brand-orange flex items-baseline gap-2">
              {tableFeed.toLocaleString()}
              <span className="text-sm font-sans font-normal text-steel-400">mm / min</span>
            </div>
            <span className="text-[11px] text-steel-400 mt-1 block">Formula: Vf = n × z × fz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

