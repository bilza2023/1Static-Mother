<script>
    //@ts-nocheck
    export let title = "Teachers Comments";
    export let comments;
</script>
<h1>{title}</h1>
<div class="flex justify-center">

    <textarea class="w-8/12 bg-gray-700 text-white text-lg rounded-md m-2" rows="6"
    bind:value={comments}
    />
</div>
