import { ArrowRight, MessageCircle, ShieldCheck, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { HERO_IMAGE } from "./products";

export default function Hero() {
  const go = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-white to-white" />
      <div className="absolute top-20 -right-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Accesorios tecnológicos accesibles
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary text-balance">
              Tu tecnología siempre lista para acompañarte
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Descubre accesorios tecnológicos prácticos y accesibles. Compara
              características, conoce los precios y encuentra lo que necesitas en
              un solo lugar.
            </p>
            <p className="mt-3 text-sm font-medium text-accent">
              Energía para tu día, tecnología a tu alcance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => go("#productos")}
                className="bg-accent text-primary hover:bg-accent/90"
              >
                Explorar productos
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => go("#contacto")}
              >
                <MessageCircle className="h-4 w-4" />
                Consultar
              </Button>
            </div>

            {/* mini badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <MiniBadge icon={Tag} title="Precios claros" />
              <MiniBadge icon={Search} title="Catálogo fácil" />
              <MiniBadge icon={ShieldCheck} title="Info honesta" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-border aspect-[4/3]">
              <Image
                src={HERO_IMAGE}
                alt="Accesorios tecnológicos: batería portátil, cargador y cable USB-C"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-xl bg-white shadow-lg ring-1 ring-border px-4 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <ArrowRight className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p className="text-sm font-bold text-primary">3 productos</p>
                <p className="text-xs text-muted-foreground">para comparar hoy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniBadge({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-xs font-medium text-foreground/80">{title}</span>
    </div>
  );
}