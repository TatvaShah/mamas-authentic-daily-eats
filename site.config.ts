import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/eatmadeto/";
const img = (src: string, alt: string) => ({ src, alt });

export const site: SiteConfig = {
  name: "Mama's Authentic Daily Eats",
  tagline: "Real homemade kosher meals, made from scratch every week in Toronto.",
  category: "Weekly kosher meal prep",
  schemaType: "FoodEstablishment",
  area: "Toronto, ON",
  siteUrl: "https://mamas-authentic-daily-eats.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#4a5e39" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Homemade in Toronto",
    headline: "Real food, made from scratch. Every week.",
    subhead: "Pick your meals from this week's menu, DM us by Thursday at 5 PM, and your homemade meals arrive on Sunday. All food is kosher.",
    images: [
      img("/images/spread.jpg", "A week of homemade meals packed and ready"),
      img("/images/meatballs.jpg", "Mama's Meatballs in Marinara over jasmine rice"),
      img("/images/chicken-bowl.jpg", "Spiced Chicken Breast Bowl with sweet potato and green beans"),
    ],
    secondaryCta: { label: "See the meals", href: "#menu" },
  },

  highlights: ["All food is kosher", "New menu every week", "$20 per meal, min. 5 meals", "Sunday GTA delivery or pickup"],

  about: {
    title: "Hi, I'm Yael",
    body: [
      "I've been cooking my whole life, for my family, for the people I love, and for anyone who sits at my table. Now I'm cooking for yours.",
      "Every week I make a fresh batch of homemade meals from scratch with real ingredients. You pick your meals, I cook, you eat. Simple.",
    ],
    image: img("/images/weekly-batch.jpg", "Fresh weekly batch of homemade meals"),
  },

  menu: {
    title: "From Mama's kitchen",
    intro: "The menu changes every week. Here are some favourites that have been on it. Every meal is $20.",
    variant: "cards",
    groups: [
      {
        title: "Mains and soups",
        items: [
          { name: "Mama's Meatballs in Marinara", description: "Oversized homemade beef meatballs slow cooked in a rich, herby tomato marinara with fresh basil, over fluffy jasmine rice.", price: "$20", image: img("/images/meatballs.jpg", "Meatballs in marinara") },
          { name: "Spiced Chicken Breast Bowl", description: "Chicken breast in a golden spice blend over jasmine rice with caramelised roasted sweet potato and garlic green beans.", price: "$20", image: img("/images/chicken-bowl.jpg", "Spiced chicken breast bowl") },
          { name: "Mama's Stuffed Peppers and Zucchini", description: "Seasoned ground beef and fluffy rice baked in halved bell peppers and zucchini until tender.", price: "$20", image: img("/images/stuffed-peppers.jpg", "Stuffed peppers and zucchini") },
          { name: "Honey Garlic Chicken Wings", description: "Sticky, saucy, glazed in honey garlic and finished with toasted sesame.", price: "$20", image: img("/images/honey-garlic-wings.jpg", "Honey garlic chicken wings") },
          { name: "Rigatoni Bolognese", price: "$20" },
          { name: "Chicken Tenders", description: "With rice, broccoli and a pesto dipping sauce.", price: "$20" },
          { name: "Matza Ball Soup", price: "$20" },
        ],
      },
    ],
    footnote: "$20 per meal, minimum 5 meals. Ask in your DM for this week's full menu.",
  },

  gallery: {
    title: "Fresh from the kitchen",
    items: [
      { src: "/images/spread.jpg", width: 1080, height: 1350, alt: "Sunday deliveries packed and ready", caption: "Sunday deliveries, packed and ready", href: "https://www.instagram.com/p/DW9cBUDDjmD/" },
      { src: "/images/meatballs.jpg", width: 1080, height: 1350, alt: "Meatballs in marinara", caption: "Mama's Meatballs in Marinara", href: "https://www.instagram.com/p/Da00M_8SK3d/" },
      { src: "/images/chicken-bowl.jpg", width: 1080, height: 1350, alt: "Spiced chicken breast bowl", caption: "Spiced Chicken Breast Bowl", href: "https://www.instagram.com/p/Da0zf_lychl/" },
      { src: "/images/stuffed-peppers.jpg", width: 1080, height: 1350, alt: "Stuffed peppers and zucchini", caption: "Stuffed Peppers and Zucchini", href: "https://www.instagram.com/p/DZtDOxNuemc/" },
      { src: "/images/honey-garlic-wings.jpg", width: 1080, height: 1350, alt: "Honey garlic chicken wings", caption: "Honey Garlic Chicken Wings", href: "https://www.instagram.com/p/DYAO0oqDsV_/" },
      { src: "/images/sesame-chicken.jpg", width: 1080, height: 1350, alt: "Sesame chicken strips", caption: "Sesame Chicken Strips", href: "https://www.instagram.com/p/DYAO0oqDsV_/" },
      { src: "/images/grilled-chicken-strips.jpg", width: 1080, height: 1350, alt: "Grilled chicken strips with green beans and rice", caption: "Grilled Chicken Strips", href: "https://www.instagram.com/p/DW9bV8lDj-F/" },
      { src: "/images/weekly-batch.jpg", width: 1080, height: 1350, alt: "This week's homemade batch", caption: "This week's batch", href: "https://www.instagram.com/p/DW9cBUDDjmD/" },
    ],
  },

  instagram: {
    handle: "eatmadeto",
    embeds: ["https://www.instagram.com/p/DfDI4cNH1ny/"],
    embedsTitle: "This week on the menu",
  },

  order: {
    title: "How to order",
    intro: "Pick your meals, send us a DM by Thursday at 5 PM, and we handle the rest. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Mama's Authentic Daily Eats! I would like to order this week.\nSunday date:\nNumber of meals (min. 5):\nMeals I would like (names or numbers):\nDelivery or pickup:\nAny notes:",
    links: [{ label: "DM @eatmadeto on Instagram", href: IG }],
    note: "$20 per meal, minimum 5 meals. Orders close Thursday at 5 PM. GTA delivery is $20, Sunday 4 to 8 PM. Pickup available. E-transfer or cash.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM on Instagram with the meals you want, by Thursday at 5 PM. We cook on the weekend and deliver on Sunday." },
    { q: "How much does it cost?", a: "Every meal is $20, with a minimum of 5 meals. GTA delivery is $20, or you can pick up." },
    { q: "When do meals arrive?", a: "Deliveries go out Sunday between 4 and 8 PM across the GTA." },
    { q: "Is the food kosher?", a: "Yes, all of our food is kosher." },
  ],

  contact: {
    area: "Toronto, Ontario",
    socials: [{ label: "Instagram @eatmadeto", href: IG }],
  },

  seo: {
    title: "Mama's Authentic Daily Eats | Kosher meal prep in Toronto",
    description: "Homemade kosher meals made from scratch every week in Toronto. $20 per meal, Sunday GTA delivery or pickup. Order by Instagram DM by Thursday at 5 PM.",
    keywords: ["kosher meal prep Toronto", "homemade meals Toronto", "weekly meal delivery GTA", "kosher food delivery Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
