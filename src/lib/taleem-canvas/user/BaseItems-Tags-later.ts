import { ICanvasItemTypes } from "../core";

/**
 * Base class for managing canvas items with a flexible tagging system
 * Designed to provide robust tag management for canvas items
 */
export default abstract class TaggedItemsBase {
  protected items: ICanvasItemTypes[];

  constructor(items: ICanvasItemTypes[] = []) {
    this.items = items;
  }

  /**
   * Ensure the item has a tags array, adding it if not present
   * @param item The canvas item to prepare for tagging
   */
  private ensureTagsProperty(item: ICanvasItemTypes): void {
    if (!(item as any).tags) {
      (item as any).tags = [];
    }
  }

  /**
   * Add a tag to a specific item
   * @param item The item to tag
   * @param tag The tag to add
   * @returns boolean indicating if the tag was successfully added
   */
  addItemTag(item: ICanvasItemTypes, tag: string): boolean {
    this.ensureTagsProperty(item);

    const tags = (item as any).tags as string[];

    // Add tag if it doesn't already exist
    if (!tags.includes(tag)) {
      tags.push(tag);
      return true;
    }

    return false;
  }

  /**
   * Remove a tag from a specific item
   * @param item The item to remove tag from
   * @param tag The tag to remove
   * @returns boolean indicating if the tag was successfully removed
   */
  removeItemTag(item: ICanvasItemTypes, tag: string): boolean {
    if (!(item as any).tags) return false;

    const tags = (item as any).tags as string[];
    const index = tags.indexOf(tag);

    if (index !== -1) {
      tags.splice(index, 1);
      return true;
    }

    return false;
  }

  /**
   * Add a tag to multiple items
   * @param tag The tag to add
   * @param filterFn Optional filter function to select specific items
   * @returns number of items tagged
   */
  addTag(tag: string, filterFn?: (item: ICanvasItemTypes) => boolean): number {
    let taggedCount = 0;
    const itemsToTag = filterFn 
      ? this.items.filter(filterFn) 
      : this.items;

    itemsToTag.forEach(item => {
      if (this.addItemTag(item, tag)) {
        taggedCount++;
      }
    });

    return taggedCount;
  }

  /**
   * Remove a tag from multiple items
   * @param tag The tag to remove
   * @param filterFn Optional filter function to select specific items
   * @returns number of items untagged
   */
  removeTag(tag: string, filterFn?: (item: ICanvasItemTypes) => boolean): number {
    let untaggedCount = 0;
    const itemsToUntag = filterFn 
      ? this.items.filter(filterFn) 
      : this.items;

    itemsToUntag.forEach(item => {
      if (this.removeItemTag(item, tag)) {
        untaggedCount++;
      }
    });

    return untaggedCount;
  }

  /**
   * Find items with a specific tag
   * @param tag The tag to search for
   * @returns Array of items with the tag
   */
  findByTag(tag: string): ICanvasItemTypes[] {
    return this.items.filter(item => 
      (item as any).tags && 
      (item as any).tags.includes(tag)
    );
  }

  /**
   * Find items with multiple tags
   * @param tags Array of tags to match
   * @param matchAll If true, items must have ALL tags. If false, items can have ANY of the tags.
   * @returns Array of matching items
   */
  findByTags(tags: string[], matchAll: boolean = true): ICanvasItemTypes[] {
    return this.items.filter(item => {
      if (!(item as any).tags) return false;
      
      const itemTags = (item as any).tags as string[];
      
      return matchAll
        ? tags.every(tag => itemTags.includes(tag))
        : tags.some(tag => itemTags.includes(tag));
    });
  }

  /**
   * Check if an item has a specific tag
   * @param item The item to check
   * @param tag The tag to look for
   * @returns boolean indicating if the item has the tag
   */
  hasTag(item: ICanvasItemTypes, tag: string): boolean {
    return (item as any).tags && 
           (item as any).tags.includes(tag);
  }
}