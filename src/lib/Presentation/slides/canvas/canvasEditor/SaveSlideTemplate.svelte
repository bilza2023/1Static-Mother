<script>
    //@ts-nocheck

import {Icons,toast} from '../../../util';
/**
 * project slide-template saving
 * 1: phases save and send a slide front end
 *  - dialogue box
 *  - saving
 * 2 : save in back end
 * 3 : show list front-end
 * 4: insert in current 
 * 5: delete and clean up
 * 6: test  
*/
  export let saveCurrentSlideAsSlideTemplate;  
    let name='';
    let description='';

function save(){
    if (!name || !description || name == '' || description == '' ){
        toast.push('Name or description is empty!');
        return;
    }
    saveCurrentSlideAsSlideTemplate(name,description);
    name = '';
    description = '';
}    
</script>

<div class="flex flex-col items-center bg-gray-900 border-2 border-white rounded-md p-6 space-y-4">
    <div class="text-white text-xl font-semibold text-center">Save Slide as Template</div>
    
    <div class="grid grid-cols-[1fr_3fr] gap-4 w-full">
        <div class="text-white font-medium text-lg">Name:</div>
        <div><input type="text" class="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" bind:value={name}></div>
        
        <div class="text-white font-medium text-lg">Details:</div>
        <div><textarea class="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={description}
            /></div>
    </div>

    <div class="flex justify-center w-full">
        <button class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        on:click={save}
        >Save</button>
    </div>
</div>
