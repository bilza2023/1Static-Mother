<script>
//@ts-nocheck
import PageWrapper from '../../cmp/PageWrapper.svelte';
export let pulse;
export let items = [];
// export let slideExtra = [{key:'rows' , value: 2}];
export let slideExtra;
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor

</script>

<!-- <div style={`background-color : ${theme.primaryColor}`}> -->
<PageWrapper background={theme.primaryColor}>
<div class='flex flex-col justify-center p-2'>
        <h1 class=''
     style = {`color: ${theme.secondaryColor};`}
    >Heading</h1>
 
    <textarea rows='5' bind:value={slideExtra[0].value}
        class=" rounded-md  p-1   w-full border-2" 
         style = {`
            color: ${theme.textColor};
            background-color: ${theme.backgroundColor};
            border-color: ${theme.secondaryColor};
        `}
    />
        
</div>
</PageWrapper>