import MaxWidth from "./maxWidth";
import { getLocale, getTranslations } from "next-intl/server";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Hero() {
  const t = await getTranslations("homePage");
  const locale = await getLocale();
  return (
    <section className="pt-24 bg-white">
      <MaxWidth>
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-5xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>{t("heroTitleStart")} </span>
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#166BB9] to-blue-900 lg:inline">
              {t("heroTitleHighlight")}
            </span>
            <span> {t("heroTitleEnd")}</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            {t("heroParagraph")}
          </p>
          <div className="mb-4 flex items-center justify-center gap-4 md:mb-8">
            <a
              href="https://app.wavyi.com/#/login/"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primaryOne rounded-2xl sm:w-auto sm:mb-0"
            >
              {t("joinFree")}
              {locale === "en" ? <ArrowRight /> : <ArrowLeft />}
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
            >
              {t("learnMore")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center  px-4 bg-primaryOne rounded-b-none h-11 rounded-xl">
                <div className="flex gap-x-1.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-[200px] md:h-[400px] lg:h-[560px] relative">
                <Image alt="builder" fill src="/builder.png" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
