import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import AnimationsProvider from "@/components/AnimationsProvider";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Wavyi",
    default: "Wavyi",
  },
  description:
    "An Arabic platform that helps entrepreneurs and retailers in the Arab world transition to digital by providing an e-commerce store to market and sell their products online.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${cairo.className} overflow-x-hidden max-w-[100vw]`}>
        <NextIntlClientProvider messages={messages}>
          <AnimationsProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AnimationsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
