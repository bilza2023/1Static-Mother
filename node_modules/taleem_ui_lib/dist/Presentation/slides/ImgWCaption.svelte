<script>
//@ts-nocheck
import PageWrapper from "../cmp/PageWrapper.svelte";
export let pulse;
export let items = [];
export let slideExtra = [];
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
</script>
<PageWrapper background={theme.backgroundColor}>

<div class='flex justify-center p-2'>

  <div class="w-8/12 p-2  rounded-md text-center"
       style={`
        background-color: ${theme.primaryColor};
        color: ${theme.textColor};
        `} >
      <img src={`mathImages/${items[0].content}.png`} alt="">
    </div>


    <div class="w-4/12  border-2  justify-center text-center  m-2 p-4 rounded-md text-lg"
   style = {`
        background-color : ${theme.primaryColor};
        color : ${theme.textColor};
        white-space: pre-line;
        `} 
    >
        {items[1].content}
    </div>
     
</div>
  

  <div class='flex justify-end w-full pr-10'>
    <div style={`color: ${theme.highlightColor}`}>taleem.help</div>
  </div>

</PageWrapper>