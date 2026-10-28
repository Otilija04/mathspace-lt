import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { Portrait } from "@/components/site/Portrait";

export const Route = createFileRoute("/apie")({
  head: () => seo("Apie korepetitorių", "Vilniaus universiteto matematikos bakalauras, privataus mokymo patirtis nuo 2022 m., klinikinės statistinės analizės patirtis."),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Apie" title="Matematika — mano kalba. Mokymas — mano darbas." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.5fr] items-start">
        <Portrait />
        <div className="space-y-6 text-lg">
          <p>Esu nepriklausomas korepetitorius, mokantis matematikos, fizikos, statistikos ir Excel. Mano tikslas — kad mokinys ar studentas ne tik išspręstų uždavinį, bet ir suprastų, <em>kodėl</em> sprendimas veikia.</p>
          <ul className="space-y-4">
            {[
              ["Išsilavinimas", "Matematikos bakalauro laipsnis, Vilniaus universitetas."],
              ["Mokymo patirtis", "Privačiai moku nuo 2022 metų."],
              ["Praktinė statistika", "Patirtis atliekant klinikinių duomenų statistinę analizę."],
            ].map(([t, d]) => (
              <li key={t} className="border-l-2 border-accent pl-5">
                <p className="eyebrow">{t}</p>
                <p className="mt-1">{d}</p>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">Dirbu su moksleiviais nuo 5 klasės iki abitūros ir su universitetų studentais — kantriai, struktūruotai ir be „tai juk akivaizdu“.</p>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
}
