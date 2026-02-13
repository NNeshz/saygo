"use client";

import * as React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "@saygo/ui/src/components/button";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        type="button"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={isDark}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="w-10 h-10 cursor-pointer rounded-full bg-frame text-foreground flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl"
      >
        {isDark ? (
          <IconSun className="w-5 h-5" aria-hidden />
        ) : (
          <IconMoon className="w-5 h-5" aria-hidden />
        )}
      </Button>
    </div>
  );
}
