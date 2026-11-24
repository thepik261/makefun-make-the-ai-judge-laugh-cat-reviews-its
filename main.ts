import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line one-star review from a house cat about its human.
// Specific complaint (cardboard box vs. expensive bed), unmistakably feline
// voice, deadpan review shape, sting in the last few words.
const REVIEW =
  "One star. He replaced my cardboard box with a $90 cat bed. I sleep in the box. The bed lives in the cupboard. He calls this progress. I call it theft.";

const text = REVIEW.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error("review must be a single line of 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
