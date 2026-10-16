import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "¿Cómo sé si un producto está disponible?",
    a: "La disponibilidad real se confirma al consultar por el formulario de contacto o por el canal que se configure. El catálogo es referencial y no refleja el inventario en tiempo real.",
  },
  {
    q: "¿Los accesorios son compatibles con mi dispositivo?",
    a: "Cada producto incluye sus características técnicas, pero la compatibilidad depende de tu dispositivo. Te recomendamos consultar antes de comprar para confirmar.",
  },
  {
    q: "¿Hacen entregas a todo el país?",
    a: "Las entregas y sus plazos se coordinan al momento de la consulta. No garantizamos entregas gratuitas ni tiempos no confirmados.",
  },
  {
    q: "¿Los productos tienen garantía?",
    a: "Las condiciones de garantía dependen del proveedor y se aclaran al consultar. No definimos una política de garantía hasta confirmarla con cada caso.",
  },
  {
    q: "¿Cómo puedo hacer una consulta?",
    a: "Puedes usar el formulario de contacto de esta página. Una vez configurado el correo o WhatsApp del negocio, tu mensaje llegará directamente.",
  },
  {
    q: "¿Puedo pagar desde la página web?",
    a: "No. Esta página no procesa pagos reales ni solicita datos bancarios. El pago y la entrega se coordinan por el canal de contacto.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            Preguntas frecuentes
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-primary">
            Resolvemos tus dudas
          </h2>
          <p className="mt-3 text-muted-foreground">
            Respuestas honestas, sin inventar políticas definitivas.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-white px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-primary hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}