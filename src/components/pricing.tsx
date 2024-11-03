import { CheckIcon } from "lucide-react";
import MaxWidth from "./maxWidth";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";

const pricingList = {
  monthlyPricings: [
    {
      imgUrl: "/free.png",
      planTitle: "Free",
      price: "FREE",
      timeline: "/Month",

      features: [
        { isActive: true, label: "15 Monthly Requests" },
        { isActive: true, label: "Other Employees" },
        { isActive: true, label: "Print a Distinctive Invoice with a QR Code" },
        { isActive: true, label: "Print a Custom Message for Your Invoices" },
        { isActive: true, label: "Store Activity and Accounts Reports" },
        { isActive: true, label: "Access to Your Customer Database" },
        { isActive: true, label: "Add an Expense System" },
        { isActive: true, label: "Special Link for Your Online Store" },
      ],
    },
    {
      imgUrl: "/small.png",
      planTitle: "Small Projects",
      price: "600 EGP",
      timeline: "/Month",

      features: [
        { isActive: true, label: "150 Monthly Requests" },
        { isActive: true, label: "Add an Unlimited Number of Products" },
        { isActive: true, label: "5 Other Employees" },
        {
          isActive: false,
          label: "Print a Distinctive Invoice with a QR Code",
        },
        { isActive: true, label: "Print a Custom Message for Your Invoices" },
        { isActive: true, label: "Store Activity and Accounts Reports" },
        { isActive: true, label: "Access to Your Customer Database" },
        { isActive: false, label: "Add an Expense System" },
        { isActive: true, label: "Special Link for Your Online Store" },
      ],
    },
    {
      imgUrl: "/enterprise.png",
      planTitle: "Enterprise Package",
      price: "1000 EGP",
      timeline: "/Month",

      features: [
        { isActive: true, label: "650 Monthly Requests" },
        { isActive: true, label: "Add an Unlimited Number of Products" },
        { isActive: true, label: "10 Other Employees" },
        { isActive: true, label: "Print a Distinctive Invoice with a QR Code" },
        { isActive: true, label: "Print a Custom Message for Your Invoices" },
        { isActive: true, label: "Store Activity and Accounts Reports" },
        { isActive: true, label: "Access to Your Customer Database" },
        { isActive: true, label: "Add an Expense System" },
        { isActive: true, label: "Special Link for Your Online Store" },
      ],
      isActive: true,
    },
    {
      imgUrl: "/super.png",
      planTitle: "Super Package",
      price: "1400 EGP",
      timeline: "/Month",

      features: [
        { isActive: true, label: "Unlimited Monthly Requests" },
        { isActive: true, label: "Add an Unlimited Number of Products" },
        { isActive: true, label: "20 Other Employees" },
        { isActive: true, label: "Print a Distinctive Invoice with a QR Code" },
        { isActive: true, label: "Print a Custom Message for Your Invoices" },
        { isActive: true, label: "Store Activity and Accounts Reports" },
        { isActive: true, label: "Access to Your Customer Database" },
        { isActive: true, label: "Add an Expense System" },
        { isActive: true, label: "Special Link for Your Online Store" },
      ],
    },
  ],
};

export default function Pricing() {
  return (
    <section className="py-36">
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 text-primaryOne">
          Pricing
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pricingList.monthlyPricings.map((pricing, i) => (
            <PricingItem key={i} pricing={pricing} />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

const PricingItem = ({ pricing }: { pricing: Plan }) => {
  const { planTitle, price, timeline, features, imgUrl } = pricing;
  return (
    <div className=" rounded-2xl p-4 lg:p-12  shadow-lg flex flex-col">
      <Image
        src={imgUrl}
        width={150}
        height={150}
        alt={planTitle}
        className="block mx-auto mb-6"
      />
      <h3 className="text-2xl font-bold mb-2">{planTitle}</h3>
      <div className="mb-4">
        <span className={`text-xl font-bold `}>{price}</span>
        <span className={`ml-2 opacity-50 `}>{timeline}</span>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col">
          {features.map((item, i) => (
            <li className="mb-8 flex items-center" key={i}>
              <span
                className={`rounded-full mr-2 p-1 ${
                  item.isActive ? "bg-primaryOne " : "bg-gray-400"
                }`}
              >
                <CheckIcon
                  size={14}
                  className={` text-white ${
                    item.isActive ? " text-white" : "opacity-50"
                  } `}
                />
              </span>
              <span className={item.isActive ? "opacity-100" : "opacity-50"}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="https://app.wavyi.com/#/login/signUp"
          className="block mt-auto"
        >
          <Button className="uppercase">free trial</Button>
        </Link>
      </div>
    </div>
  );
};
