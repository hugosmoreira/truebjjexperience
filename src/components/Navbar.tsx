import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">TRUE<span className="dot">.</span>BJJ</div>
      <ul className="nav-links">
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#academies">Academies</a></li>
        <li><a href="#passport">Passport</a></li>
        <li><a href="#culture">Culture</a></li>
        <li><a href="#network">Network</a></li>
      </ul>
      <button className="nav-cta">Join The Network</button>
    </nav>
  );
}
