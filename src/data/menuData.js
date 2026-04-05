// ============================================
// RODZINY — Complete Menu Data (V2 Images)
// ============================================

// Use local images from public/images/
const IMAGES = {
  avocadoToast: '/images/optimized/food_avocadotoast_1775236115050.webp',
  brownie: '/images/optimized/food_brownie_1775236260195.webp',
  coffee: '/images/optimized/food_coffee_1775236280008.webp',
  focaccia: '/images/optimized/food_focaccia_1775236295923.webp',
  pasta: '/images/optimized/food_pasta_1775236139751.webp',
  // For items without local images, use unique Unsplash URLs
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  medialunas: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  alfajores: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  cappuccino: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  matcha: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  lasagna: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  gnocchi: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  tortellini: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  mezzelune: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  cappelletti: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  ravioliCalabaza: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  sorrentinos: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  spaghetti: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  tallarines: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  canelonesVerdura: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  carrotCake: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  lemonPie: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  brioche: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  sourdough: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  milkBread: 'https://images.unsplash.com/photo-1598373182307-6141dc76f1a0?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  ravioli: 'https://images.unsplash.com/photo-1551468747-ed2c8a8cf8cb?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  cannelloni: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  coldBrew: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
  orangeJuice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
};

// ============ BREAKFAST & SNACKS ============
export const breakfastItems = [
  // Combos
  {
    id: "b1",
    name: "Combo Clásico",
    description:
      "Tostadas, mermelada casera, jugo de naranja y café con leche para 2 personas",
    price: "$18.500",
    category: "Combos",
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Para 2", "Más vendido"],
  },
  {
    id: "b2",
    name: "Combo Dulce",
    description: "Medialunas, brownie, cheesecake mini y dos bebidas calientes",
    price: "$21.000",
    category: "Combos",
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Para 2", "Dulce"],
  },
  {
    id: "b3",
    name: "Combo Proteico",
    description:
      "Avocado toast, huevos revueltos, yogur con granola y jugo verde",
    price: "$22.500",
    category: "Combos",
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Para 2", "Saludable"],
  },

  // Salados
  {
    id: "b4",
    name: "Avocado Toast",
    description:
      "Pan artesanal sin gluten con palta, huevo poché, semillas y microgreens",
    price: "$8.500",
    category: "Salados",
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Veggie", "Popular"],
  },
  {
    id: "b5",
    name: "Tostadas Proteicas",
    description:
      "Pan de campo con queso crema, salmón ahumado, alcaparras y eneldo",
    price: "$9.800",
    category: "Salados",
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Proteína", "Premium"],
  },
  {
    id: "b6",
    name: "Mbejú",
    description:
      "Tradicional mbejú paraguayo con almidón de mandioca, queso y anís",
    price: "$5.500",
    category: "Salados",
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Tradicional", "Sin gluten"],
  },
  {
    id: "b7",
    name: "Chipá",
    description:
      "Chipá artesanal con queso paraguay, crujiente por fuera y suave por dentro",
    price: "$4.200",
    category: "Salados",
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Tradicional", "Caliente"],
  },
  {
    id: "b8",
    name: "Empanadas (x3)",
    description:
      "Empanadas horneadas con masa sin gluten. Carne, pollo o jamón y queso",
    price: "$7.800",
    category: "Salados",
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Horneadas", "Variedad"],
  },

  // Dulces
  {
    id: "b9",
    name: "Brownie",
    description:
      "Brownie húmedo de chocolate belga con nueces y ganache brillante",
    price: "$5.200",
    category: "Dulces",
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Chocolate", "Más vendido"],
  },
  {
    id: "b10",
    name: "Cheesecake",
    description:
      "Cheesecake cremoso con base de galletitas sin gluten y coulis de frutos rojos",
    price: "$6.800",
    category: "Dulces",
    image: IMAGES.cheesecake,
    tags: ["Cremoso", "Premium"],
  },
  {
    id: "b11",
    name: "Medialunas",
    description:
      "Medialunas artesanales dulces con masa hojaldrada sin gluten, bañadas en almíbar",
    price: "$4.500",
    category: "Dulces",
    image: IMAGES.medialunas,
    tags: ["Dulce", "Artesanal"],
  },
  {
    id: "b12",
    name: "Alfajores (x3)",
    description: "Alfajores de maicena con dulce de leche y coco rallado",
    price: "$5.800",
    category: "Dulces",
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Dulce de leche", "Pack"],
  },

  // Cafetería
  {
    id: "b13",
    name: "Espresso",
    description:
      "Shot doble de café de especialidad, tostado medio, crema perfecta",
    price: "$3.200",
    category: "Cafetería",
    image: IMAGES.coffee,
    tags: ["Clásico"],
  },
  {
    id: "b14",
    name: "Cappuccino",
    description:
      "Espresso doble con leche texturizada y espuma cremosa, arte latte",
    price: "$4.500",
    category: "Cafetería",
    image: IMAGES.cappuccino,
    tags: ["Leche", "Popular"],
  },
  {
    id: "b15",
    name: "Latte",
    description:
      "Café latte suave con leche vaporizada. Disponible con leche de almendra",
    price: "$4.800",
    category: "Cafetería",
    image: IMAGES.coffee,
    tags: ["Suave", "Opción vegana"],
  },
  {
    id: "b16",
    name: "Matcha Latte",
    description: "Matcha premium japonés con leche espumada y un toque de miel",
    price: "$5.500",
    category: "Cafetería",
    image: IMAGES.matcha,
    tags: ["Trending", "Sin café"],
  },
];

