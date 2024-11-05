import { Globe } from "lucide-react";
import { cookies } from "next/headers";

export default function LocaleSwitch() {
  const lang = cookies().get("lang")?.value || "en";

  async function changeLanguage() {
    "use server";
    const cookiesStore = cookies();
    const locale = cookiesStore.get("lang")?.value || "en";

    if (locale === "en") {
      cookiesStore.set("lang", "ar");
    } else {
      cookiesStore.set("lang", "en");
    }
  }
  return (
    <form action={changeLanguage}>
      <button type="submit" className="flex items-center gap-2">
        <Globe />
        {lang === "en" ? "العربية" : "English"}
      </button>
    </form>
  );
}
