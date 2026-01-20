export const products = [
  {
    id: 1,
    name: 'Bike Cleaner',
    priceRetail: 6.00,
    priceWholesale: 3.43,
    wholesaleTiers: [
      { minQty: 12, price: 3.08 },
      { minQty: 25, price: 2.98 }
    ],
    category: 'Limpieza',
    image: 'images/Bike Cleaner.png',
    description: 'Limpiador especializado para bicicletas, elimina suciedad y barro.'
  },
  {
    id: 2,
    name: 'Bio Degreaser',
    priceRetail: 6.00,
    priceWholesale: 3.43,
    wholesaleTiers: [
      { minQty: 12, price: 3.08 },
      { minQty: 25, price: 2.98 }
    ],
    category: 'Limpieza',
    image: 'images/BioDegreaser.png',
    description: 'Desengrasante biodegradable potente para cadenas y transmisiones.'
  },
  {
    id: 3,
    name: 'Biolube Dry',
    priceRetail: 7.00,
    priceWholesale: 3.32,
    wholesaleTiers: [
      { minQty: 12, price: 2.99 },
      { minQty: 25, price: 2.89 }
    ],
    category: 'Lubricantes',
    image: 'images/Biolube Dry.png',
    description: 'Lubricante para condiciones secas, mantiene la cadena limpia.'
  },
  {
    id: 4,
    name: 'Biolube Wet',
    priceRetail: 7.00,
    priceWholesale: 3.32,
    wholesaleTiers: [
      { minQty: 12, price: 2.99 },
      { minQty: 25, price: 2.89 }
    ],
    category: 'Lubricantes',
    image: 'images/Biolube Wet.png',
    description: 'Lubricante para condiciones húmedas, resistente al agua.'
  },
  {
    id: 5,
    name: 'Desoxidante',
    priceRetail: 6.00,
    priceWholesale: 2.17,
    wholesaleTiers: [
      { minQty: 12, price: 1.96 },
      { minQty: 25, price: 1.89 }
    ],
    category: 'Mantenimiento',
    image: 'images/Desoxidante.png',
    description: 'Elimina el óxido y protege las partes metálicas.'
  },
  {
    id: 6,
    name: 'Scream Cleaner',
    priceRetail: 5.00,
    priceWholesale: 2.17,
    wholesaleTiers: [
      { minQty: 12, price: 1.96 },
      { minQty: 25, price: 1.89 }
    ],
    category: 'Limpieza',
    image: 'images/Scream Cleaner.png',
    description: 'Limpiador de alto rendimiento para todo tipo de superficies.'
  },
  {
    id: 7,
    name: 'Silicon Shine',
    priceRetail: 6.00,
    priceWholesale: 3.43,
    wholesaleTiers: [
      { minQty: 12, price: 3.26 },
      { minQty: 25, price: 2.98 }
    ],
    category: 'Acabados',
    image: 'images/Silicon Shine.png',
    description: 'Deja un acabado brillante y protege contra la suciedad.'
  },
  {
    id: 8,
    name: 'Tubeless Sealant',
    priceRetail: 18.00,
    priceWholesale: 9.80,
    wholesaleTiers: [], // Kept as placeholder
    category: 'Selladores',
    image: 'images/Tubeeles Sealeant.png',
    description: 'Sellador para llantas tubeless, repara pinchazos al instante.'
  },
  {
    id: 9,
    name: "Wash O'Mango",
    priceRetail: 5.00,
    priceWholesale: 2.17,
    wholesaleTiers: [
      { minQty: 12, price: 1.96 },
      { minQty: 25, price: 1.89 }
    ],
    category: 'Limpieza',
    image: "images/Wash O'Mango.png",
    description: 'Jabón concentrado con aroma a mango para un lavado profundo.'
  },
  {
    id: 10,
    name: 'Wash Tutti',
    priceRetail: 5.00,
    priceWholesale: 2.17,
    wholesaleTiers: [
      { minQty: 12, price: 1.96 },
      { minQty: 25, price: 1.89 }
    ],
    category: 'Limpieza',
    image: 'images/Wash Tutti.png',
    description: 'Jabón concentrado con aroma a frutas para tu bicicleta.'
  },
  {
    id: 11,
    name: 'Liquide Socks',
    priceRetail: 4.99,
    priceWholesale: 4.99,
    priceOriginal: 8.99,
    wholesaleTiers: [],
    category: 'Ropa',
    image: 'images/Liquide Socks.jpg',
    description: 'Calcetines técnicos de alto rendimiento. Compresión precisa, máxima transpirabilidad y el estilo audaz de Liquide para dejar huella en cada pedalada.'
  },
  {
    id: 12,
    name: 'Gorra Liquide',
    priceRetail: 9.99,
    priceWholesale: 9.99,
    priceOriginal: 18.99,
    wholesaleTiers: [],
    category: 'Ropa',
    image: 'images/Liquide Cap.jpg',
    images: ['images/Liquide Cap.jpg', 'images/Liquide Cap Lifestyle.jpg'],
    description: 'Gorra premium con diseño estructurado y el estilo inconfundible de Liquide. Cuenta con un parche bordado de alta calidad que resalta nuestra identidad en cada detalle. Perfecta para el post-ride o el uso diario.'
  },
  {
    id: 13,
    name: 'Gorra Cat Liquide',
    priceRetail: 9.99,
    priceWholesale: 9.99,
    priceOriginal: 18.99,
    wholesaleTiers: [],
    category: 'Ropa',
    image: 'images/Liquide Cap Red Cat.png',
    description: 'Gorra premium con diseño estructurado y el audaz parche del gato Liquide. Calidad superior y estilo único para destacar en cualquier lugar.'
  },
  {
    id: 14,
    name: 'Gorra Lightning Liquide',
    priceRetail: 9.99,
    priceWholesale: 9.99,
    priceOriginal: 18.99,
    wholesaleTiers: [],
    category: 'Ropa',
    image: 'images/Liquide Cap Pink Lightning.jpg',
    images: ['images/Liquide Cap Pink Lightning.jpg', 'images/Liquide Cap Pink Lightning Lifestyle.jpg'],
    description: 'Gorra premium color rosa vibrante con el parche Lightning de Liquide. Diseñada para quienes no temen destacar, combina frescura y el estilo técnico que nos caracteriza.'
  }
];
