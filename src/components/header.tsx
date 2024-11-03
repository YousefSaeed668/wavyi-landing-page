import Link from "next/link";
import MaxWidth from "./maxWidth";
import Image from "next/image";
import Button from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Examples", path: "#examples" },
  { title: "Blogs", path: "#blogs" },
  { title: "FAQ", path: "#faq" },
];

export function Header({ isPage = false }: { isPage?: boolean }) {
  return (
    <header
      className={`py-8 ${
        !isPage && "absolute top-0 left-0 right-0 z-50 text-white"
      } `}
    >
      <MaxWidth className="flex items-center justify-between">
        <Link href="/" className="flex items-center ">
          <Image src="/logo.svg" alt="Logo" width={90} height={90} />
          <span className="font-bold text-xl text-primaryOne">Wavyi</span>
        </Link>
        <nav className=" gap-8 hidden md:flex">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={link.path + index}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <a href="https://app.wavyi.com/#/login/signUp">
            <Button>Sign Up</Button>
          </a>
        </nav>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="p-2">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-12">
                <ul className="flex flex-col gap-8 items-center">
                  {navLinks.map((link, index) => (
                    <li key={link.path + index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.wavyi.com/#/login/signUp"
                  className="block w-fit mx-auto mt-8"
                >
                  <Button>Sign Up</Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidth>
    </header>
  );
}
