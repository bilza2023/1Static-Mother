

function getEqSlidePeriod(slide) {
    if (!slide.items || slide.items.length === 0) {
        return slide.period || 10; // Use slide's period or default
    }

    let totalPeriod = 0;
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        totalPeriod += item.period;
    }

    return totalPeriod > 0 ? totalPeriod : 10; // Ensure positive period
}

export default function getPresentationTotalTime(slides) {
    // First ensure all required fields exist
    // const slides = ensureRequiredFields(incomingSlides);

    let totalTime = 0;

    for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];

        if (slide.type === "canvas") {
            totalTime += slide.period;
        } else if (slide.type !== "canvas") {
            totalTime += getEqSlidePeriod(slide);
        }
    }

    return totalTime;
}