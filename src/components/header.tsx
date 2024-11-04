import Link from "next/link";
import MaxWidth from "./maxWidth";
import Image from "next/image";
import Button from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header({ isPage = false }: { isPage?: boolean }) {
  return (
    <header
      className={`py-8  bg-black  bg-gradient-to-l from-[#166BB9] to-black text-white ${
        !isPage && "absolute  top-0 left-0 right-0 z-50 "
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
              <a href="https://app.wavyi.com/#/login/signUp">
                Join Now For Free
              </a>
            </li>
            <li>
              <a href="https://app.wavyi.com/#/login/">
                <Button className="bg-white hover:bg-transparent text-primaryOne hover:text-white rounded-full px-4">
                  Login
                </Button>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm">
                Now You Can Download the Application From
              </span>
              <Image
                src="/google-play.svg"
                alt="Google Play"
                width={32}
                height={32}
              />
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
                    <a href="https://app.wavyi.com/#/login/">Login</a>
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
