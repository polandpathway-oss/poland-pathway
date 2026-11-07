import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoSrc from "@/assets/poland-pathway-logo.png";
import { services } from "@/lib/services";

export const WHATSAPP = "https://wa.me/46764444634";

export const SOCIALS = {
  facebook: "https://www.facebook.com/p/Poland-Pathway-61595798983913/",
  instagram: "https://www.instagram.com/polandpathway/",
  linkedin: "https://www.linkedin.com/company/poland-pathway",
  youtube: "https://www.youtube.com/@PolandPathway",
};

export const PHONE = "+46 76 444 46 34";
export const PHONE_TEL = "tel:+46764444634";

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/** Adds the "visible" class to every `.reveal` element as it scrolls into view. */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={scrolled ? "scrolled" : undefined}>
      <div className="container nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logoSrc} alt="Poland Pathway Consultation Agency" className="logo-img" />
        </Link>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/" hash="why" onClick={closeMenu}>Why Poland</Link></li>
          <li><Link to="/" hash="process" onClick={closeMenu}>Process</Link></li>
          <li><Link to="/" hash="stories" onClick={closeMenu}>Success Stories</Link></li>
          <li>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson nav-cta">
              Free Consultation
            </a>
          </li>
        </ul>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export function CtaSection({
  title = "Ready to Begin Your Poland Pathway?",
  text = "Book a free 30-minute consultation with a senior counsellor. No fees, no obligation, just a clear plan for your future.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box reveal">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
              Book Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.1 1.1z" />
              </svg>
            </a>
            <a href={PHONE_TEL} className="btn btn-white">{PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/">
              <img src={logoSrc} alt="Poland Pathway Consultation Agency" className="logo-img" />
            </Link>
            <p>
              Helping non-EU residents of Europe move to Poland: university admission, study visas and settlement,
              done right.
            </p>
            <div className="socials">
              <a href={SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
                </svg>
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.52V23H.24zM8.34 8.5h4.33v2h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23H8.34z" />
                </svg>
              </a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.4.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.6 0 7.7-.3c.4-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.7-.2-3.7zM9.8 15.3V8.7l6 3.3-6 3.3z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Popular Cities</h4>
            <ul>
              <li><Link to="/" hash="why">Warsaw</Link></li>
              <li><Link to="/" hash="why">Kraków</Link></li>
              <li><Link to="/" hash="why">Wrocław</Link></li>
              <li><Link to="/" hash="why">Poznań</Link></li>
              <li><Link to="/" hash="why">Gdańsk</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>hello@polandpathway.com</li>
              <li>{PHONE}</li>
              <li>Mon to Sat · 9:00 to 18:00</li>
              <li>Warsaw · Kraków · Remote</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Poland Pathway. All rights reserved.</span>
          <span>
            Made with <em>♥</em> for people moving to Poland
          </span>
        </div>
      </div>
    </footer>
  );
}
