import { Header } from "@/components/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header isPage />
      {children}
    </div>
  );
}
