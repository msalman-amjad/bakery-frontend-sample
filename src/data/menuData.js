export const initialProducts = [
  {
    id: 1,
    name: "Classic Chocolate Fudge Brownie",
    price: 1200,
    dietary: "Normal",
    category: "Brownies",
    image: "/images/chocolate_fudge_brownie.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-fudgy Belgian dark chocolate brownie with a crackly shiny crust and a dense, melt-in-your-mouth center. Box of 4 thick slabs.",
    pieces: "Box of 4 Slabs",
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    ingredients: "54% Belgian Dark Chocolate, French Butter, Farm-fresh Eggs, Brown Cane Sugar, Dutch Cocoa",
    badge: "Signature"
  },
  {
    id: 2,
    name: "Lotus Biscoff Deluxe Brownie",
    price: 1500,
    dietary: "Normal",
    category: "Brownies",
    image: "/images/lotus_biscoff_brownie.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    description: "Rich fudge brownie base generously swirled with velvety Lotus Biscoff spread and topped with caramelized spiced biscuit crumbs.",
    pieces: "Box of 4 Slabs",
    rating: 5.0,
    reviewsCount: 228,
    isBestSeller: true,
    ingredients: "Lotus Biscoff Spread & Biscuits, Belgian Chocolate, Sweet Cream Butter, Organic Sugar",
    badge: "Fan Favorite"
  },
  {
    id: 3,
    name: "Gluten-Free Salted Caramel Brownie",
    price: 1300,
    dietary: "Gluten-Free",
    category: "Brownies",
    image: "/images/salted_caramel_brownie.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description: "100% gluten-free blanched almond flour brownie swirled with our house-made smoked sea salt caramel drizzle. Dedicated allergen prep.",
    pieces: "Box of 4 Slabs",
    rating: 4.9,
    reviewsCount: 95,
    isBestSeller: false,
    ingredients: "Blanched Almond Flour, 70% Dark Chocolate, Himalayan Pink Salt, House Caramel, Free-range Eggs",
    badge: "100% GF"
  },
  {
    id: 4,
    name: "Classic Cinnamon Rolls (6pk)",
    price: 950,
    dietary: "Normal",
    category: "Cinnamon Rolls",
    image: "/images/classic_cinnamon_rolls.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: "Fluffy, pillowy brioche dough rolled with fragrant Korintje cinnamon and brown sugar, blanketed in silky vanilla cream cheese frosting.",
    pieces: "Pack of 6 Rolls",
    rating: 4.8,
    reviewsCount: 164,
    isBestSeller: true,
    ingredients: "Enriched Flour, Korintje Cinnamon, Philadelphia Cream Cheese, French Butter, Madagascar Vanilla",
    badge: "Warm & Gooey"
  },
  {
    id: 5,
    name: "Dark Chocolate Cinnamon Rolls (6pk)",
    price: 1100,
    dietary: "Normal",
    category: "Cinnamon Rolls",
    image: "/images/dark_chocolate_cinnamon_rolls.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    description: "Decadent twist on our classic roll: folded with Dutch cocoa cinnamon paste and drizzled with molten Belgian dark chocolate ganache.",
    pieces: "Pack of 6 Rolls",
    rating: 4.9,
    reviewsCount: 112,
    isBestSeller: false,
    ingredients: "Brioche Dough, Dark Cocoa Cinnamon Swirl, Belgian Dark Ganache, Cream Glaze",
    badge: "Double Choc"
  },
  {
    id: 6,
    name: "Espresso Chocolate Cake Loaf",
    price: 1200,
    dietary: "Egg-Free",
    category: "Cake Loafs",
    image: "/images/espresso_chocolate_loaf.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "Deeply aromatic 100% egg-free chocolate loaf infused with fresh Arabica espresso shots and topped with rich coffee glaze.",
    pieces: "Full Loaf (~600g)",
    rating: 4.9,
    reviewsCount: 88,
    isBestSeller: false,
    ingredients: "Arabica Espresso Roast, Cultured Greek Yogurt, Dutch Cocoa, Unbleached Flour, Dark Glaze",
    badge: "100% Eggless"
  }
];