export const breakfastCategories = ["Combos", "Salados", "Dulces", "Cafetería"];

// ============ LUNCH & DINNER ============
export const lunchItems = [
  // Pastas Rellenas
  {
    id: "l1",
    name: "Scarpinocc",
    description:
      "Pasta rellena artesanal con queso parmesano añejo, manteca y salvia fresca",
    price: "$14.500",
    category: "Pastas Rellenas",
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Artesanal", "Italiano"],
  },
  {
    id: "l2",
    name: "Mezzelune",
    description: "Medias lunas rellenas de ricota y espinaca con salsa de nuez",
    price: "$13.800",
    category: "Pastas Rellenas",
    image: IMAGES.mezzelune,
    tags: ["Ricota", "Veggie"],
  },
  {
    id: "l3",
    name: "Cappelletti Capresse",
    description:
      "Cappelletti rellenos de mozzarella, tomate seco y albahaca fresca",
    price: "$14.200",
    category: "Pastas Rellenas",
    image: IMAGES.cappelletti,
    tags: ["Capresse", "Más vendido"],
  },
  {
    id: "l4",
    name: "Ravioles de Calabaza",
    description:
      "Ravioles rellenos de calabaza asada, amaretti y nuez moscada con salsa de manteca",
    price: "$13.500",
    category: "Pastas Rellenas",
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Temporada", "Dulce"],
  },
  {
    id: "l5",
    name: "Sorrentinos",
    description:
      "Grandes discos rellenos de jamón y mozzarella con salsa fileto casera",
    price: "$15.000",
    category: "Pastas Rellenas",
    image: IMAGES.sorrentinos,
    tags: ["Clásico", "Abundante"],
  },

  // Pastas Simples
  {
    id: "l6",
    name: "Lasagna",
    description:
      "Lasagna al horno con capas de bolognesa, bechamel y mozzarella gratinada",
    price: "$15.800",
    category: "Pastas Simples",
    image: IMAGES.lasagna,
    tags: ["Al horno", "Más vendido"],
  },
  {
    id: "l7",
    name: "Ñoquis",
    description:
      "Ñoquis de papa artesanales con la salsa que elijas. Suaves y esponjosos",
    price: "$11.500",
    category: "Pastas Simples",
    image: IMAGES.gnocchi,
    tags: ["Clásico", "Elegí tu salsa"],
  },
  {
    id: "l8",
    name: "Spaghetti",
    description:
      "Spaghetti de arroz y maíz con la salsa que elijas. Cocción al dente perfecta",
    price: "$11.000",
    category: "Pastas Simples",
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Sin gluten", "Elegí tu salsa"],
  },
  {
    id: "l9",
    name: "Tallarines",
    description:
      "Tallarines frescos sin gluten hechos con harina de arroz y huevo",
    price: "$11.500",
    category: "Pastas Simples",
    image: IMAGES.tallarines,
    tags: ["Frescos", "Elegí tu salsa"],
  },
  {
    id: "l10",
    name: "Canelones",
    description:
      "Canelones de verdura y ricota gratinados con salsa blanca y parmesano",
    price: "$14.000",
    category: "Pastas Simples",
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Al horno", "Veggie"],
  },
];

export const lunchCategories = ["Pastas Rellenas", "Pastas Simples"];

export const sauces = [
  {
    name: "Bolognesa",
    emoji: "🍖",
    description: "Carne cocida lenta con tomate",
  },
  { name: "Fileto", emoji: "🍅", description: "Tomate casero con albahaca" },
  { name: "Crema", emoji: "🧈", description: "Salsa blanca cremosa" },
  { name: "Pesto", emoji: "🌿", description: "Albahaca, ajo y parmesano" },
  { name: "Rosa", emoji: "🌸", description: "Mezcla de fileto y crema" },
  {
    name: "Cuatro Quesos",
    emoji: "🧀",
    description: "Blend de quesos fundidos",
  },
  {
    name: "Manteca y Salvia",
    emoji: "🧈",
    description: "Manteca dorada con salvia",
  },
  {
    name: "Putanesca",
    emoji: "🫒",
    description: "Tomate, aceitunas y alcaparras",
  },
];

