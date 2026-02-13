"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@saygo/ui/src/components/button";
import { MaxWidth } from "@saygo/web/modules/global/max-widht";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@saygo/ui/src/components/navigation-menu";
import { cn } from "@saygo/ui/src/lib/utils";

const navItemsWithDropdown = [
  {
    label: "Cursos",
    items: [
      { label: "Inglés General", href: "/cursos/ingles-general" },
      { label: "Inglés Empresarial", href: "/cursos/ingles-empresarial" },
      { label: "Preparación de Exámenes", href: "/cursos/examenes" },
    ],
  },
  {
    label: "Recursos",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Guías de aprendizaje", href: "/recursos/guias" },
      { label: "Webinars", href: "/recursos/webinars" },
    ],
  },
];

const navSimpleLink = { label: "Precios", href: "/precios" };

const simpleNavLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="w-full bg-black/80 backdrop-blur-md border-b border-white/10">
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
            className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
          >
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-sm font-bold">S</span>
            </div>
            <span className="text-xl font-semibold">SayGo</span>
          </Link>

          {/* Desktop nav: dropdowns (Cursos, Recursos) + simple link (Precios) */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu align="start" className="max-w-none">
              <NavigationMenuList className="gap-1 bg-transparent">
                {navItemsWithDropdown.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent text-white hover:bg-white/10 hover:text-white",
                        "data-popup-open:bg-white/10 data-popup-open:text-white",
                        "h-9 px-3 font-medium"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-1 p-2 w-52">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink
                              href={subItem.href}
                              className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-foreground outline-none transition-colors"
                            >
                              {subItem.label}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link
                    href={navSimpleLink.href}
                    className="inline-flex h-9 items-center justify-center rounded-lg px-3 font-medium text-white hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {navSimpleLink.label}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side: Sign in + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="inline-flex items-center gap-1.5 bg-citrus-zest text-white hover:bg-citrus-zest/90 font-medium rounded-lg px-4 py-2 text-sm transition-colors"
            >
              Probar gratis
              <IconArrowRight className="size-4 text-green-800" aria-hidden />
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              {mobileOpen ? <IconX /> : <IconMenu2 />}
            </Button>
          </motion.div>
        </motion.nav>
      </MaxWidth>

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
            <div className="absolute inset-0 bg-black/50" />

            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1 pt-20 px-6 pb-6">
                {navItemsWithDropdown.map((item) => (
                  <div key={item.label} className="mb-4">
                    <p className="text-xs font-medium text-white/60 uppercase tracking-wider px-2 mb-2">
                      {item.label}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobile}
                          className="block rounded-lg px-2 py-3 text-lg font-medium text-white hover:bg-white/10 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href={navSimpleLink.href}
                  onClick={closeMobile}
                  className="block rounded-lg px-2 py-3 text-lg font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {navSimpleLink.label}
                </Link>
                {simpleNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-lg px-2 py-3 text-lg font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={closeMobile}
                    className="block rounded-lg px-2 py-3 text-lg font-medium text-white hover:bg-white/10 transition-colors text-center"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/registro"
                    onClick={closeMobile}
                    className="inline-flex items-center justify-center gap-1.5 bg-citrus-zest text-white hover:bg-citrus-zest/90 font-medium rounded-lg px-4 py-3 text-sm w-full transition-colors"
                  >
                    Probar gratis
                    <IconArrowRight className="size-4 text-green-800" aria-hidden />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
