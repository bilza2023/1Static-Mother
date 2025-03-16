# Slide Data Structure Documentation

This document explains the hierarchical data structure of a slide object, including its nested components and important fields at each level.

## Overview

The slide data structure represents a presentation slide with timed elements. It has a three-level hierarchy:

1. **Slide Object** - The top-level container
2. **Items Array** - A collection of slide elements 
3. **ItemExtra Object** - Contains detailed properties for each item
   - Including **SP Array** - Special properties or sub-elements

## 1. Slide Object (Top Level)

The slide object is the root container for all slide data.

### Important Fields:

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | String | Unique identifier for the slide |
| `name` | String | Display name of the slide |
| `version` | String | Version identifier (e.g., "basic") |
| `startTime` | Number | Slide start time in seconds |
| `endTime` | Number | Slide end time in seconds |
| `type` | String | Slide type identifier (e.g., "eqs" likely means equation slide) |
| `template` | String | Template identifier (empty if no template is used) |
| `items` | Array | Collection of slide elements (detailed below) |
| `slideExtra` | Object | Additional slide properties (e.g., media URLs) |

## 2. Items Array (Second Level)

The `items` array contains individual elements that appear on the slide. Each item represents a distinct content element.

### Important Fields per Item:

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | String | Unique identifier for the item |
| `name` | String | Item name/identifier (appears to be a generated ID) |
| `content` | String | Primary content (empty in examples, likely used in other contexts) |
| `showAt` | Number | Time when the item should appear (in seconds) |
| `hideAt` | Number/Null | Time when the item should disappear (null means it stays visible) |
| `itemExtra` | Object | Contains detailed configuration for the item (detailed below) |

## 3. ItemExtra Object (Third Level)

The `itemExtra` object contains detailed configuration for each item, including timing and content specifics.

### Important Fields:

| Field | Type | Description |
|-------|------|-------------|
| `startTime` | Number | Start time for the item animation/display (seconds) |
| `endTime` | Number | End time for the item animation/display (seconds) |
| `code` | String | Primary content to display (e.g., text, LaTeX formula) |
| `type` | String | Content type identifier (e.g., "hdg" for heading, "code" for formula, "txt" for text) |
| `sp` | Array | Special properties array - contains alternative representations or related content |

## 4. SP Array (Fourth Level)

The `sp` (Special Properties) array contains alternative presentations or related content for each item.

### Important Fields per SP Item:

| Field | Type | Description |
|-------|------|-------------|
| `code` | String | Content for this presentation type |
| `type` | String | Format identifier |

### SP Type Values:

| Type Value | Description |
|------------|-------------|
| `code` | Mathematical formula (LaTeX format) |
| `text` | Plain text content |
| `image` | Image filename or path |
| `heading` | Heading/title text |
| `table` | Table data in JSON array format |
| `tableCode` | Table with formula content (LaTeX format) |

## Example Usage

This structure appears designed for a presentation system where:

1. The slide has an overall timing (0-10 seconds in the example)
2. Each item has specific timing within the slide (e.g., item 1: 0-3s, item 2: 3-6s, item 3: 6-10s)
3. Each item has a primary display type and content
4. The `sp` array provides alternative representations of the same content for different contexts

The system seems capable of displaying mathematical formulas, text, images, headings, and tables, with the ability to switch between these representations as needed.