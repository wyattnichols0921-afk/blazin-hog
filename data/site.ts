export type NavItem = {
  href: string;
  label: string;
};

export type FeaturedItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategoryData = {
  title: string;
  description: string;
  items: MenuItem[];
};

export type LocationStop = {
  day: string;
  venue: string;
  address: string;
  hours: string;
  note: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
];

export const featuredItems: FeaturedItem[] = [
  {
    name: "Philly & Wings",
    description:
      "One of the most-ordered plates on the flyer, built for a full meal with big flavor.",
    price: "$15.99",
    tag: "Most Ordered",
  },
  {
    name: "1/2 Slab Rib Dinner",
    description:
      "A barbecue dinner plate served with two sides and a generous half slab of ribs.",
    price: "$18.99",
    tag: "BBQ Dinner",
  },
  {
    name: "Chicken Philly Combo",
    description:
      "Chicken Philly served as a combo and listed with fries on the current menu.",
    price: "$12.99",
    tag: "Combo",
  },
  {
    name: "Full Slab",
    description:
      "A full slab of ribs from the festival menu for the serious rib crowd.",
    price: "$29.99",
    tag: "Ribs",
  },
];

export const menuCategories: MenuCategoryData[] = [
  {
    title: "Most Ordered",
    description:
      "The flyer calls these out as the most ordered picks for the event.",
    items: [
      {
        name: "Rib Dinner",
        description: "A customer favorite from the most-ordered section of the menu.",
        price: "$18.99",
      },
      {
        name: "Philly & Wings",
        description: "A popular combo plate featured on the festival flyer.",
        price: "$15.99",
      },
    ],
  },
  {
    title: "Combos",
    description:
      "Combo meals served with fries, just like the printed menu says.",
    items: [
      {
        name: "Titletown",
        description: "Combo basket served with fries.",
        price: "$9.99",
      },
      {
        name: "Chicken Tenders",
        description: "Chicken tenders combo served with fries.",
        price: "$9.99",
      },
      {
        name: "Slamburger",
        description: "Single slamburger combo served with fries.",
        price: "$9.99",
      },
      {
        name: "Double Slamburger",
        description: "Double slamburger combo served with fries.",
        price: "$11.99",
      },
      {
        name: "Chicken Philly",
        description: "Chicken Philly combo served with fries.",
        price: "$12.99",
      },
      {
        name: "Philly Cheesesteak Combo",
        description: "Classic Philly cheesesteak combo served with fries.",
        price: "$13.99",
      },
    ],
  },
  {
    title: "Favorites",
    description:
      "House favorites highlighted on the flyer for quick ordering.",
    items: [
      {
        name: "Philly & Wings",
        description: "A favorite pairing and one of the highlighted best sellers.",
        price: "$15.99",
      },
      {
        name: "Philly & Slamburger",
        description: "A loaded favorite for guests wanting two heavy hitters together.",
        price: "$14.99",
      },
      {
        name: "Blazin Nasty Fries",
        description: "Specialty fries featured in the favorites section.",
        price: "$10.99",
      },
    ],
  },
  {
    title: "BBQ Dinners",
    description:
      "Dinner plates listed with two sides on the festival menu.",
    items: [
      {
        name: "1/2 Slab Rib Dinner",
        description: "Half slab rib dinner served with two sides.",
        price: "$18.99",
      },
      {
        name: "1/2 Chicken Dinner",
        description: "Half chicken dinner served with two sides.",
        price: "$13.99",
      },
      {
        name: "Smoked Sausage Dinner",
        description: "Smoked sausage dinner served with two sides.",
        price: "$10.99",
      },
      {
        name: "Pulled Pork Dinner",
        description: "Pulled pork dinner served with two sides.",
        price: "$10.99",
      },
      {
        name: "Nasty Pork Dinner",
        description: "Nasty pork dinner served with two sides.",
        price: "$11.99",
      },
      {
        name: "Pork Chop Dinner",
        description: "Pork chop dinner served with two sides.",
        price: "$12.99",
      },
    ],
  },
  {
    title: "Ribs",
    description:
      "Straight rib orders from the flyer for customers who want ribs by the slab.",
    items: [
      {
        name: "Full Slab",
        description: "Full slab of ribs.",
        price: "$29.99",
      },
      {
        name: "Half Slab",
        description: "Half slab of ribs.",
        price: "$14.99",
      },
    ],
  },
  {
    title: "Sides",
    description:
      "Side choices shown on the current flyer. Prices were not listed on the image.",
    items: [
      {
        name: "Mac & Cheese",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Collard Greens",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Baked Beans",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Coleslaw",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Potato Salad",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Fried Okra",
        description: "Available side choice.",
        price: "See store",
      },
      {
        name: "Fries",
        description: "Available side choice.",
        price: "See store",
      },
    ],
  },
  {
    title: "Festival Special",
    description:
      "Seasonal festival special featured on the printed menu.",
    items: [
      {
        name: "Blueberry Lemonade",
        description: "Festival special drink featured on the flyer.",
        price: "Ask for price",
      },
    ],
  },
];

export const weeklyLocations: LocationStop[] = [
  {
    day: "Tuesday",
    venue: "Riverside Office Commons",
    address: "214 Foundry Way, Charleston, SC",
    hours: "11:00 AM - 2:00 PM",
    note: "Lunch rush menu plus brisket by the pound until sold out.",
  },
  {
    day: "Wednesday",
    venue: "North Market Brewery Yard",
    address: "88 Mason Street, Charleston, SC",
    hours: "5:00 PM - 9:00 PM",
    note: "Live music night with late service and rib specials.",
  },
  {
    day: "Friday",
    venue: "Lowcountry Makers Market",
    address: "17 Harbor Lane, Mount Pleasant, SC",
    hours: "12:00 PM - 7:00 PM",
    note: "Full menu all day with family packs after 4 PM.",
  },
  {
    day: "Saturday",
    venue: "Battery Point Food Truck Park",
    address: "301 Bayfront Drive, Charleston, SC",
    hours: "11:00 AM - 8:00 PM",
    note: "Weekend signature menu and catering pickup window.",
  },
];

export const siteDetails = {
  name: "Blazin Hog",
  phone: "(229) 531-0742",
  email: "kierra_belzes@yahoo.com",
  instagram: "https://instagram.com/blazinhogbbq",
  facebook: "https://facebook.com/blazinhogbbq",
  address: "Serving Charleston, Mount Pleasant, and the surrounding Lowcountry",
  squareCheckoutUrl: "",
};
