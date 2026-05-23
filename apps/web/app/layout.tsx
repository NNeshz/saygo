import { Geist, Host_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@saygo/ui/providers/theme-provider";
import { AppProviders } from "./app-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${hostGrotesk.variable} ${hostGrotesk.className} ${geist.variable} ${geist.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark", "system"]}
          enableSystem
          disableTransitionOnChange
        >
          <AppProviders>{children}</AppProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
