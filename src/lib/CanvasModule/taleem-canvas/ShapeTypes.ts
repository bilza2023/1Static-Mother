
// ShapeTypes.ts

// Import all shape interfaces
import { CircleItemData } from './itemsDataInterfaces/CircleItemData';
import { ImageItemData } from './itemsDataInterfaces/ImageItemData';
import { RectangleData } from './itemsDataInterfaces/RectangleData';
import { SpriteData } from './itemsDataInterfaces/SpriteData';
import { TextData } from './itemsDataInterfaces/TextData';
import { TriangleData } from './itemsDataInterfaces/TriangleData';

// Create and export the union type
export type ShapeItem = 
  | CircleItemData 
  | ImageItemData 
  | RectangleData 
  | SpriteData 
  | TextData 
  | TriangleData;
k
// You can also create more specific groupings if needed
// export type GeometricShapeItem = 
//   | CircleItemData 
//   | RectangleData 
//   | TriangleData;

// export type MediaItem = 
//   | ImageItemData 
//   | SpriteData;