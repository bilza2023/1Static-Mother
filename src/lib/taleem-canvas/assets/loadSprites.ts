import { students } from "./spriteObjects/students.js";
import { figs } from "./spriteObjects/figs.js";
import { alphabets } from "./spriteObjects/alphabets.js";
import { people } from "./spriteObjects/people.js";

// Define interfaces for sprite data structure
interface SpriteItem {
  name: string;
  [key: string]: any; // Additional properties that might exist on sprite items
}

interface SpriteObject {
  data: SpriteItem[];
  [key: string]: any; // Additional properties that might exist on sprite objects
}

// Define the sprite list with proper typing
const spriteList: Record<string, SpriteObject> = { 
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
export default function loadSprites(): Map<string, SpriteObject> {
  try {
    // Convert the sprite list object to a Map
    return new Map<string, SpriteObject>(Object.entries(spriteList));
  } catch (error) {
    console.error("Error loading sprites:", error);
    throw error;
  }
}