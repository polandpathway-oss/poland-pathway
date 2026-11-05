import { createFileRoute, Link } from "@tanstack/react-router";
import { EUROPE_COUNTRIES, services } from "@/lib/services";
import { ArrowIcon, CtaSection, SiteFooter, SiteHeader, WHATSAPP, useReveal } from "@/components/site/site-parts";

const TITLE = "Study in Poland Services for Students in Europe | Poland Pathway";
const DESCRIPTION =
  "Admissions, Poland student visas, scholarships, accommodation and residence permits — end-to-end study-in-Poland support for students living across Europe.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Poland Pathway services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();

  return (
    <>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Services</span>
          </nav>
          <span className="eyebrow">Study in Poland from Europe</span>
          <h1>
            Everything You Need to <span className="hl">Study in Poland</span>
          </h1>
          <p className="lead">
            Living in the UK, Germany, Sweden or anywhere else in Europe? From choosing a university to your residence
            card, Poland Pathway guides you through every step — online, in English, at your pace.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
              Free Consultation
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Services</span>
            <h2>Six Ways We Get You to Poland</h2>
            <p>Pick the help you need, or let us handle the whole journey end to end.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="service-card reveal"
                key={s.slug}
              >
                <div className="service-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.name}</h3>
                <p>{s.cardText}</p>
                <span className="service-more">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Across Europe</span>
            <h2>Supporting Students Wherever You Live in Europe</h2>
            <p>
              Consultations run online, so you can plan your move to Poland from home. We regularly help students living
              in:
            </p>
          </div>
          <div className="country-pills reveal">
            {EUROPE_COUNTRIES.map((c) => (
              <span className="pill" key={c}>{c}</span>
            ))}
            <span className="pill">…and the rest of Europe</span>
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </>
  );
}
