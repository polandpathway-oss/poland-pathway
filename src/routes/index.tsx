import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/poland-pathway-logo.png.asset.json";

const WHATSAPP = "https://wa.me/46764444634";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poland Pathway — Your Gateway to Studying in Poland" },
      {
        name: "description",
        content:
          "Poland Pathway is a premium study-abroad consultancy helping students secure admissions, visas and a new life in Poland.",
      },
      { property: "og:title", content: "Poland Pathway — Your Gateway to Studying in Poland" },
      {
        property: "og:description",
        content:
          "Admissions, student visas and settlement in Poland — handled end-to-end with a 98% visa success rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div className="num" ref={ref}>
      {value.toLocaleString()}
      <em>{suffix}</em>
    </div>
  );
}

const services = [
  {
    title: "University & Course Selection",
    text: "Personalized shortlists from 40+ ranked Polish universities matched to your grades, budget and career goals.",
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
  },
  {
    title: "Admission & Documentation",
    text: "SOP guidance, document attestation, translation and complete application filing — error-free and on time.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Visa Filing & Interview Prep",
    text: "National visa (Type D) preparation, financial proof strategy and mock interviews with visa officers' insights.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
  },
  {
    title: "Scholarships & Funding",
    text: "Access to Poland's NAWA programs, university merit scholarships and education loan assistance.",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: "Accommodation & Arrival",
    text: "Guaranteed dormitory or private housing options, airport pickup and a city-orientation on day one.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
  },
  {
    title: "Residence Permit & Beyond",
    text: "TRC (temporary residence card) filing, part-time work guidance and post-study career pathways in the EU.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
];

const universities = [
  { name: "University of Warsaw", rank: "QS World Top 300", city: "Warsaw" },
  { name: "AGH University of Science & Tech", rank: "Engineering Leader", city: "Kraków" },
  { name: "Warsaw University of Technology", rank: "QS World Top 500", city: "Warsaw" },
  { name: "Jagiellonian University", rank: "Founded 1364 · Oldest in PL", city: "Kraków" },
];

const whyItems = [
  { title: "Affordable Tuition & Living", text: "Tuition from €1,500/year and living costs 40–60% lower than Western Europe." },
  { title: "Globally Recognized Degrees", text: "Bologna-process degrees respected across the EU, UK and worldwide." },
  { title: "Work While You Study", text: "International students can work part-time with no separate work permit." },
  { title: "Vibrant Student Life", text: "Safe, welcoming cities with 57,000+ international students already thriving." },
];

const steps = [
  { title: "Free Consultation", text: "Profile evaluation, budget planning and a personalized university shortlist." },
  { title: "Apply & Get Admitted", text: "We prepare and file your applications — admission letters typically arrive in 2–4 weeks." },
  { title: "Visa Filing & Prep", text: "Complete documentation, financial proofs and one-on-one interview coaching." },
  { title: "Fly & Settle In", text: "Accommodation arranged, airport pickup and residence permit support on arrival." },
];

const testimonials = [
  {
    quote:
      "My visa was rejected once before I found Poland Pathway. They rebuilt my file from scratch — approved in 19 days. I'm now in my second semester at AGH Kraków.",
    initials: "AK",
    name: "Ahmed Khan",
    detail: "MSc Data Science · AGH Kraków",
    avatar: { background: "var(--crimson)" },
  },
  {
    quote:
      "From shortlisting universities to finding my dorm room in Warsaw, everything was handled. My parents especially appreciated the weekly progress updates.",
    initials: "FS",
    name: "Fatima Sheikh",
    detail: "BBA · University of Warsaw",
    avatar: { background: "#3b82c4" },
  },
  {
    quote:
      "The mock interview sessions made the real visa interview feel easy. I even got a 50% merit scholarship I didn't know I was eligible for.",
    initials: "UM",
    name: "Usman Malik",
    detail: "BSc Engineering · WUT Warsaw",
    avatar: { background: "var(--sky)", color: "var(--navy)" },
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal
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
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header id="header" className={scrolled ? "scrolled" : undefined}>
        <div className="container nav">
          <a href="#" className="logo">
            <img src={logo.url} alt="Poland Pathway — Consultation Agency" className="logo-img" />
          </a>
          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#why" onClick={closeMenu}>Why Poland</a></li>
            <li><a href="#process" onClick={closeMenu}>Process</a></li>
            <li><a href="#stories" onClick={closeMenu}>Success Stories</a></li>
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

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Study in Poland · Visa Experts</span>
            <h1>
              Your Gateway to a <span className="hl">European Degree</span> Starts Here
            </h1>
            <p className="lead">
              From university selection to visa approval and landing in Warsaw — Poland Pathway handles every step
              of your study-abroad journey with a 98% success rate.
            </p>
            <div className="hero-actions">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
                Start Your Application
                <ArrowIcon />
              </a>
              <a href="#process" className="btn btn-outline">How It Works</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><div><div className="num">2,400+</div><div className="lbl">Visas Approved</div></div></div>
              <div className="trust-item"><div><div className="num">40+</div><div className="lbl">Partner Universities</div></div></div>
              <div className="trust-item"><div><div className="num">12 yrs</div><div className="lbl">Consultancy Experience</div></div></div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="float-chip chip-1">
              <div className="dot" style={{ background: "var(--sky)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2.4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14l-3-3" />
                </svg>
              </div>
              Visa Approved
            </div>
            <div className="visa-card">
              <div className="vc-top">
                <div>
                  <div className="vc-name">National Study Visa</div>
                  <div style={{ fontSize: ".8rem", color: "#b9c6d8" }}>Republic of Poland · Type D</div>
                </div>
                <span className="vc-badge">Priority</span>
              </div>
              <div className="vc-rows">
                <div className="vc-row"><span>Application status</span><span className="vc-status">● Approved</span></div>
                <div className="vc-row"><span>University</span><b>University of Warsaw</b></div>
                <div className="vc-row"><span>Program</span><b>MSc Computer Science</b></div>
                <div className="vc-row"><span>Processing time</span><b>21 days</b></div>
              </div>
            </div>
            <div className="float-chip chip-2">
              <div className="dot" style={{ background: "#ffe3e7" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7263D" strokeWidth="2.4">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              Admission Letter Received
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat reveal"><Counter target={2400} suffix="+" /><div className="lbl">Student Visas Approved</div></div>
          <div className="stat reveal"><Counter target={98} suffix="%" /><div className="lbl">Visa Success Rate</div></div>
          <div className="stat reveal"><Counter target={40} suffix="+" /><div className="lbl">Partner Universities</div></div>
          <div className="stat reveal"><Counter target={15} suffix="+" /><div className="lbl">Cities Across Poland</div></div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2>End-to-End Support for Your Polish Adventure</h2>
            <p>Every detail handled by dedicated consultants — so you can focus on packing, not paperwork.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card reveal" key={s.title}>
                <div className="service-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY POLAND ================= */}
      <section className="section why" id="why">
        <div className="container why-grid">
          <div className="why-visual reveal">
            <h3>Top Destinations Our Students Choose</h3>
            <p>Poland's universities rank among Europe's best — at a fraction of the cost.</p>
            {universities.map((u) => (
              <div className="uni-row" key={u.name}>
                <div>
                  <div className="name">{u.name}</div>
                  <div className="rank">{u.rank}</div>
                </div>
                <span className="tag">{u.city}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="section-head reveal" style={{ marginBottom: 36 }}>
              <span className="eyebrow">Why Poland</span>
              <h2>Europe-Quality Education, Without the Europe-Level Debt</h2>
            </div>
            <div className="why-list">
              {whyItems.map((w) => (
                <div className="why-item reveal" key={w.title}>
                  <div className="why-check"><CheckIcon /></div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>How It Works</span>
            <h2>Four Steps to Your Polish Student Visa</h2>
            <p>A clear, guided roadmap — most students receive their visa within 4–8 weeks.</p>
          </div>
          <div className="process-steps">
            {steps.map((s, i) => (
              <div className="step reveal" key={s.title}>
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section testi" id="stories">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Success Stories</span>
            <h2>2,400+ Students Are Already There</h2>
            <p>Real journeys, real approvals — hear it from our students and their families.</p>
          </div>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi-card reveal" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>"{t.quote}"</p>
                <div className="testi-person">
                  <div className="avatar" style={t.avatar}>{t.initials}</div>
                  <div>
                    <div className="n">{t.name}</div>
                    <div className="d">{t.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-box reveal">
            <h2>Ready to Begin Your Poland Pathway?</h2>
            <p>
              Book a free 30-minute consultation with a senior counsellor. No fees, no obligation — just a clear plan
              for your future.
            </p>
            <div className="cta-actions">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
                Book Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.300c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.1 1.1z" />
                </svg>
              </a>
              <a href="tel:+48000000000" className="btn btn-white">+48 000 000 000</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <a href="#">
                <img src={logo.url} alt="Poland Pathway — Consultation Agency" className="logo-img" />
              </a>
              <p>
                Trusted study-abroad consultancy specializing in Polish higher education — admissions, visas and
                settlement, done right.
              </p>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.52V23H.24zM8.34 8.5h4.33v2h.06c.6-1.14 2.070-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23H8.34z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.4.1-1.5.1-2.4 1-.7.7-.9 2.300-.9 2.300S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.300c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.6 0 7.7-.3c.4-.1 1.5-.1 2.4-1 .7-.7.9-2.300.9-2.300s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.7-.2-3.7zM9.8 15.3V8.7l6 3.3-6 3.3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">University Selection</a></li>
                <li><a href="#services">Admissions</a></li>
                <li><a href="#services">Visa Filing</a></li>
                <li><a href="#services">Scholarships</a></li>
                <li><a href="#services">Residence Permit</a></li>
              </ul>
            </div>
            <div>
              <h4>Popular Cities</h4>
              <ul>
                <li><a href="#why">Warsaw</a></li>
                <li><a href="#why">Kraków</a></li>
                <li><a href="#why">Wrocław</a></li>
                <li><a href="#why">Poznań</a></li>
                <li><a href="#why">Gdańsk</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>hello@polandpathway.com</li>
                <li>+48 000 000 000</li>
                <li>Mon–Sat · 9:00–18:00</li>
                <li>Warsaw · Kraków · Remote</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Poland Pathway. All rights reserved.</span>
            <span>
              Made with <em>♥</em> for students going global
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
