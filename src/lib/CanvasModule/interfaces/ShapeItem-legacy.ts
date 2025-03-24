
// ShapeTypes.ts

// Import all shape interfaces
import { CircleItemData } from './shapeItems/itemsDataInterfaces/CircleItemData';
import { ImageItemData } from './shapeItems/itemsDataInterfaces/ImageItemData';
import { RectangleData } from './shapeItems/itemsDataInterfaces/RectangleData';
import { SpriteData } from './shapeItems/itemsDataInterfaces/SpriteData';
import { TextData } from './shapeItems/itemsDataInterfaces/TextData';
import { TriangleData } from './shapeItems/itemsDataInterfaces/TriangleData';

// Create and export the union type
export type ShapeItem = 
  | CircleItemData 
  | ImageItemData 
  | RectangleData 
  | SpriteData 
  | TextData 
  | TriangleData;

// You can also create more specific groupings if needed
// export type GeometricShapeItem = 
//   | CircleItemData 
//   | RectangleData 
//   | TriangleData;

// export type MediaItem = 
//   | ImageItemData 
//   | SpriteData;