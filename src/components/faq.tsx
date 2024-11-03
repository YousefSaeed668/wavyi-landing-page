"use client";
import { useState } from "react";
import MaxWidth from "./maxWidth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faq = [
  {
    question: "Is Website Design Difficult?",
    answer:
      "On the contrary, because Wavyi makes it easy for you to create your website or store in just 5 minutes by simply entering some data about your field.",
  },
  {
    question: "Can I use my own domain name with Wavyi?",
    answer:
      "Yes, you can use your own domain name with Shopify. If you have an existing domain name, you can connect it to Shopify from your store's admin. If you don't have a domain name yet, you can either buy one through Shopify or a third-party provider.",
  },
  {
    question: "Do I need to be a designer or developer to use Wavyi?",
    answer:
      "No, you don't need to be a designer or developer to use Wavyi. Signing up for Wavyi allows you to: Customize the look and feel of your store with the online store builder and themes. Add features and functionality to your store with apps. If you need extra help, you can contact our support team, or visit the Wavyi Expert Marketplace to search for and hire a certified Wavyi expert.",
  },
  {
    question: "Can i Try Wavyi for Free?",
    answer:
      "You can start designing your website or store on Wavyi for free for 12 days without needing to enter your banking information. However, to access professional features and activate the site after the trial period, you'll need to upgrade to one of our annual plans.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState([""]);
  return (
    <section className="py-36" id="faq">
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 text-primaryOne">
          Frequently Asked Questions
        </h1>
        <Accordion type="multiple" onValueChange={setOpen}>
          {faq.map((item, index) => (
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
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="capitalize text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidth>
    </section>
  );
}
