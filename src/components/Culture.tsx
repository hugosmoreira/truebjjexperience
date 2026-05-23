import { useEffect, useRef } from 'react';

export default function Culture() {
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
    <section ref={sectionRef} className="culture" id="culture">
      <div className="container">
        <div className="culture-grid">
          
          <div className="culture-img-stack">
            <div className="culture-img a relative w-[62%] aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80" 
                alt="Cinematic Brazilian Jiu-Jitsu sparring - dynamic sweeping throw on dojo mat" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="cap absolute z-10">FRAME 01 · TRAINING</div>
            </div>
            <div className="culture-img b relative w-[55%] aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80" 
                alt="Diverse BJJ team connection - athletes sitting and talking on concrete outdoor steps" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-85 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="cap absolute z-10">FRAME 02 · CONNECTION</div>
            </div>
            <div className="culture-img c relative w-[48%] aspect-[1/1] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80" 
                alt="BJJ athlete resting on dojo mat" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="cap absolute z-10">FRAME 03 · THE GRIP</div>
            </div>
          </div>

          <div className="culture-text">
            <div className="eyebrow">Chapter 03 — Culture</div>
            <h2 className="display">Discipline.<br/>Brotherhood.<br/><em>Movement.</em></h2>
            <p className="lede">Jiu-jitsu is not the destination. It's the language we use to find each other across continents, across cultures, across the unspoken understanding that we are the same on the mat.</p>

            <div className="culture-quote">
              <p className="q">"You travel for the country. You stay for the people. You return for the rolls."</p>
              <div className="att">
                <div className="dash"></div>
                André M. — Black Belt, São Paulo → Tokyo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
