import { useEffect, useRef } from 'react';

export default function Stories() {
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
    <section ref={sectionRef} className="stories">
      <div className="container">
        <div className="stories-head">
          <div>
            <div className="eyebrow">Chapter 06 — Community Stories</div>
            <h2 className="display">Voices from <em>the mat.</em></h2>
          </div>
          <p className="lede">Athletes who crossed continents. Academies that opened their doors. Journeys that became identities.</p>
        </div>

        <div className="stories-grid">
          <article className="story">
            <div className="story-img a relative w-full overflow-hidden aspect-[4/5]">
              <div className="story-num absolute top-4 left-4 z-10 fs-xs bg-black/60 px-2 py-1 text-xs text-[#f4f1ec] font-mono tracking-wider">VOL. 01</div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                alt="Marina Costa" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="story-meta">
              <span>04 MIN READ</span>
              <span className="dot-sep"></span>
              <span>RIO → KYOTO</span>
            </div>
            <h3>The year I trained on three continents.</h3>
            <p>A purple belt's six-month odyssey across academies in Brazil, Japan, and Portugal — and the lessons that mat-time abroad teaches that no curriculum can.</p>
            <div className="story-by">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                className="ava w-8 h-8 rounded-full object-cover border border-[#2a2a2e]" 
                alt="Marina Costa" 
                referrerPolicy="no-referrer" 
              />
              <div>
                <div className="who">Marina Costa</div>
                <div className="role">PURPLE · SÃO PAULO</div>
              </div>
            </div>
          </article>

          <article className="story">
            <div className="story-img b relative w-full overflow-hidden aspect-[4/5]">
              <div className="story-num absolute top-4 left-4 z-10 fs-xs bg-black/60 px-2 py-1 text-xs text-[#f4f1ec] font-mono tracking-wider">VOL. 02</div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                alt="Khalid Al-Rashid" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="story-meta">
              <span>06 MIN READ</span>
              <span className="dot-sep"></span>
              <span>DUBAI</span>
            </div>
            <h3>Opening our doors to the world.</h3>
            <p>How a single academy in Dubai's Marina district became a sanctuary for traveling athletes from forty countries — and what we learned hosting them.</p>
            <div className="story-by">
              <img 
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=150&q=80" 
                className="ava w-8 h-8 rounded-full object-cover border border-[#2a2a2e]" 
                alt="Khalid Al-Rashid" 
                referrerPolicy="no-referrer" 
              />
              <div>
                <div className="who">Khalid Al-Rashid</div>
                <div className="role">BLACK · DUBAI</div>
              </div>
            </div>
          </article>

          <article className="story">
            <div className="story-img c relative w-full overflow-hidden aspect-[4/5]">
              <div className="story-num absolute top-4 left-4 z-10 fs-xs bg-black/60 px-2 py-1 text-xs text-[#f4f1ec] font-mono tracking-wider">VOL. 03</div>
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" 
                alt="Diego Fernández" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="story-meta">
              <span>05 MIN READ</span>
              <span className="dot-sep"></span>
              <span>TOKYO</span>
            </div>
            <h3>Roll first. Speak later.</h3>
            <p>I arrived in Shibuya knowing zero Japanese. I left with thirty-eight new friends. A reflection on jiu-jitsu as a universal language, written from a 6am train back to Narita.</p>
            <div className="story-by">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
                className="ava w-8 h-8 rounded-full object-cover border border-[#2a2a2e]" 
                alt="Diego Fernández" 
                referrerPolicy="no-referrer" 
              />
              <div>
                <div className="who">Diego Fernández</div>
                <div className="role">BROWN · MADRID</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
