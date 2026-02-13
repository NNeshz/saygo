import { cn } from "@saygo/ui/src/lib/utils";

export function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-8xl px-4", className)}>{children}</div>
  );
}
