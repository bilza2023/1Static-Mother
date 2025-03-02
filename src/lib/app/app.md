# Taleem App Editor Technical Documentation

This document provides a technical overview of the Taleem App Editor, detailing the structure, functionality, and relationships between the various components.

## Application Structure

The Taleem App Editor follows a hierarchical component structure:

1. `+page.svelte` - Entry point
2. `AppEditor.svelte` (exported as `Editor`) - Main editor container
3. `SlideEditor.svelte` - Core slide management
4. `PresentationModeEditor.svelte` - Slide presentation display
5. `CanvasEditor.svelte` or `EqsEditor.svelte` - Specific slide type editors

## Component Details

### 1. +page.svelte

**Main Functionality:** Application entry point that imports and initializes the Editor.

**Import Dependencies:**
- `Editor` from '../../lib/app'
- `onMount`, `toast` from "$lib/util"
- `SlideEditBox` from '$lib/SlideEditBox.svelte'
- `presentationData` from '$lib/static_slide_data.js'

**Environment Variables:**
- `SOUND_URL` - Base URL for sound assets
- `IMAGES_URL` - Base URL for image assets
- `DEFAULT_AUDIO` - Default audio file

**State Management:**
- `slides` - Main data structure holding presentation slides
- `id` - Identifier (appears unused in provided code)
- `soundUrlComplete` - Complete URL for sound assets
- `showToolbar` - Toggle for toolbar visibility
- `showSlideEditBox` - Toggle for slide edit box visibility

**Lifecycle Hooks:**
- `onMount` - Initializes slides with presentation data

**Props Passed to Editor:**
- `soundUrl` - Complete sound URL
- `imagesUrl` - Images URL from environment
- `showToolbar` - Toolbar visibility toggle
- `slides` - Two-way binding for slides data

### 2. AppEditor.svelte (exported as Editor)

**Main Functionality:** Container component that manages the SlideEditor.

**Import Dependencies:**
- `SlideEditor` from './slideEditor/SlideEditor.svelte'

**Export Props:**
- `slides` - Array of slide data (default: empty array)
- `IMAGES_URL` - URL for images (default: empty string)
- `showToolbar` - Toggle for toolbar visibility (default: true)

**State Management:**
- `soundUrlComplete` - Complete URL for sound assets
- `showSlideEditBox` - Toggle for slide edit box visibility

**Conditional Rendering:**
- Shows SlideEditor only when slides are available
- Shows SlideEditBox when `showSlideEditBox` is true (commented out in current code)

### 3. SlideEditor.svelte

**Main Functionality:** Core component for managing, editing, and navigating presentation slides.

**Import Dependencies:**
- `TaleemAppObject` from "$lib/appObject/TaleemAppObject"
- Slide service functions from './code/sliderServices'
- Svelte lifecycle methods and transitions
- Various child components: Toolbar, PresentationModeEditor, StackPanel, TimingErrorDiv

**Export Props:**
- `soundUrl` - URL for sound assets
- `imagesUrl` - URL for image assets
- `slides` - Array of slide data
- `showToolbar` - Toggle for toolbar visibility (default: true)
- `audioData` - Audio data (default: empty string)
- `save` - Save function (default: console log)

**State Management:**
- `currentTime` - Current playback time
- `currentSlideIndex` - Index of the currently selected slide
- `showSidePanel` - Toggle for side panel visibility
- `show` - Generic show toggle
- `ready` - Component ready state
- `assets` - Asset collection (initialized as null)
- `timingError` - Flag for timing errors
- `timingErrorMessage` - Error message for timing issues
- `currentSlide` - Reactive variable derived from slides and currentSlideIndex

**Key Functions:**
- `checkTimingErrors()` - Validates slide timing consistency
- `shiftTime(newEndTime)` - Updates slide timing and propagates changes
- `setCurrentSlideIndex(index)` - Navigates to a specific slide
- `setNewSlideTimings(newSlide)` - Sets appropriate start/end times for new slides
- `addNew(slideType)` - Creates and adds a new slide of specified type
- `handleMoveSlide(index, direction)` - Reorders slides
- `deleteSlideFn()` - Removes the current slide
- `copySlideFn()` - Copies the current slide to clipboard
- `pasteSlideFn()` - Pastes a slide from clipboard
- `cloneSlideFn()` - Duplicates the current slide

