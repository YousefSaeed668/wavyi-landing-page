import Link from "next/link";
import MaxWidth from "./maxWidth";
import Image from "next/image";
import Button from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import LocaleSwitch from "./localeSwitcher";
import { getTranslations } from "next-intl/server";

export async function Header({ isPage = false }: { isPage?: boolean }) {
  const t = await getTranslations("header");
  return (
    <header
      className={`py-8  bg-black  bg-gradient-to-l from-[#166BB9] to-black text-white  mx-auto ${
        !isPage && "absolute  top-14 left-0 right-0 z-50 w-[95%]"
      } `}
    >
      <MaxWidth className="flex items-center justify-between">
        <Link href="/" className="flex items-center ">
          <Image
            src="/wavy.png"
            alt="Logo"
            width={80}
            height={80}
            className="filter invert brightness-0 "
          />
        </Link>
        <nav className=" gap-8 hidden md:flex">
          <ul className="flex gap-8 items-center">
            <li>
              <a href="https://app.wavyi.com/#/login/signUp">{t("joinFree")}</a>
            </li>
            <li>
              <a href="https://app.wavyi.com/#/login/">
                <Button className="bg-white hover:bg-transparent text-primaryOne hover:text-white rounded-full px-4">
                  {t("login")}
                </Button>
              </a>
            </li>
            <li>
              <Link href="/blogs">{t("blogs")}</Link>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.wavyi.seller_dashboard_application&hl=en&gl=US"
                target="_blank"
              >
                <Image
                  src="/google-play.svg"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>
              <LocaleSwitch />
            </li>
          </ul>
        </nav>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={40} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-l from-[#166BB9] to-black w-full border-none text-white"
            >
              <SheetHeader>
                <Link href="/" className="flex items-center ">
                  <Image
                    src="/wavy.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="filter invert brightness-0 "
                  />
                </Link>
              </SheetHeader>
              <nav className="mt-12">
                <ul className="flex flex-col gap-8 items-center">
                  <li className="py-8 border-b w-full text-center">
                    <a href="https://app.wavyi.com/#/login/">{t("login")}</a>
                  </li>
                  <li className="py-8 border-b w-full text-center">
                    <LocaleSwitch />
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidth>
    </header>
  );
}
