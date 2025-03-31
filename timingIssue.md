# Basics of Period-Based System for Presentation Timing

This document outlines the fundamentals of a "period-based" system for managing presentation timing, focusing on storing only "period" (duration) instead of explicit start times. This approach simplifies timing management and reduces potential errors.

## Core Concept: Period-Based Timing

In a period-based system, each element (slide or item) is defined by its:

-   **Start Time**: The moment the element appears (automatically calculated except for the first element).
-   **Period (Duration)**: How long the element remains visible.

The system automatically calculates the start time of subsequent elements based on the period of the preceding element. This eliminates the need to store redundant end times, reducing data redundancy and potential inconsistencies.

## Implementation Details

### 1. Global Timeline

-      The presentation uses a single, continuous global timeline measured in seconds.
-      The first slide always starts at time 0.
-      Subsequent slide start times are derived from the previous slide's period.

### 2. Slide Timing

-      Each slide is defined by its start time and period.
-      The start time of the first slide is 0.
-      The start time of subsequent slides is calculated: `slide[n].startTime = slide[n-1].startTime + slide[n-1].period`.

### 3. Item Timing

-      Items within a slide also use a period-based approach.
-      The first item in a slide starts at the slide's start time: `item[0].startTime = slide.startTime`.
-      The start time of subsequent items is calculated: `item[n].startTime = item[n-1].startTime + item[n-1].period`.
-   The last item of the slide's end time is equal to the slide's end time.

### 4. Benefits of Period-Based System

-   **Reduced Data Redundancy:** Only periods are stored, minimizing potential inconsistencies.
-   **Automatic Sequencing:** Start times of subsequent elements are automatically calculated.
-   **Simplified Modifications:** Changing a period automatically adjusts the start times of subsequent elements.
-   **Natural Content Creation:** Content creators often think in terms of duration rather than absolute end times.
-   **Self-Healing:** The system maintains sequence integrity automatically when elements are added, removed, or moved.

### 5. Error Taxonomy and Prevention (Adapted for Period-Based System)

#### 5.1. Boundary Violations

-   **Item Boundary Overflow:** Automatically preventable by validating that `item.startTime + item.period <= slide.period`.
    -   `Preventable: Yes, by code`
-   **Slide Timeline Overlap:** Automatically detectable and preventable by ensuring `slide[n].startTime >= slide[n-1].startTime + slide[n-1].period`.
    -   `Preventable: Yes, by code`
-   **Timeline Continuity Gap:** Automatically detectable; require user input to adjust periods.
    -   `Preventable: Flag for user input`

#### 5.2. Timing Inconsistencies

-   **Initial Item Desynchronization:** Automatically corrected by setting `item[0].startTime = slide.startTime`.
    -   `Preventable: Yes, by code`
-   **Terminal Item Desynchronization:** Automatically fixed by ensuring `item[items.length-1].startTime + item[items.length-1].period = slide.startTime + slide.period`.
    -   `Preventable: Yes, by code`
-   **Inter-Item Timing Discontinuity:** Automatically detectable; require user input to adjust periods.
    -   `Preventable: Flag for user input`

#### 5.3. Sequence Errors

-   **Item Chronology Violation:** Automatically fixed by sorting items based on their calculated start times.
    -   `Preventable: Yes, by code`
-   **Slide Chronology Violation:** Automatically corrected by reordering slides based on their calculated start times.
    -   `Preventable: Yes, by code`
-   **Sequential Timing Mismatch:** Automatically detectable; require user input to adjust periods.
    -   `Preventable: Flag for user input`

#### 5.4. Invalid Time Values

-   **Negative Period Error:** Automatically preventable by validating that `period > 0`.
    -   `Preventable: Yes, by code`
-   **Zero Period Error:** Automatically preventable by enforcing a minimum period.
    -   `Preventable: Yes, by code`
-   **Undefined Period Error:** Automatically preventable by requiring period values for all elements.
    -   `Preventable: Yes, by code`

#### 5.5. Synchronization Issues

-   **Audio-Visual Desynchronization:** Requires user judgment.
    -   `Preventable: Flag for user input`
-   **Timeline-Audio Duration Mismatch:** Automatically detectable; require user input to adjust periods.
    -   `Preventable: Flag for user input`
-   **Content Density Overload:** System can flag suspicious periods based on content complexity, but final judgment requires user input.
    -   `Preventable: Flag for user input`

### 6. Implementation Considerations

-      Store only the period (duration) for each element.
-      Calculate start times dynamically based on periods.
-      Display calculated end times in the user interface for reference.
-      Implement validation rules to ensure valid periods.
-   Ensure that the final item of a slide always ends when the slide ends.
-   When a slide or item period changes, recalculate all subsequent items and slides start times.