import Link from "next/link";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@saygo/ui/src/components/navigation-menu";
import { IconAlertCircle, IconLogin } from "@tabler/icons-react";
import { Button } from "@saygo/ui/src/components/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="h-14 bg-black text-white rounded-b-[1.5rem] px-6 flex items-center gap-6 pointer-events-auto relative">
        {/* Notch specific styling */}
        <div className="absolute -left-4 top-0 w-4 h-4 overflow-hidden">
          <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-transparent shadow-[0_0_0_20px_black]" />
        </div>
        <div className="absolute -right-4 top-0 w-4 h-4 overflow-hidden">
          <div className="absolute top-0 -right-4 w-8 h-8 rounded-full bg-transparent shadow-[0_0_0_20px_black]" />
        </div>

        <Link href="/" className="mr-2">
          <h1 className="text-xl font-bold tracking-tight">SayGo</h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors"
                render={<Link href="/#features">Features</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors"
                render={<Link href="/#pricing">Pricing</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors"
                render={<Link href="/login">Sign in</Link>}
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          size="sm"
          className="h-8 rounded-full bg-white text-black hover:bg-white/90 font-medium px-4 ml-2"
        >
          Get Started
        </Button>
      </nav>
    </div>
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
              <div className="leading-none font-medium text-foreground">
                {title}
              </div>
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
