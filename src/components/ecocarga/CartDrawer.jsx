import { Plus, Minus, Trash2, ShoppingCart, MessageCircle, Tag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { formatCRC } from "./products";
import { useCart } from "./CartContext";

export default function CartDrawer({ onConsult }) {
  const {
    isOpen,
    setIsOpen,
    list,
    subtotal,
    totalSavings,
    total,
    count,
    increment,
    decrement,
    removeItem,
    clear,
  } = useCart();

  const handleConsult = () => {
    setIsOpen(false);
    onConsult();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-5 border-b border-border space-y-0">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-accent" />
            <SheetTitle className="font-heading text-lg font-bold text-primary">
              Tu lista de pedidos
            </SheetTitle>
          </div>
          <SheetDescription className="text-xs">
            {count > 0
              ? `${count} artículo(s) con descuentos aplicados.`
              : "Aún no has agregado productos."}
          </SheetDescription>
        </SheetHeader>

        {list.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <ShoppingCart className="h-6 w-6" />
            </span>
            <p className="mt-4 font-medium text-foreground/80">
              Tu lista está vacía
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Agrega productos desde el catálogo para armar tu pedido.
            </p>
            <Button
              className="mt-5 bg-accent text-primary hover:bg-accent/90"
              onClick={() => setIsOpen(false)}
            >
              Ver catálogo
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {list.map(({ product, quantity }) => (
                <div
                  key={product.code}
                  className="flex gap-3 rounded-xl border border-border bg-white p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary/40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fittingType="fill"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-primary truncate">
                          {product.name}
                        </p>
                        <p className="text-[11px] font-mono text-muted-foreground">
                          {product.code}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(product.code)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Quitar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary/40 px-1 py-0.5">
                        <button
                          onClick={() => decrement(product.code)}
                          className="flex h-7 w-7 items-center justify-center rounded-md bg-white hover:bg-accent/20"
                          aria-label="Disminuir"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-primary">
                          {quantity}
                        </span>
                        <button
                          onClick={() => increment(product.code)}
                          className="flex h-7 w-7 items-center justify-center rounded-md bg-white hover:bg-accent/20"
                          aria-label="Aumentar"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">
                          {formatCRC(product.promoPrice * quantity)}
                        </p>
                        {product.discount > 0 && (
                          <p className="text-[11px] text-muted-foreground line-through">
                            {formatCRC(product.price * quantity)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totales */}
            <div className="border-t border-border p-5 space-y-3 bg-secondary/30">
              {totalSavings > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-accent font-medium">
                    <Tag className="h-3.5 w-3.5" />
                    Ahorro total
                  </span>
                  <span className="font-semibold text-accent">
                    {formatCRC(totalSavings)}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatCRC(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="font-heading text-base font-bold text-primary">
                  Total
                </span>
                <span className="font-heading text-xl font-extrabold text-primary">
                  {formatCRC(total)}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Los descuentos se aplican automáticamente. No se incluyen pagos
                reales ni datos bancarios.
              </p>
              <Button
                className="w-full bg-accent text-primary hover:bg-accent/90"
                onClick={handleConsult}
              >
                <MessageCircle className="h-4 w-4" />
                Consultar pedido
              </Button>
              <button
                onClick={clear}
                className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Vaciar lista
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}