export const bakeryInfo = {
  name: "cream.",
  city: "Lahore, Pakistan",
  tagline: "Small-Batch Artisanal Baking with Inclusive Indulgence",
  processingTime: "2-3 Days Fresh Bake Cycle",
  whatsappNumber: "+92 300 1234567",
  whatsappRaw: "923001234567",
  instagramHandle: "@creampk.__",
  email: "orders@cream.pk",
  deliveryAreas: [
    "DHA (Phases 1-9)",
    "Gulberg (I-V)",
    "Model Town",
    "Cantt & Cavalry Ground",
    "Johar Town & Faisal Town",
    "WAPDA Town & Valencia",
    "Askari (All Sectors)",
    "Bahria Town Lahore",
    "Garden Town & Shadman"
  ],
  deliveryFee: 250,
  freeDeliveryThreshold: 3500,
  operatingHours: "Monday - Sunday: 10:00 AM - 10:00 PM (Bake batches dispatched daily at 3 PM)"
};

export const dietaryFilters = [
  { id: 'all', label: 'All Items' },
  { id: 'Normal', label: 'Classic' },
  { id: 'Gluten-Free', label: 'Gluten-Free' },
  { id: 'Egg-Free', label: 'Egg-Free' }
];

export const categoryFilters = [
  { id: 'all', label: 'Full Menu' },
  { id: 'Brownies', label: 'Fudge Brownies' },
  { id: 'Cinnamon Rolls', label: 'Cinnamon Rolls' },
  { id: 'Cake Loafs', label: 'Cake Loafs' }
];

export const customerReviews = [
  {
    id: 1,
    name: "Ayesha Malik",
    area: "DHA Phase 5, Lahore",
    rating: 5,
    date: "2 days ago",
    comment: "The Gluten-Free salted caramel brownie is mind-blowing! You honestly can't tell it's almond flour. So rich and fudgy without being overly sweet.",
    favoriteItem: "Gluten-Free Salted Caramel Brownie"
  },
  {
    id: 2,
    name: "Hamza Tariq",
    area: "Gulberg III, Lahore",
    rating: 5,
    date: "1 week ago",
    comment: "Ordered a box of Lotus Biscoff brownies and cinnamon rolls for our family brunch. Arrived fresh, warm, and the packaging was super aesthetic!",
    favoriteItem: "Lotus Biscoff Deluxe Brownie"
  },
  {
    id: 3,
    name: "Zainab Raza",
    area: "Model Town, Lahore",
    rating: 5,
    date: "2 weeks ago",
    comment: "Finding a genuinely delicious eggless chocolate loaf in Lahore was impossible until cream. The espresso flavor cuts through the rich chocolate perfectly.",
    favoriteItem: "Espresso Chocolate Cake Loaf"
  },
  {
    id: 4,
    name: "Bilal Sheikh",
    area: "Cavalry Ground, Lahore",
    rating: 5,
    date: "3 weeks ago",
    comment: "The chocolate cinnamon rolls are unmatched. 10/10 worth the 2-day processing time because you know it was literally baked that morning.",
    favoriteItem: "Dark Chocolate Cinnamon Rolls"
  }
];

export const faqList = [
  {
    q: "Why is there a 2-3 day order processing time?",
    a: "We bake exclusively in small artisanal batches to guarantee utmost freshness and zero artificial preservatives. We never store old stock; every single box is baked fresh specifically for your order."
  },
  {
    q: "How are Gluten-Free items prepared safely?",
    a: "Our Gluten-Free treats are baked using dedicated blanched almond flour and GF equipment to avoid cross-contamination. While prepared in a facility that also handles wheat, our protocols ensure maximum cleanliness."
  },
  {
    q: "Which areas in Lahore do you deliver to?",
    a: "We deliver across all major Lahore localities including DHA (Phases 1-9), Gulberg, Model Town, Cantt, Johar Town, Bahria Town, and surrounding sectors via temperature-regulated couriers."
  },
  {
    q: "How should I store and reheat my treats?",
    a: "Brownies: Store in an airtight container for up to 5 days or refrigerate for 10 days. Microwave for 15-20 seconds for molten gooeyness. Cinnamon Rolls: Warm for 20-30 seconds before eating for freshly-baked pillowy texture."
  },
  {
    q: "Can I add a custom gift card or greeting note?",
    a: "Yes! When placing your order via our website or WhatsApp, simply enter your custom message in the special notes field, and we will handwrite a complimentary cream. embossed gift card for you."
  }
];
