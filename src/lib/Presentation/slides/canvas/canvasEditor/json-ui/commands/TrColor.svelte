<script>
//@ts-nocheck
export let title;
export let itemFiled;

</script>

<tr>
    <td class="border border-white p-1">{title}</td>
    <td class="border border-white p-1">
        <input type="color" bind:value={itemFiled} class="bg-gray-900 text-white p-1" >
    </td>
</tr>