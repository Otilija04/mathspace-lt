import { site } from "@/config/site";

/** Rodo site.photoUrl nuotrauką arba elegantišką, aiškiai pažymėtą vietą nuotraukai. */
export function Portrait({ className = "" }: { className?: string }) {
  if (site.photoUrl) {
    return <img src={site.photoUrl} alt="MathSpace LT korepetitoriaus portretas" className={`aspect-[4/5] w-full rounded-3xl object-cover shadow-soft ${className}`} />;
  }
  return (
    <figure className={`relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-soft ${className}`} aria-label="Vieta portreto nuotraukai">
      <div className="absolute inset-0 grid-paper opacity-70" />
      <svg aria-hidden viewBox="0 0 100 125" className="absolute inset-x-0 bottom-0 mx-auto w-3/4 text-accent">
        <circle cx="50" cy="45" r="20" fill="currentColor" />
        <path d="M10 125c0-25 18-42 40-42s40 17 40 42z" fill="currentColor" />
      </svg>
      <figcaption className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary">
        Portreto nuotrauka bus įkelta
      </figcaption>
    </figure>
  );
}
