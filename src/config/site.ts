/**
 * Vienoje vietoje redaguojami svetainės duomenys.
 * Pakeiskite PLACEHOLDER reikšmes tikrais duomenimis.
 */
export const site = {
  name: "MathSpace LT",
  /** PLACEHOLDER: įrašykite tikrą el. pašto adresą */
  email: "info@pavyzdys.lt",
  facebookUrl: "https://www.facebook.com/search/top?q=MathSpace%20LT",
  facebookLabel: "MathSpace LT",
  /**
   * KAINŲ INTERVALAI — PLACEHOLDER. Pakeiskite XX/YY tikrais skaičiais prieš publikuodami.
   * Kol `pricesConfirmed` = false, prie kainų rodoma žyma „Kainos tikslinamos“.
   */
  pricesConfirmed: false,
  prices: [
    { service: "Matematika ir fizika 5–12 kl.", range: "nuo XX iki YY €/val." },
    { service: "PUPP / VBE pasiruošimas", range: "nuo XX iki YY €/val." },
    { service: "Tiesinė algebra ir matematinė analizė", range: "nuo XX iki YY €/val." },
    { service: "Statistika", range: "nuo XX iki YY €/val." },
    { service: "Excel", range: "nuo XX iki YY €/val." },
    { service: "Statistinės analizės konsultacijos", range: "nuo XX iki YY €/val." },
  ],
  /**
   * Calendly (ar kitos registracijos sistemos) nuoroda, pvz. "https://calendly.com/jusu-vardas/pamoka".
   * Tuščia = registracijos puslapyje rodomas aiškiai pažymėtas pavyzdys ir užklausos forma.
   */
  calendlyUrl: "",
  /** PLACEHOLDER: nuotraukos kelias, pvz. "/images/mokytoja.jpg" (įkelkite į public/images). Tuščia = rodomas rėmelis. */
  photoUrl: "",
  /**
   * Formos siuntimo adresas (pvz. Formspree / savas serveris), priimantis POST JSON.
   * Tuščia = forma atidaro el. pašto programą su užpildytu laišku.
   */
  formEndpoint: "",
};
