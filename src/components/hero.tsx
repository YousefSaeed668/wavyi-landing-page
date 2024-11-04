import Image from "next/image";
import MaxWidth from "./maxWidth";
import Button from "./button";

export default function Hero() {
  return (
    <section className=" min-h-screen  bg-gradient-to-l from-[#166BB9] to-black   pt-28 pb-20 md:py-20 relative">
      <MaxWidth className="text-white">
        <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl md:text-6xl font-extrabold leading-10 w-[70%]  ">
              Create Your Own App Store and Sell Online with Ease .
            </h1>
            <p className="text-xl md:text-xl mt-4">
              With <span className="font-bold">wavyi</span> you can easily
              create and manage your own app store, and we&apos;ll handle the
              hosting and maintenance. This means you can focus on what you do
              best to run your business.
            </p>
            <a
              href="https://app.wavyi.com/#/login/signUp"
              className="mt-10 block w-fit"
            >
              <Button className="bg-white text-black px-16 rounded-md">
                Join Now For Free
              </Button>
            </a>
          </div>
          <div className="relative w-full md:w-[50%] h-[300px] md:h-[500px]">
            <Image src="/landing1.png" fill alt="Hero" />
          </div>
        </div>
      </MaxWidth>
      <div className="md:absolute md:w-[50%] lg:w-[40%] 2xl:w-[35%] max-w-[700px] md:left-1/2 md:top-full md:-translate-x-1/2  md:-translate-y-1/2 w-[80%] mx-auto mt-10">
        <div className="rounded-md overflow-hidden">
          <video
            loop
            src="/wavyi_video.mp4"
            controls
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
