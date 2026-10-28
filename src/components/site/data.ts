export const services = [
  { key: "mokykla", title: "Matematika ir fizika 5–12 kl.", text: "Pamokų temų supratimas, kontroliniai, PUPP ir VBE pasiruošimas su aiškiu planu." },
  { key: "algebra", title: "Tiesinė algebra", text: "Matricos, determinantai, rangai, atvirkštinės matricos, Gauso metodas, vektoriai ir tikrinės reikšmės." },
  { key: "analize", title: "Matematinė analizė", text: "Ribos, išvestinės, dalinės išvestinės, ekstremumai ir integralai — nuo intuicijos iki sprendimo." },
  { key: "statistika", title: "Statistika", text: "Aprašomoji statistika, hipotezių tikrinimas, p reikšmės, ANOVA, chi kvadrato kriterijus ir regresija." },
  { key: "excel", title: "Excel pradedantiesiems ir pažengusiems", text: "IF, SUMIFS, COUNTIFS, XLOOKUP, suvestinės lentelės ir tvarkingas darbas su duomenimis." },
  { key: "darbai", title: "Statistinės analizės konsultacijos", text: "Bakalauro ir magistro studentams: metodų parinkimas ir rezultatų interpretavimas. Mokau — darbų nerašau." },
];

export const curriculum: { title: string; groups: { name: string; items: string[] }[] }[] = [
  {
    title: "Mokyklinė matematika ir fizika (5–12 kl., PUPP, VBE)",
    groups: [
      { name: "Matematika", items: ["Skaičiai, trupmenos, procentai", "Lygtys, nelygybės ir jų sistemos", "Funkcijos ir jų grafikai", "Geometrija ir trigonometrija", "Tikimybės ir statistikos pradmenys", "Sekos, išvestinės ir integralai (11–12 kl.)"] },
      { name: "Fizika", items: ["Mechanika: judėjimas, jėgos, energija", "Šiluminiai reiškiniai", "Elektra ir magnetizmas", "Svyravimai, bangos, optika", "Uždavinių sprendimo strategijos"] },
      { name: "Egzaminai", items: ["PUPP užduočių tipai ir laiko planavimas", "VBE struktūra ir vertinimas", "Ankstesnių metų užduočių analizė"] },
    ],
  },
  {
    title: "Tiesinė algebra (universitetas)",
    groups: [{ name: "Temos", items: ["Matricos ir veiksmai su jomis", "Determinantai ir jų savybės", "Matricos rangas", "Atvirkštinė matrica", "Gauso eliminacijos metodas", "Tiesinių lygčių sistemos", "Vektoriai ir vektorinės erdvės", "Tikrinės reikšmės ir tikriniai vektoriai"] }],
  },
  {
    title: "Matematinė analizė (universitetas)",
    groups: [{ name: "Temos", items: ["Funkcijų ribos ir tolydumas", "Išvestinės ir jų taikymai", "Dalinės išvestinės", "Ekstremumų radimas", "Neapibrėžtiniai ir apibrėžtiniai integralai"] }],
  },
  {
    title: "Statistika",
    groups: [
      { name: "Pagrindai", items: ["Aprašomoji statistika ir vizualizacija", "Hipotezių tikrinimas ir p reikšmės", "Pasikliautinieji intervalai"] },
      { name: "Metodai", items: ["Stjudento t kriterijai", "Dispersinė analizė (ANOVA)", "Chi kvadrato kriterijus", "Koreliacija", "Tiesinė ir logistinė regresija"] },
    ],
  },
  {
    title: "Excel",
    groups: [
      { name: "Pradedantiesiems", items: ["Lentelių struktūra ir formatavimas", "Pagrindinės formulės ir nuorodos", "IF funkcija", "Rūšiavimas ir filtrai"] },
      { name: "Pažengusiems", items: ["SUMIFS ir COUNTIFS", "XLOOKUP", "Suvestinės lentelės (pivot)", "Duomenų tvarkymas ir analizės paruošimas"] },
    ],
  },
  {
    title: "Statistinės analizės konsultacijos baigiamiesiems darbams",
    groups: [{ name: "Ką darome kartu", items: ["Tyrimo klausimo ir hipotezių formulavimas", "Tinkamo statistinio metodo parinkimas", "Prielaidų tikrinimas", "Rezultatų skaitymas ir interpretavimas", "Kaip aiškiai aprašyti rezultatus savais žodžiais"] }, { name: "Etikos principas", items: ["Mokau ir aiškinu — darbo už studentą nerašau ir analizės už jį neatlieku. Darbas lieka jūsų."] }],
  },
];

export const faq = [
  { q: "Kaip vyksta nuotolinės pamokos?", a: "Pamokos vyksta vaizdo skambučiu su bendra skaitmenine lenta. Užduotis sprendžiame kartu realiu laiku, o po pamokos galite gauti užrašus." },
  { q: "Ko reikia pamokai?", a: "Kompiuterio ar planšetės, stabilaus interneto ir, pageidautina, ausinių su mikrofonu. Excel pamokoms — įdiegtos Excel programos." },
  { q: "Kiek kainuoja pamoka?", a: "Kaina priklauso nuo dalyko ir lygio — ją aptariame individualiai, kai parašote užklausą." },
  { q: "Ar padedate ruoštis PUPP ir VBE?", a: "Taip. Sudarome planą pagal egzamino datą, kartojame temas ir sprendžiame egzamino tipo užduotis." },
  { q: "Ar galite parašyti mano baigiamąjį darbą ar atlikti analizę už mane?", a: "Ne. Konsultuoju ir mokau: padedu suprasti metodus, jų prielaidas ir rezultatų interpretaciją, kad darbą atliktumėte patys." },
  { q: "Kaip užsiregistruoti?", a: "Užpildykite užklausos formą arba parašykite el. paštu ar per Facebook puslapį „MathSpace LT“. Atsakysiu ir suderinsime laiką." },
];
