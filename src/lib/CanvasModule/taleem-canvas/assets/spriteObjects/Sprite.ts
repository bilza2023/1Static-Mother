

export interface SpriteItem {
  name: string;
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export default class Sprite {
  name: string;
  url: string;
  img: HTMLImageElement | null;
  data: SpriteItem[];
  selectedData: SpriteItem | null;

  constructor(name: string, url: string) {
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

  addItem(name: string, sx: number, sy: number, sw: number, sh: number): void {
    this.data.push({ name, sx, sy, sw, sh });
    if (this.data.length === 1) {
      this.selectedData = this.data[0];
    }
  }

  getItemNames(): string[] {
    return this.data.map(item => item.name);
  }

  applyItem(name: string): void {
    for (let item of this.data) {
      if (item.name === name) {
        this.selectedData = item;
        return;
      }
    }
  }
}