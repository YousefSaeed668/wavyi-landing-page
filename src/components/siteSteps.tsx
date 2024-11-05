"use client";
import { useEffect, useRef } from "react";
import MaxWidth from "./maxWidth";
import { useTranslations } from "next-intl";
export default function SiteSteps() {
  const t = useTranslations("homePage");
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="bg-[skyblue]  md:pt-80 pb-24 ">
      <MaxWidth className="md:px-20 text-white">
        <div
          className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center"
          data-aos="fade-up"
        >
          <div className="basis-[500px]">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/84953748-c4ce-41c8-9ea1-85604bbb260c/50h60AcXud.json"
              style={{ width: "500px", height: "500px" }}
            ></lottie-player>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-10 text-center">
              {t("onlineStore")}
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              {t("onlineStoreParagraph")}
            </p>
          </div>
        </div>
        <div
          data-aos-
          className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center mt-24"
          data-aos="fade-down"
          data-aos-offset="-50"
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-10 text-center">
              {t("easyCashier")}
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              {t("easyCashierParagraph")}
            </p>
          </div>
          <div>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/1b884163-323c-40d5-9a99-c30efe27ec93/DQwhGAieD5.json"
              style={{ width: "500px", height: "500px" }}
            ></lottie-player>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center mt-8"
          data-aos="fade-right"
          data-aos-offset="-50"
        >
          <div>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/570e641c-d6fc-4347-91f7-899c0d171bf6/rGZ3alCgLt.json"
              style={{ width: "500px", height: "500px" }}
            ></lottie-player>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-10 text-center">
              {t("invoices")}
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              {t("invoicesParagraph")}
            </p>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
