<script>
//@ts-nocheck
export let pulse;
export let items = [];
export let slideExtra = [];
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen"
     style={`
 background-color: ${theme.backgroundColor};
 `}
>

  <div class="flex justify-center m-1 p-1 rounded-md"
       style={`
        background-color: ${theme.primaryColor};
        color: ${theme.textColor};
        `}
  >
    <h1 class="text-white text-2xl"
        style={`color: ${theme.textColor}`}
    >
      {items[0].content}
    </h1>
  </div>

  <div class="flex justify-center w-full p-2 pb-4">
    <img style="max-height: 75vh; width: auto; max-width: 90%;" src={`mathImages/${items[1].content}.png`} alt="">
  </div>

  <div class="flex justify-end w-full pr-10">
    <div style={`color: ${theme.highlightColor}`}>taleem.help</div>
  </div>

</div>
