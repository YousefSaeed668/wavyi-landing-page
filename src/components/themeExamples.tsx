import Image from "next/image";
import MaxWidth from "./maxWidth";
import { getTranslations } from "next-intl/server";

async function getWavyiStores(): Promise<{ data: Store[] }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Stores`);

  const data = await res.json();
  return data;
}

export const revalidate = 43200;
export default async function ThemeExamples() {
  const storesExamples = await getWavyiStores();
  const t = await getTranslations("homePage");
  return (
    <section className="py-28" id="examples">
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20">
          {t("themeExamples")}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {storesExamples.data.map((store, index) => (
            <div
              key={store.id}
              className="relative aspect-square group overflow-hidden rounded-lg"
              data-aos="fade-up"
            >
              <a href={`https://${store.linkName}.wavyi.store`} target="_blank">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${store.outerImageUrl}`}
                  alt={store.name}
                  fill
                  className="object-cover object-top  group-hover:object-bottom group:hover:scale-105 transition-all duration-1000 ease-in-out"
                />
              </a>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
