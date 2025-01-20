<script>
export let title="Callback Button";
export let callback=()=>{}
export let icon= '🔥';
export let style = ' text-[10px] text-white  rounded-md';
</script>


<button class={style} on:click={callback}>
    {title} {icon}
</button>