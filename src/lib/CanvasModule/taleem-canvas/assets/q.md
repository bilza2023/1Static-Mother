
i want to improve loadSprites() function for typescript since am converting my .js to .ts

i have imported Sprite objects as
import { students } from "./spriteObjects/students.js";

then put them in an object 
const spriteList: Record<string, SpriteObject> = { 
  students, 
  figs, 
  alphabets, 
  people 
};
and then make Map out of it,

now the problem is i need the type script definitions.
here is full loadSprite.ts

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
    debugger;
    const objectEntries = Object.entries(spriteList);
    return new Map<string, SpriteObject>(objectEntries);
  } catch (error) {
    console.error("Error loading sprites:", error);
    throw error;
  }
}

Here is SpriteObject
import Sprite from "./Sprite.js";


import base64Image from "../sprite-sheets/students.js"; // ✅ Import base64
export const students = new Sprite("students",base64Image);

students.addItem("student_w_tablet",183, 317, 225, 350);
students.addItem("student_red",254,0,275,250); //527,254
students.addItem("student_female",424,288,220,250); //646,542
// students.addItem("three_students",0,0,799,250); //646,542
students.addItem("student_black",540,0,260,266); //

Here is Base SpriteObject.js which also needs to be converted into .ts

export default class Sprite {
    constructor(name, url) {
      this.name = name;
      this.url = url;
  
      // Only create an Image element if we're in a browser environment.
      if (typeof window !== "undefined" && typeof Image !== "undefined") {
        this.img = new Image();
        this.img.src = url; // Convert base64 string to an HTMLImageElement in the browser
      } else {
        // On the server, simply store the base64 data or leave it null.
        this.img = null;
      }
  
      this.data = [];
      this.selectedData = null;
    }
  
    addItem(name, sx, sy, sw, sh) {
      this.data.push({ name, sx, sy, sw, sh });
      if (this.data.length === 1) {
        this.selectedData = this.data[0];
      }
    }
  
    getItemNames() {
      return this.data.map(item => item.name);
    }
  
    applyItem(name) {
      for (let item of this.data) {
        if (item.name === name) {
          this.selectedData = item;
          return;
        }
      }
    }
  }
  