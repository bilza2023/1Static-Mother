

export default function simplifyJSON(data, dontChangeField = []) {
      
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    // Create a new object to store simplified results
    const simplified = {};

    // Iterate through all keys in the original object
    for (const [key, value] of Object.entries(data)) {
        // Skip 'setCommands' key
        if (key === 'setCommands') {
            continue;
        }

        // Check if the current key is in the dontChangeField array
        if (dontChangeField.includes(key)) {
            // If so, add the field to simplified object without any changes
            simplified[key] = value;
            continue;
        }

        // If value is an object with 'initialValue', use that value directly
        if (typeof value === 'object' && value !== null && 'initialValue' in value) {
            simplified[key] = value.initialValue;
        } 
        // If value is an object, recursively simplify it
        else if (typeof value === 'object' && value !== null) {
            simplified[key] = simplifyJSON(value, dontChangeField);
        } 
        // For other types, keep the original value
        else {
            simplified[key] = value;
        }
    }

    return simplified;
}