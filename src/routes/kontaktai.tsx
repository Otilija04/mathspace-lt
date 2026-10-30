import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Layout, PageHeader, seo } from "@/components/site/Layout";
import { site } from "@/config/site";

export const Route = createFileRoute("/kontaktai")({
  head: () => seo(
    "Matematikos korepetitorės kontaktai ir registracija",
    "Susisiekite su MathSpace LT dėl individualių matematikos, fizikos, statistikos ar Excel pamokų internetu. Pateikite užklausą arba rašykite el. paštu."
  ),
  component: Page,
});

const schema = z.object({
  name: z.string().trim().min(1, "Įrašykite vardą").max(100),
  email: z.string().trim().email("Neteisingas el. pašto adresas").max(255),
  subject: z.string().trim().min(1, "Pasirinkite dalyką").max(100),
  message: z.string().trim().min(10, "Parašykite bent kelis sakinius").max(2000),
});

const subjects = [
  "Matematika 5–12 kl.",
  "Fizika",
  "PUPP / VBE",
  "Tiesinė algebra",
  "Matematinė analizė",
  "Statistika",
  "Excel",
  "Statistinės analizės konsultacija",
  "Kita",
];

function Page() {
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "email" | "subject" | "message", string>>
  >({});

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "mailto" | "error"
  >("idle");

  const hasBackend = Boolean(site.formEndpoint);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((i) => [
            String(i.path[0]),
            i.message,
          ])
        )
      );
      return;
    }

    setErrors({});
    const v = parsed.data;

    if (hasBackend) {
      setStatus("sending");

      try {
        const r = await fetch(site.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(v),
        });

        setStatus(r.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }

      return;
    }

    const body = `Vardas: ${v.name}\nEl. paštas: ${v.email}\nDalykas: ${v.subject}\n\n${v.message}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Užklausa: ${v.subject}`
    )}&body=${encodeURIComponent(body)}`;

    setStatus("mailto");
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground";

  return (
    <Layout>
      <PageHeader
        eyebrow="Kontaktai"
        title="Parašykite užklausą"
        intro="Trumpai papasakokite, ką mokotės ir ko siekiate. Atsakysiu ir pasiūlysiu tolesnius žingsnius."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr]">
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-soft space-y-5"
        >
          {(
            [
              ["name", "Vardas", "text"],
              ["email", "El. paštas", "email"],
            ] as const
          ).map(([n, l, t]) => (
            <div key={n}>
              <label htmlFor={n} className="font-semibold">
                {l}
              </label>

              <input
                id={n}
                name={n}
                type={t}
                autoComplete={n}
                className={field}
                aria-invalid={!!errors[n]}
                aria-describedby={
                  errors[n] ? `${n}-err` : undefined
                }
              />

              {errors[n] && (
                <p
                  id={`${n}-err`}
                  className="mt-1 text-sm text-destructive"
                >
                  {errors[n]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label htmlFor="subject" className="font-semibold">
              Dalykas
            </label>

            <select
              id="subject"
              name="subject"
              defaultValue=""
              className={field}
              aria-invalid={!!errors.subject}
            >
              <option value="" disabled>
                Pasirinkite…
              </option>

              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {errors.subject && (
              <p className="mt-1 text-sm text-destructive">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">
              Žinutė
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              className={field}
              placeholder="Pvz.: 11 klasė, ruošiuosi matematikos VBE, sunkiausia — išvestinės."
              aria-invalid={!!errors.message}
            />

            {errors.message && (
              <p className="mt-1 text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending"
              ? "Siunčiama…"
              : hasBackend
                ? "Siųsti užklausą"
                : "Paruošti laišką el. paštu"}
          </button>

          <div role="status" aria-live="polite" className="text-sm">
            {status === "sent" && (
              <p className="text-primary">
                Ačiū! Užklausa išsiųsta — atsakysiu kuo greičiau.
              </p>
            )}

            {status === "mailto" && (
              <p className="text-muted-foreground">
                Laiškas paruoštas jūsų el. pašto programai —
                išsiųskite jį joje. Jei programa neatsidarė,
                rašykite tiesiogiai:{" "}
                <a
                  className="underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            )}

            {status === "error" && (
              <p className="text-destructive">
                Nepavyko išsiųsti. Parašykite el. paštu{" "}
                {site.email} arba per Facebook.
              </p>
            )}
          </div>

          {!hasBackend && (
            <p className="text-xs text-muted-foreground">
              Forma siunčiama per jūsų el. pašto programą —
              duomenys nesaugomi šioje svetainėje.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-secondary p-7">
            <h2 className="text-2xl text-primary">
              Tiesioginis kontaktas
            </h2>

            <p className="mt-4">
              <span className="eyebrow block">
                El. paštas
              </span>

              <a
                className="text-lg text-primary underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>

            <p className="mt-4">
              <span className="eyebrow block">
                Telefonas
              </span>

              <a
                className="text-lg text-primary underline"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                {site.phone}
              </a>
            </p>

            <p className="mt-4">
              <span className="eyebrow block">
                Facebook
              </span>

              <a
                className="text-lg text-primary underline"
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.facebookLabel}
              </a>
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Laiką ir sąlygas suderiname asmeniškai.
            Apmokėjimą aptariame tiesiogiai.
          </p>
        </aside>
      </section>
    </Layout>
  );
}
