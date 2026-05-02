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
    id: "m1",
    name: "Assorted Rice",
    description: "Fragrant rice stir-fried with a variety of meats and vegetables.",
    price: "GH₵ 60.00",
    category: "Main Dishes",
    image: "https://i.ibb.co/Mk6tGD0S/Gemini-Generated-Image-nogm6cnogm6cnogm-removebg-preview.png"
  },
  {
    id: "m2",
    name: "Assorted Jollof",
    description: "Traditional Ghanaian jollof rice served with a mix of proteins.",
    price: "GH₵ 65.00",
    category: "Main Dishes",
    image: "https://i.ibb.co/D6K1Wxc/Gemini-Generated-Image-ba1zwdba1zwdba1z-removebg-preview.png"
  },
  {
    id: "m3",
    name: "Chicken Sauce with Rice",
    description: "Tender chicken in a savory sauce served over steamed rice.",
    price: "GH₵ 60.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m4",
    name: "Beef Sauce with Rice",
    description: "Savory beef strips in sauce served with perfectly steamed rice.",
    price: "GH₵ 60.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1534939561126-755ec61b7bf6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m5",
    name: "Beef Spaghetti",
    description: "Stir-fried spaghetti with seasoned beef and vegetables.",
    price: "GH₵ 50.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m6",
    name: "Vegetable Rice",
    description: "Light and healthy rice dish cooked with fresh seasonal vegetables.",
    price: "GH₵ 40.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1512058560550-427499152a05?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m7",
    name: "Beef Rice",
    description: "Flavorful rice cooked with seasoned beef strips.",
    price: "GH₵ 50.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1594968973184-9140fa307f7f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m8",
    name: "Yam/Potato Chips with Chicken",
    description: "Choice of fried yam or potato chips served with spicy grilled chicken.",
    price: "GH₵ 45.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1562607349-590ca5524585?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m9",
    name: "Yam/Potato Chips with Fish",
    description: "Choice of fried yam or potato chips served with crispy fried fish.",
    price: "GH₵ 45.00",
    category: "Main Dishes",
    image: "https://i.ibb.co/5hjrQqYV/Gemini-Generated-Image-vb4k3lvb4k3lvb4k-removebg-preview.png"
  },
  {
    id: "m10",
    name: "Fried Rice with Chicken",
    description: "Classic fried rice served with our signature grilled chicken.",
    price: "GH₵ 45.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m11",
    name: "Jollof Rice with Chicken/Fish",
    description: "Rich jollof rice served with your choice of chicken or fish.",
    price: "GH₵ 50.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m12",
    name: "Fufu & Soup with Goat/Fish",
    description: "Traditional fufu served with light soup and choice of goat meat or fish.",
    price: "GH₵ 50.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1567167691148-7359dc0b5ec1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m13",
    name: "Assorted Spaghetti",
    description: "Spaghetti tossed with a mix of proteins and spices.",
    price: "GH₵ 50.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m14",
    name: "Kelewele",
    description: "Spicy fried plantain cubes - a local favorite.",
    price: "GH₵ 20.00",
    category: "Sides & Appetizers",
    image: "https://images.unsplash.com/photo-1632731513077-d0e5f2a1b9d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m15",
    name: "Spring Roll",
    description: "Crispy vegetable spring rolls served with dipping sauce.",
    price: "GH₵ 10.00",
    category: "Sides & Appetizers",
    image: "https://images.unsplash.com/photo-1544333346-6aa334685c1c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "m16",
    name: "Chicken Wings & Yam Chips",
    description: "Spicy chicken wings paired with crispy fried yam chips.",
    price: "GH₵ 45.00",
    category: "Main Dishes",
    image: "https://images.unsplash.com/photo-1527477021444-42fcca62279f?auto=format&fit=crop&q=80&w=800"
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
    id: "e1",
    title: "Friday Nights at Epo's",
    description: "Join us every Friday for music and drinks in a relaxed outdoor setting.",
    date: "Fridays, from 11 PM",
    image: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/605144687_17981351144930684_3122013107094876192_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzgwMDcyNzE1NTQwMzUyOTUxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=mgStCWGPU8UQ7kNvwHwrBdD&_nc_oc=Adp6xsRqJLEmeFp1IIZtufXGahMyDN45iQ7qwkjA59Y3DqgBJXrvIF2ZP-gW2Rlm13A&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=ifi3Bl-9RUxb1eHmp66zUg&_nc_ss=7a22e&oh=00_Af6Wgw55hJFiZ8at8bnlKQb8avPfsBn-qPnC26rhPrpqgQ&oe=69FAD801"
  },
  {
    id: "e2",
    title: "Midweek Specials",
    description: "Special offers on selected menu items every Wednesday evening.",
    date: "Wednesdays, All Night",
    image: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/621151739_17983523126930684_6059049080461953872_n.jpg?stp=dst-jpg_e35_p828x828_tt6&_nc_cat=108&ig_cache_key=MzgxNjcyMTU4ODE4Nzk5NTUwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzF4MTU2MS5zZHIuQzMifQ%3D%3D&_nc_ohc=Fjb7C_QblfAQ7kNvwFocd87&_nc_oc=AdoqV0YFfwohkjHuNyrO_-xM5yIwgF3XUeNTGzWyD2UeGY4LXWsealChISZWbPcp65I&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=ifi3Bl-9RUxb1eHmp66zUg&_nc_ss=7a22e&oh=00_Af42grntXeGTLciNd8u9VcD1spu_TiDMTctKR-vWp1POiQ&oe=69FAF5CF"
  },
  {
    id: "e3",
    title: "Saturday Soiree",
    description: "Experience the vibrant energy of Osu with our weekend special drinks and appetizers.",
    date: "Saturdays, from 10 PM",
    image: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/627973214_17985215069930684_1409939603931546335_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzgyODM3OTQ1Nzk2NjcwMzY4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDV4MTYwNy5zZHIuQzMifQ%3D%3D&_nc_ohc=4mZhpLAGxkYQ7kNvwEkX0Wq&_nc_oc=Adr18PIKERvjd9qah_3lG_itDXYuXzm3-pDkHPEjwp8DYAZd9WtKkbSDanZqCzgWTfk&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=wc5iApLCAhH5mtwr4qRyUw&_nc_ss=7a22e&oh=00_Af5cpQSkIAqStMXSU2jTRMaotmpt-8ngtH2-cGRN_j2h-Q&oe=69FAFDC1"
  },
  {
    id: "e4",
    title: "Sunday Chill",
    description: "Wind down your weekend with our signature beef sauce and chilled beers.",
    date: "Sundays, from 8 PM",
    image: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/656000345_17989856876930684_8767935086749204904_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzg1NzM0NTA5NTQ2ODc1OTYwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDN4MTYwNC5zZHIuQzMifQ%3D%3D&_nc_ohc=I2kma3DcmggQ7kNvwFL34_u&_nc_oc=AdqUGh_BFrzSGRlf1sDNjcquFJRH4dcxHYfaLfJnaIIACDgmKVo7tGlUDLBZJECp7Ro&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc1-1.fna&_nc_gid=ifi3Bl-9RUxb1eHmp66zUg&_nc_ss=7a22e&oh=00_Af4Lu5DfQBOLDKZuAlX9fLStTnm_ZjmjgSh7yPmrNAzF8A&oe=69FAD60A"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g7",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/571919863_18189230836330728_3719179882045666267_n.jpg?stp=c0.483.1242.1242a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gHntq-Yt36zyQVk6pN13By1ZqAfuoTbxGP3ZTwxQcDX-0s2O_tTrWLfx7ulcA8kh5o&_nc_ohc=yqR-yrldr80Q7kNvwFeM9CS&_nc_gid=rQC0Nolax1bKPP04Is1ehg&edm=AGXveE0BAAAA&ccb=7-5&oh=00_Af77NHCzdK0wYKdsO97BwgOpUh8vrNfg9tpUjGLXsyYTww&oe=69FAD9A1&_nc_sid=522435",
    title: "Epo's Moment 7",
    category: "Legacy"
  },
  {
    id: "g8",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.71878-15/502133810_492494130557240_5680926009727796767_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzE1NTcwMzcyODM1MDUxNzE4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5MDAuc2RyLkMzIn0%3D&_nc_ohc=2Y3lzHyYTgcQ7kNvwFSg6LV&_nc_oc=Adq-RD9BXzJOqs6wiZYKzHBWPjd81qCxG2GFy_aXeP7EeL2ugIbImWsGneGtRaFQDvQ&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af5pCzCWK8thUr1Hg74WCA_ueaXzI45Y3uB1PmuGzzgpEQ&oe=69FADEAA",
    title: "Epo's Moment 8",
    category: "Ambiance"
  },
  {
    id: "g9",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/657693048_18159136096433613_6982896596633084018_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzE1NTcwMjM2Njg3OTUzNzQzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNTZ4MTMyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=LJrWS_EgVtgQ7kNvwHecCqN&_nc_oc=AdpFBP54F_iHJvMrr--7dffvsxIbSfmauxzh0P423XY4Zrn4f6tltDuhsvgkThLXS-U&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af4fvC540wUZG3b92cDI-D8tft5qLutzWJTX6LMBGSRYbw&oe=69FAD5D5",
    title: "Epo's Moment 9",
    category: "Legacy"
  },
  {
    id: "g10",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/657643954_18354983812235365_1657806439964650264_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzE1NTcwMDY5Mzk5ODEyNjY1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMDB4MTAwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=yz7ntczDXQ0Q7kNvwHCrMv3&_nc_oc=Adq-s4EnDef9kKsfryYXZoKJzY5hXgILhwpF86lVojJcV9pZtTHQ1Ibvsr6yRA2iRt8&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc1-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af7Rj8vcPmblhnOTuem1odluA8vlpNDiGwtKi-E7Sn46Cw&oe=69FAD96F",
    title: "Epo's Moment 10",
    category: "Ambiance"
  },
  {
    id: "g11",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/670930544_18577721962030275_7214094575307030421_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzE1NTY5ODEzNTQ2NDE2ODI0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc1MHg3NTAuc2RyLkMzIn0%3D&_nc_ohc=53J_bqgxYgIQ7kNvwERFR_D&_nc_oc=Adrwj2eJH6hTrUqrFIvxA-FI3-WJj-2U6WAKpc6AAkmhJIiH3yaspZZ1FOp5TB8Ij0Y&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af5JGbbsRMWWCYBDYjogPGMpEIv5JY0hLFQQ0EePO7HVLg&oe=69FAD80F",
    title: "Epo's Moment 11",
    category: "Food"
  },
  {
    id: "g12",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/655157672_18095364938009160_5475627701275085260_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzE1NTY5NzYxMTcyMTU2NDY1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjk3MXg5NzEuc2RyLkMzIn0%3D&_nc_ohc=g_nTCQ6ov_gQ7kNvwHpmPyb&_nc_oc=AdoXRqeBgUlscGdCkYgzTGQHRPcVgWVwfx-hhnFrpjeGcKYf7rx2nt_VlYhAyQ7kAtk&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=8&_nc_ht=instagram.facc6-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af6kTmzMUgyioc_SaEPfVzclSnhQkE1QXB57m5djZKJSuA&oe=69FAC3B2",
    title: "Epo's Moment 12",
    category: "Ambiance"
  },
  {
    id: "g13",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/654263694_18107669491656367_2129468065991325574_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY5NzIxNzk4NTQ5ODQxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc1MHg3NTAuc2RyLkMzIn0%3D&_nc_ohc=9SPvQPcaKyoQ7kNvwHXIqks&_nc_oc=AdoFpAgKzrhxOt5LeTCBtbsf_oLvsGIW7Rp4CeBCfrWHqFs18yRTPPeRbW2m4V5W7BA&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc6-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af5eYXfdhlMvGJncMQwfHou44MSm_lkhI4LAsKUliVV0oA&oe=69FAE06B",
    title: "Epo's Moment 13",
    category: "Food"
  },
  {
    id: "g14",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/655966852_18087039482250115_8427582271207827584_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzE1NTY5NDM3NzQzNTAzMjMyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU2NXgzMTkuc2RyLkMzIn0%3D&_nc_ohc=VrIYZcz_CgwQ7kNvwFvvdw9&_nc_oc=AdqX3FWlCQbZ45mkdjYQqvu8xs4Cmik1QdhJENRPvcjGyt11NxO1cgKXXrWfNUEJTO0&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af61pScFwm2owB4BNvyA6lyjwZxwmAeY_MMqNS6oineUcQ&oe=69FAE776",
    title: "Epo's Moment 14",
    category: "Ambiance"
  },
  {
    id: "g15",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/660658123_18387627175085027_1821105897469178184_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzE1NTY5NDE1NjIxMDY5NTI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyM3g0MDguc2RyLkMzIn0%3D&_nc_ohc=4IpqKKoyRusQ7kNvwENJmto&_nc_oc=AdqxWSLiDHik06NakFhROoHRpQyQprvE7eQt2f_X4Q6p1QzZSGRXl2ANjKVNhdZodw0&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6oAx25YUnIBORuJe0cpBU3wbxZmwwL_K9RzhQdYwxwKQ&oe=69FAC384",
    title: "Epo's Moment 15",
    category: "Legacy"
  },
  {
    id: "g16",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/626278039_17938385853014275_6818444633034241487_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY5MzA0OTc3ODI3Njg5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyM3g0MDguc2RyLkMzIn0%3D&_nc_ohc=gyO_Ef-XN1oQ7kNvwGA0M34&_nc_oc=AdpBABIDI2jnKJdP-_X2RFerCxH2gooyB5JEUopJEEK9dcE46gPUx0bXygGZnKIvnHA&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc6-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af7bOuv5HGkFdtv0u_EqPtMy0UT3QsP24XNIpwUSNHaQKA&oe=69FAD261",
    title: "Epo's Moment 16",
    category: "Ambiance"
  },
  {
    id: "g17",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/651327997_17995336487868627_5371461453025230966_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzE1NTY5MDU5MjY3MTI0NTgzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjF4MTI3My5zZHIuQzMifQ%3D%3D&_nc_ohc=NEpuN49-ye0Q7kNvwFrMZs4&_nc_oc=AdrT9iAOeySqbyFETK2YM6s_6rlQQG3VPxv0F_yu_7njpJtEXkzRwsYo-ccyq9rF84I&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc1-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6KbGJKrA4tr7XxeRnXldsBzR1AULMaLiaMVR9gJoj5EQ&oe=69FADC19",
    title: "Epo's Moment 17",
    category: "Food"
  },
  {
    id: "g18",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/656288804_18139172824502952_251403645271452314_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY4ODE4MzgxNTQ2MjIzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExMjV4MTQwNi5zZHIuQzMifQ%3D%3D&_nc_ohc=153Qs5zDOdwQ7kNvwHh2Yev&_nc_oc=AdoERyFrLbIlvv23K4smFCDx0k9pe_dcsRySKPSk2vSx356cKgfs1TdVVr3glboxg9U&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6AE3vxWR4K5XsgngLbvJ8TIbccsvX7NMWcaPvzr3AUKw&oe=69FAEF3B",
    title: "Epo's Moment 18",
    category: "Ambiance"
  },
  {
    id: "g19",
    url: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/655075449_18094809409856543_8873253555326616364_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzE1NTY4NzkyMDY4MTUwMDEwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNzl4MTU5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=UI_ZwmEPcA0Q7kNvwEzfgap&_nc_oc=AdqIi6zj10MF2b1iM_b03ghwbRINGNjXJncmVrYSostzUlO5ZMPQQQENL6xb5ojQOJs&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc1-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6r0AERGPOqA0lXX8JKdD2jneNgOA8vWV6jq3GUo0NisQ&oe=69FAC82D",
    title: "Epo's Moment 19",
    category: "Food"
  },
  {
    id: "g20",
    url: "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/652761235_18093213965121823_1444853052681242048_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY4NzcwNzQwOTM5MjAwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNzl4MTU5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=zbnQENAU67cQ7kNvwFrnhje&_nc_oc=Adoxr84oGCJTXzNss0LDCoz3ahFY27_YDMYtP7Ohxu_hXOYNO4EpBqPPkGHuX1zEhM4&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6kpVmV14JFnarOKI0UeTII5rsE7lJjFtzVMHpdxf3qQQ&oe=69FAD6DE",
    title: "Epo's Moment 20",
    category: "Ambiance"
  }
];
