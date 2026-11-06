/** Public site address used for absolute canonical, og:url and share image links. */
export const SITE_URL = "https://polandpathway.lovable.app";
export const SITE_NAME = "Poland Pathway";

export type ShareImage = { path: string; width: number; height: number; alt: string };

/** Share-sized (1200x630) copy of the homepage hero photo, served from /public. */
export const HOME_SHARE_IMAGE: ShareImage = {
  path: "/og/poland-pathway-home.jpg",
  width: 1200,
  height: 630,
  alt: "Young professional with a suitcase in Warsaw Old Town at sunset, moving to Poland",
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
  const meta: Array<Record<string, string>> = [
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
  if (opts.image) {
    const img = absoluteUrl(opts.image.path);
    meta.push(
      { property: "og:image", content: img },
      { property: "og:image:secure_url", content: img },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: String(opts.image.width) },
      { property: "og:image:height", content: String(opts.image.height) },
      { property: "og:image:alt", content: opts.image.alt },
      { name: "twitter:image", content: img },
      { name: "twitter:image:alt", content: opts.image.alt },
    );
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}
