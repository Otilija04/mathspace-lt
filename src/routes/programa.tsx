import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { curriculum } from "@/components/site/data";

export const Route = createFileRoute("/programa")({
  head: () => seo(
    "Pasiruošimas matematikos VBE, PUPP ir aukštoji matematika",
    "Pasiruošimas matematikos VBE ir PUPP internetu. Mokyklinės matematikos, fizikos, tiesinės algebros, matematinės analizės, statistikos ir Excel mokymo programos."
  ),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Programa"
        title="Ką konkrečiai mokomės"
        intro="Išskleiskite kryptį ir pamatysite temas. Programą visada pritaikome pagal jūsų kursą ar mokyklos planą."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 space-y-4">
        {curriculum.map((c, i) => (
          <details
            key={c.title}
            className="group rounded-2xl border border-border bg-card open:shadow-soft"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-7">
              <span className="font-serif text-xl md:text-2xl text-primary">
                {c.title}
              </span>
              <span
                aria-hidden
                className="text-2xl text-ring transition group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div className="grid gap-8 px-6 pb-7 md:px-7 md:grid-cols-2">
              {c.groups.map((g) => (
                <div key={g.name}>
                  <h3 className="eyebrow">{g.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-foreground">
                        <span className="text-ring">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        ))}
      </section>

      <CtaBand />
    </Layout>
  );
}
