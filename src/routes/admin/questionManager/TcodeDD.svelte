<script>
//@ts-nocheck
export let tcode;
 
</script>

<!--tcode-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>

    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>
        Course(tcode)</div>

    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={tcode}>
    
    
    <option   class='text-sm text-center bg-gray-800 text-white' 
        value='videoBlog'>videoBlog</option>

        <option   class='text-sm text-center bg-gray-800 text-white' 
        value='fbise9math'>fbise9math</option>
        
    <option   class='text-sm text-center bg-gray-800 text-white' 
    value='fbise8math'>fbise8math</option>

    <option   class='text-sm text-center bg-gray-800 text-white' 
    value='fbise9mathOld'>fbise9mathOld</option>
    
    <option  class='text-sm text-center bg-gray-800 text-white' 
    value='fbise9english'>fbise9english</option>

    <option   class='text-sm text-center bg-gray-800 text-white' 
    value='fbise10math'>fbise10math</option>


    </select>
    
</div>