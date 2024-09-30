<script>
//@ts-nocheck
export let title;
export let extra;

</script>

<tr>
    <td class="border border-white p-1">{title}</td>
    <td class="border border-white p-1">
        <textarea  bind:value={extra[title]} class="bg-gray-900 text-white p-1"/>
    </td>
</tr>