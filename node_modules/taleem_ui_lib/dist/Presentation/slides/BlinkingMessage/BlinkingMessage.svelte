<script>
//@ts-nocheck
export let pulse;
export let items=[]; 
export let slideExtra =[];
export let theme;

$: borderColor = pulse % 2 === 0 ? theme.secondaryColor : theme.textColor;
// primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen p-14   "
 style = {`
 background-color : ${theme.backgroundColor};
 `}
>

    <div class="flex  justify-center text-center  m-2 p-4 rounded-md text-2xl border-4"
   style = {`
        background-color : ${theme.primaryColor};
        border-color : ${borderColor};
        color : ${theme.textColor};
        white-space: pre-line;
        `} 
    >
        {items[0].content}
    </div>
 

<div class='flex justify-end w-full pr-10'>
    <div style={`color :${theme.highlightColor}`}>taleem.help</div>
</div>

</div>