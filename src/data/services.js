
/**
 * src/data/services.js
 * Services offered by Kalai's Beauty & Academy,
 * grouped by category.
 * img dir: /src/assets/images/bridal/bridal-makeup-styling.webp
 */

export const serviceCategories = [
  {
    id: "skin-care",
    name: "Beauty & Skin Care",
    description: "Personal grooming and skincare services.",
    services: [
      {
        id: "eyebrow-threading",
        name: "Eyebrow Threading",
        summary: "Eyebrow shaping for a neat, defined look.",
        enquiryLabel: "Ask about eyebrow threading",
      },
      {
        id: "facials",
        name: "Facials",
        summary: "Facial treatments for your skincare routine.",
        enquiryLabel: "Ask about facials",
      },
      {
        id: "peel-treatment",
        name: "Peel Treatment",
        summary: "Ask about available peel treatments and suitability.",
        enquiryLabel: "Ask about peel treatment",
      },
      {
        id: "waxing",
        name: "Waxing",
        summary: "Waxing services for personal grooming.",
        enquiryLabel: "Ask about waxing",
      },
      {
        id: "hand-leg-polishing",
        name: "Hand and Leg Polishing",
        summary: "Beauty polishing treatments for hands and legs.",
        enquiryLabel: "Ask about hand and leg polishing",
      },
    ],
  },

  {
    id: "hair",
    name: "Hair Care & Styling",
    description: "Haircuts, colouring, treatments and styling.",
    services: [
      {
        id: "haircuts",
        name: "Basic to Advanced Haircuts",
        summary: "Haircuts and styling to suit your preferred look.",
        enquiryLabel: "Ask about haircuts",
      },
      {
        id: "hair-coloring",
        name: "Hair Coloring",
        summary: "Hair colouring services to refresh your look.",
        enquiryLabel: "Ask about hair coloring",
      },
      {
        id: "global-colour",
        name: "Global Colour",
        summary: "All-over hair colouring for a consistent finish.",
        enquiryLabel: "Ask about global colour",
      },
      {
        id: "fashion-colour",
        name: "Fashion Colour",
        summary: "Fashion-forward hair colour options.",
        enquiryLabel: "Ask about fashion colour",
      },
      {
        id: "hair-smoothening",
        name: "Hair Smoothening",
        summary: "Hair smoothening for a sleek, polished look.",
        enquiryLabel: "Ask about hair smoothening",
      },
      {
        id: "keratin-treatment",
        name: "Hair Keratin Treatment",
        summary: "Keratin hair treatment options.",
        enquiryLabel: "Ask about keratin treatment",
      },
      {
        id: "botox-smoothening",
        name: "Botox Smoothening",
        summary: "Hair treatment to improve its look and feel.",
        enquiryLabel: "Ask about botox smoothening",
      },
      {
        id: "hair-extension",
        name: "Hair Extension",
        summary: "Hair extensions to create your desired hairstyle.",
        enquiryLabel: "Ask about hair extensions",
      },
      {
        id: "hair-do",
        name: "Hair Do",
        summary: "Hairstyling for weddings and special occasions.",
        enquiryLabel: "Ask about hairstyling",
      },
    ],
  },

  {
    id: "nails",
    name: "Nail Care",
    description: "Hand, foot and nail grooming.",
    services: [
      {
        id: "manicure",
        name: "Manicure",
        summary: "Hand and nail care for a polished finish.",
        enquiryLabel: "Ask about manicure",
      },
      {
        id: "pedicure",
        name: "Pedicure",
        summary: "Foot care and grooming.",
        enquiryLabel: "Ask about pedicure",
      },
      {
        id: "nail-art",
        name: "Nail Art",
        summary: "Decorative nail designs to complement your style.",
        enquiryLabel: "Ask about nail art",
      },
    ],
  },

  {
    id: "bridal",
    name: "Bridal & Occasion Makeup",
    description: "Makeup and styling for your special moments.",
    services: [
      {
        id: "bridal-makeup",
        name: "Bridal Makeup Package",
        summary: "Bridal makeup and styling for your wedding day.",
        enquiryLabel: "Ask about bridal makeup",
      },
      {
        id: "basic-makeup",
        name: "Basic Makeup",
        summary: "Makeup for everyday and special occasions.",
        enquiryLabel: "Ask about basic makeup",
      },
      {
        id: "hd-makeup",
        name: "HD Makeup",
        summary: "HD makeup for a camera-ready look.",
        enquiryLabel: "Ask about HD makeup",
      },
      {
        id: "non-hd-makeup",
        name: "Non-HD Makeup",
        summary: "Makeup styling for your preferred occasion.",
        enquiryLabel: "Ask about non-HD makeup",
      },
      {
        id: "party-makeup",
        name: "Party Makeup",
        summary: "Makeup for parties and celebrations.",
        enquiryLabel: "Ask about party makeup",
      },
      {
        id: "baby-shower-makeover",
        name: "Baby Shower Makeover",
        summary: "Makeup and styling for baby showers.",
        enquiryLabel: "Ask about baby shower makeup",
      },
      {
        id: "puberty-function-makeup",
        name: "Puberty Function Makeup",
        summary: "Makeup and styling for puberty ceremonies.",
        enquiryLabel: "Ask about function makeup",
      },
      {
        id: "bridesmaid-makeover",
        name: "Bridesmaid Makeover",
        summary: "Makeup and styling for bridesmaids.",
        enquiryLabel: "Ask about bridesmaid makeup",
      },
      {
        id: "waterproof-makeover",
        name: "Waterproof Makeover",
        summary: "Makeup options designed for longer-lasting wear.",
        enquiryLabel: "Ask about waterproof makeup",
      },
      {
        id: "glossy-look-makeover",
        name: "Glossy Look Makeover",
        summary: "A radiant, glossy makeup look.",
        enquiryLabel: "Ask about glossy makeup",
      },
      {
        id: "saree-pre-pleating",
        name: "Saree Pre-Pleating",
        summary: "Saree pleating to help you get ready for an event.",
        enquiryLabel: "Ask about saree pleating",
      },
    ],
  },
];

// Flat list for pages or components that need all services.
export const services = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    category: category.id,
  }))
);

// Featured services shown on the home page.
const featuredIds = [
  "bridal-makeup",
  "haircuts",
  "facials",
  "party-makeup",
  "eyebrow-threading",
  "pedicure",
];

export const featuredServices = services.filter((service) =>
  featuredIds.includes(service.id)
);
