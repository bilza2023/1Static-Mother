<script>
    //@ts-nocheck
    export let title;
    export let extra;
     
    </script>
    <!-- https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/ -->
    <tr>
        <td class="border border-white p-1">{title}</td>
        <td class="border border-white p-1 ">
            <input type="number" bind:value={extra[title]} class="bg-gray-900 text-white p-1" >
        </td>
    </tr>