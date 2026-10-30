import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { pricedServices } from "@/components/site/data";

export const Route = createFileRoute("/paslaugos")({
  head: () => seo(
    "Matematikos, fizikos, statistikos ir Excel pamokos internetu",
    "Individualios matematikos ir fizikos pamokos 5–12 klasių mokiniams. Aukštoji matematika, statistikos konsultacijos ir Excel mokymai studentams bei suaugusiesiems."
  ),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Paslaugos"
        title="Individualios pamokos internetu"
        intro="Kiekviena pamoka pritaikoma jūsų lygiui, tempui ir tikslui."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-5 md:grid-cols-2">
        {pricedServices.map((s, i) => (
          <article
            key={s.key}
            className="flex flex-col rounded-lg border border-border bg-card p-8"
          >
            <p className="font-serif text-ring text-lg">0{i + 1}</p>
            <h2 className="text-2xl text-primary">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
            <p className="mt-auto pt-6 font-serif text-2xl font-semibold text-primary">
              {s.price}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <p className="text-sm text-muted-foreground">
          Išsami temų programa —{" "}
          <Link to="/programa" className="underline text-primary">
            čia
          </Link>.
        </p>
      </section>

      <CtaBand />
    </Layout>
  );
}