// ============ STORE / FROZEN ============
export const storeItems = [
  // Cakes
  {
    id: "s1",
    name: "Torta Matilda",
    description:
      "Torta de chocolate húmeda con ganache oscuro. Entera para 10 porciones",
    price: "$22.000",
    category: "Tortas",
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Chocolate", "Entera"],
  },
  {
    id: "s2",
    name: "Cheesecake Entera",
    description:
      "Cheesecake New York con base crocante y coulis de frutos rojos",
    price: "$24.500",
    category: "Tortas",
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Premium", "10 porc."],
  },
  {
    id: "s3",
    name: "Lemon Pie",
    description:
      "Tarta de limón con merengue italiano tostado y base de masa sablée",
    price: "$20.000",
    category: "Tortas",
    image: IMAGES.lemonPie,
    tags: ["Cítrico", "Clásico"],
  },
  {
    id: "s4",
    name: "Carrot Cake",
    description:
      "Torta de zanahoria con frosting de queso crema y nueces caramelizadas",
    price: "$21.000",
    category: "Tortas",
    image: IMAGES.carrotCake,
    tags: ["Nueces", "Especiada"],
  },

  // Bread
  {
    id: "s5",
    name: "Pan Brioche",
    description:
      "Pan brioche tierno y esponjoso sin gluten. Ideal para hamburguesas y sándwiches",
    price: "$6.500",
    category: "Panadería",
    image: IMAGES.brioche,
    tags: ["Fresco", "500g"],
  },
  {
    id: "s6",
    name: "Pan de Campo",
    description:
      "Pan de campo rústico cocido en horno de piedra. Miga densa y corteza crujiente",
    price: "$5.800",
    category: "Panadería",
    image: IMAGES.sourdough,
    tags: ["Rústico", "400g"],
  },
  {
    id: "s7",
    name: "Pan Lactal",
    description:
      "Pan lactal de molde sin gluten para todos los días. Suave y versátil",
    price: "$5.200",
    category: "Panadería",
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Diario", "450g"],
  },
  {
    id: "s8",
    name: "Focaccia",
    description:
      "Focaccia artesanal con romero, sal marina y aceite de oliva extra virgen",
    price: "$7.200",
    category: "Panadería",
    image: IMAGES.focaccia,
    tags: ["Hierbas", "Premium"],
  },

  // Frozen Pasta
  {
    id: "s9",
    name: "Ravioles x48",
    description:
      "Pack de 48 ravioles congelados de ricota y espinaca. Listos para hervir",
    price: "$12.800",
    category: "Pastas Congeladas",
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Congelado", "48 un."],
  },
  {
    id: "s10",
    name: "Ñoquis x1kg",
    description:
      "Ñoquis de papa congelados. 1 kilogramo. Solo hervir 3 minutos",
    price: "$9.500",
    category: "Pastas Congeladas",
    image: IMAGES.gnocchi,
    tags: ["Congelado", "1kg"],
  },
  {
    id: "s11",
    name: "Sorrentinos x24",
    description: "Pack de 24 sorrentinos congelados de jamón y mozzarella",
    price: "$14.500",
    category: "Pastas Congeladas",
    image: IMAGES.sorrentinos,
    tags: ["Congelado", "24 un."],
  },
  {
    id: "s12",
    name: "Canelones x12",
    description:
      "Pack de 12 canelones congelados de verdura y ricota, listos para gratinar",
    price: "$13.200",
    category: "Pastas Congeladas",
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format,compress&fit=crop&q=60&fm=webp&w=1024',
    tags: ["Congelado", "12 un."],
  },
];

export const storeCategories = ["Tortas", "Panadería", "Pastas Congeladas"];

