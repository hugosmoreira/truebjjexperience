import { useEffect, useRef } from 'react';

export default function FinalCTA() {
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
    <section ref={sectionRef} className="final-cta">
      <div className="final-content">
        <div className="final-eyebrow">The Network is Open</div>
        <h2>Your next<br/>academy is <em>waiting.</em></h2>
        <p className="sub">Join 142,000 athletes and 2,400 academies across 87 countries building the largest premium jiu-jitsu network in the world.</p>
        <div className="final-actions">
          <button className="btn-primary">Join as Student <span className="arr">→</span></button>
          <button className="btn-ghost">Join as Academy →</button>
        </div>
      </div>
    </section>
  );
}
