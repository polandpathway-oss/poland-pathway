import { useEffect, useState } from "react";
import slideSrc from "@/assets/slide-1-poland.jpg";
import { WHATSAPP } from "@/components/site/site-parts";

const SEEN_KEY = "pp-welcome-popup-seen";

/** Newsletter-style popup shown once per visit when someone lands on the homepage. */
export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const t = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function close() {
    sessionStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="pp-popup-overlay" onClick={close} role="presentation">
      <div
        className="pp-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Residence permit expiring soon? See your options"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pp-popup-close" aria-label="Close popup" onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <a href={WHATSAPP} target="_blank" rel="noopener" onClick={close}>
          <img
            src={slideSrc}
            alt="Residence permit expiring soon? Don't let your life in Europe end. See your options with Poland Pathway"
            width={1080}
            height={1350}
          />
        </a>
      </div>
    </div>
  );
}
