"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@saygo/ui/src/components/navigation-menu";
import {
  IconAlertCircle,
  IconCircleCheck,
  IconCircleDashed,
  IconMenu2,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react";
import { Button } from "@saygo/ui/src/components/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@saygo/ui/src/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Zero to A1",
    href: "/temarios/zero-to-a1",
    description:
      "Introductory English course for complete beginners. Covers alphabet and pronunciation, basic vocabulary, personal information, numbers, days and months, verb 'to be', simple present, and basic conversation skills.",
  },
  {
    title: "A1 to A2",
    href: "/temarios/a1-to-a2",
    description:
      "Elementary level focused on building everyday communication. Includes past simple, frequency adverbs, countable and uncountable nouns, comparatives and superlatives, common phrasal verbs, and practical speaking activities.",
  },
  {
    title: "A2 to B1",
    href: "/temarios/a2-to-b1",
    description:
      "Pre-intermediate course to improve fluency and confidence. Covers present perfect, future forms, first and second conditionals, modal verbs, storytelling in past tenses, and structured conversation practice.",
  },
  {
    title: "B1 to B2",
    href: "/temarios/b1-to-b2",
    description:
      "Upper-intermediate level designed to refine grammar and expand vocabulary. Includes advanced conditionals, passive voice, reported speech, complex sentence structures, debate practice, presentations, and real-world communication skills.",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 flex justify-center pointer-events-none -mb-14">
        <nav className="h-14 bg-background rounded-b-3xl px-6 flex items-center justify-between w-full max-w-3xl pointer-events-auto relative z-50">
          {/* Notch specific styling */}
          <div className="absolute -left-4 top-0 w-4 h-4 overflow-hidden">
            <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-transparent shadow-[0_0_0_20px_var(--background)]" />
          </div>
          <div className="absolute -right-4 top-0 w-4 h-4 overflow-hidden">
            <div className="absolute top-0 -right-4 w-8 h-8 rounded-full bg-transparent shadow-[0_0_0_20px_var(--background)]" />
          </div>

          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="mr-2 relative z-50">
              <h1 className="text-xl font-bold tracking-tight">SayGo</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-96">
                      <ListItem href="/docs" title="Introducción">
                        Conoce nuestros valores y nuestra idea de trabajo, nada
                        nuevo, pero mejor implementado.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Progreso">
                        Descubre como es que trabajamos y que es lo que hacemos
                        día a día.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Contacto"
                      >
                        Toda la información de como contactarnos y que te puedas
                        unir
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuTrigger>Clases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    render={<Link href="/docs">Docs</Link>}
                  />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button size="sm">Get Started</Button>
            </div>
            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <IconMenu2 className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 bg-black text-white flex flex-col p-6 h-dvh w-screen"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <span className="font-medium text-lg">SayGo</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-white"
              >
                <IconX className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
              {/* Mobile Menu Items - Replicating structure in a simplified way for mobile */}
              <MobileSection title="Nosotros">
                <Link
                  href="/docs"
                  className="block py-2 text-muted-foreground hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-white">Introducción</div>
                  <div className="text-sm">
                    Conoce nuestros valores y nuestra idea de trabajo.
                  </div>
                </Link>
                <Link
                  href="/docs/installation"
                  className="block py-2 text-muted-foreground hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-white">Progreso</div>
                  <div className="text-sm">
                    Descubre como es que trabajamos.
                  </div>
                </Link>
                <Link
                  href="/docs/primitives/typography"
                  className="block py-2 text-muted-foreground hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-white">Contacto</div>
                  <div className="text-sm">
                    Toda la información de como contactarnos.
                  </div>
                </Link>
              </MobileSection>

              <MobileSection title="Clases">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="block py-2 text-muted-foreground hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium text-white">
                      {component.title}
                    </div>
                    <div className="text-sm line-clamp-2">
                      {component.description}
                    </div>
                  </Link>
                ))}
              </MobileSection>

              <div className="py-4 border-b border-white/10">
                <Link
                  href="/docs"
                  className="text-lg font-medium block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-4">
              <Button>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="text-muted-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/10 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-lg font-medium text-white"
      >
        {title}
        <IconChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-4 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
