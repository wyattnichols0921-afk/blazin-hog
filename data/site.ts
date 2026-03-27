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
    name: "Brisket Plate",
    description:
      "Pepper-crusted brisket with Texas toast, house pickles, and two scratch-made sides.",
    price: "$19",
    tag: "Best Seller",
  },
  {
    name: "Pulled Pork Sandwich",
    description:
      "Slow-smoked pork shoulder, tangy slaw, and ember sauce on a toasted brioche bun.",
    price: "$14",
    tag: "Truck Favorite",
  },
  {
    name: "Smoked Ribs",
    description:
      "St. Louis ribs lacquered with fire glaze and finished over open flame for extra bark.",
    price: "$22",
    tag: "Pit Master Pick",
  },
  {
    name: "Loaded Mac Bowl",
    description:
      "Creamy smoked gouda mac stacked with chopped brisket, crispy onions, and hot honey.",
    price: "$16",
    tag: "Crowd Pleaser",
  },
];

export const menuCategories: MenuCategoryData[] = [
  {
    title: "BBQ Plates",
    description:
      "Built for big appetites with smoked meats, toast, pickles, and your choice of two sides.",
    items: [
      {
        name: "Brisket Plate",
        description: "Sliced prime brisket with black pepper bark and ember jus.",
        price: "$19",
      },
      {
        name: "Smoked Ribs",
        description: "Half rack of ribs with fire glaze and charred lemon.",
        price: "$22",
      },
      {
        name: "Two Meat Plate",
        description: "Choose any two meats with toast, pickles, and two sides.",
        price: "$24",
      },
    ],
  },
  {
    title: "Sandwiches",
    description:
      "Stacked high, sauce optional, and built to eat curbside without losing the crunch.",
    items: [
      {
        name: "Pulled Pork Sandwich",
        description: "Smoked pork, tangy slaw, and cider vinegar mop.",
        price: "$14",
      },
      {
        name: "Brisket Melt",
        description: "Chopped brisket, smoked cheddar, caramelized onions, and mustard aioli.",
        price: "$15",
      },
      {
        name: "Hot Link Stack",
        description: "Snapped beef hot links with peppers, onions, and deep red sauce.",
        price: "$13",
      },
    ],
  },
  {
    title: "Sides",
    description:
      "House-made classics that hold their own next to the smoke and heat.",
    items: [
      {
        name: "Loaded Mac Bowl",
        description: "Smoked gouda mac, brisket bits, crispy onions, and hot honey drizzle.",
        price: "$16",
      },
      {
        name: "Baked Beans",
        description: "Molasses beans with burnt ends and a touch of chipotle.",
        price: "$5",
      },
      {
        name: "Coleslaw",
        description: "Crisp cabbage slaw with buttermilk dressing and cracked pepper.",
        price: "$4",
      },
      {
        name: "Skillet Cornbread",
        description: "Warm honey butter cornbread with a browned edge.",
        price: "$5",
      },
    ],
  },
  {
    title: "Drinks",
    description:
      "Cold staples for long lunch lines, late-night events, and smoky summer weekends.",
    items: [
      {
        name: "Sweet Tea",
        description: "Brewed fresh daily and served ice-cold.",
        price: "$3",
      },
      {
        name: "Lemonade",
        description: "Fresh lemon, cane sugar, and a clean tart finish.",
        price: "$3",
      },
      {
        name: "Arnold Palmer",
        description: "Half tea, half lemonade, full porch energy.",
        price: "$3",
      },
      {
        name: "Bottled Water",
        description: "Cold and ready for the road.",
        price: "$2",
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
