import Image from "next/image";
import MaxWidth from "./maxWidth";
import styles from "./waveSection.module.css";
import { getLocale, getTranslations } from "next-intl/server";
export default async function WaveSection() {
  const t = await getTranslations("features");
  const locale = await getLocale();
  const leftColumnFeatures = [0, 1, 2];
  const rightColumnFeatures = [3, 4, 5];

  return (
    <div className="rounded-t-lg overflow-hidden">
      <div className={styles.header}>
        <MaxWidth>
          <div className="min-h-[70vh]">
            <h2 className="text-3xl font-bold w-full mb-10 text-center">
              {t("title")}
            </h2>
            <div className="flex flex-wrap gap-16 justify-between">
              <div className=" w-full  md:max-w-[32%]  2xl:max-w-[42%]">
                <ul className="space-y-8">
                  {leftColumnFeatures.map((index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="bg-white mt-1 p-2 drop-shadow-lg">
                        <Image
                          src={t(`items.${index}.imgUrl`)}
                          alt="feature icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {t(`items.${index}.title`)}
                        </h3>
                        <p className="text-sm mt-2">
                          {t(`items.${index}.description`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" w-full md:max-w-[32%] 2xl:max-w-[42%]">
                <ul className="space-y-8">
                  {rightColumnFeatures.map((index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="bg-white mt-1 p-2 drop-shadow-lg">
                        <Image
                          src={t(`items.${index}.imgUrl`)}
                          alt="feature icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {t(`items.${index}.title`)}
                        </h3>
                        <p className="text-sm mt-2">
                          {t(`items.${index}.description`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </MaxWidth>

        <div>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
