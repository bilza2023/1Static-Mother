
/**
 * Adjusts an array of time objects to ensure they follow specific sequencing rules:
 * 1. The first item's startTime is always 0
 * 2. Each subsequent item's startTime equals the previous item's endTime
 * 3. Every item's endTime must be greater than its startTime (minimum 2-second duration)
 * 
 * @param {Array} timeArray - Array of objects with startTime and endTime properties
 * @return {Array} - New array with adjusted time objects
 */
export default function shiftTime(timeArray) {
    // Handle empty array case
    if (!timeArray || timeArray.length === 0) {
      return [];
    }
    
    // Create a deep copy of the array to avoid modifying the original
    const adjustedArray = JSON.parse(JSON.stringify(timeArray));
    
    // Minimum duration between startTime and endTime (in seconds)
    const MIN_DURATION = 2;
    
    // Enforce rule 1: First item's startTime should be 0
    if (adjustedArray[0]) {
      // Store the original timing difference to maintain relative duration
      const originalDuration = adjustedArray[0].endTime - adjustedArray[0].startTime;
      
      // Set startTime to 0
      adjustedArray[0].startTime = 0;
      
      // Ensure the endTime maintains at least the original duration (or MIN_DURATION if original was smaller)
      const requiredDuration = Math.max(originalDuration, MIN_DURATION);
      adjustedArray[0].endTime = adjustedArray[0].startTime + requiredDuration;
    }
    
    // Process each subsequent item in the array
    for (let i = 1; i < adjustedArray.length; i++) {
      const prevItem = adjustedArray[i - 1];
      const currentItem = adjustedArray[i];
      
      // Enforce rule 2: startTime of current item should equal endTime of previous item
      currentItem.startTime = prevItem.endTime;
      
      // Calculate and maintain the original duration when possible
      const originalDuration = timeArray[i].endTime - timeArray[i].startTime;
      
      // Enforce rule 3: endTime must be greater than startTime by at least MIN_DURATION
      const requiredDuration = Math.max(originalDuration, MIN_DURATION);
      currentItem.endTime = currentItem.startTime + requiredDuration;
    }
    
    return adjustedArray;
  }