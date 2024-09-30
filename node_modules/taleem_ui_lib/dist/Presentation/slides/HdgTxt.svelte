<script>
//@ts-nocheck
export let pulse;
// export let startTime;
// export let endTime;
export let items=[]; 
// export let compExtra =[];
export let theme;
// primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
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

    <!-- <div class='flex justify-center w-full  p-2 pb-4 h-full '>
        <img style="height: 50%;" class="w-6/12" src= {`mathImages/${items[1].content}.png`} alt="" >
    </div> -->

    <div class="p-2 m-2 rounded-md mx-4 text-lg "
    style={`
    background-color : ${theme.secondaryColor};
        color : ${theme.textColor};
    `}
    >
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, justo eget vehicula tristique, velit ipsum ultricies dui. Fusce scelerisque, turpis in tincidunt pellentesque, eros libero facilisis tortor. Aenean et scelerisque nunc. Curabitur auctor convallis nunc, at ultricies odio. Sed nec aliquam est. Cras efficitur hendrerit tincidunt. Donec in neque mauris. Sed at aliquam odio. Nullam non mauris sed sapien gravida tincidunt. Ut lacinia nunc sed semper luctus. Vestibulum auctor, odio in egestas vulputate, nulla dolor placerat justo.

    </div>
    <div style={`color :${theme.highlightColor}`}>taleem.help</div>

</div>