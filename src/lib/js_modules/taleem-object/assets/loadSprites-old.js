
import { students } from "./sprite/students";
import { figs } from "./sprite/figs";
import { alphabets } from "./sprite/alphabets";
import { people } from "./sprite/people";

export default async function loadSprites() {
    const spriteConfigs = [
      { name: 'students', config: students },
      { name: 'figs', config: figs },
      { name: 'alphabets', config: alphabets },
      { name: 'people', config: people }
    ];
  
    async function loadSingleSprite({ name, config }) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          config.img = img;
          resolve(config);
        };
        img.onerror = () => reject(new Error(`Failed to load sprite: ${name}`));
        img.src = config.url;
      });
    }
  
    try {
      return await Promise.all(
        spriteConfigs.map(sprite => loadSingleSprite(sprite))
      );
    } catch (error) {
      console.error('Error loading sprites:', error);
      throw error;
    }
  }