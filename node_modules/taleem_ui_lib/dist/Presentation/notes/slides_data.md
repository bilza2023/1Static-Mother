
## Core Data Structure of the Presentation Module

- **Date**: 28th November 2023

### Purpose
This document defines the core data structure of the Presentation module. It serves as a guide for component authors responsible for creating the draw and Edit/Save components. All authors should accept and encode their data following this structure.

### Stability
- This data structure remains unchanged (for this version of the engine).
- It has long-term support and is expected to accommodate over 100 components.

### slides : 
    - It is an array of objects (slide) with each object has structures given under. EACH ITEM / SLIDE IS ONE SINGLE SLIDE. Collectively the slides makes up the entire presentation. :

### slides object:

1. **pulse**: The running time.
2. **startTime**: The slide's start time (used for internal purposes like showing a growing bar, etc.).
3. **endTime**: Same as above. The startTime and endTime is used externally as well as internally.
4. **items**: An array of item objects with the following fields:
   - `name`: Name
   - `content`: The Content within "item.content" can be simple data OR stringified and parsed within components.
   - `showAt`: Show at time (default: 0). Has to implemented internally
   - `itemExtra`: Additional item data
   - *Note*: Additional fields may be added to the items object in the future, but it won't require changes to existing components.Every component author can add his own fields to this object while save time and use them at draw time.
   - The "items" field is designed for situations where there is one loop in every slide, which forms the core of drawing. Authors can use it as needed.
   - The "itemExtra" field is an array of key-value pair objects to send additional data.
   - The "name" field in the item object allows authors to select items either by name or by index numbers.

5. **slideExtra**: An array of key-value pair objects for slide-specific data that doesn't belong to all or some items but relates to the slide. THIS IS OPEN OBJECT WHICH MEANS WE CAN SAVE ANYTHING IN IT.

6. **theme**: The theme object, which may change in the future, but any changes will require updates to all components (draw).


### Mongoose Schema
```javascript
const KVPairSchema = new Schema({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
        default: '',
    },
});

const ItemSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    },
    showAt: {
        type: Number,
        required: true,
        default: 0,
    },
    extra: {
        type: [KVPairSchema],
        required: true,
        default: [],
    },
});

const SlidesSchema = new Schema({
    startTime: {
        type: Number,
        required: false,
    },
    endTime: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    version: {
        type: String,
        required: true,
        default: '0.0.0',
    },
    template: {
        type: String,
        required: true,
        default: '',
    },
    items: {
        type: [ItemSchema],
        required: true,
        default: [],
    },
    slideExtra: {
        type: [KVPairSchema],
        required: true,
        default: [],
    },
});


