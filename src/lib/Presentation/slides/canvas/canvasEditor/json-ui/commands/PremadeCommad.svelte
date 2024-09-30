<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import { API_URL, ajaxPost , toast } from '../../../../../util';
    export let items = [];
    import {AreYouSure} from "sveltetools_bils/src/cmp";
    let selectedGroup = null;
    let groups = [];

    onMount(async () => {
        try {
            const resp = await ajaxPost(`${API_URL}/group/get`, {});
            if (resp.ok) {
                const data = await resp.json();
                groups = data.data.groups;
            } else {
                console.error('Failed to fetch groups', resp.statusText);
            }
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    });

    function handleSelectChange(event) {
        const selectedId = event.target.value;
        selectedGroup = groups.find(group => group._id === selectedId);
    }

async function del(){
    debugger;
    const resp = await ajaxPost( `${API_URL}/group/delete` , { "id" : selectedGroup._id } );
    if(resp.ok){
    toast.push('deleted...');}
    else {toast.push('failed to delete');
    }
}
    function add() {
        if (selectedGroup) {
            for (let i = 0; i < selectedGroup.items.length; i++) {
                const item = selectedGroup.items[i];
                const flatten = JSON.parse(JSON.stringify(item));
                flatten._id = null;
                items = [...items,flatten];
            }
        } else {
            console.error('No group selected to add');
        }
    }
</script>
<h1 class="p-1 m-1 bg-gray-900 rounded-md">Premade Items</h1>
{#if groups.length > 0}
    <div class="flex flex-col w-full">
        <table class="border-collapse border-2 border-white">
            <tr>
                <td class="border border-white p-1">Premade Items</td>
                <td class="border border-white p-1">
                    <select class="bg-gray-900 text-white p-1" on:change={handleSelectChange}>
                        {#each groups as slide}
                            <option value={slide._id}>{slide.name}</option>
                        {/each}
                    </select>
                </td>
            </tr>
        </table>
    </div>
    
    {#if selectedGroup}
        <div class="flex flex-col border-2 border-red-900 p-2 m-1 rounded-md">
            <div>Name: {selectedGroup.name}</div>
            <div>Description: {selectedGroup.description}</div>
        </div>
        
        <button on:click={add} class="p-1 m-1 bg-green-900 text-white px-8 rounded-md">Add</button>
        <br/>
        <br/>
        <button on:click={del} class="text-xs p-1 m-1 bg-orange-600 text-white px-8 rounded-md">
            Del
        </button>
    {/if}
{/if}
