<script>
//@ts-nocheck
export let title;
export let extra;
</script>


<tr>
    <td class="border border-white p-1">
     <label class="text-pink-300 hover:cursor-pointer" >{title}</label>   
    </td>

    <td class="border border-white p-1" >

        <input type="checkbox" class="bg-gray-900 text-white p-1"  
        bind:checked={extra[title]}  
    />
    


    </td>
</tr>
