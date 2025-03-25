// ItemRegistry.ts
import { 
    IAngle, ICircle, IDot, IEllipse, 
    IRectangle, ITriangle 
  } from "./ICanvasItems";
  
  // Define a generic type for item registration
  type CreateFunction<T> = () => T;
  type DrawFunction<T> = (ctx: CanvasRenderingContext2D, item: T) => void;
  type EditObject<T> = {
    // Methods for editing specific item types
    update: (item: T, changes: Partial<T>) => T;
    validate: (item: T) => boolean;
  };
  
  // Unified item registration structure
  interface ItemRegistration<T> {
    create: CreateFunction<T>;
    draw: DrawFunction<T>;
    edit: EditObject<T>;
  }
  
  // Centralized Item Registry
  class ItemRegistry {
    private static instance: ItemRegistry;
    private itemMap: Map<string, ItemRegistration<any>> = new Map();
  
    private constructor() {}
  
    // Singleton pattern ensures one registry
    public static getInstance(): ItemRegistry {
      if (!ItemRegistry.instance) {
        ItemRegistry.instance = new ItemRegistry();
      }
      return ItemRegistry.instance;
    }
  
    // Register a new item type
    registerItem<T>(
      type: string, 
      registration: ItemRegistration<T>
    ): void {
      if (this.itemMap.has(type)) {
        console.warn(`Item type ${type} is being overwritten`);
      }
      this.itemMap.set(type, registration);
    }
  
    // Get all registered item types
    getItemTypes(): string[] {
      return Array.from(this.itemMap.keys());
    }
  
    // Retrieve item registration
    getItemRegistration<T>(type: string): ItemRegistration<T> | undefined {
      return this.itemMap.get(type);
    }
  
    // Helper methods for common operations
    createItem<T>(type: string): T | undefined {
      const registration = this.getItemRegistration<T>(type);
      return registration ? registration.create() : undefined;
    }
  
    drawItem<T>(
      ctx: CanvasRenderingContext2D, 
      type: string, 
      item: T
    ): void {
      const registration = this.getItemRegistration<T>(type);
      registration?.draw(ctx, item);
    }
  }
  
  // Example of registering items
  const registry = ItemRegistry.getInstance();
  
  // Register Circle
  registry.registerItem('circle', {
    create: Create.circle,
    draw: (ctx, circle: ICircle) => {
      // Existing circle drawing logic
    },
    edit: {
      update: (circle, changes) => ({ ...circle, ...changes }),
      validate: (circle) => circle.radius > 0
    }
  });
  
  // Similar registrations for other item types...
  
  export default ItemRegistry;