<script>
// @ts-nocheck

export let icon = '📜';
export let bgColor = 'bg-blue-800';
export let size = 2; //1-4
</script>
 
  <div class={`inline-flex  justify-center ${bgColor} text-white rounded-md p-2  px-8 m-2`}>
    <span class={`text-${size}xl`}>{icon}</span>&nbsp;
    <span class={`text-${size}xl`}><slot></slot></span>
  </div>
