<script>
export let icon="icon";
export let title="Title";
export let tf= true;
export let clk = ()=>console.log("Toolbar Btn")
export let trueColor  = "text-green-400";
export let falseColor ="text-red-400";

</script>


 <div class="w-20">
  <button class= {`w-full flex flex-col items-center p-2 bg-gray-700 rounded hover:bg-gray-900 active:bg-gray-500`}
  on:click={clk}  >
    <span class="text-2xl">{`${icon}`}</span>
    <span class="text-sm font-medium 
    { tf == true ? trueColor : falseColor}" 
    >{`${title}`}</span>
  </button>
</div>
