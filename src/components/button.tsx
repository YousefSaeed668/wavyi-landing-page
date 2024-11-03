import { cn } from "@/lib/utils";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-8 py-3 bg-primaryOne text-white font-semibold",
        props.className
      )}
    >
      {children}
    </button>
  );
}
