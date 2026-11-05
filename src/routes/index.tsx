import { createFileRoute } from "@tanstack/react-router";
import heroSlide from "@/assets/slide-1-poland.png.asset.json";
import { useEffect, useRef, useState } from "react";
import {
  ArrowIcon,
  CheckIcon,
  CtaSection,
  SiteFooter,
  SiteHeader,
  WHATSAPP,
  useReveal,
} from "@/components/site/site-parts";

const HOME_TITLE = "Poland Work Permit Guidance for Non-EU Nationals in Europe";
const HOME_DESCRIPTION =
  "Non-EU national in Europe? Get expert guidance on Poland work permits, work visas and relocation. We coach you to prepare and file your own application.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Counter({ target, suffix, pad }: { target: number; suffix: string; pad?: number }) {
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
      {pad ? String(value).padStart(pad, "0") : value.toLocaleString()}
      <em>{suffix}</em>
    </div>
  );
}

const universities = [
  { name: "University of Warsaw", rank: "QS World Top 300", city: "Warsaw" },
  { name: "AGH University of Science & Tech", rank: "Engineering Leader", city: "Kraków" },
  { name: "Warsaw University of Technology", rank: "QS World Top 500", city: "Warsaw" },
  { name: "Jagiellonian University", rank: "Founded 1364 · Oldest in PL", city: "Kraków" },
];

const whyItems = [
  { title: "Work While You Study", text: "Full-time students with a Polish study visa or residence card can generally work without a separate work permit." },
  { title: "Affordable Tuition & Living", text: "Tuition from €1,500/year and living costs 40 to 60% lower than Western and Northern Europe." },
  { title: "Stay Inside Schengen", text: "A Polish residence card keeps you in Europe and lets you travel across the Schengen area." },
  { title: "A Path Beyond Graduation", text: "An EU-recognised degree, a job-search permit after graduation and routes to a work permit or EU Blue Card." },
];

const steps = [
  { title: "Free Consultation", text: "Residence status check, budget planning and a personalized university shortlist." },
  { title: "Apply & Get Admitted", text: "We coach you step by step to prepare and file your own application." },
  { title: "Visa Filing & Prep", text: "Complete documentation, financial proofs and one-on-one interview coaching." },
  { title: "Fly & Settle In", text: "Housing arranged, airport pickup and residence card support once you arrive." },
];

const testimonials = [
  {
    quote:
      "My visa was rejected once before I found Poland Pathway. They rebuilt my file from scratch and got it approved in 19 days. I'm now in my second semester at AGH Kraków.",
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
      "I was on a job-seeker visa in Germany and had no idea Poland's study route applied to me. They checked my documents first and told me honestly whether I qualified.",
    initials: "UM",
    name: "Usman Malik",
    detail: "BSc Engineering · WUT Warsaw",
    avatar: { background: "var(--sky)", color: "var(--navy)" },
  },
];

function Index() {
  useReveal();

  return (
    <>
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Non-EU in Europe? Move to Poland</span>
            <h1>
              Your Next Move in Europe Is <span className="hl">Poland</span>
            </h1>
            <p className="lead">
              On a work permit or job-seeker visa in Sweden, Germany or elsewhere in Europe? We guide non-EU
              nationals through the study route to Poland: admission, visa and settling in, with a 98% success rate.
            </p>
            <div className="hero-actions">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
                Start Your Application
                <ArrowIcon />
              </a>
              <a href="#process" className="btn btn-outline">How It Works</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><div><div className="num">45+</div><div className="lbl">Visas Approved</div></div></div>
              <div className="trust-item"><div><div className="num">08+</div><div className="lbl">Partner Universities</div></div></div>
              <div className="trust-item"><div><div className="num">3 yrs</div><div className="lbl">Consultancy Experience</div></div></div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-photo">
              <img
                src={heroSlide.url}
                alt="Poland Pathway: residence permit expiring soon in Europe? See your options for moving to Poland"
                width={1080}
                height={1350}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat reveal"><Counter target={45} suffix="+" /><div className="lbl">Student Visas Approved</div></div>
          <div className="stat reveal"><Counter target={98} suffix="%" /><div className="lbl">Visa Success Rate</div></div>
          <div className="stat reveal"><Counter target={8} suffix="+" pad={2} /><div className="lbl">Partner Universities</div></div>
          <div className="stat reveal"><Counter target={15} suffix="+" /><div className="lbl">Cities Across Poland</div></div>
        </div>
      </section>

      {/* ================= WHY POLAND ================= */}
      <section className="section why" id="why">
        <div className="container why-grid">
          <div className="why-visual reveal">
            <h3>Top Universities Our Clients Choose</h3>
            <p>Poland's universities rank among Europe's best, at a fraction of the cost.</p>
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
              <h2>Why Non-EU Professionals Are Choosing Poland</h2>
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
            <h2>Four Steps to Moving to Poland</h2>
            <p>A clear, guided roadmap. Most of our clients receive their visa within 4 to 8 weeks.</p>
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
            <h2>People Who Made the Move to Poland</h2>
            <p>Real journeys, real approvals. Hear it from the people we have guided.</p>
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

      <CtaSection />
      <SiteFooter />
    </>
  );
}
