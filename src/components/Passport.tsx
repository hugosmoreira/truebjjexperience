import { useEffect, useRef } from 'react';

export default function Passport() {
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
    <section ref={sectionRef} className="passport-section" id="passport">
      <div className="container">
        <div className="passport-grid">
          
          {/* Passport visual */}
          <div className="passport-card">
            <div className="pass-head">
              <div className="pass-brand">TRUE<span className="dot">.</span>BJJ</div>
              <div className="pass-id">
                ID · TBE-0x7421A<br/>
                VERIFIED ATHLETE
              </div>
            </div>

            <div className="pass-photo relative w-[110px] h-[130px] border border-[#2a2a2e] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=220&h=260&q=80" 
                alt="Lucas R. Andrade Passport Portrait" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 contrast-115 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pass-name">Lucas R. Andrade</div>
            <div className="pass-belt">
              <div className="belt-bar">
                <span className="active"></span><span className="active"></span><span className="active"></span><span></span>
              </div>
              Purple Belt · 2nd Stripe
            </div>

            <div className="pass-stats">
              <div className="pass-stat"><div className="v">12</div><div className="l">Countries</div></div>
              <div className="pass-stat"><div className="v">48</div><div className="l">Academies</div></div>
              <div className="pass-stat"><div className="v">324</div><div className="l">Sessions</div></div>
            </div>

            <div className="pass-stamps">
              {['BRA', 'JPN', 'PRT', 'USA', 'UAE', 'THA'].map(stamp => (
                <div key={stamp} className="stamp unlocked">{stamp}</div>
              ))}
              <div className="stamp">MEX</div>
              <div className="stamp">DEU</div>
            </div>
          </div>

          {/* Info */}
          <div className="passport-info">
            <div className="eyebrow">Chapter 02 — Digital Passport</div>
            <h2 className="display">Your journey, <em>verified.</em></h2>
            <p className="lede">A living document of every mat you've touched, every belt you've earned, every border you've crossed. Cryptographically verified by your academy. Carried everywhere you train.</p>

            <div className="pass-features">
              <div className="pf">
                <div className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h4>Academy Stamps</h4>
                <p>Verified check-ins from every academy you train at, worldwide.</p>
              </div>
              <div className="pf">
                <div className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M9 14l-1 7 4-2 4 2-1-7"/></svg>
                </div>
                <h4>Belt Progression</h4>
                <p>Promotions recorded directly by your professor on-chain.</p>
              </div>
              <div className="pf">
                <div className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h4>Travel Timeline</h4>
                <p>Your global movement, mapped and chronicled in real time.</p>
              </div>
              <div className="pf">
                <div className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7L9 18l-5-5"/></svg>
                </div>
                <h4>Seminar Badges</h4>
                <p>Collect achievements from elite seminars and exchange programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
