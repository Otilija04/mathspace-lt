import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { faq } from "@/components/site/data";

export const Route = createFileRoute("/duk")({
  head: () => ({
    ...seo(
      "DUK apie matematikos pamokas internetu",
      "Atsakymai į klausimus apie matematikos pamokas internetu, pasiruošimą PUPP ir VBE, pamokų kainas, registraciją ir statistikos konsultacijas."
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader
        eyebrow="DUK"
        title="Dažniausi klausimai"
      />

      <section className="mx-auto max-w-3xl px-5 py-16 divide-y divide-border">
        {faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none justify-between gap-4 font-serif text-xl text-primary">
              {f.q}
              <span
                aria-hidden
                className="text-ring transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </section>

      <CtaBand />
    </Layout>
  );
}
