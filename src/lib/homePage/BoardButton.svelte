<script>
//@ts-nocheck
export let checkWith;
export let board;
export let setBoard;
</script>



<button class={`${board  == checkWith ? 'bg-green-800' : 'bg-gray-600' } m-1 mb-2 p-1  rounded-lg`} on:click={()=>setBoard(checkWith)}>{checkWith}</button>

