import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { site } from "@/config/site";

const nav = [
  { to: "/apie", label: "Apie mane" },
  { to: "/paslaugos", label: "Paslaugos" },
  { to: "/registracija", label: "Registracija" },
  { to: "/programa", label: "Programa" },
  { to: "/duk", label: "DUK" },
  { to: "/pamokos", label: "Kaip vyksta pamokos" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#turinys" className="sr-only focus:not-sr-only focus:absolute focus:m-3 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Pereiti prie turinio
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-serif text-xl font-semibold text-primary">
            MathSpace<span className="text-ring"> LT</span>
          </Link>
          <nav aria-label="Pagrindinė navigacija" className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary underline underline-offset-8 decoration-accent decoration-2" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/kontaktai" className="rounded-full bg-primary px-5 py-2.5 text-primary-foreground hover:opacity-90">Teirautis</Link>
          </nav>
          <button className="lg:hidden rounded-md border border-border px-3 py-2 text-sm" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? "Uždaryti" : "Meniu"}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobili navigacija" className="lg:hidden border-t border-border px-5 py-4 flex flex-col gap-3">
            {[...nav, { to: "/kontaktai", label: "Kontaktai" } as const].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 font-medium">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main id="turinys" className="flex-1">{children}</main>
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">MathSpace LT</p>
            <p className="mt-2 text-sm opacity-80">Nuotolinės matematikos, fizikos, statistikos ir Excel pamokos.</p>
          </div>
          <div className="text-sm space-y-2">
            {nav.map((n) => <Link key={n.to} to={n.to} className="block opacity-80 hover:opacity-100">{n.label}</Link>)}
          </div>
          <div className="text-sm space-y-2">
            <a className="block opacity-80 hover:opacity-100" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="block opacity-80 hover:opacity-100" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a className="block opacity-80 hover:opacity-100" href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook: {site.facebookLabel}</a>
            <p className="opacity-60 pt-4">© {new Date().getFullYear()} MathSpace LT</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="grid-paper border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl text-primary">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-3xl bg-secondary p-10 md:p-14 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl text-primary">Pradėkime nuo trumpo pokalbio</h2>
          <p className="mt-2 text-muted-foreground max-w-xl">Parašykite, ką mokotės ir kokio tikslo siekiate — atsakysiu ir pasiūlysiu pirmos pamokos planą.</p>
        </div>
        <Link to="/kontaktai" className="shrink-0 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Siųsti užklausą</Link>
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  const t = `${title} | MathSpace LT`;
  const image = "https://mathspace.lt/og-image.png";

  return {
    meta: [
      { title: t },
      { name: "description", content: description },

      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "lt_LT" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
  };
}
