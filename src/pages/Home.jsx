import { useState } from "react";
import Header from "@/components/ecocarga/Header";
import Hero from "@/components/ecocarga/Hero";
import ProblemSolution from "@/components/ecocarga/ProblemSolution";
import ProductCatalog from "@/components/ecocarga/ProductCatalog";
import Benefits from "@/components/ecocarga/Benefits";
import ValueChain from "@/components/ecocarga/ValueChain";
import HowToBuy from "@/components/ecocarga/HowToBuy";
import FAQ from "@/components/ecocarga/FAQ";
import Contact from "@/components/ecocarga/Contact";
import Footer from "@/components/ecocarga/Footer";
import CartDrawer from "@/components/ecocarga/CartDrawer";
import { CartProvider } from "@/components/ecocarga/CartContext";

export default function Home() {
  const [presetProduct, setPresetProduct] = useState(null);

  const handleConsult = (product) => {
    if (product) setPresetProduct(product.name);
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProblemSolution />
          <ProductCatalog onConsult={handleConsult} />
          <Benefits />
          <ValueChain />
          <HowToBuy />
          <FAQ />
          <Contact
            presetProduct={presetProduct}
            onConsumePreset={() => setPresetProduct(null)}
          />
        </main>
        <Footer />
        <CartDrawer onConsult={() => handleConsult()} />
      </div>
    </CartProvider>
  );
}