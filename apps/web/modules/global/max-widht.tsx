import { cn } from "@saygo/ui/src/lib/utils";

export function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}
