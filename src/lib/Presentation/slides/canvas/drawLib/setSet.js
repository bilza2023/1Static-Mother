
//@ts-nocheck

export default function setSet(currentTime, items) {

    // debugger;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        const setCommands = item.extra.setCommands;
        
        // if(item.name == "findme"){debugger;}
        if(setCommands.length < 1){
            return;
        }else {
            assignValues(currentTime,setCommands,item);   
        }
        
    }
} 


function assignValues(currentTime,setCommands,item){
    for (let j = 0; j < setCommands.length; j++) {
        const command = setCommands[j];
        if ( currentTime >= command.at ) {
            if (typeof item.extra[command.prop] !== 'undefined') {
                item.extra[command.prop] = command.value;
            }
        }
    }
}


