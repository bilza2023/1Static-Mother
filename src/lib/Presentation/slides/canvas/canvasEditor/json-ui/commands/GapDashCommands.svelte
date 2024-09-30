<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";  
    import TrPropNumber from "../commonCommands/TrPropNumber.svelte";   

    export let item;
</script>
        
<TrPropNumber title="dash" bind:extra={item}  /> 
<TrPropNumber title="gap" bind:extra={item}  /> 


   