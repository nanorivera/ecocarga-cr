import { Search, GitCompare, ClipboardList, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Explora el catálogo",
    text: "Revisa los productos disponibles y usa el buscador o los filtros por categoría.",
  },
  {
    icon: GitCompare,
    title: "Compara productos",
    text: "Abre los detalles, revisa características técnicas y compara precios y descuentos.",
  },
  {
    icon: ClipboardList,
    title: "Consulta disponibilidad",
    text: "Arma tu lista de pedidos y contáctanos para confirmar la disponibilidad real.",
  },
  {
    icon: Wallet,
    title: "Coordina pago y entrega",
    text: "Acordamos la forma de pago y la entrega según lo que se confirme. Sin pagos reales en la web.",
  },
];

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="py-16 sm:py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Cómo comprar
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold">
            Cuatro pasos sencillos
          </h2>
          <p className="mt-3 text-white/70">
            No prometemos entregas gratuitas ni plazos no confirmados. Todo se
            coordina al consultar.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="absolute -top-3 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary text-xs font-extrabold">
                {i + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}