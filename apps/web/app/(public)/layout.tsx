import { ReactNode } from "react";
import { Navbar } from "@saygo/web/modules/landing/components/navbar";
import { Footer } from "@saygo/web/modules/landing/components/footer";
import { Frame } from "@saygo/web/modules/landing/components/frame";
import { ModeToggle } from "@saygo/web/modules/global/components/theme-switcher";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Frame>
      <Navbar />
      {children}
      <Footer />
      <ModeToggle />
    </Frame>
  );
}
