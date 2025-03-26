
// Base abstract class for EditObjects
abstract class EditObject {
    abstract uuid: string;
    abstract x: number;
    abstract y: number;
    abstract width: number;
    abstract height: number;
    abstract rotation: number;
    abstract opacity: number;
  
    // Universal interface for hit detection
    abstract isHit(mx: number, my: number): boolean;
  }
  
  // Rectangle Edit Object
  class RectangleEditObject extends EditObject {
    isHit(mx: number, my: number): boolean {
      // Precise rectangular hit detection with rotation support
      const rotatedPoint = this.rotatePoint(mx, my);
      return (
        rotatedPoint.x >= this.x &&
        rotatedPoint.x <= this.x + this.width &&
        rotatedPoint.y >= this.y &&
        rotatedPoint.y <= this.y + this.height
      );
    }
  
    private rotatePoint(px: number, py: number): {x: number, y: number} {
      // Helper method to rotate point around object's center
      const centerX = this.x + this.width / 2;
      const centerY = this.y + this.height / 2;
      const radians = this.rotation * Math.PI / 180;
      
      const translatedX = px - centerX;
      const translatedY = py - centerY;
      
      return {
        x: translatedX * Math.cos(radians) - translatedY * Math.sin(radians) + centerX,
        y: translatedX * Math.sin(radians) + translatedY * Math.cos(radians) + centerY
      };
    }
  }
  
  // Circle Edit Object
  class CircleEditObject extends EditObject {
    isHit(mx: number, my: number): boolean {
      // Precise circular hit detection
      const centerX = this.x + this.width / 2;
      const centerY = this.y + this.height / 2;
      const radius = this.width / 2;
  
      const distance = Math.sqrt(
        Math.pow(mx - centerX, 2) + 
        Math.pow(my - centerY, 2)
      );
  
      return distance <= radius;
    }
  }