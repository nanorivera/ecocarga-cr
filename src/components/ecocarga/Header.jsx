import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo comprar", href: "#como-comprar" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => go("#inicio")}
            className="flex items-center gap-2 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Zap className="h-5 w-5 text-accent" />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
              EcoCarga <span className="text-accent">CR</span>
            </span>
          </button>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="Ver lista de pedidos"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-primary">
                  {count}
                </span>
              )}
            </button>
            <Button
              onClick={() => go("#productos")}
              className="hidden sm:inline-flex bg-accent text-primary hover:bg-accent/90"
            >
              Ver catálogo
            </Button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary hover:bg-secondary"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <nav className="px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-left px-3 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => go("#productos")}
              className="mt-2 bg-accent text-primary hover:bg-accent/90"
            >
              Ver catálogo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}