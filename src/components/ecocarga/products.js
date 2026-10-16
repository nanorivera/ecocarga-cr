// Datos de productos de EcoCarga CR (ejemplos académicos).
// Los precios, descuentos y especificaciones son referenciales y no se han
// verificado con proveedores ni con el inventario real.

export const HERO_IMAGE =
  "https://media.base44.com/images/public/6ad28bcb380bea260deef658/db0a37762_generated_e97a6af7.png";

export const CATEGORIES = ["Todos", "Baterías", "Cargadores", "Cables"];

export const PRODUCTS = [
  {
    id: "EC-PB-001",
    code: "EC-PB-001",
    name: "Batería portátil PowerGo 10000",
    category: "Baterías",
    image:
      "https://media.base44.com/images/public/6ad28bcb380bea260deef658/4e1b2885f_generated_2e1d2bdb.png",
    description:
      "Batería portátil para cargar dispositivos compatibles cuando estás fuera de casa o la oficina.",
    features: [
      "Capacidad anunciada de 10 000 mAh",
      "Salida USB para conectar dispositivos",
      "Diseño compacto y fácil de transportar",
    ],
    price: 12900,
    discount: 10,
    promoPrice: 11610,
  },
  {
    id: "EC-CH-002",
    code: "EC-CH-002",
    name: "Cargador rápido Voltix 20W",
    category: "Cargadores",
    image:
      "https://media.base44.com/images/public/6ad28bcb380bea260deef658/ebf12bbd5_generated_8d53178d.png",
    description:
      "Cargador compacto para dispositivos compatibles que buscan una carga más rápida.",
    features: [
      "Potencia máxima anunciada de 20 W",
      "Puerto USB-C",
      "Diseño compacto para llevar a cualquier lado",
    ],
    price: 7500,
    discount: 10,
    promoPrice: 6750,
  },
  {
    id: "EC-CB-003",
    code: "EC-CB-003",
    name: "Cable FlexiCharge USB-C",
    category: "Cables",
    image:
      "https://media.base44.com/images/public/6ad28bcb380bea260deef658/f734c95c0_generated_d99a3309.png",
    description:
      "Cable para cargar dispositivos compatibles con conectores USB-C en ambos extremos.",
    features: [
      "Conectores USB-C en ambos extremos",
      "Longitud propuesta de un metro",
      "Recubrimiento flexible para uso diario",
    ],
    price: 3500,
    discount: 10,
    promoPrice: 3150,
  },
];

// Formatea un número como colones costarricenses (₡).
export const formatCRC = (value) =>
  "₡" + new Intl.NumberFormat("es-CR", { maximumFractionDigits: 0 }).format(value);