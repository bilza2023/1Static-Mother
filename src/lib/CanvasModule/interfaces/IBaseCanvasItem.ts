/**
 * Single Source of Truth 25-March-2025
 * Everything is important and Everything is final 24-March-2025
 * Contains common properties shared across all canvas item types
 */
export interface IBaseCanvasItem {
    // Common properties found in all item types
    uuid: string;
    type: string;
    opacity: number;
    name: string; 
 
  }