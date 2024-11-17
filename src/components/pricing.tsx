import { CheckIcon } from "lucide-react";
import MaxWidth from "./maxWidth";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
const pricingImages = {
  free: "/free.png",
  small: "/small.png",
  enterprise: "/enterprise.png",
  super: "/super.png",
} as const;

export type PlanKey = keyof typeof pricingImages;

export default async function Pricing() {
  const t = await getTranslations("pricing");
  const planKeys: PlanKey[] = ["free", "small", "enterprise", "super"];
  return (
    <section className="py-16 ">
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 ">
          {t("title")}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {planKeys.map((planKey, index) => (
            <PricingItem planKey={planKey} key={planKey} index={index} />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

async function PricingItem({
  planKey,
  index,
}: {
  planKey: PlanKey;
  index: number;
}) {
  const t = await getTranslations("pricing");
  const locale = await getLocale();

  const features = t.raw(`plans.${planKey}.features`) as Array<{
    label: string;
    isActive: boolean;
  }>;
  return (
    <div
      className=" rounded-2xl p-4 lg:p-12  shadow-lg flex flex-col"
      data-aos="zoom-in-up"
      data-aos-delay={index * 400}
      data-aos-offset="0"
    >
      <Image
        src={pricingImages[planKey]}
        width={150}
        height={150}
        alt={t(`plans.${planKey}.title`)}
        className="block mx-auto mb-6"
      />
      <h3 className="text-2xl font-bold mb-2">
        {" "}
        {t(`plans.${planKey}.title`)}
      </h3>
      <div className="mb-4">
        <span
          className={`text-xl font-bold ${
            t(`plans.${planKey}.price`).split(" ").length > 1 && "line-through"
          }`}
        >
          {t(`plans.${planKey}.price`).split(" ")[0]}
        </span>
        <span>{t(`plans.${planKey}.price`).split(" ").slice(1).join(" ")}</span>
        <span className={`ml-2 opacity-50 `}>{t("perMonth")}</span>
      </div>
      {t(`plans.${planKey}.discount`) && (
        <div className="mb-4">
          <span className={`text-xl font-bold `}>
            {t(`plans.${planKey}.discountPrice`)}
          </span>
          <span className={`ml-2 opacity-50 `}>{t("perMonth")}</span>
          <p>{t(`plans.${planKey}.discount`)}</p>
        </div>
      )}
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col">
          {features.map((feature, i) => (
            <li className="mb-8 flex items-center" key={i}>
              <span
                className={`rounded-full ${
                  locale === "ar" ? "ml-2" : "mr-2"
                } p-1 ${feature.isActive ? "bg-primaryOne" : "bg-gray-400"}`}
              >
                <CheckIcon
                  size={14}
                  className={`text-white ${
                    feature.isActive ? "opacity-100" : "opacity-50"
                  }`}
                />
              </span>
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>

        <Link
          href="https://app.wavyi.com/#/login/signUp"
          className="block mt-auto"
        >
          <Button className="uppercase">{t("freeTrialBtn")}</Button>
        </Link>
      </div>
    </div>
  );
}
