
import Sprite from "./spriteObjects/Sprite.js";
import { students } from "./spriteObjects/students.js";
import { figs } from "./spriteObjects/figs.js";
import { alphabets } from "./spriteObjects/alphabets.js";
import { people } from "./spriteObjects/people.js";

// Define the sprite list with proper typing
const spriteList: Record<string, Sprite> = { 
  students, 
  figs, 
  alphabets, 
  people 
};

/**
 * Loads all sprites and returns them in a Map
 * @returns A Map containing all sprites with their names as keys
 * @throws Error if sprites cannot be loaded
 */
export default function loadSprites(): Map<string, Sprite> {
  try {
    const objectEntries = Object.entries(spriteList);
    return new Map<string, Sprite>(objectEntries);
  } catch (error) {
    console.error("Error loading sprites:", error);
    throw error;
  }
}