**Layout Structure:**
- Toolbar component (conditional based on showToolbar)
- Timing error display (conditional)
- Main content area with:
  - Side panel with StackPanel for slide navigation (conditional)
  - PresentationModeEditor for displaying the current slide

### 4. CanvasEditor.svelte

**Main Functionality:** Editor for canvas-based slides, allowing manipulation of drawable items.

**Import Dependencies:**
- `StaticPlayer` from "../staticPlayer/StaticPlayer.svelte"
- `EditorJs` from "./EditorJs.js"
- `TaleemCanvas` from "$lib/js_modules/taleem-canvas-object"
- `AddToolbar` from "./AddToolbar.svelte"
- Svelte lifecycle methods
- Dialogue box components

**Export Props:**
- `slideExtra` - Additional slide data
- `items` - Array of canvas items (default: empty array)
- `imagesArray` - Array of image paths (default: includes one image)

**State Management:**
- `interval` - Animation interval reference
- `taleemCanvas` - Canvas manipulation object
- `editor` - Editor instance
- `selectedItemItemExtra` - Currently selected canvas item

**Key Functions:**
- `updateSelectedItem(newSelectedItem)` - Updates the selected item state
- `createTaleemCanvas(canvasElement)` - Initializes the canvas object
- `gameloop()` - Animation loop for redrawing canvas

**Lifecycle Hooks:**
- `onMount` - Initializes canvas, loads items, and starts animation loop
- `onDestroy` - Cleans up animation interval

**Layout Structure:**
- AddToolbar component (conditional based on taleemCanvas existence)
- Main container with:
  - Canvas container with StaticPlayer
  - Dialogue box area that conditionally shows:
    - Item-specific dialogue box when an item is selected
    - Canvas-level dialogue box otherwise

**Styling:**
- Responsive layout with flexible sizing
- Dark color scheme
- Split view between canvas and dialogue box

## Component Relationships and Data Flow

1. **Data Initialization:**
   - `+page.svelte` loads the initial slide data from `presentationData` and passes it to `AppEditor`

2. **Slide Management:**
   - `AppEditor` serves as a container passing slide data to `SlideEditor`
   - `SlideEditor` handles all slide operations (add, delete, copy, move, etc.)
   - `SlideEditor` updates the slide data structure which propagates back to `AppEditor` and `+page.svelte`

3. **Slide Rendering:**
   - `SlideEditor` determines the current slide and passes it to `PresentationModeEditor`
   - Based on slide type, specific editors like `CanvasEditor` are used

4. **Canvas Interaction:**
   - `CanvasEditor` uses `TaleemCanvas` for low-level canvas operations
   - `EditorJs` handles editing capabilities for the canvas
   - Selected items update the dialogue box for property editing

## Key Data Structures

### Slide Object
A slide appears to contain:
- `startTime` and `endTime` - Timing information
- `type` - Slide type identifier (e.g., 'eqs', canvas)
- Additional properties depending on slide type

### Canvas Items
Canvas items contain:
- `itemExtra` - Properties specific to the canvas item

## APIs and Services

### TaleemAppObject
Provides factory methods for slide creation:
- `TaleemAppObject.Slides.getNewSlide(slideType)` - Creates a new slide of the specified type

### Slide Services
Provides utilities for slide manipulation:
- `moveSlide` - Reorders slides
- `deleteSlide` - Removes slides
- `copySlide` - Copies slides
- `pasteSlide` - Pastes slides
- `cloneSlide` - Duplicates slides

### TaleemCanvas
Manages canvas operations:
- `init()` - Initializes the canvas
- `addItem()` - Adds items to the canvas
- `draw()` - Renders the canvas

## Notes for Developers

1. **Timing Consistency:**
   - The application enforces strict timing rules for slides
   - First slide must start at time 0
   - Slides must have consecutive timing with no gaps
   - Minimum slide duration is 2 seconds

2. **Error Handling:**
   - Most operations include try/catch blocks for error handling
   - Timing errors are displayed in the UI

3. **Animation Loop:**
   - Canvas-based slides use a 50fps animation loop for continuous rendering
   - The loop is properly cleaned up on component destruction