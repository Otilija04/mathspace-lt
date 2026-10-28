import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, seo } from "@/components/site/Layout";
import { site } from "@/config/site";

export const Route = createFileRoute("/registracija")({
  head: () => seo("Registracija į pamoką", "Pasirinkite laisvą laiką ir užsiregistruokite į nuotolinę matematikos, statistikos ar Excel pamoką."),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Registracija" title="Pasirinkite pamokos laiką" intro="Pasirinkite jums tinkamą laiką. Laiką patvirtinsiu atskiru laišku." />
      <section className="mx-auto max-w-5xl px-5 py-12">
        {site.calendlyUrl ? (
          <iframe title="Pamokų kalendorius" src={site.calendlyUrl} className="h-[760px] w-full rounded-3xl border border-border bg-card" loading="lazy" />
        ) : (
          <div className="rounded-3xl border-2 border-dashed border-ring/40 bg-card p-8 md:p-12 text-center">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold">Kalendorius dar neprijungtas</span>
            <h2 className="mt-5 text-3xl text-primary">Registracija internetu netrukus</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Kol kalendorius ruošiamas, parašykite užklausą — atsakysiu ir pasiūlysiu laisvus laikus.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/kontaktai" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground">Siųsti užklausą</Link>
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/30 px-7 py-3.5 font-semibold text-primary">Rašyti per Facebook</a>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
