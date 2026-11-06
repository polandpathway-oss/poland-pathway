import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { services } from "@/lib/services";
import { PHONE, PHONE_TEL, SOCIALS } from "@/components/site/site-parts";
import { routeTree } from "@/routeTree.gen";
import { HOME_SHARE_IMAGE, socialMeta } from "@/lib/seo";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the services hub and every service page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes("/services").at(-1)?.routeId).toBe("/services/");
    for (const s of services) {
      expect(router.matchRoutes(`/services/${s.slug}`).at(-1)?.routeId).toBe("/services/$slug");
    }
  });

  it("gives every service page a unique title and description", () => {
    expect(new Set(services.map((s) => s.slug)).size).toBe(services.length);
    expect(new Set(services.map((s) => s.metaTitle)).size).toBe(services.length);
    expect(new Set(services.map((s) => s.metaDescription)).size).toBe(services.length);
  });

  it("keeps service titles within 60 and descriptions within 160 characters", () => {
    for (const s of services) {
      expect(s.metaTitle.length).toBeLessThanOrEqual(60);
      expect(s.metaDescription.length).toBeLessThanOrEqual(160);
    }
  });

  it("points footer social icons at the real Poland Pathway profiles", () => {
    expect(SOCIALS.facebook).toBe("https://www.facebook.com/p/Poland-Pathway-61595798983913/");
    expect(SOCIALS.instagram).toBe("https://www.instagram.com/polandpathway/");
    expect(SOCIALS.linkedin).toBe("https://www.linkedin.com/company/poland-pathway");
    expect(SOCIALS.youtube).toBe("https://www.youtube.com/@PolandPathway");
  });

  it("builds absolute share links on the published domain", () => {
    const { meta, links } = socialMeta({ title: "T", description: "D", path: "/services", image: HOME_SHARE_IMAGE });
    const get = (key: string) => meta.find((m) => m.property === key || m.name === key)?.content;
    expect(get("og:url")).toBe("https://polandpathway.lovable.app/services");
    expect(links[0].href).toBe("https://polandpathway.lovable.app/services");
    expect(get("og:image")).toBe("https://polandpathway.lovable.app/og/poland-pathway-home.jpg");
    expect(get("twitter:image")).toBe(get("og:image"));
  });

  it("shows the confirmed phone number in the footer and call button", () => {
    expect(PHONE).toBe("+46 76 444 46 34");
    expect(PHONE_TEL).toBe("tel:+46764444634");
  });
});
