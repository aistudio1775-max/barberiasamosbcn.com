import React from 'react';

interface SxmosLogoProps {
  className?: string;
  showBackground?: boolean;
}

export const SxmosLogo: React.FC<SxmosLogoProps> = ({
  className = 'h-10 w-auto',
  showBackground = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden transition-all ${
        showBackground
          ? 'bg-[#0a1438] border border-blue-900/60 shadow-md shadow-blue-950/50 rounded-xl px-3 py-1.5'
          : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 580 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-label="Logo SXMOS Barber Shop"
      >
        <defs>
          {/* Subtle Glow Filter */}
          <filter id="sxmosGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="#FFFFFF" filter="url(#sxmosGlow)">
          {/* === LETTER S (LEFT) === */}
          <g id="letter-s-left">
            <path d="M 45 40 H 105 C 115 40 120 46 120 55 V 68 C 120 76 114 80 102 82 L 45 90 V 40 Z" />
            <path d="M 120 98 H 60 C 50 98 45 104 45 113 V 126 C 45 134 51 140 63 140 H 120 V 98 Z" />
            <path d="M 45 40 H 120 V 82 H 60 L 120 90 V 140 H 45 V 98 H 105 L 45 90 V 40 Z" opacity="0.9" />
            {/* Precise Stencil Cut for S */}
            <path d="M 45 35 H 120 C 125 35 128 38 128 43 V 70 C 128 78 120 83 110 84 H 65 V 86 H 128 V 92 H 45 C 40 92 37 89 37 84 V 57 C 37 49 45 44 55 43 H 128" />
          </g>

          {/* Clean Graphic S1 */}
          <path
            d="M 40 40 C 40 32 48 26 58 26 H 112 C 122 26 130 32 130 40 V 68 C 130 76 122 82 112 82 H 68 V 87 H 130 V 97 H 40 V 40 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 130 142 C 130 150 122 156 112 156 H 58 C 48 156 40 150 40 142 V 114 C 40 106 48 100 58 100 H 102 V 95 H 40 V 85 H 130 V 142 Z"
            fill="#FFFFFF"
          />

          {/* === LETTER X (CROSSED SCISSORS) === */}
          <g id="letter-x-scissors">
            {/* Top Left Scissor Ring Handle */}
            <path d="M 165 30 C 150 30 140 42 140 56 C 140 70 152 78 168 72 L 202 110 L 188 124 C 172 110 162 90 165 75" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <ellipse cx="165" cy="52" rx="14" ry="18" fill="#0a1438" />
            
            {/* Top Right Scissor Ring Handle */}
            <path d="M 235 30 C 250 30 260 42 260 56 C 260 70 248 78 232 72 L 198 110 L 212 124 C 228 110 238 90 235 75" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <ellipse cx="235" cy="52" rx="14" ry="18" fill="#0a1438" />

            {/* Diagonal Blades Crossing X */}
            {/* Blade 1: Top Right to Bottom Left */}
            <path d="M 245 42 L 155 138 C 150 143 145 148 142 155 L 160 155 L 255 52 Z" fill="#FFFFFF" />
            {/* Blade 2: Top Left to Bottom Right */}
            <path d="M 155 42 L 245 138 C 250 143 255 148 258 155 L 240 155 L 145 52 Z" fill="#FFFFFF" />
            {/* Screw Center Pivot */}
            <circle cx="200" cy="92" r="5" fill="#0a1438" />
          </g>

          {/* === LETTER M === */}
          <g id="letter-m">
            <path d="M 268 30 H 295 V 82 L 315 130 L 335 82 V 30 H 362 V 152 H 338 V 98 L 315 145 L 292 98 V 152 H 268 V 30 Z" fill="#FFFFFF" />
            {/* Horizontal Stencil Cut through M */}
            <rect x="265" y="86" width="100" height="8" fill="#0a1438" />
          </g>

          {/* === LETTER O === */}
          <g id="letter-o">
            <path d="M 380 40 C 380 30 388 24 400 24 H 440 C 452 24 460 30 460 40 V 142 C 460 152 452 158 440 158 H 400 C 388 158 380 152 380 142 V 40 Z" fill="#FFFFFF" />
            <rect x="404" y="48" width="32" height="88" rx="8" fill="#0a1438" />
            {/* Horizontal Stencil Cut through O */}
            <rect x="376" y="86" width="88" height="8" fill="#0a1438" />
          </g>

          {/* === LETTER S (RIGHT) === */}
          <g id="letter-s-right">
            <path
              d="M 470 40 C 470 32 478 26 488 26 H 542 C 552 26 560 32 560 40 V 68 C 560 76 552 82 542 82 H 498 V 87 H 560 V 97 H 470 V 40 Z"
              fill="#FFFFFF"
            />
            <path
              d="M 560 142 C 560 150 552 156 542 156 H 488 C 478 156 470 150 470 142 V 114 C 470 106 478 100 488 100 H 532 V 95 H 470 V 85 H 560 V 142 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* === THE HUGE MUSTACHE (CURVING UNDER X-M-O) === */}
          <g id="mustache">
            {/* Smooth Mustache sweep from center (under M) curving out and up into handlebar swirls */}
            <path
              d="M 315 115 
                 C 290 115 250 120 205 138 
                 C 175 150 155 168 150 185 
                 C 148 192 153 198 160 196 
                 C 172 192 188 178 208 162 
                 C 240 136 285 128 315 130 
                 C 345 128 390 136 422 162 
                 C 442 178 458 192 470 196 
                 C 477 198 482 192 480 185 
                 C 475 168 455 150 425 138 
                 C 380 120 340 115 315 115 Z"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
