import Image from "next/image";
import MaxWidth from "./maxWidth";
import Button from "./button";

export default function Hero() {
  return (
    <section className="h-screen pt-36 relative">
      <div id="overlay" className="w-full h-full absolute top-0 left-0 -z-10" />
      <div className="flex flex-col-reverse justify-center  items-center gap-10 lg:flex-row">
        <MaxWidth className="text-center md:text-left w-fit mx-auto text-white">
          <div className="lg:pl-12">
            <h1 className="text-3xl md:text-5xl font-bold ">
              Build beautiful
              <br className="max-md:hidden" /> E-commerce store in a few seconds
            </h1>
            <p className="text-xl md:text-2xl mt-4">
              Wavyi is a <strong>E-commerce Builder</strong>
              <br className="max-md:hidden" /> that simplifies the process of
              building <br className="max-md:hidden" /> intuitive e-commerce
              platforms quickly and efficiently.
            </p>
            <a
              href="https://app.wavyi.com/#/login/signUp"
              className="mt-10 block"
            >
              <Button>Sign Up</Button>
            </a>
          </div>
        </MaxWidth>
        <Image
          src="/herosection.png"
          height={800}
          width={800}
          alt="Hero"
          className="aspect-[1/0.7]"
        />
      </div>
    </section>
  );
}
