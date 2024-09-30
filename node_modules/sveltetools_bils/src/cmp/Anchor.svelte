<script>
export let href = '';
</script>



<div class="flex justify-center p-1 m-1 bg-gray-800 text-white rounded-md border-2 border-slate-700 mx-10">


    <div class='text-xl'>
        <a href= {href}>
            <slot></slot>
        </a>
    </div>

</div>