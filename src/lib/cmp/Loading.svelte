
<script>
  export let title ="loading...";
  
    let size = 1;

  let interval = setInterval(() => {
    size = size === 3 ? 1 : size + 1;
  }, 400);
</script>


<div
  class="p-8 mx-auto mt-12 w-6/12 bg-gray-500 border-2 border-gray-200 text-white text-center text-3xl"
>
  <span class={`text-${size}xl`}>{title}</span>  
  <span class={`text-${size}xl`}>&#x23F1;</span>
</div>


