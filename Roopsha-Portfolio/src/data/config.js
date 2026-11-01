/**
 * Central Personalization Configuration for "A Garden After Midnight" 🌙🌷
 * Easily update text, messages, names, and images here.
 */

// Import Roopsha's photos directly for optimal bundling and cache busting
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.webp';
import photo7 from '../assets/photo7.webp';

export const config = {
  // Recipient Information
  recipientName: "Roopsha",
  websiteTitle: "A Garden After Midnight",
  websiteTagline: "A little world crafted just for you 🌙🌷",
  
  // Section 3: Intro Screen
  intro: {
    badge: "A little secret",
    note1: "A little something for you...",
    note2: "Roopsha, I made a little world for you. 🌷",
    buttonText: "Open your little garden ✨",
    hint: "Click to enter the midnight garden"
  },

  // Section 4: Hero Section
  hero: {
    title: "A Garden After Midnight",
    subtitle: "Some little things are too beautiful not to be shared.",
    dedicatedTo: "Crafted with fond thoughts for Roopsha",
    scrollPrompt: "Explore your little garden",
    moonQuote: "Under the quiet glow of stars and petals"
  },

  // Section 5: Flower compliments (Garden Click to Bloom)
  flowerCompliments: {
    rose: {
      name: "Rose",
      symbol: "🌹",
      color: "#F2B8D0",
      accent: "#E11D48",
      bloomTitle: "Quiet Grace",
      compliment: "Some things are beautiful without even trying. Just like you."
    },
    tulip: {
      name: "Tulip",
      symbol: "🌷",
      color: "#BCA5F5",
      accent: "#9333EA",
      bloomTitle: "Gentle Wonder",
      compliment: "You have a way of making ordinary moments feel special."
    },
    sunflower: {
      name: "Sunflower",
      symbol: "🌻",
      color: "#E8D6A5",
      accent: "#D97706",
      bloomTitle: "Radiant Light",
      compliment: "You bring a little sunshine wherever you go."
    },
    daisy: {
      name: "Daisy",
      symbol: "🌼",
      color: "#FFF5E8",
      accent: "#EAB308",
      bloomTitle: "Soft Sincerity",
      compliment: "There's something genuinely lovely about your simplicity."
    },
    lavender: {
      name: "Lavender",
      symbol: "💜",
      color: "#BCA5F5",
      accent: "#7C3AED",
      bloomTitle: "Serene Magic",
      compliment: "A little calm, a little magic, and a lot of charm."
    },
    cherryBlossom: {
      name: "Cherry Blossom",
      symbol: "🌸",
      color: "#FBCFE8",
      accent: "#EC4899",
      bloomTitle: "Timeless Memory",
      compliment: "Some moments become beautiful memories without us even realizing it."
    }
  },

  // Section 6: Hidden message inside the Sunflower
  sunflowerSecret: {
    title: "A Secret in the Golden Center 🌻",
    message: "Even in the darkest nights, some people feel like sunshine. You're one of them.",
    instruction: "Click the radiant sunflower in the midnight clearing to reveal its secret."
  },

  // Section 8: Personal Photo Gallery — Memories in Bloom
  gallery: {
    title: "Memories in Bloom",
    subtitle: "A few moments frozen under moonlight, waiting to develop...",
    instructions: "Click any Polaroid to view in full bloom",
    photos: [
      {
        id: 1,
        url: photo1,
        fallbackUrl: "/assets/photos/photo1.jpg",
        caption: "A little moment worth keeping.",
        rotation: -2.5,
        aspect: "portrait",
        accent: "Rose Glow"
      },
      {
        id: 2,
        url: photo2,
        fallbackUrl: "/assets/photos/photo2.jpg",
        caption: "Some memories deserve their own little corner.",
        rotation: 2.8,
        aspect: "portrait",
        accent: "Lavender Dusk"
      },
      {
        id: 3,
        url: photo3,
        fallbackUrl: "/assets/photos/photo3.jpg",
        caption: "Simply beautiful.",
        rotation: -1.8,
        aspect: "portrait",
        accent: "Golden Star"
      },
      {
        id: 4,
        url: photo4,
        fallbackUrl: "/assets/photos/photo4.jpg",
        caption: "A quiet glow in a cafe",
        rotation: 2.2,
        aspect: "portrait",
        accent: "Midnight Dream"
      },
      {
        id: 5,
        url: photo5,
        fallbackUrl: "/assets/photos/photo5.jpg",
        caption: "Moments that turn ordinary days into poetry.",
        rotation: -2.0,
        aspect: "portrait",
        accent: "Celestial Petals"
      },
      {
        id: 6,
        url: photo6,
        fallbackUrl: "/assets/photos/photo6.webp",
        caption: "A smile that outshines the moonlight.",
        rotation: 2.5,
        aspect: "portrait",
        accent: "Moonlit Blossom"
      },
      {
        id: 7,
        url: photo7,
        fallbackUrl: "/assets/photos/photo7.webp",
        caption: "Captured under a mall",
        rotation: -1.5,
        aspect: "portrait",
        accent: "Starlight Reverie"
      }
    ]
  },

  // Section 9: Flower Choice Question
  flowerQuestion: {
    heading: "If you could keep just one flower...",
    subtitle: "Which one would you choose?",
    choices: {
      rose: {
        id: "rose",
        name: "Rose",
        icon: "🌹",
        color: "#F2B8D0",
        message: "Classic, elegant, and effortlessly beautiful. A lovely choice."
      },
      sunflower: {
        id: "sunflower",
        name: "Sunflower",
        icon: "🌻",
        color: "#E8D6A5",
        message: "Bright, warm, and full of sunshine. That feels like you."
      },
      tulip: {
        id: "tulip",
        name: "Tulip",
        icon: "🌷",
        color: "#BCA5F5",
        message: "Simple, graceful, and quietly charming."
      },
      daisy: {
        id: "daisy",
        name: "Daisy",
        icon: "🌼",
        color: "#FFF5E8",
        message: "Pure, cheerful, and beautiful in its own way."
      },
      lavender: {
        id: "lavender",
        name: "Lavender",
        icon: "💜",
        color: "#A78BFA",
        message: "Calm, dreamy, and a little mysterious."
      },
      cherryBlossom: {
        id: "cherryBlossom",
        name: "Cherry Blossom",
        icon: "🌸",
        color: "#FBCFE8",
        message: "Delicate, magical, and impossible to forget."
      }
    }
  },

  // Section 10: Personal Letter
  letter: {
    heading: "A Little Note For You",
    subtitle: "Sealed with starlight and wax",
    envelopeLabel: "For Roopsha",
    sealText: "R",
    salutation: "Dear Roopsha,",
    paragraphs: [
      "I wanted to make something a little different for you.",
      "So, I created this tiny garden filled with flowers, little surprises, and a few things I wanted to share.",
      "There's no special occasion behind it. I just thought you deserved something thoughtful and a little different.",
      "I hope this little corner of the internet makes you smile.",
      "Keep blooming, always. 🌷"
    ],
    signoff: "— Someone who wanted to make you smile."
  },

  // Section 11: "One more thing..." Secret Surprise
  secretSurprise: {
    buttonLabel: "One more thing... 👀",
    modalBadge: "A gentle quiet thought",
    message: "Just in case nobody has reminded you today... you're someone worth appreciating. Never forget that. ❤️",
    closeButton: "Close with a smile 🌙"
  },

  // Section 12: Build Your Own Bouquet
  bouquet: {
    heading: "Let's make you a little bouquet.",
    subtitle: "Pick the flowers you'd like to keep.",
    finishButton: "Finish my bouquet ✨",
    resetButton: "Start over",
    emptyNotice: "Please choose at least one flower to weave into your bouquet 🌷",
    finalTitle: "Made of little flowers, just for you. 💐",
    finalSubtitle: "Hope this little garden brings a smile to your face, Roopsha. Keep blooming. 🌷",
    rebuildButton: "Make another bouquet",
    flowers: [
      { id: "pink-rose", name: "Pink Rose", type: "rose", color: "#F472B6", secondary: "#FBCFE8", meaning: "Sweet Grace" },
      { id: "red-rose", name: "Red Rose", type: "rose", color: "#E11D48", secondary: "#FDA4AF", meaning: "Deep Affection" },
      { id: "lavender-tulip", name: "Lavender Tulip", type: "tulip", color: "#C084FC", secondary: "#E9D5FF", meaning: "Elegance" },
      { id: "white-daisy", name: "White Daisy", type: "daisy", color: "#F8FAFC", secondary: "#FEF08A", meaning: "Innocence & Cheer" },
      { id: "sunflower", name: "Sunflower", type: "sunflower", color: "#FBBF24", secondary: "#78350F", meaning: "Pure Warmth" },
      { id: "purple-lavender", name: "Purple Lavender", type: "lavender", color: "#818CF8", secondary: "#C7D2FE", meaning: "Peaceful Serenity" },
      { id: "cherry-blossom", name: "Cherry Blossom", type: "cherryBlossom", color: "#FB7185", secondary: "#FFE4E6", meaning: "Precious Moments" },
    ]
  },

  // Footer & navigation
  footer: {
    note: "Crafted with moonlight, stars, and gentle flowers.",
    dedication: "For Roopsha — May your world always be full of blooming wonder.",
    year: "A Garden After Midnight"
  }
};

export default config;
