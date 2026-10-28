import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { services } from "@/components/site/data";
import { site } from "@/config/site";

export const Route = createFileRoute("/paslaugos")({
  head: () => seo("Paslaugos", "Matematikos ir fizikos pamokos 5–12 kl., tiesinė algebra, matematinė analizė, statistika, Excel ir statistinės analizės konsultacijos studentams."),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Paslaugos" title="Individualios pamokos internetu" intro="Kiekviena pamoka pritaikoma jūsų lygiui, tempui ir tikslui." />
      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.key} className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl text-primary">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl border border-dashed border-ring/50 bg-secondary/50 p-8">
          <h2 className="text-2xl text-primary">Kaina</h2>
          <p className="mt-2 text-muted-foreground">{site.price || "Kaina derinama individualiai pagal dalyką ir lygį."}</p>
          <p className="mt-4 text-sm text-muted-foreground">Išsami temų programa — <Link to="/programa" className="underline text-primary">čia</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
}
