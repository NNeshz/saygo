import { ReactNode } from "react";
import { Navbar } from "@saygo/web/modules/landing/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </header>
      {children}
    </div>
  );
}