import "./Header.css";

const navLinks = ["Home", "Services & Gallery", "Contact Us"];

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo" aria-label="PMD Logo">
          PMD
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <p href="#" key={link} className="nav-link">
              {link}
            </p>
          ))}
        </div>

        {/* Desktop CTA */}
        <p href="#" className="cta-button">
          Get a Free Quote
        </p>

        {/* Mobile Hamburger - visual only */}
        <div className="hamburger" aria-label="Mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}