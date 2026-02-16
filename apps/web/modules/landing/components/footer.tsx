"use client";

import React from "react";
import Link from "next/link";
import { IconMail, IconArrowRight } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="relative pt-[140px] mt-24 mx-2.5 mb-4 max-[850px]:mx-0">

      {/* --- Floating CTA Card --- */}
      <div className="absolute rounded-2xl left-1/2 -translate-x-1/2 top-0 w-full max-w-5xl px-8 md:px-0 z-20 flex justify-center">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl flex justify-center">
          {/* Misma imagen de fondo que el header */}
          <div className="absolute inset-0 z-0">
            <img
              src="/bg/BG.jpg"
              alt=""
              className="w-full h-full object-cover scale-[1.2]"
              aria-hidden
            />
            <div className="absolute inset-0 backdrop-blur rounded-2xl overflow-hidden"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 py-24 max-[850px]:px-6 max-[850px]:py-12 w-full">
            <h2 className="mx-auto text-4xl md:text-6xl font-medium tracking-tight max-w-2xl max-[850px]:mb-8 text-white flex items-center justify-center">
              Empieza aprender inglés de verdad, hoy
            </h2>
          </div>
        </div>
      </div>

      {/* --- Footer area: citrus-zest (mismo en light/dark) --- */}
      <div className="bg-citrus-zest rounded-xl pt-96 pb-16 max-[850px]:pt-80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start justify-between gap-12 max-[850px]:flex-col max-[850px]:gap-10">
            {/* Logo: foreground para contraste sobre citrus-zest */}
            <Link href="/" className="flex items-center gap-2" aria-label="Saygo home">
              <span className="text-xl font-bold text-foreground leading-none">
                SayGo
              </span>
            </Link>

            {/* Navigation: foreground y opacidad para modo claro/oscuro */}
            <nav
              className="flex gap-16 max-[850px]:gap-10 max-[850px]:flex-wrap"
              aria-label="Footer navigation"
            >
              <div>
                <h3 className="text-xs font-medium text-foreground/70 uppercase tracking-wider mb-4">
                  Menú
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/classes" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Clases
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium text-foreground/70 uppercase tracking-wider mb-4">
                  Empresa
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Ayuda
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Términos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      Privacidad
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium text-foreground/70 uppercase tracking-wider mb-4">
                  Redes
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      X (Twitter)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Copyright: borde y texto con foreground para que inviertan con el tema */}
          <div className="mt-16 pt-6">
            <p className="text-sm text-foreground/70 text-center">
              © {new Date().getFullYear()} SayGo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}