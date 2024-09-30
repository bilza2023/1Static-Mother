<script>
//@ts-nocheck
import PageWrapper from '../../cmp/PageWrapper.svelte';
export let pulse;
export let items = [];
// export let slideExtra = [{name:'rows' , value: 2}];
export let slideExtra;
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
 // Split the value by comma and convert it into an array
$: headings = slideExtra[0].value.split('\n');

</script>

<PageWrapper background={theme.backgroundColor}>

<div class='flex flex-col justify-center px-14 text-center  w-full min-h-screen '>

  {#each headings as heading (heading)}
    <div class='p-2 m-2 rounded-md w-full text-2xl'
    style={`color: ${theme.textColor};background-color: ${theme.primaryColor};`}
    >{heading}</div>
  {/each}

</div>

</PageWrapper>
