
// First function to ensure required fields exist
function ensureRequiredFields(slides) {
    for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
        
        // Ensure period exists on each slide
        if (!slide.hasOwnProperty('period')) {
            slide.period = 10; // Default value
        }
        
        // For "eqs" type slides, check items
        if (slide.type !== "canvas" && slide.items) {
            for (let i = 0; i < slide.items.length; i++) {
                const item = slide.items[i];
                
                // Ensure period exists on each item
                if (!item.hasOwnProperty('period')) {
                    item.period = 10; // Default value
                }
            }
        }
    }
    return slides;
}

// Second function to calculate startTime and endTime
export default function periodToStartEndStyle(incomingSlides) {
    
    // First ensure all required fields exist
    const slides = ensureRequiredFields(incomingSlides);
    
    let mainStartTime = 0;

    for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
        
        if (slide.type == "canvas") {
            // For canvas slides - direct calculation
            slide.startTime = mainStartTime;
            slide.endTime = slide.startTime + slide.period;
            mainStartTime = slide.endTime; // update for next slide
        } else {
            // For "eqs" slides with items
            slide.startTime = mainStartTime;
            
            // Calculate endTime based on items
            const slidePeriod = getEqSlidePeriod(slide);
            slide.endTime = slide.startTime + slidePeriod;
            
            // Manage items' startTime and endTime
            manageEqItems(slide, slide.startTime);
            
            mainStartTime = slide.endTime; // update for next slide
        }
    }
    
    return slides;
}

// Calculate total period for an "eqs" slide based on its items
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

// Assign startTime and endTime to each item in an "eqs" slide
function manageEqItems(slide, slideStartTime) {
    if (!slide.items) return;
    
    let currentStartTime = slideStartTime;
    
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        item.startTime = currentStartTime;
        item.endTime = item.startTime + item.period;
        currentStartTime = item.endTime;
    }
}