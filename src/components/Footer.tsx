import Link from "next/link";
import MaxWidth from "./maxWidth";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-10  shadow-xl bg-gradient-to-l from-[#166BB9] to-black"
      dir="rtl"
    >
      <MaxWidth>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex-1">
            <Link href="/" className="flex items-center ">
              <Image
                src="/wavy.png"
                alt="Logo"
                width={80}
                height={80}
                className="filter invert brightness-0 "
              />
            </Link>
            <p className="text-white text-xl">
              منصة عربية تساعد أصحاب المشاريع وتجار التجزئة في الوطن العربي على
              التحول الرقمي من خلال توفير متجر الكتروني لتسويق وبيع منتجاتهم
              أونلاين
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-4xl font-bold">القوانين</h3>
            <ul className="text-white text-xl">
              <li className="underline underline-offset-2 mt-3">
                <a href="https://wavyi.com/privacy-policy">سياسة الخصوصية</a>
              </li>
              <li className="underline underline-offset-2 my-2">
                <a href="https://wavyi.com/terms-conditions">شروط الاستخدام</a>
              </li>
              <li className="underline underline-offset-2">
                <a href="https://wavyi.com/refund-policy">سياسات الاسترجاع</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 ">
            <h3 className="text-white text-4xl font-bold ">القوانين</h3>
            <ul className="text-white text-xl">
              <li className="mt-3">رقم التواصل</li>
              <li>01554403714</li>
              <li className=" my-2">البريد الاكترونى</li>
              <li>info@wavyi.com</li>
            </ul>
          </div>
        </div>
      </MaxWidth>
    </footer>
  );
}
