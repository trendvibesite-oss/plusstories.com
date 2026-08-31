import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center space-x-3 font-sans select-none ${className}`}>
      {/* Plus & Book Emblem (Seamless Vector SVG) */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="plusGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="plusGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Plus Cross Base */}
          <path
            d="M36 12 C36 8.68629 38.6863 6 42 6 H58 C61.3137 6 64 8.68629 64 12 V36 H88 C91.3137 36 94 38.6863 94 42 V58 C94 61.3137 91.3137 64 88 64 H64 V88 C64 91.3137 61.3137 94 58 94 H42 C38.6863 94 36 91.3137 36 88 V64 H12 C8.68629 64 6 61.3137 6 58 V42 C6 38.6863 8.68629 36 12 36 H36 V12 Z"
            fill="url(#plusGradBlue)"
          />

          {/* Emerald Wing Accent */}
          <path
            d="M64 36 H88 C91.3137 36 94 38.6863 94 42 V58 C94 61.3137 91.3137 64 88 64 H64 V88 C64 91.3137 61.3137 94 58 94 H42 L64 36 Z"
            fill="url(#plusGradEmerald)"
          />

          {/* Open Digital Storytelling Book */}
          <path
            d="M30 46 C36 41 45 41 50 45 C55 41 64 41 70 46 V69 C64 65 55 65 50 68 C45 65 36 65 30 69 Z"
            fill="#ffffff"
          />
          <path
            d="M50 45 V68"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Digital Sparkles */}
          <rect x="72" y="20" width="7" height="7" rx="1.5" fill="#10b981" />
          <rect x="82" y="14" width="5" height="5" rx="1" fill="#38bdf8" />
          <rect x="84" y="24" width="4" height="4" rx="1" fill="#059669" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex items-baseline font-black tracking-tight text-2xl sm:text-3xl leading-none">
        <span className={isDark ? "text-white" : "text-slate-900"}>
          PlusStories
        </span>
        <span className="text-brand-500 font-extrabold ml-0.5">.com</span>
      </div>
    </div>
  );
};
