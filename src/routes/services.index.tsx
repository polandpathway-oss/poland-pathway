import { createFileRoute, Link } from "@tanstack/react-router";
import { EUROPE_COUNTRIES, services } from "@/lib/services";
import { ArrowIcon, CtaSection, SiteFooter, SiteHeader, WHATSAPP, useReveal } from "@/components/site/site-parts";

const TITLE = "Poland Relocation Services for Non-EU Nationals in Europe";
const DESCRIPTION =
  "Non-EU national on a work or job-seeker permit in Europe? Explore our Poland relocation services — admission, study visa, housing and residence card.";

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
          <span className="eyebrow">Non-EU in Europe? Move to Poland</span>
          <h1>
            Your Legal Route to <span className="hl">Live & Work in Poland</span>
          </h1>
          <p className="lead">
            On a work permit or job-seeker visa in Sweden, Germany or elsewhere in Europe? We guide non-EU nationals
            through the study route to Poland — from university admission and the Polish visa to your residence card
            and the right to work while you study.
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
            <h2>Five Steps We Handle for Your Move</h2>
            <p>Pick the help you need, or let us guide the whole move end to end — online, in English, around your work.</p>
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
            <h2>Helping Non-EU Residents Across Europe</h2>
            <p>
              Consultations run online, so you can plan your move without leaving your job. We regularly help people
              living and working in:
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
