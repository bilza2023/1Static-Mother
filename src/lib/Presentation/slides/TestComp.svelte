<script>
//@ts-nocheck
export let pulse;
export let items=[]; 
export let theme;
export let startTime;
export let endTime;
export let slideExtra =[];
// theme : primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
</script>

<div class="flex flex-col justify-center min-h-screen   "
 style = {`
 background-color : ${theme.backgroundColor};
 `}
>

    <div class="flex  justify-center m-2 p-4 bg-red-900 text-white rounded-md"
   style = {`
        background-color : ${theme.primaryColor};
        color : ${theme.textColor};
        `} 
    >
        <h1 class={`text-white text-3xl`}
        style={`color : ${theme.textColor}`}
        >{items[0].content}</h1>
    </div>

    <div class='flex justify-center w-full  p-2 pb-4 h-full '>
        <img style="height: 50%;" class="w-6/12" src= {`mathImages/${items[1].content}.png`} alt="" >
    </div>

    <div style={`color :${theme.highlightColor}`}>taleem.help</div>

</div>