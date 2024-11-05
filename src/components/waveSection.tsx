import Image from "next/image";
import MaxWidth from "./maxWidth";
import styles from "./waveSection.module.css";
import { getLocale, getTranslations } from "next-intl/server";
export default async function WaveSection() {
  const t = await getTranslations("homePage");
  const locale = await getLocale();
  return (
    <div>
      <div className={styles.header}>
        <div className="logo pt-10">
          <Image
            title="wavyi"
            aria-label="wavyi"
            className="filter invert brightness-0 mx-auto "
            src="/wavy.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <MaxWidth>
          <div className={`${styles["inner-header"]} ${styles.flex}`}>
            <p
              className={`text-center ${
                locale === "ar" ? "tracking-[2px] " : "tracking-[8px] "
              } text-4xl md:text-4xl font-light`}
            >
              {t("waveText")}
            </p>
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
