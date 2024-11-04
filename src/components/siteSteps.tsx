"use client";
import { useEffect, useRef } from "react";
import MaxWidth from "./maxWidth";
export default function SiteSteps() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="bg-[skyblue]  md:pt-80 pb-24 overflow-x-hidden">
      <MaxWidth className="md:px-20 text-white">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center">
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
              Your online store{" "}
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              Your ideal destination to create a website that reflects your
              vision and style. We provide an easy-to-use platform that allows
              you to choose and design the website you dream of with ease and
              professionalism.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center mt-24">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-10 text-center">
              Easy-to-use cashier
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              We collaborate with many payment gateway partners, providing you
              with the best ways to collect payments easily and quickly on your
              website and online.
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
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center mt-8">
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
              Invoices for all your orders
            </h3>
            <p className="text-xl md:text-xl mt-4 text-center">
              You can print invoices for all your orders and place your brand on
              them
            </p>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
