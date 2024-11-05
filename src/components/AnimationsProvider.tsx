"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AnimationsProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });
  return <>{children}</>;
}
