In your system, a slide’s startTime and endTime are not manually entered but calculated: the startTime of the first slide is always 0, and every slide’s endTime is determined by adding its period (duration) to its startTime. For canvas slides, this is straightforward. But for eqs slides, each item inside has its own startTime and endTime, independent of the slide — so the slide’s overall timing must be stretched to fully cover the timings of its slowest/longest-running item. In short, slides must expand or adjust their period based on the items they hold, ensuring that no item "overflows" outside the slide’s lifespan.

In your system:

Each slide holds a period (duration in seconds), and this period is the only thing saved in the database.

StartTime and EndTime are always dynamically calculated from period, not stored or trusted directly.

For canvas slides, when the period changes, we immediately recalculate start and end.

For eqs slides, because items have individual timings, any change to an item’s startTime or endTime must re-trigger the calculation of the whole slide's period.

After any change, you must recalculate all slides' timings sequentially, because each slide’s start depends on the previous slide’s end (chain reaction).

period is king, everything else is derived.