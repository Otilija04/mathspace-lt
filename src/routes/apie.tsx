import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";
import { Portrait } from "@/components/site/Portrait";

export const Route = createFileRoute("/apie")({
  head: () => seo("Apie korepetitorę", "Vilniaus universiteto matematikos bakalaurė, klinikinių duomenų statistinės analizės ir duomenų bei produktų užsakymų planavimo patirtis „Lidl“ įmonėje."),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Apie" title="Matematika — mano kalba. Mokymas — mano darbas." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.5fr] items-start">
        <Portrait />
        <div className="space-y-6 text-lg">
          <p>Esu įgijusi matematikos bakalauro laipsnį Vilniaus universiteto Matematikos ir informatikos fakultete, statistikos srityje. Turiu patirties atliekant klinikinių duomenų statistinę analizę, taip pat esu dirbusi tarptautinėje „Lidl“ įmonėje, kurioje teko analizuoti duomenis ir dirbti su produktų užsakymų planavimu.</p>
          <p>Dirbu su moksleiviais nuo 5 klasės iki abitūros ir su universitetų studentais. Pamokose vertinu aiškumą, kantrybę ir struktūruotą mokymą.</p>
          <p>Siekiu, kad mokiniai ne tik išmoktų spręsti uždavinius, bet ir suprastų jų sprendimo principus. Kiekvienam mokiniui pritaikau mokymosi tempą ir metodus pagal jo žinias, poreikius bei tikslus.</p>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
}
