import { Tag, Eye, MessageCircle, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { formatCRC } from "./products";
import { useCart } from "./CartContext";

export default function ProductCard({ product, onSeeDetails, onConsult }) {
  const { items, addItem, increment, decrement } = useCart();
  const qty = items[product.code]?.quantity || 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
        <Image
          src={product.image}
          alt={product.name}
          fittingType="fill"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-primary">
          <Tag className="h-3 w-3" />
          -{product.discount}%
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-mono font-semibold text-primary">
          {product.code}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="mt-1 font-heading text-lg font-bold text-primary leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Características */}
        <ul className="mt-4 space-y-1.5">
          {product.features.map((f) => (
            <li key={f} className="flex gap-2 text-xs text-foreground/80">
              <Check className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* Precios */}
        <div className="mt-5">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-primary">
              {formatCRC(product.promoPrice)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {formatCRC(product.price)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Ahorro: {formatCRC(product.price - product.promoPrice)}
          </p>
        </div>

        {/* Acciones */}
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onSeeDetails(product)}
            >
              <Eye className="h-4 w-4" />
              Ver detalles
            </Button>
            <Button
              variant="ghost"
              className="px-3"
              onClick={() => onConsult(product)}
              aria-label="Consultar producto"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          {qty === 0 ? (
            <Button
              className="w-full bg-accent text-primary hover:bg-accent/90"
              onClick={() => addItem(product)}
            >
              Agregar al pedido
            </Button>
          ) : (
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-2 py-1.5">
              <button
                onClick={() => decrement(product.code)}
                className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-primary hover:bg-accent/20 transition-colors"
                aria-label="Disminuir"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold text-primary">{qty}</span>
              <button
                onClick={() => increment(product.code)}
                className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-primary hover:bg-accent/20 transition-colors"
                aria-label="Aumentar"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}