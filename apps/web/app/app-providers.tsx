"use client";

import type React from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@saygo/ui/src/providers/theme-provider";
import { Toaster } from "@saygo/ui/src/components/sonner";

export const AppProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark", "system"]}
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};
