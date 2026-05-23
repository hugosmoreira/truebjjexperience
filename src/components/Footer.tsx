export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <h3>TRUE<span className="dot">.</span>BJJ</h3>
          <p>A global movement for the curious, the disciplined, and the road-bound.</p>
        </div>
        <div className="foot-col">
          <h5>Experiences</h5>
          <ul>
            <li><a href="#">Rio de Janeiro</a></li>
            <li><a href="#">Tokyo</a></li>
            <li><a href="#">Lisbon</a></li>
            <li><a href="#">Dubai</a></li>
            <li><a href="#">Thailand</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Network</h5>
          <ul>
            <li><a href="#">Find an Academy</a></li>
            <li><a href="#">Become a Partner</a></li>
            <li><a href="#">Exchange Program</a></li>
            <li><a href="#">Open Mats</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Passport</h5>
          <ul>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Verification</a></li>
            <li><a href="#">Belt Records</a></li>
            <li><a href="#">Achievements</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 TRUE.BJJ EXPERIENCE — RIO · LISBON · TOKYO</div>
        <div className="langs">
          <a href="#" className="active">EN</a>
          <a href="#">PT</a>
          <a href="#">JP</a>
          <a href="#">AR</a>
          <a href="#">ES</a>
        </div>
      </div>
    </footer>
  );
}
