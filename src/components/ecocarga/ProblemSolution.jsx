import { AlertTriangle, CheckCircle2 } from "lucide-react";

const PROBLEMS = [
  "Dificultad para comparar accesorios por la falta de información clara.",
  "Precios poco transparentes que generan desconfianza al comprar.",
  "Dudas de compatibilidad entre dispositivos y accesorios.",
];

const SOLUTIONS = [
  "Catálogo organizado con categorías y códigos únicos por producto.",
  "Precios transparentes con descuentos visibles desde el inicio.",
  "Características técnicas descritas para facilitar la comparación.",
  "Atención al cliente lista para resolver consultas antes de comprar.",
];

export default function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problema */}
          <div className="rounded-2xl border border-border bg-white p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h2 className="font-heading text-2xl font-bold text-primary">
                El reto al comprar accesorios
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Algunos consumidores enfrentan obstáculos al buscar accesorios
              tecnológicos:
            </p>
            <ul className="mt-5 space-y-3">
              {PROBLEMS.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solución */}
          <div className="rounded-2xl border border-accent/30 bg-primary p-7 sm:p-9 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h2 className="font-heading text-2xl font-bold">
                La propuesta de EcoCarga CR
              </h2>
            </div>
            <p className="mt-4 text-white/80">
              Una solución sencilla para comparar y decidir con confianza:
            </p>
            <ul className="mt-5 space-y-3">
              {SOLUTIONS.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/60 border-t border-white/15 pt-4">
              Los productos, precios y especificaciones son ejemplos académicos
              y no se han verificado con proveedores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}