## Detailed Explanation of the Canvas Slide Type

The **canvas slide type** is a data format (referred to as **canvas-data-format** or **canvas-slide**) used by applications to define visual content for rendering on a canvas. This format structures the data required to draw shapes, text, images, and other graphical elements.

### Key Components of the Canvas-Data-Format

The canvas-data-format is centered around an object called `slide`, which consists of:

1. **`items` (Array)**:
   - Represents all the drawable objects on the canvas.
   - Each entry in the array corresponds to a specific visual component (e.g., rectangle, text, image, etc.).
   - Every item includes:
     - **General Attributes**: Such as `uuid`, `name`, `content`, and timing-related fields (`showAt`, `hideAt`).
     - **Specific Attributes (`itemExtra`)**: Detailed properties for each item, like position, dimensions, and style.

2. **`slideExtra` (Object)**:
   - Defines additional settings for the slide’s canvas, such as:
     - Canvas dimensions (`canvasWidth`, `canvasHeight`).
     - Background properties (`backgroundColor`, `bgImg`).
     - Grid settings (`showGrid`, `gridLineWidth`, etc.).

An example of the **canvas-data-format** is attached in file:

The output should strictly adhere to the **canvas-data-format** structure to ensure compatibility with the consuming application.

