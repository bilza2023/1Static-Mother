
import { students } from "./spriteObjects/students.js";
import { figs } from "./spriteObjects/figs.js";
import { alphabets } from "./spriteObjects/alphabets.js";
import { people } from "./spriteObjects/people.js";

const spriteList = { students, figs, alphabets, people };

export default function loadSprites() {
    try {
        // ✅ Each sprite is already an instance of `Sprite`
        return new Map(Object.entries(spriteList));
    } catch (error) {
        console.error("Error loading sprites:", error);
        throw error;
    }
}
