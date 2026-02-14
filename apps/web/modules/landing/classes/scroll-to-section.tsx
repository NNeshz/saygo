"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function ScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/classes") return;

    const hash = window.location.hash;
    if (hash) {
      // Defer so DOM is ready after client-side navigation
      const t = setTimeout(() => scrollToHash(hash), 0);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/classes") return;

    const handleHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return null;
}
