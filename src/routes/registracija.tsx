import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader, seo } from "@/components/site/Layout";
import { site } from "@/config/site";

export const Route = createFileRoute("/registracija")({
  head: () => seo(
    "Registracija į matematikos pamokas internetu",
    site.calendlyUrl
      ? "Registruokitės į individualias matematikos, fizikos, statistikos ar Excel pamokas internetu. Pasirinkite jums patogų pamokos laiką."
      : "Registruokitės į individualias matematikos, fizikos, statistikos ar Excel pamokas internetu. Pateikite užklausą ir suderinsime pamokos laiką."
  ),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Registracija"
        title={
          site.calendlyUrl
            ? "Pasirinkite pamokos laiką"
            : "Suderinkime pamokos laiką"
        }
        intro={
          site.calendlyUrl
            ? "Pasirinkite jums tinkamą laiką prijungtame kalendoriuje."
            : "Parašykite užklausą — aptarsime jūsų poreikius ir suderinsime tinkamą laiką."
        }
      />

      <section className="mx-auto max-w-5xl px-5 py-12">
        {site.calendlyUrl ? (
          <iframe
            title="Pamokų kalendorius"
            src={site.calendlyUrl}
            className="h-[760px] w-full rounded-3xl border border-border bg-card"
            loading="lazy"
          />
        ) : (
          <div className="rounded-3xl bg-secondary p-10 md:p-14 shadow-soft text-center">
            <h2 className="text-3xl md:text-4xl text-primary">
              Registruokitės pamokai
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Parašykite užklausą — aptarsime jūsų poreikius ir suderinsime tinkamą pamokos laiką.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/kontaktai"
                className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90"
              >
                Siųsti užklausą
              </Link>

              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-primary/30 px-7 py-3.5 font-semibold text-primary hover:bg-card"
              >
                Rašyti el. paštu
              </a>

              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/30 px-7 py-3.5 font-semibold text-primary hover:bg-card"
              >
                Rašyti per Facebook
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Arba skambinkite:{" "}
              <a
                className="font-semibold text-primary underline"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                {site.phone}
              </a>
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
