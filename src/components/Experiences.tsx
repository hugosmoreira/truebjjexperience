import { useEffect, useRef } from 'react';
import { experiences } from '../data/experiences';

export default function Experiences() {
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
    <section ref={sectionRef} className="destinations" id="experiences">
      <div className="dest-head">
        <div>
          <div className="eyebrow">Chapter 01 — Experience Destinations</div>
          <h2 className="display">Five cities. <em>One mat.</em></h2>
        </div>
        <div>
          <p className="lede">Curated training residencies in the most storied jiu-jitsu cities on earth. Live with academies. Roll with locals. Wake up where the art was born.</p>
          <div className="dest-meta" style={{ marginTop: '32px' }}>
            <div>← Drag horizontally</div>
            <div>05 destinations</div>
          </div>
        </div>
      </div>

      <div className="dest-scroll">
        {experiences.map((exp) => (
           <article key={exp.id} className="dest-card">
            <div className={`img img-${exp.id} relative w-full h-full overflow-hidden`}>
              {/* Cinematic Unsplash Image for the destination */}
              {exp.id === 'rio' && (
                <img 
                  src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80" 
                  alt="Rio de Janeiro" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
              {exp.id === 'tokyo' && (
                <img 
                  src="https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80" 
                  alt="Tokyo" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
              {exp.id === 'lisbon' && (
                <img 
                  src="https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80" 
                  alt="Lisbon" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
              {exp.id === 'dubai' && (
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" 
                  alt="Dubai" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
              {exp.id === 'thailand' && (
                <img 
                  src="https://images.unsplash.com/photo-1537929267183-c414501e21d4?auto=format&fit=crop&w=800&q=80" 
                  alt="Phuket Thailand" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* React version of SVGs overlayed since we want to keep the beautiful abstract guidelines */}
              {exp.id === 'rio' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 600" preserveAspectRatio="xMidYMid slice">
                  <path d="M 0 420 Q 80 280 160 340 Q 220 240 320 320 Q 380 280 460 360 L 460 600 L 0 600 Z" fill="#1a0e10" opacity=".4"/>
                  <path d="M 0 460 Q 100 380 200 420 Q 280 360 380 400 Q 420 380 460 410 L 460 600 L 0 600 Z" fill="#0d0708" opacity=".5"/>
                  <circle cx="340" cy="180" r="50" fill="#f0d4a8" opacity=".3"/>
                </svg>
              )}
              {exp.id === 'tokyo' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 600" preserveAspectRatio="xMidYMid slice">
                  <g fill="#0a0a0b" opacity=".5">
                    <rect x="0" y="320" width="40" height="280"/>
                    <rect x="40" y="260" width="60" height="340"/>
                    <rect x="100" y="380" width="30" height="220"/>
                    <rect x="130" y="200" width="50" height="400"/>
                  </g>
                  <rect x="158" y="220" width="4" height="80" fill="#d94248" opacity=".6"/>
                </svg>
              )}
              {exp.id === 'lisbon' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 600" preserveAspectRatio="xMidYMid slice">
                  <circle cx="100" cy="180" r="70" fill="#f5e1bf" opacity=".2"/>
                  <line x1="0" y1="280" x2="460" y2="290" stroke="#1a1a1d" strokeWidth="2" opacity=".2"/>
                </svg>
              )}
              {exp.id === 'dubai' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 600" preserveAspectRatio="xMidYMid slice">
                  <path d="M 0 520 Q 120 460 260 500 Q 380 480 460 510 L 460 600 L 0 600 Z" fill="#3a2a18" opacity=".3"/>
                  <circle cx="380" cy="220" r="45" fill="#dbb068" opacity=".3"/>
                </svg>
              )}
              {exp.id === 'thailand' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 600" preserveAspectRatio="xMidYMid slice">
                  <circle cx="180" cy="180" r="55" fill="#e8d5a3" opacity=".2"/>
                </svg>
              )}
            </div>
            <div className="overlay"></div>
            <div className="top-tag"><span className="pip"></span>{exp.tag}</div>
            <div className="content">
              <div className="num">{exp.countryCode}</div>
              <h3 dangerouslySetInnerHTML={{ __html: exp.titleHtml }} />
              <div className="country">{exp.locations}</div>
              <div className="meta-row">
                <span>{exp.duration} · <strong>{exp.price}</strong></span>
                <span>Next: <strong>{exp.nextDate}</strong></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
