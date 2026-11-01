/**
 * Flower Data & Botanical Configurations for "A Garden After Midnight"
 */
import config from './config';

export const gardenFlowers = [
  {
    id: "rose",
    name: config.flowerCompliments.rose.name,
    symbol: config.flowerCompliments.rose.symbol,
    accentColor: config.flowerCompliments.rose.color,
    glowColor: "rgba(242, 184, 208, 0.45)",
    stemColor: "#4D7C5D",
    leafColor: "#5E9B73",
    compliment: config.flowerCompliments.rose.compliment,
    bloomTitle: config.flowerCompliments.rose.bloomTitle,
    stemHeight: 180,
    petalCount: 16,
    curvature: -8,
    delay: 0.1
  },
  {
    id: "tulip",
    name: config.flowerCompliments.tulip.name,
    symbol: config.flowerCompliments.tulip.symbol,
    accentColor: config.flowerCompliments.tulip.color,
    glowColor: "rgba(188, 165, 245, 0.45)",
    stemColor: "#4D7C5D",
    leafColor: "#6FA583",
    compliment: config.flowerCompliments.tulip.compliment,
    bloomTitle: config.flowerCompliments.tulip.bloomTitle,
    stemHeight: 195,
    petalCount: 6,
    curvature: 6,
    delay: 0.2
  },
  {
    id: "sunflower",
    name: config.flowerCompliments.sunflower.name,
    symbol: config.flowerCompliments.sunflower.symbol,
    accentColor: config.flowerCompliments.sunflower.color,
    glowColor: "rgba(232, 214, 165, 0.55)",
    stemColor: "#3F6E4E",
    leafColor: "#528762",
    compliment: config.flowerCompliments.sunflower.compliment,
    bloomTitle: config.flowerCompliments.sunflower.bloomTitle,
    isSpecial: true,
    specialHint: "Carries a hidden secret within its golden center",
    stemHeight: 220,
    petalCount: 24,
    curvature: -4,
    delay: 0.3
  },
  {
    id: "daisy",
    name: config.flowerCompliments.daisy.name,
    symbol: config.flowerCompliments.daisy.symbol,
    accentColor: config.flowerCompliments.daisy.color,
    glowColor: "rgba(255, 245, 232, 0.5)",
    stemColor: "#4D7C5D",
    leafColor: "#6FA583",
    compliment: config.flowerCompliments.daisy.compliment,
    bloomTitle: config.flowerCompliments.daisy.bloomTitle,
    stemHeight: 170,
    petalCount: 18,
    curvature: 10,
    delay: 0.4
  },
  {
    id: "lavender",
    name: config.flowerCompliments.lavender.name,
    symbol: config.flowerCompliments.lavender.symbol,
    accentColor: config.flowerCompliments.lavender.color,
    glowColor: "rgba(188, 165, 245, 0.4)",
    stemColor: "#40684E",
    leafColor: "#5A8B6B",
    compliment: config.flowerCompliments.lavender.compliment,
    bloomTitle: config.flowerCompliments.lavender.bloomTitle,
    stemHeight: 185,
    petalCount: 22,
    curvature: -6,
    delay: 0.5
  },
  {
    id: "cherryBlossom",
    name: config.flowerCompliments.cherryBlossom.name,
    symbol: config.flowerCompliments.cherryBlossom.symbol,
    accentColor: config.flowerCompliments.cherryBlossom.color,
    glowColor: "rgba(251, 207, 232, 0.5)",
    stemColor: "#5A4238",
    leafColor: "#68A57D",
    compliment: config.flowerCompliments.cherryBlossom.compliment,
    bloomTitle: config.flowerCompliments.cherryBlossom.bloomTitle,
    stemHeight: 200,
    petalCount: 10,
    curvature: 12,
    delay: 0.6
  }
];

export const flowerQuestionOptions = [
  config.flowerQuestion.choices.rose,
  config.flowerQuestion.choices.sunflower,
  config.flowerQuestion.choices.tulip,
  config.flowerQuestion.choices.daisy,
  config.flowerQuestion.choices.lavender,
  config.flowerQuestion.choices.cherryBlossom,
];

export const bouquetFlowers = config.bouquet.flowers;

