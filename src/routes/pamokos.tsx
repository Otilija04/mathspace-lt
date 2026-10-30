import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Layout, PageHeader, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/pamokos")({
  head: () => seo(
    "Kaip vyksta individualios matematikos pamokos internetu",
    "Sužinokite, kaip vyksta individualios matematikos, statistikos ir Excel pamokos internetu. Registracija, pirmoji pamoka, mokymosi planas ir užduotys."
  ),
  component: Page,
});

const steps = [
  ["Užklausa", "Parašote, ką mokotės, kokia klasė ar kursas ir koks artimiausias tikslas."],
  ["Suderinimas", "Atsakau, aptariame poreikius, kainą ir patogų laiką."],
  ["Pirmoji pamoka", "Įvertiname, ką jau mokate, ir sudarome planą iki jūsų termino."],
  ["Reguliarus darbas", "Pamokos vaizdo skambučiu su skaitmenine lenta, užrašai ir užduotys savarankiškam darbui."],
];

function Page() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Pamokos"
        title="Kaip vyksta pamokos internetu"
        intro="Paprasta, aišku ir patogu — iš namų, bendrabučio ar bibliotekos."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <ol className="grid gap-5 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-serif text-4xl text-ring">{i + 1}</span>
              <h2 className="mt-3 text-xl text-primary">{t}</h2>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary p-8">
            <h2 className="text-2xl text-primary">Ko reikės</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              <li>— Kompiuterio ar planšetės ir stabilaus interneto</li>
              <li>— Ausinių su mikrofonu (pageidautina)</li>
              <li>— Užduočių ar konspektų, su kuriais dirbate</li>
              <li>— Excel pamokoms — įdiegtos Excel programos</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-secondary p-8">
            <h2 className="text-2xl text-primary">Ką gaunate</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              <li>— Individualų dėmesį visą pamoką</li>
              <li>— Pamokos užrašus ir išspręstus pavyzdžius</li>
              <li>— Užduotis tarp pamokų pagal poreikį</li>
              <li>— Aiškų planą iki kontrolinio, egzamino ar sesijos</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}

