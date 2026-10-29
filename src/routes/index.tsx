import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Layout, seo } from "@/components/site/Layout";
import { pricedServices } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => seo("Matematikos, statistikos ir Excel korepetitorius internetu", "Nuotolinės matematikos ir fizikos pamokos 5–12 kl. (PUPP, VBE), universitetinė tiesinė algebra, analizė, statistika ir Excel. Aiškiai, kantriai, sistemingai."),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="grid-paper relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="eyebrow">Nuotolinės pamokos · 5–12 kl. ir universitetas</p>
            <h1 className="mt-4 text-5xl md:text-6xl leading-[1.05] text-primary">
              Matematika, kuri pagaliau <em className="text-ring not-italic font-light italic">sudėlioja</em> viską į vietas.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Individualios matematikos, fizikos, statistikos ir Excel pamokos internetu. Nuo PUPP ir VBE iki tiesinės algebros, regresijos ir suvestinių lentelių.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/kontaktai" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Siųsti užklausą</Link>
              <Link to="/programa" className="rounded-full border border-primary/30 px-7 py-3.5 font-semibold text-primary hover:bg-secondary">Peržiūrėti programą</Link>
            </div>
          </div>
          <div aria-hidden className="rounded-3xl bg-card border border-border p-8 shadow-soft font-serif text-primary">
            <p className="text-sm font-sans eyebrow">Šiandienos lenta</p>
            <p className="mt-5 text-2xl">det(A − λI) = 0</p>
            <p className="mt-4 text-2xl">∫₀¹ x² dx = ⅓</p>
            <p className="mt-4 text-2xl">p &lt; 0,05</p>
            <p className="mt-4 text-xl font-sans text-muted-foreground">=XLOOKUP(A2; Kodai; Kainos)</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="paslaugos">
        <p className="eyebrow">Ko mokau</p>
        <h2 id="paslaugos" className="mt-3 text-4xl text-primary">Šešios kryptys, vienas požiūris</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricedServices.map((s, i) => (
            <article key={s.key} className="flex flex-col rounded-lg border border-border bg-card p-7 transition hover:shadow-soft">
              <p className="font-serif text-ring text-lg">0{i + 1}</p>
              <h3 className="mt-2 text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <p className="mt-auto pt-6 font-serif text-2xl font-semibold text-primary">{s.price}</p>
            </article>
          ))}
        </div>
        <Link to="/paslaugos" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4 decoration-accent">Visos paslaugos →</Link>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">
          {[
            ["Suprasti, o ne iškalti", "Kiekvieną metodą aiškinu nuo idėjos — kad mokėtumėte jį pritaikyti ir naujame uždavinyje."],
            ["Planas pagal tikslą", "Kontrolinis, egzaminas ar sesija — pamokas dėliojame atgal nuo jūsų termino."],
            ["Individualus požiūris į kiekvieną mokinį", "Kiekvienas mokinys mokosi skirtingu tempu, todėl pamokas pritaikau individualiai. Mano tikslas – ne tik padėti išspręsti uždavinius, bet ir išmokyti suprasti, savarankiškai mąstyti bei pasitikėti savo žiniomis."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3 opacity-80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
