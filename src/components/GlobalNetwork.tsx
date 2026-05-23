import { useEffect, useRef } from 'react';

export default function GlobalNetwork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="network" id="network">
      <div className="container">
        <div className="net-head">
          <div>
            <div className="eyebrow">Chapter 05 — The Global Network</div>
            <h2 className="display">Live.<br/>Connected. <em>Worldwide.</em></h2>
          </div>
          <div className="net-stats">
            <div className="net-stat"><div className="v">2.4<em>k</em></div><div className="l">Academies</div></div>
            <div className="net-stat"><div className="v">87</div><div className="l">Countries</div></div>
            <div className="net-stat"><div className="v">142<em>k</em></div><div className="l">Athletes</div></div>
            <div className="net-stat"><div className="v">24/7</div><div className="l">Live Matches</div></div>
          </div>
        </div>

        <div className="net-viz">
          <div className="corner tl"><span className="pip"></span>NETWORK · <strong>LIVE</strong></div>
          <div className="corner tr">LAT 40°N — LONG 74°W</div>
          <div className="corner br"><strong>3,184</strong> · ACTIVE NODES</div>

          <svg viewBox="0 0 1400 680" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#b8232a" stopOpacity="1"/>
                <stop offset="50%" stopColor="#b8232a" stopOpacity=".4"/>
                <stop offset="100%" stopColor="#b8232a" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="nodeGlowGold" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#c9a96a" stopOpacity="1"/>
                <stop offset="100%" stopColor="#c9a96a" stopOpacity="0"/>
              </radialGradient>
            </defs>

            <g fill="none" stroke="#2a2a2e" strokeWidth="1" opacity=".5">
              <path d="M 120 180 Q 200 160 280 200 Q 340 240 320 320 Q 280 360 200 340 Q 140 320 120 260 Z"/>
              <path d="M 320 360 Q 380 340 420 400 Q 440 480 400 540 Q 360 580 320 540 Q 300 460 320 380 Z"/>
              <path d="M 620 200 Q 700 180 760 220 Q 780 260 740 280 Q 680 290 640 270 Q 600 240 620 220 Z"/>
              <path d="M 660 320 Q 740 310 780 380 Q 800 460 760 520 Q 720 540 680 500 Q 640 420 660 340 Z"/>
              <path d="M 820 200 Q 940 180 1080 220 Q 1180 260 1160 320 Q 1080 340 980 320 Q 880 300 820 260 Z"/>
              <path d="M 1100 460 Q 1180 450 1220 490 Q 1240 520 1200 540 Q 1140 540 1100 510 Z"/>
            </g>

            <g stroke="#b8232a" strokeWidth="1" fill="none" opacity=".4">
              <line x1="200" y1="260" x2="400" y2="460" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite"/></line>
              <line x1="200" y1="260" x2="680" y2="240" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.5s" repeatCount="indefinite"/></line>
              <line x1="680" y1="240" x2="940" y2="260" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.2s" repeatCount="indefinite"/></line>
              <line x1="940" y1="260" x2="1160" y2="500" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.8s" repeatCount="indefinite"/></line>
              <line x1="400" y1="460" x2="720" y2="440" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.3s" repeatCount="indefinite"/></line>
              <line x1="720" y1="440" x2="940" y2="260" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.6s" repeatCount="indefinite"/></line>
              <line x1="400" y1="460" x2="680" y2="240" strokeDasharray="4,4" opacity=".6"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3.2s" repeatCount="indefinite"/></line>
              <line x1="1080" y1="260" x2="1160" y2="500" strokeDasharray="4,4" opacity=".5"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.7s" repeatCount="indefinite"/></line>
              <line x1="200" y1="260" x2="940" y2="260" strokeDasharray="4,4" opacity=".3"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3.5s" repeatCount="indefinite"/></line>
            </g>

            <g stroke="#d94248" strokeWidth="1.2" fill="none" opacity=".55">
              <path d="M 200 260 Q 400 100 680 240"><animate attributeName="stroke-dasharray" values="0 600;600 0" dur="3s" repeatCount="indefinite"/></path>
              <path d="M 400 460 Q 600 280 940 260" opacity=".5"><animate attributeName="stroke-dasharray" values="0 700;700 0" dur="3.5s" repeatCount="indefinite"/></path>
              <path d="M 680 240 Q 850 80 1080 260"><animate attributeName="stroke-dasharray" values="0 500;500 0" dur="2.8s" repeatCount="indefinite"/></path>
            </g>

            <g>
              <circle cx="200" cy="260" r="20" fill="url(#nodeGlow)"/>
              <circle cx="200" cy="260" r="4" fill="#d94248"/>
              <text x="220" y="252" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">LOS ANGELES</text>
              <text x="220" y="266" fill="#8a8a8e" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">142 GYMS</text>

              <circle cx="400" cy="460" r="24" fill="url(#nodeGlow)"/>
              <circle cx="400" cy="460" r="5" fill="#d94248"/>
              <text x="420" y="452" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">RIO · HQ</text>
              <text x="420" y="466" fill="#8a8a8e" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">428 GYMS</text>

              <circle cx="680" cy="240" r="18" fill="url(#nodeGlowGold)"/>
              <circle cx="680" cy="240" r="4" fill="#c9a96a"/>
              <text x="700" y="232" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">LISBON</text>
              <text x="700" y="246" fill="#8a8a8e" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">86 GYMS</text>

              <circle cx="940" cy="260" r="22" fill="url(#nodeGlow)"/>
              <circle cx="940" cy="260" r="5" fill="#d94248"/>
              <text x="960" y="252" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">DUBAI</text>
              <text x="960" y="266" fill="#8a8a8e" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">124 GYMS</text>

              <circle cx="1160" cy="280" r="20" fill="url(#nodeGlow)"/>
              <circle cx="1160" cy="280" r="4" fill="#d94248"/>
              <text x="1180" y="272" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">TOKYO</text>
              <text x="1180" y="286" fill="#8a8a8e" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">94 GYMS</text>

              <circle cx="1080" cy="420" r="16" fill="url(#nodeGlowGold)"/>
              <circle cx="1080" cy="420" r="3" fill="#c9a96a"/>
              <text x="1100" y="416" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">BANGKOK</text>

              <circle cx="1180" cy="540" r="14" fill="url(#nodeGlow)"/>
              <circle cx="1180" cy="540" r="3" fill="#d94248"/>
              <text x="1200" y="544" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">SYDNEY</text>

              <circle cx="320" cy="260" r="16" fill="url(#nodeGlow)"/>
              <circle cx="320" cy="260" r="3" fill="#d94248"/>
              <text x="338" y="256" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">NEW YORK</text>

              <circle cx="620" cy="220" r="14" fill="url(#nodeGlowGold)"/>
              <circle cx="620" cy="220" r="3" fill="#c9a96a"/>
              <text x="568" y="206" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2">LONDON</text>
            </g>

            <g fill="#5a5a5e">
              <circle cx="180" cy="220" r="2"/>
              <circle cx="240" cy="300" r="2"/>
              <circle cx="280" cy="240" r="2"/>
              <circle cx="350" cy="420" r="2"/>
              <circle cx="380" cy="500" r="2"/>
              <circle cx="430" cy="480" r="2"/>
              <circle cx="640" cy="260" r="2"/>
              <circle cx="700" cy="200" r="2"/>
              <circle cx="720" cy="440" r="2"><animate attributeName="fill" values="#5a5a5e;#d94248;#5a5a5e" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="780" cy="500" r="2"/>
              <circle cx="900" cy="240" r="2"/>
              <circle cx="960" cy="320" r="2"/>
              <circle cx="1020" cy="280" r="2"/>
              <circle cx="1120" cy="320" r="2"/>
              <circle cx="1140" cy="380" r="2"/>
              <circle cx="1200" cy="460" r="2"/>
            </g>

            <g fill="#3a3a3e" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">
              <text x="40" y="40">N 89°</text>
              <text x="40" y="340">EQ 0°</text>
              <text x="40" y="640">S 89°</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