// ============ DRINKS ============
export const drinkItems = [
  // Coffee
  {
    id: "d1",
    name: "Espresso Doble",
    description: "Shot doble de café de especialidad",
    price: "$3.200",
    category: "Café",
    image: IMAGES.coffee,
    tags: ["Caliente", "Clásico"],
  },
  {
    id: "d2",
    name: "Flat White",
    description: "Espresso con micro-espuma de leche, textura sedosa",
    price: "$4.600",
    category: "Café",
    image: IMAGES.coffee,
    tags: ["Caliente", "Cremoso"],
  },
  {
    id: "d3",
    name: "Cold Brew",
    description: "Café de extracción en frío 18 horas, suave y refrescante",
    price: "$5.200",
    category: "Café",
    image: IMAGES.coldBrew,
    tags: ["Frío", "Premium"],
  },
  {
    id: "d4",
    name: "Iced Latte",
    description: "Latte helado con leche fría y hielo, option de leche vegetal",
    price: "$5.500",
    category: "Café",
    image: IMAGES.coffee,
    tags: ["Frío", "Popular"],
  },

  // Juices (reusing coffee image just to have art, since we only generated 6 images)
  {
    id: "d5",
    name: "Jugo de Naranja",
    description: "Jugo de naranja recién exprimido, natural 100%",
    price: "$4.800",
    category: "Jugos y Limonada",
    image: IMAGES.orangeJuice,
    tags: ["Natural", "Vitamina C"],
  },
  {
    id: "d6",
    name: "Limonada Clásica",
    description: "Limonada casera con menta fresca y un toque de jengibre",
    price: "$4.200",
    category: "Jugos y Limonada",
    image: IMAGES.coffee,
    tags: ["Refrescante", "Casera"],
  },
  {
    id: "d7",
    name: "Jugo Verde",
    description: "Espinaca, manzana verde, pepino, jengibre y limón",
    price: "$5.500",
    category: "Jugos y Limonada",
    image: IMAGES.coffee,
    tags: ["Detox", "Saludable"],
  },
  {
    id: "d8",
    name: "Smoothie de Frutos Rojos",
    description: "Frutillas, arándanos, banana y yogur natural",
    price: "$6.200",
    category: "Jugos y Limonada",
    image: IMAGES.coffee,
    tags: ["Cremoso", "Antioxidante"],
  },

  // Wine & Cocktails
  {
    id: "d9",
    name: "Malbec (Copa)",
    description: "Vino tinto Malbec argentino, cuerpo medio, notas frutales",
    price: "$6.500",
    category: "Vinos y Cocktails",
    image: IMAGES.coffee,
    tags: ["Tinto", "Argentina"],
  },
  {
    id: "d10",
    name: "Torrontés (Copa)",
    description: "Vino blanco Torrontés aromático, seco y floral",
    price: "$6.000",
    category: "Vinos y Cocktails",
    image: IMAGES.coffee,
    tags: ["Blanco", "Aromático"],
  },
  {
    id: "d11",
    name: "Aperol Spritz",
    description: "Aperol, prosecco y soda con rodaja de naranja",
    price: "$8.500",
    category: "Vinos y Cocktails",
    image: IMAGES.coffee,
    tags: ["Cocktail", "Refrescante"],
  },
  {
    id: "d12",
    name: "Gin Tonic",
    description: "Gin premium, tónica artesanal, botánicos y pepino",
    price: "$9.000",
    category: "Vinos y Cocktails",
    image: IMAGES.coffee,
    tags: ["Cocktail", "Premium"],
  },
];

export const drinkCategories = [
  "Café",
  "Jugos y Limonada",
  "Vinos y Cocktails",
];

// ============ DESSERTS ============
export const dessertItems = [
  {
    id: "de1",
    name: "Brownie con Helado",
    description:
      "Brownie tibio de chocolate belga con helado de vainilla y salsa de chocolate",
    price: "$7.800",
    image: IMAGES.brownie,
    tags: ["Chocolate", "Caliente"],
  },
  {
    id: "de2",
    name: "Carrot Cake",
    description:
      "Porción de torta de zanahoria con frosting de queso crema y nueces",
    price: "$6.500",
    image: IMAGES.brownie,
    tags: ["Especiada", "Nueces"],
  },
  {
    id: "de3",
    name: "Tiramisú",
    description:
      "Tiramisú clásico con mascarpone, café y cacao. Sin gluten garantizado",
    price: "$8.200",
    image: IMAGES.brownie,
    tags: ["Italiano", "Café"],
  },
  {
    id: "de4",
    name: "Flan Casero",
    description:
      "Flan de huevo con caramelo y una cucharada generosa de dulce de leche",
    price: "$5.800",
    image: IMAGES.brownie,
    tags: ["Casero", "Clásico"],
  },
  {
    id: "de5",
    name: "Tarta Vasca",
    description:
      "Cheesecake vasca quemada con exterior caramelizado y centro cremoso",
    price: "$7.500",
    image: IMAGES.brownie,
    tags: ["Trending", "Cremosa"],
  },
  {
    id: "de6",
    name: "Pannacotta",
    description: "Pannacotta de vainilla con coulis de maracuyá y mango",
    price: "$7.200",
    image: IMAGES.brownie,
    tags: ["Italiano", "Frutal"],
  },
];
