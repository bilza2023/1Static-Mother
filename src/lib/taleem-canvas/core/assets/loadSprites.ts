
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

// Create an enum for sprite names
export enum SpriteName {
  students = "students",
  figs = "figs",
  alphabets = "alphabets",
  people = "people",
}
export {
  Sprite
}
/**
 * Loads all sprites and returns them in a Map,
 * typed with the SpriteName enum.
 * @returns A Map containing all sprites with their names as keys
 * @throws Error if sprites cannot be loaded
 */
export default function loadSprites(): Map<SpriteName, Sprite> {
  try {
    const objectEntries: [SpriteName, Sprite][] = Object.entries(spriteList).map(
      ([key, value]) => [key as SpriteName, value]
    );
    return new Map<SpriteName, Sprite>(objectEntries);
  } catch (error) {
    console.error("Error loading sprites:", error);
    throw error;
  }
}