import { Tag, Check, MessageCircle, Plus, Minus, ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { formatCRC } from "./products";
import { useCart } from "./CartContext";

export default function ProductDetailModal({ product, open, onOpenChange, onConsult }) {
  const { items, addItem, increment, decrement } = useCart();
  if (!product) return null;
  const qty = items[product.code]?.quantity || 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden">
        <div className="grid sm:grid-cols-2">
          {/* Imagen */}
          <div className="relative aspect-square sm:aspect-auto bg-secondary/40">
            <Image
              src={product.image}
              alt={product.name}
              fittingType="fill"
              className="h-full w-full object-cover"
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-primary">
              <Tag className="h-3 w-3" />
              -{product.discount}%
            </span>
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="space-y-0 p-0 text-left">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                {product.category}
              </span>
              <DialogTitle className="mt-1 font-heading text-xl font-bold text-primary">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-xs font-mono text-muted-foreground mt-1">
                Código: {product.code}
              </DialogDescription>
            </DialogHeader>

            <p className="mt-3 text-sm text-muted-foreground">
              {product.description}
            </p>

            <h4 className="mt-5 text-sm font-semibold text-primary">
              Características
            </h4>
            <ul className="mt-2 space-y-1.5">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">
                  {formatCRC(product.promoPrice)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatCRC(product.price)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Descuento del {product.discount}% aplicado. Ahorras{" "}
                {formatCRC(product.price - product.promoPrice)}.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {qty === 0 ? (
                <Button
                  className="w-full bg-accent text-primary hover:bg-accent/90"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Agregar al pedido
                </Button>
              ) : (
                <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => decrement(product.code)}
                    aria-label="Disminuir"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-bold text-primary">
                    {qty} en el pedido
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => increment(product.code)}
                    aria-label="Aumentar"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  onConsult(product);
                  onOpenChange(false);
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Consultar disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}