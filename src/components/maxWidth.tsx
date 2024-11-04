import { cn } from "@/lib/utils";

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function MaxWidth({ children, ...props }: MaxWidthProps) {
  const className = props.className;
  return (
    <div
      {...props}
      className={cn("max-w-[1390px] w-full mx-auto px-4 md:px-0", className)}
    >
      {children}
    </div>
  );
}
