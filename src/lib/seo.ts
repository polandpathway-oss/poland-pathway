/** Public site address used for absolute canonical, og:url and share image links. */
export const SITE_URL = "https://polandpathway.lovable.app";
export const SITE_NAME = "Poland Pathway";

export type ShareImage = { path: string; width: number; height: number; alt: string };

/** Share-sized (1200x630) card with the main Poland Pathway logo, used on every page. */
export const SHARE_IMAGE: ShareImage = {
  path: "/og/poland-pathway-logo.jpg",
  width: 1200,
  height: 630,
  alt: "Poland Pathway Consultation Agency logo",
};

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

/**
 * Builds the full set of social sharing tags (Open Graph for Facebook, WhatsApp,
 * LinkedIn, Pinterest, Telegram, Slack, Discord; Twitter/X cards) for one page.
 */
export function socialMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: ShareImage;
}) {
  const url = absoluteUrl(opts.path);
  const meta: Array<{ title?: string; name?: string; property?: string; content?: string }> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_GB" },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  const image = opts.image ?? SHARE_IMAGE;
  const img = absoluteUrl(image.path);
  meta.push(
    { property: "og:image", content: img },
    { property: "og:image:secure_url", content: img },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: String(image.width) },
    { property: "og:image:height", content: String(image.height) },
    { property: "og:image:alt", content: image.alt },
    { name: "twitter:image", content: img },
    { name: "twitter:image:alt", content: image.alt },
  );
  return { meta, links: [{ rel: "canonical", href: url }] };
}
