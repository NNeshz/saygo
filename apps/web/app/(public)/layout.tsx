import { ReactNode } from "react";
import { Navbar } from "@saygo/web/modules/landing/components/navbar";
import { Frame } from "@saygo/web/modules/landing/components/frame";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Frame>
      <Navbar />
      {children}
    </Frame>
  );
}
