import {
  Truck,
  PackageCheck,
  Megaphone,
  Package,
  LifeBuoy,
} from "lucide-react";

const STAGES = [
  {
    icon: Truck,
    title: "1. Logística de entrada",
    text: "Selección de proveedores y recepción de los accesorios tecnológicos.",
  },
  {
    icon: PackageCheck,
    title: "2. Operaciones",
    text: "Revisión, codificación con códigos únicos y registro de cada producto.",
  },
  {
    icon: Megaphone,
    title: "3. Marketing y ventas",
    text: "Promoción y publicación del catálogo digital para consulta fácil.",
  },
  {
    icon: Package,
    title: "4. Logística de salida",
    text: "Preparación y entrega coordinada de los pedidos confirmados.",
  },
  {
    icon: LifeBuoy,
    title: "5. Servicio posventa",
    text: "Consultas, seguimiento y atención de reclamos después de la compra.",
  },
];

export default function ValueChain() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Cadena de valor
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-primary">
            Cómo trabajamos para servirte mejor
          </h2>
          <p className="mt-3 text-muted-foreground">
            La información organizada, los códigos únicos y el control de
            existencias mejoran tu experiencia en cada etapa.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STAGES.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative">
              <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-md hover:border-accent/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-accent z-10">
                  <span className="block h-2 w-2 rounded-full bg-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}