import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
