import { Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo comprar", href: "#como-comprar" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const go = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Zap className="h-5 w-5 text-accent" />
              </span>
              <span className="font-heading text-lg font-extrabold">
                EcoCarga <span className="text-accent">CR</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-xs">
              Energía para tu día, tecnología a tu alcance.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
              Navegación
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm text-white/80 hover:text-accent transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Aviso */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
              Aviso importante
            </h4>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Los precios y las especificaciones son referenciales y pueden
              cambiar. No se procesan pagos reales ni se solicitan datos
              bancarios en esta página.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60">
            © 2026 EcoCarga CR. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">
            Precios y especificaciones de carácter referencial.
          </p>
        </div>
      </div>
    </footer>
  );
}