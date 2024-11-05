"use client";
import { useState } from "react";
import MaxWidth from "./maxWidth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useTranslations } from "next-intl";

export default function Faq() {
  const [open, setOpen] = useState([""]);
  const t = useTranslations("faq");
  return (
    <section
      className="py-36 "
      id="faq"
      data-aos="fade-right"
      data-aos-offset="0"
    >
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 ">
          {t("title")}
        </h1>
        <Accordion type="multiple" onValueChange={setOpen}>
          {[0, 1, 2, 3].map((index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className={`border mb-4 px-4 ${
                open.includes(`item-${index + 1}`)
                  ? "border-primaryOne "
                  : "border-gray-300"
              }`}
            >
              <AccordionTrigger
                className={`font-semibold text-lg ${
                  open.includes(`item-${index + 1}`) &&
                  "text-primaryOne capitalize"
                }`}
              >
                {t(`items.${index}.question`)}
              </AccordionTrigger>
              <AccordionContent className="capitalize text-lg">
                {t(`items.${index}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidth>
    </section>
  );
}
