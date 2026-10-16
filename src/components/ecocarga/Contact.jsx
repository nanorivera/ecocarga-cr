import { useState } from "react";
import { Mail, User, Package, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PRODUCTS } from "./products";

export default function Contact({ presetProduct, onConsumePreset }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Cuando se elige "consultar" un producto desde el catálogo, se precarga.
  const productValue = presetProduct || form.product;

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre.";
    if (!form.email.trim()) {
      e.email = "Ingresa tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Ingresa un correo válido.";
    }
    if (!productValue) e.product = "Selecciona un producto.";
    if (!form.message.trim()) e.message = "Escribe tu mensaje.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // El envío real se habilitará cuando se configure el correo o WhatsApp
    // del negocio. Por ahora mostramos confirmación local.
    setSubmitted(true);
    setForm({ name: "", email: "", product: "", message: "" });
    onConsumePreset?.();
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-primary">
            ¿Tienes dudas? Escríbenos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Completa el formulario y te responderemos cuando se habilite el
            canal de atención.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10 animate-fade-in">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                ¡Mensaje listo!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Gracias por tu consulta. Tu mensaje se preparó correctamente.
                Cuando se configure el correo o WhatsApp del negocio, tu consulta
                se enviará automáticamente.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Enviar otra consulta
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Nombre"
                  icon={User}
                  error={errors.name}
                >
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Tu nombre completo"
                    className="pl-9"
                  />
                </Field>
                <Field
                  id="email"
                  label="Correo electrónico"
                  icon={Mail}
                  error={errors.email}
                >
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="pl-9"
                  />
                </Field>
              </div>

              <Field
                id="product"
                label="Producto de interés"
                icon={Package}
                error={errors.product}
              >
                <select
                  id="product"
                  value={productValue}
                  onChange={(e) => handleChange("product", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Selecciona un producto...</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.code} value={p.name}>
                      {p.name} ({p.code})
                    </option>
                  ))}
                  <option value="Varios / Consulta general">
                    Varios / Consulta general
                  </option>
                </select>
              </Field>

              <Field
                id="message"
                label="Mensaje"
                icon={MessageSquare}
                error={errors.message}
              >
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Cuéntanos qué necesitas consultar..."
                  rows={4}
                  className="pl-9 pt-2"
                />
              </Field>

              <Button
                type="submit"
                className="w-full bg-accent text-primary hover:bg-accent/90"
                size="lg"
              >
                <Send className="h-4 w-4" />
                Enviar consulta
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No se envían correos reales hasta configurar el canal de atención.
                No se solicitan datos bancarios.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, icon: Icon, error, children }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
      </Label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
        {children}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}