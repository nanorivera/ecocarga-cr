import { Tag, FileText, LayoutGrid, Headphones } from "lucide-react";

const BENEFITS = [
  {
    icon: Tag,
    title: "Precios transparentes",
    text: "Cada producto muestra su precio normal, el descuento y el precio promocional desde el inicio.",
  },
  {
    icon: FileText,
    title: "Información clara",
    text: "Descripciones y características técnicas que ayudan a comparar antes de decidir.",
  },
  {
    icon: LayoutGrid,
    title: "Catálogo fácil de consultar",
    text: "Códigos únicos y categorías para encontrar lo que buscas sin confusiones.",
  },
  {
    icon: Headphones,
    title: "Atención al cliente",
    text: "Un formulario de contacto listo para resolver tus dudas antes de comprar.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Beneficios
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-primary">
            Por qué comprar con EcoCarga CR
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pensado para estudiantes, trabajadores y personas que buscan
            accesorios accesibles y claros.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}