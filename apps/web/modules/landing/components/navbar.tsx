"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@saygo/ui/src/components/button";
import { MaxWidth } from "@saygo/web/modules/global/max-widht";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <MaxWidth>
      <motion.nav
        className="relative z-50 flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Logo SayGo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-semibold text-foreground hover:text-foreground/90 transition-colors"
        >
          SayGo
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-lg font-medium hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button - único botón, siempre visible y clickeable */}
        <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <IconX /> : <IconMenu2 />}
          </Button>
        </motion.div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
          >
            {/* Backdrop */}
            <div className="absolute inset-0" />

            {/* Menu panel - transparent with high blur */}
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-transparent backdrop-blur-[80px] backdrop-saturate-150"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1 pt-20 px-6 pb-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-lg px-2 py-3 text-4xl font-medium text-foreground hover:bg-foreground/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MaxWidth>
  );
}
