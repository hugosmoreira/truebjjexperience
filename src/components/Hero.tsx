import { useEffect, useRef } from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg absolute inset-0 bg-[#0a0a0b] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80" 
          alt="Atmospheric training room" 
          className="w-full h-full object-cover opacity-25 mix-blend-overlay grayscale contrast-125 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hero-montage"></div>

      {/* Cinematic SVG montage layer */}
      <svg className="hero-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1d" stopOpacity="0"/>
            <stop offset="100%" stopColor="#0a0a0b" stopOpacity=".9"/>
          </linearGradient>
          <radialGradient id="hg2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#b8232a" stopOpacity=".3"/>
            <stop offset="100%" stopColor="#b8232a" stopOpacity="0"/>
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="2"/></filter>
        </defs>

        {/* Distant city skyline silhouette */}
        <g opacity=".22" fill="#1a1a1d">
          <rect x="0" y="640" width="80" height="180"/>
          <rect x="80" y="600" width="60" height="220"/>
          <rect x="140" y="660" width="100" height="160"/>
          <rect x="240" y="580" width="40" height="240"/>
          <rect x="280" y="620" width="80" height="200"/>
          <rect x="360" y="660" width="50" height="160"/>
          <rect x="410" y="540" width="60" height="280"/>
          <rect x="470" y="640" width="90" height="180"/>
          <rect x="1380" y="660" width="70" height="160"/>
          <rect x="1450" y="600" width="50" height="220"/>
          <rect x="1500" y="560" width="80" height="260"/>
          <rect x="1580" y="640" width="60" height="180"/>
          <rect x="1640" y="600" width="100" height="220"/>
          <rect x="1740" y="660" width="50" height="160"/>
          <rect x="1790" y="620" width="80" height="200"/>
          <rect x="1870" y="660" width="50" height="160"/>
        </g>

        {/* Window lights */}
        <g opacity=".4" fill="#c9a96a">
          <rect x="100" y="650" width="3" height="3"/>
          <rect x="110" y="660" width="3" height="3"/>
          <rect x="160" y="700" width="3" height="3"/>
          <rect x="200" y="720" width="3" height="3"/>
          <rect x="250" y="630" width="3" height="3"/>
          <rect x="430" y="590" width="3" height="3"/>
          <rect x="450" y="620" width="3" height="3"/>
          <rect x="1490" y="630" width="3" height="3"/>
          <rect x="1520" y="600" width="3" height="3"/>
          <rect x="1570" y="700" width="3" height="3"/>
          <rect x="1680" y="640" width="3" height="3"/>
          <rect x="1720" y="680" width="3" height="3"/>
        </g>

        {/* Atmospheric mist/fog */}
        <ellipse cx="960" cy="780" rx="800" ry="120" fill="#2a2a2e" opacity=".4" filter="url(#blur1)"/>
        
        {/* Crimson light flare */}
        <ellipse cx="380" cy="380" rx="500" ry="380" fill="url(#hg2)"/>

        {/* Faded grid pattern */}
        <g opacity=".06" stroke="#f4f1ec" strokeWidth=".5" fill="none">
          <line x1="0" y1="180" x2="1920" y2="180"/>
          <line x1="0" y1="360" x2="1920" y2="360"/>
          <line x1="0" y1="540" x2="1920" y2="540"/>
          <line x1="0" y1="720" x2="1920" y2="720"/>
          <line x1="240" y1="0" x2="240" y2="1080"/>
          <line x1="480" y1="0" x2="480" y2="1080"/>
          <line x1="720" y1="0" x2="720" y2="1080"/>
          <line x1="960" y1="0" x2="960" y2="1080"/>
          <line x1="1200" y1="0" x2="1200" y2="1080"/>
          <line x1="1440" y1="0" x2="1440" y2="1080"/>
          <line x1="1680" y1="0" x2="1680" y2="1080"/>
        </g>

        {/* Silhouette of athlete */}
        <g opacity=".5" fill="#0a0a0b" transform="translate(1380, 280)">
          <circle cx="120" cy="60" r="44"/>
          <path d="M 80 100 Q 120 90 160 100 L 180 280 Q 120 300 60 280 Z"/>
          <path d="M 80 120 Q 30 200 20 320 L 10 360 L 30 380 L 60 320 Q 90 240 100 160 Z"/>
          <path d="M 160 120 Q 200 180 240 240 L 280 250 L 290 230 L 250 200 Q 210 160 180 120 Z"/>
          <path d="M 80 280 L 60 480 L 90 510 L 110 320 Z"/>
          <path d="M 160 280 L 200 480 L 170 510 L 140 320 Z"/>
        </g>

        <g opacity=".18" fill="#0a0a0b" transform="translate(180, 540) scale(.7)">
          <ellipse cx="100" cy="80" rx="40" ry="36"/>
          <path d="M 60 110 Q 100 100 140 110 L 160 240 Q 100 260 40 240 Z"/>
          <ellipse cx="220" cy="120" rx="38" ry="34"/>
          <path d="M 180 150 Q 220 140 260 150 L 280 280 Q 220 300 160 280 Z"/>
        </g>

        <rect x="0" y="318" width="1920" height="1" fill="#d94248" opacity=".5"/>
        <ellipse cx="380" cy="318" rx="280" ry="2" fill="#d94248" opacity=".6"/>
        <rect x="0" y="700" width="1920" height="380" fill="url(#hg1)"/>
      </svg>

      <div className="hero-vignette"></div>

      <div className="hero-meta">
        <div><span className="dot-blink"></span>EST. 2019 — A GLOBAL NETWORK</div>
        <div>N 22°54' W 43°10' — RIO DE JANEIRO → WORLD</div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">Vol. 07 — The Movement Issue</div>
        <h1 className="hero-title">
          <span className="line"><span>Train without</span></span>
          <span className="line"><span><em>borders.</em></span></span>
        </h1>
        <p className="hero-sub">A global martial arts network connecting academies, athletes, and experiences worldwide. One discipline, infinite cities. Cross continents on the mat.</p>
        <div className="hero-actions">
          <button className="btn-primary">Join The Network <span className="arr">→</span></button>
          <button className="btn-ghost"><span className="play">▶</span> Watch the film</button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat"><div className="stat-num">87<em>+</em></div><div className="stat-label">Countries</div></div>
        <div className="stat"><div className="stat-num">2,400</div><div className="stat-label">Academies</div></div>
        <div className="stat"><div className="stat-num">142k</div><div className="stat-label">Athletes</div></div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="line-down"></div>
      </div>
    </section>
  );
}
