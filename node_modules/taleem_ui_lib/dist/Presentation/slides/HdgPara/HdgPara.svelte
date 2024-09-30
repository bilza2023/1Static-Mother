<script>
//@ts-nocheck
export let pulse;
export let items = [];
export let slideExtra = [];
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen"
     style={`background-color: ${theme.backgroundColor}; `} >

  <div class="flex justify-center m-1 p-1 rounded-md mt-8 px-4 mx-20"
       style={`background-color: ${theme.primaryColor};color: ${theme.textColor};`}>

    <h1 class="text-white text-2xl" style={`color: ${theme.textColor}`}>
      {items[0].content}
    </h1>
  </div>

 <div class="flex  justify-center text-center  m-2 p-4 rounded-md text-2xl border-4 mt-8 mx-24  "
   style = {`
        background-color : ${theme.primaryColor};
        border-color : white;
        color : ${theme.textColor};
        white-space: pre-line;
        `} 
    >
        {items[1].content}
    </div>

  <div class="flex justify-end w-full pr-10">
    <div style={`color: ${theme.highlightColor}`}>taleem.help</div>
  </div>

</div>
