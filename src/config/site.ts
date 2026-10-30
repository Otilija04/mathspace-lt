
export const site = {
  name: "MathSpace LT",
  email: "mathspacelt@gmail.com",
  phone: "+370 672 13122",
  facebookUrl: "https://www.facebook.com/search/top?q=MathSpace%20LT",
  facebookLabel: "MathSpace LT",
  /** Patvirtintos kainos eurais: pamokoms – valandos intervalas, Excel – visas kursas. */
  prices: {
    mokykla: { min: 25, max: 32 },
    algebra: { min: 32, max: 35 },
    analize: { min: 32, max: 35 },
    statistika: { min: 32, max: 35 },
    excel: { hours: 3, total: 69 },
    darbai: { min: 30, max: 35 },
  },
  /**
   * Calendly (ar kitos registracijos sistemos) nuoroda, pvz. "https://calendly.com/jusu-vardas/pamoka".
   * Tuščia = registracijos puslapyje rodomas aiškiai pažymėtas pavyzdys ir užklausos forma.
   */
  calendlyUrl: "",
 photoUrl: "/portretas.jpg",
  formEndpoint: "",
};

export function formatPrice(price: { min: number; max: number } | { hours: number; total: number }) {
  return "total" in price
    ? `${price.hours} val. kursas – ${price.total} €`
    : `${price.min}–${price.max} €/val.`;
}
