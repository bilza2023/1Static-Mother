<script>
//@ts-nocheck
export let callback;
</script>



    <select  on:change={(e) => callback(e.target.value)}
    class="p-2 m-0  rounded-md bg-gray-900 text-yellow-500    text-xs">
    <option value="redGray">RedGray</option>
    <option value="basic">Basic</option>
    <option value="earthyElegance">Earthy Elegance</option>
    <option value="oceanic">Oceanic</option>
    </select>
