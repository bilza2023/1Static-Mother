<script>
    //@ts-nocheck
import Icons from "../../../../icons";    
 export let moveUp;
 export let moveDown;
 export let clone;
 export let del;
 export let copyItem;


</script>

<div class="flex w-full justify-around  text-white  ">

    <div class="flex  justify-end  gap-1">
    
        <button 
        on:click={()=>moveUp()}
        class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">&#9650;</button>
        
        <button 
        on:click={()=>moveDown()}
        class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">&#9660;</button>
        

        <button 
        on:click={()=>clone()}
        class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">🐑</button>

        <button 
        on:click={()=>copyItem()}
        class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">📃</button>
        
        <button 
        on:click={()=>del()}
        class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">{Icons.DEL}</button>
    
    </div>
</div>
