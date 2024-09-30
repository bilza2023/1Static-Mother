<script>
    //@ts-nocheck
    import {ajaxPost,API_URL,toast} from "../../../util";
    export let items;
    let groupItems = [];
    let selectedItem = '';

    let groupName = '';
    let groupDescription = '';

    function addGroup() {
        // debugger;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item._id == selectedItem){

                const newItem =  JSON.parse(JSON.stringify(item));
                newItem._id = null;
                groupItems = [...groupItems,  newItem ];    
            }
        }
        // console.log("groupItems" , groupItems);   
    }
async function saveGroup(){
      if(!groupName || !groupDescription){
        toast.push("Group name and description are must");
        return;
      }
      if( groupItems.length < 1 ){
        toast.push("No item in group");
        return;
      }
        const resp = await ajaxPost( `${API_URL}/group/create` , 
        {
            name:groupName,
            description: groupDescription,
            items : groupItems
        } 
        );

        if(resp.ok){
        toast.push('saved');}
        else {toast.push('failed to saved');
        }
    //////////////////////////////////////////////
        // console.log("group" , group);
    }
</script>

<div class="p-2 m-2 border-2 border-gray-300 rounded-md">

<div class="inline-flex p-2 m-2 justify-center  border-2 border-gray-500 bg-green-900 rounded-md items-center">
    <div class="">Items List: </div>
    
    <select class=" bg-gray-600 p-1 px-8 " bind:value={selectedItem}>
            {#each items as item }
            <option class="text-white" value={item._id}>{item.extra.name}</option>
            {/each}
        
    </select>

    <button on:click={addGroup} class="bg-green-800 p-1 rounded-md m-1">Add</button>
</div>

<!-- ///////////////////// -->

<div class="flex flex-col gap-4">
    <table>
        <tr>
            <td colspan="1"><label for="">Name</label></td>
            <td colspan="9"><input class="text-white bg-gray-700 border-white border-2 rounded-md w-full" type="text" id="" bind:value={groupName} /></td>
        </tr>
    
        <tr>
            <td colspan="1"><label for="">Description</label></td>
            <td colspan="9"><textarea  class="text-white bg-gray-700 border-white border-2 rounded-md w-full" bind:value={groupDescription} ></textarea></td>
        </tr>
        
        
    </table>

</div>


<div>
    {#each groupItems as groupItem,index}
        <div>{index+1} : {groupItem.extra.name}</div>
    {/each}
</div>


<button class="bg-green-800 p-1 rounded-md m-1" on:click={saveGroup}>Save</button>


</div>