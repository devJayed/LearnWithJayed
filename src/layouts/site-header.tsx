import { useState } from "react";
import { LogIn, Menu, Moon, Sun, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { navigationLinks } from "@/constants/navigation";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="focus-ring rounded-md text-lg font-black tracking-normal">
          LearnWith<span className="text-primary">Jayed</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button aria-label="Toggle theme" variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="#login">
              <LogIn className="size-4" />
              Login
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#register">
              <UserPlus className="size-4" />
              Register
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button aria-label="Toggle theme" variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button aria-label="Open menu" variant="outline" size="icon" onClick={() => setMenuOpen(true)}>
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
        <nav aria-label="Mobile navigation" className="grid gap-3">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base font-semibold hover:bg-muted"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
          <Button asChild variant="outline">
            <a href="#login" onClick={() => setMenuOpen(false)}>
              <LogIn className="size-4" />
              Login
            </a>
          </Button>
          <Button asChild>
            <a href="#register" onClick={() => setMenuOpen(false)}>
              <UserPlus className="size-4" />
              Register
            </a>
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
