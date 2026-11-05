import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";
import {
  ArrowIcon,
  CheckIcon,
  CtaSection,
  SiteFooter,
  SiteHeader,
  WHATSAPP,
  useReveal,
} from "@/components/site/site-parts";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    if (!service) {
      return { meta: [{ title: "Service not found | Poland Pathway" }, { name: "robots", content: "noindex" }] };
    }
    const url = `/services/${service.slug}`;
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.metaDescription,
            provider: {
              "@type": "EducationalOrganization",
              name: "Poland Pathway",
              email: "hello@polandpathway.com",
            },
            areaServed: { "@type": "Place", name: "Europe" },
            audience: {
              "@type": "Audience",
              audienceType: "Non-EU nationals living in Europe on work or job-seeker permits",
            },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const related = services.filter((s) => s.slug !== slug);
  useReveal(slug);

  return (
    <>
      <SiteHeader />

      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span aria-current="page">{service.name}</span>
          </nav>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>
            {service.h1} <span className="hl">{service.h1Highlight}</span>
          </h1>
          <p className="lead">{service.lead}</p>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-crimson">
              Get Free Advice
              <ArrowIcon />
            </a>
            <Link to="/services" className="btn btn-outline">All Services</Link>
          </div>
          <div className="country-pills">
            <span className="pill">For non-EU residents of Europe</span>
            <span className="pill">Online consultations</span>
            <span className="pill">98% visa success rate</span>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What You Get</span>
            <h2>{service.includesTitle}</h2>
          </div>
          <div className="includes-grid">
            {service.includes.map((item) => (
              <div className="why-item reveal" key={item.title}>
                <div className="why-check"><CheckIcon /></div>
                <div>
                  <h3 className="why-item-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your situation in Europe */}
      <section className="section alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Already Living in Europe?</span>
            <h2>How This Works for Your Situation</h2>
            <p>
              Most of our clients are non-EU nationals already in Europe, either working on a permit or on a
              job-seeker visa. Here's what this step means for you.
            </p>
          </div>
          <div className="europe-grid">
            <div className="europe-card reveal">
              <span className="europe-tag">On a work permit</span>
              <p>{service.situations.workPermit}</p>
            </div>
            <div className="europe-card dark reveal">
              <span className="europe-tag">On a job-seeker visa</span>
              <p>{service.situations.jobSeeker}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div
            className="section-head reveal"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
          >
            <span className="eyebrow" style={{ justifyContent: "center" }}>How It Works</span>
            <h2>Four Simple Steps</h2>
          </div>
          <div className="process-steps">
            {service.steps.map((s, i) => (
              <div className="step reveal" key={s.title}>
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((f) => (
              <details className="faq-item reveal" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">More Services</span>
            <h2>Explore the Rest of Your Journey</h2>
          </div>
          <div className="services-grid">
            {related.map((s) => (
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

      <CtaSection title={`Need Help with ${service.name}?`} />
      <SiteFooter />
    </>
  );
}
