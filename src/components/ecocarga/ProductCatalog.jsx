import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, PackageSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CATEGORIES, PRODUCTS } from "./products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

export default function ProductCatalog({ onConsult }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = category === "Todos" || p.category === category;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  const seeDetails = (product) => {
    setSelected(product);
    setModalOpen(true);
  };

  return (
    <section id="productos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Catálogo
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-primary">
            Compara y elige tu accesorio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Busca por nombre o código, filtra por categoría y revisa los detalles
            de cada producto antes de consultar.
          </p>
        </div>

        {/* Controles */}
        <div className="mt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="relative md:max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre o código..."
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-dashed border-border">
            <PackageSearch className="h-10 w-10 text-muted-foreground" />
            <p className="mt-3 font-medium text-foreground/80">
              No encontramos productos con ese criterio.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("Todos");
              }}
              className="mt-3 text-sm font-semibold text-accent hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard
                key={p.code}
                product={p}
                onSeeDetails={seeDetails}
                onConsult={onConsult}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal
        product={selected}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onConsult={onConsult}
      />
    </section>
  );
}