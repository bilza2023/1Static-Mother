//@ts-nocheck



export default async function inspect(slide){
    // debugger;
    if(slide.type === 'canvas'){
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        //---every item.extra must have setCommands array central for set commands of all fields , each field does not hold its own set commands.
        if(!item.extra.setCommands){
            item.extra.setCommands = [];
        }
    }
    }
}