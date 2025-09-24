/**
 * Sample product data for the catalog
 * In a real application, this would come from an API
 */
export const sampleProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life",
    price: 299.99,
    category: "Electronics",
    brand: "AudioTech",
    rating: 4.5,
    reviews: 1247,
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    tags: ["wireless", "bluetooth", "noise-cancelling", "premium"]
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable, sustainable cotton t-shirt in various colors",
    price: 29.99,
    category: "Clothing",
    brand: "EcoWear",
    rating: 4.2,
    reviews: 856,
    inStock: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    tags: ["organic", "cotton", "sustainable", "comfortable"]
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with GPS, heart rate monitoring, and more",
    price: 199.99,
    category: "Electronics",
    brand: "FitTrack",
    rating: 4.3,
    reviews: 2103,
    inStock: false,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    tags: ["fitness", "smart", "gps", "health"]
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug Set",
    description: "Handcrafted ceramic mugs perfect for your morning coffee",
    price: 49.99,
    category: "Home & Kitchen",
    brand: "CraftWare",
    rating: 4.7,
    reviews: 432,
    inStock: true,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
    tags: ["ceramic", "handcrafted", "coffee", "kitchen"]
  },
  {
    id: 5,
    name: "Professional Chef Knife",
    description: "High-carbon stainless steel knife for professional cooking",
    price: 159.99,
    category: "Home & Kitchen",
    brand: "ChefPro",
    rating: 4.8,
    reviews: 1876,
    inStock: true,
    image: "https://images.unsplash.com/photo-1593618998160-e34014ad9a7b?w=300&h=300&fit=crop",
    tags: ["chef", "knife", "stainless-steel", "professional"]
  },
  {
    id: 6,
    name: "Vintage Denim Jacket",
    description: "Classic vintage-style denim jacket with modern fit",
    price: 89.99,
    category: "Clothing",
    brand: "RetroStyle",
    rating: 4.1,
    reviews: 674,
    inStock: true,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    tags: ["vintage", "denim", "jacket", "classic"]
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices",
    price: 39.99,
    category: "Electronics",
    brand: "PowerTech",
    rating: 4.4,
    reviews: 923,
    inStock: true,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",
    tags: ["wireless", "charging", "qi", "fast"]
  },
  {
    id: 8,
    name: "Yoga Mat Premium",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    price: 69.99,
    category: "Sports & Fitness",
    brand: "ZenFlow",
    rating: 4.6,
    reviews: 1532,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
    tags: ["yoga", "mat", "eco-friendly", "non-slip"]
  },
  {
    id: 9,
    name: "Minimalist Desk Lamp",
    description: "Adjustable LED desk lamp with USB charging port",
    price: 79.99,
    category: "Home & Kitchen",
    brand: "ModernLight",
    rating: 4.3,
    reviews: 567,
    inStock: false,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    tags: ["desk", "lamp", "led", "usb", "minimalist"]
  },
  {
    id: 10,
    name: "Running Shoes Pro",
    description: "Lightweight running shoes with advanced cushioning technology",
    price: 129.99,
    category: "Sports & Fitness",
    brand: "RunFast",
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    tags: ["running", "shoes", "lightweight", "cushioning"]
  },
  {
    id: 11,
    name: "Leather Wallet",
    description: "Genuine leather wallet with RFID protection",
    price: 59.99,
    category: "Accessories",
    brand: "LeatherCraft",
    rating: 4.4,
    reviews: 789,
    inStock: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    tags: ["leather", "wallet", "rfid", "genuine"]
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    description: "Waterproof portable speaker with 12-hour battery life",
    price: 89.99,
    category: "Electronics",
    brand: "SoundWave",
    rating: 4.2,
    reviews: 1456,
    inStock: true,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    tags: ["bluetooth", "speaker", "waterproof", "portable"]
  }
];

/**
 * Get unique categories from products
 */
export const getCategories = () => {
  const categories = [...new Set(sampleProducts.map(product => product.category))];
  return categories.sort();
};

/**
 * Get unique brands from products  
 */
export const getBrands = () => {
  const brands = [...new Set(sampleProducts.map(product => product.brand))];
  return brands.sort();
};

/**
 * Get price range from products
 */
export const getPriceRange = () => {
  const prices = sampleProducts.map(product => product.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};