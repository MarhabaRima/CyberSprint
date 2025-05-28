import '../../styles/Navbar-Footer/Footer.css';

export default function Footer() {
  return (
<footer className="footer">
  <div className="footer-container">
    <p className="footer-text">© {new Date().getFullYear()} CyberSprint</p>
    <div className="footer-links">
      <a href="/privacy" className="footer-link">Privacy</a>
      <a href="/terms" className="footer-link">Terms</a>
    </div>
  </div>
</footer>
  );
}