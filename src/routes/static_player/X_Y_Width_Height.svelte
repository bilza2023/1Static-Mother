
<script>
    export let selectedItem;
</script>

<div class="flex">

<input type="text" bind:value={selectedItem.color} > 

</div>


<style>
    .flex{
        display: flex;
    }
</style>