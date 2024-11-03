import MaxWidth from "./maxWidth";

export default function Footer() {
  return (
    <footer className="py-8 shadow-xl">
      <MaxWidth>
        All rights reserved ©{" "}
        <a href="https://wavyi.store" className="text-primaryOne">
          Wavyi
        </a>
      </MaxWidth>
    </footer>
  );
}
