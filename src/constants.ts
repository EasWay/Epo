import { MenuItem, Event, RestaurantInfo, Review } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Epo's Bar & Grill",
  address: {
    street: "House No. 8, 8th Lane, Osu RE",
    city: "Accra",
    region: "Greater Accra",
    landmark: "Near the Osu Fire Station"
  },
  phone: "+233 24 276 6870",
  email: "hello@epos-osu.com",
  hours: {
    mon_sat: "11:00 AM – 4:00 AM",
    sun: "2:00 PM – 2:30 AM"
  },
  socials: {
    instagram: "https://www.instagram.com/eposit_bar_osu/",
    facebook: "https://www.facebook.com/epososu/"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Beef Sauce (Standard)",
    description: "Our signature dish. Sliced beef sautéed with green peppers and onions in a savory soy-based sauce.",
    price: "GH₵ 75.00",
    category: "Chinese-Fusion",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "1b",
    name: "Beef Sauce (Large)",
    description: "A larger portion of our signature sliced beef sauce.",
    price: "GH₵ 110.00",
    category: "Chinese-Fusion",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Assorted Fried Rice",
    description: "Fried rice prepared with eggs, beef strips, chicken, and sliced sausages.",
    price: "GH₵ 85.00",
    category: "Chinese-Fusion",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Fried Gizzards",
    description: "Seasoned gizzards fried and tossed in a spicy pepper and onion mix.",
    price: "GH₵ 60.00",
    category: "Ghanaian",
    image: "https://images.unsplash.com/photo-1562967914-6c827383d944?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Grilled Tilapia",
    description: "Tilapia seasoned with local spices and grilled over charcoal. Served with Banku or Yam Chips.",
    price: "GH₵ 120.00",
    category: "Ghanaian",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    name: "Assorted Jollof Rice",
    description: "Tomato-based jollof rice served with chicken, beef, and mixed vegetables.",
    price: "GH₵ 80.00",
    category: "Ghanaian",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "Chicken Spring Rolls (4pcs)",
    description: "Crispy rolls filled with minced chicken and vegetables. Served with a dipping sauce.",
    price: "GH₵ 45.00",
    category: "Chinese-Fusion",
    image: "https://images.unsplash.com/photo-1544333346-6aa334685c1c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "8",
    name: "Samosas (4pcs)",
    description: "Golden fried pastries with spiced meat filling.",
    price: "GH₵ 40.00",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce7d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "9",
    name: "Grilled Chicken",
    description: "Quarter chicken seasoned with local herbs and grilled.",
    price: "GH₵ 65.00",
    category: "Ghanaian",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "10",
    name: "Extra Banku (2 balls)",
    description: "Traditional fermented corn/cassava dough.",
    price: "GH₵ 20.00",
    category: "Sides"
  },
  {
    id: "11",
    name: "Fried Yam",
    description: "Crispy deep-fried yam chips.",
    price: "GH₵ 30.00",
    category: "Sides"
  },
  {
    id: "12",
    name: "Club Beer (Large)",
    description: "Chilled bottle of local Ghanaian lager.",
    price: "GH₵ 28.00",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "13",
    name: "Guinness (Large)",
    description: "Rich, dark stout.",
    price: "GH₵ 32.00",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Kweku A.",
    comment: "Still the best beef sauce in Accra after all these years. 8th Lane wouldn't be the same without Epo's.",
    rating: 5
  },
  {
    id: "r2",
    name: "Naa Ayeley",
    comment: "The Assorted Rice is always fresh. Perfect for late-night cravings.",
    rating: 4
  },
  {
    id: "r3",
    name: "David M.",
    comment: "No-frills, just great food. The gizzards are a must-try.",
    rating: 5
  }
];

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Friday Nights at Epo's",
    description: "Join us every Friday for music and drinks in a relaxed outdoor setting.",
    date: "Fridays, from 11 PM",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Midweek Specials",
    description: "Special offers on selected menu items every Wednesday evening.",
    date: "Wednesdays, All Night",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1555396273-367ea474fb73?auto=format&fit=crop&q=80&w=1200",
    title: "Osu Evening Set-up",
    category: "Ambiance"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1200",
    title: "Signature Beef Sauce",
    category: "Food"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    title: "Assorted Fried Rice",
    category: "Food"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=1200",
    title: "Charcoal Grilled Tilapia",
    category: "Food"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200",
    title: "8th Lane Crowd",
    category: "Ambiance"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    title: "Chilled Drinks",
    category: "Drinks"
  }
];
