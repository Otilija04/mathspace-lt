import { describe, expect, it } from "vitest";
import { formatPrice, site } from "@/config/site";
import { pricedServices } from "@/components/site/data";

describe("Confirmed service prices", () => {
  it.each([
    ["mokykla", 25, 32],
    ["algebra", 32, 35],
    ["analize", 32, 35],
    ["statistika", 32, 35],
    ["darbai", 30, 35],
  ] as const)("uses the approved hourly interval for %s", (key, min, max) => {
    expect(site.prices[key]).toEqual({ min, max });
    expect(pricedServices.find((service) => service.key === key)?.price).toBe(`${min}–${max} €/val.`);
  });

  it("prices the complete three-hour Excel course at 69 euros", () => {
    expect(site.prices.excel).toEqual({ hours: 3, total: 69 });
    expect(formatPrice(site.prices.excel)).toBe("3 val. kursas – 69 €");
  });
});