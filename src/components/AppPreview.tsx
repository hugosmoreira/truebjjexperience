import { useEffect, useRef } from 'react';

export default function AppPreview() {
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
    <section ref={sectionRef} className="app-section">
      <div className="container">
        <div className="app-head">
          <div className="eyebrow">Chapter 04 — The Platform</div>
          <h2 className="display" style={{ textAlign: 'center' }}>One app. <em>Every academy.</em></h2>
          <p className="lede" style={{ textAlign: 'center', margin: '0 auto' }}>From finding your next academy in Kyoto to scheduling an open-mat in Lisbon. The entire ecosystem in your pocket.</p>
        </div>

        <div className="app-stage">
          {/* PROFILE APP */}
          <div className="phone side">
            <div className="phone-screen profile-screen">
              <div className="ph-status"><span>9:41</span><span>5G</span></div>
              <div className="prof-hero relative">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
                  className="prof-avatar w-16 h-16 rounded-full object-cover border-2 border-black relative z-10 grayscale brightness-95 contrast-115 hover:scale-105 transition-transform duration-500" 
                  alt="Lucas Andrade Avatar" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="prof-name">Lucas Andrade</div>
              <div className="prof-handle">@lucas.rolls · PURPLE · 2 STRIPES</div>
              <div className="prof-stats">
                <div className="prof-stat"><div className="v">12</div><div className="l">PASSPORTS</div></div>
                <div className="prof-stat"><div className="v">48</div><div className="l">GYMS</div></div>
                <div className="prof-stat"><div className="v">324</div><div className="l">ROLLS</div></div>
              </div>
              <div className="prof-list">
                <div className="prof-item"><div className="icon">★</div><div className="txt">Gracie Barra HQ</div><div className="meta">RIO</div></div>
                <div className="prof-item"><div className="icon">↗</div><div className="txt">Tri-Force Tokyo</div><div className="meta">JPN</div></div>
                <div className="prof-item"><div className="icon">●</div><div className="txt">CheckMat Lisbon</div><div className="meta">PRT</div></div>
                <div className="prof-item"><div className="icon">◆</div><div className="txt">Open-mat: Marina</div><div className="meta">DXB</div></div>
              </div>
            </div>
          </div>

          {/* MAP APP */}
          <div className="phone">
            <div className="phone-screen">
              <div className="ph-status"><span>9:41</span><span>5G</span></div>
              <div className="map-bg">
                <svg viewBox="0 0 200 360" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: '.15' }}>
                  <path d="M 20 80 Q 60 60 100 80 Q 140 100 180 80 L 180 140 Q 140 160 100 140 Q 60 130 20 150 Z" fill="#5a5a5e"/>
                  <path d="M 30 200 Q 70 180 110 200 Q 150 220 180 200 L 180 260 Q 140 280 100 260 Q 60 250 30 270 Z" fill="#5a5a5e"/>
                </svg>

                <div className="map-dot" style={{ top: '28%', left: '22%' }}></div>
                <div className="map-dot" style={{ top: '35%', left: '48%', background: '#5cc77e', boxShadow: '0 0 12px #5cc77e' }}></div>
                <div className="map-dot" style={{ top: '48%', left: '72%' }}></div>
                <div className="map-dot" style={{ top: '62%', left: '30%', background: '#c9a96a', boxShadow: '0 0 12px #c9a96a' }}></div>
                <div className="map-dot" style={{ top: '18%', left: '62%' }}></div>

                <svg viewBox="0 0 100 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: '.4' }}>
                  <path d="M 22 56 Q 35 50 48 70" stroke="#d94248" strokeWidth=".4" fill="none" strokeDasharray="2,2"/>
                  <path d="M 48 70 Q 60 90 72 96" stroke="#d94248" strokeWidth=".4" fill="none" strokeDasharray="2,2"/>
                  <path d="M 30 124 Q 50 110 72 96" stroke="#d94248" strokeWidth=".4" fill="none" strokeDasharray="2,2"/>
                </svg>

                <div className="map-pill" style={{ top: '14%', left: '30%' }}>3 OPEN MATS</div>
                <div className="map-pill" style={{ top: '42%', right: '8%' }}>LIVE</div>

                <div className="map-bottom-card">
                  <div className="gym-name">Gracie Barra HQ</div>
                  <div className="gym-loc">RIO DE JANEIRO · BRAZIL</div>
                  <div className="gym-row">
                    <span>OPEN MAT</span>
                    <strong>TONIGHT · 19:00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRAVEL APP */}
          <div className="phone right">
            <div className="phone-screen travel-screen">
              <div className="ph-status"><span>9:41</span><span>5G</span></div>
              <div className="tv-head">
                <div className="tv-title">Your trips</div>
                <div className="tv-sub">3 UPCOMING · 9 COMPLETED</div>
              </div>
              <div className="tv-card">
                <div className="row1">
                  <div>
                    <div className="city">Tokyo</div>
                    <div className="code">GRU → NRT · JUL 03</div>
                  </div>
                  <div className="badge">Confirmed</div>
                </div>
                <div className="row2">
                  <span>10 DAYS</span><strong>Tri-Force</strong>
                </div>
              </div>
              <div className="tv-card">
                <div className="row1">
                  <div>
                    <div className="city">Lisbon</div>
                    <div className="code">NRT → LIS · SEP 08</div>
                  </div>
                  <div className="badge">Pending</div>
                </div>
                <div className="row2">
                  <span>12 DAYS</span><strong>CheckMat</strong>
                </div>
              </div>
              <div className="tv-progress">
                <div className="lbl">Annual goal · 68%</div>
                <div className="tv-bar"><i></i></div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-features">
          <div className="app-feature">
            <div className="num">01</div>
            <h4>Global Academy Map</h4>
            <p>2,400+ verified academies across 87 countries, with live open-mat schedules.</p>
          </div>
          <div className="app-feature">
            <div className="num">02</div>
            <h4>Exchange Programs</h4>
            <p>Apply for cultural residencies hosted by partner academies worldwide.</p>
          </div>
          <div className="app-feature">
            <div className="num">03</div>
            <h4>Verified Profiles</h4>
            <p>Belt, lineage, and academy history confirmed by your professor.</p>
          </div>
          <div className="app-feature">
            <div className="num">04</div>
            <h4>Travel Dashboard</h4>
            <p>Flights, training schedules, and accommodations in one elegant feed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
