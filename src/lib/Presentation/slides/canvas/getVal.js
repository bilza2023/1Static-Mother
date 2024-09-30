
//@ts-nocheck


export default function getVal(currentTime ,item) {

    const initialValue = item.initialValue; 
    const setCommands = item.setCommands; 
        setCommands.sort((a, b) => a.at - b.at);
        // this.sorted = true; // Mark as sorted after sorting
    // }

    let currentValue = initialValue;
    for (let command of setCommands) {
        if (currentTime >= command.at) {
            currentValue = command.value;
        }
    }
    return currentValue;
}