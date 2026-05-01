export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Ghanaian' | 'Chinese-Fusion' | 'Drinks' | 'Appetizers' | 'Sides';
  image?: string;
  order?: number;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  order?: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  order?: number;
}

export interface RestaurantInfo {
  name: string;
  address: {
    street: string;
    city: string;
    region: string;
    landmark?: string;
  };
  phone: string;
  email: string;
  hours: {
    mon_sat: string;
    sun: string;
  };
  socials: {
    instagram: string;
    facebook: string;
  };
}
