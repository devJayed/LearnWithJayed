import { useState } from "react";
import { LogIn, Menu, Moon, Sun, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { navigationLinks } from "@/constants/navigation";
import { useTheme } from "@/hooks/use-theme";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, content: t } = useI18n();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <m.a whileHover={{ scale: 1.03 }} href="#home" className="focus-ring rounded-md text-lg font-black tracking-normal">
          LearnWith<span className="text-primary">Jayed</span>
        </m.a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex rounded-md border bg-card p-0.5 text-xs font-semibold" aria-label="Language selector">
            {(["bn", "en"] as const).map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`rounded px-2 py-1 transition ${language === code ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{code === "bn" ? "বাংলা" : "English"}</button>)}
          </div>
          <Button aria-label="Toggle theme" variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="#login">
              <LogIn className="size-4" />
              {t.nav.login}
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#register">
              <UserPlus className="size-4" />
              {t.nav.register}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" onClick={() => setLanguage(language === "bn" ? "en" : "bn")} className="rounded-md border px-2 py-1 text-xs font-semibold" aria-label="Change language">{language === "bn" ? "EN" : "বাং"}</button>
          <Button aria-label="Toggle theme" variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button aria-label={t.nav.openMenu} variant="outline" size="icon" onClick={() => setMenuOpen(true)}>
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
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
          <Button asChild variant="outline">
            <a href="#login" onClick={() => setMenuOpen(false)}>
              <LogIn className="size-4" />
              {t.nav.login}
            </a>
          </Button>
          <Button asChild>
            <a href="#register" onClick={() => setMenuOpen(false)}>
              <UserPlus className="size-4" />
              {t.nav.register}
            </a>
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
