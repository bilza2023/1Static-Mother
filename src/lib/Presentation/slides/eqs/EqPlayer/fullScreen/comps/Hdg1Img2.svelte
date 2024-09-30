<script>
//@ts-nocheck
import {Icons,onMount} from '../../../../../util';
import {HdgWithIcon} from 'sveltetools_bils/src/cmp';
const temp = {
 "hdgContent" : "Some Content",
 "imgSrc" : "graph"
}
export let fs;
export let runningTime;
// export let typeData;
$: data = JSON.parse(fs.code);
$: console.log("runningTime",runningTime);

  function getImageContainerHeight() {
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer) {
      return imageContainer.clientHeight;
    }
    return null; // Return null if the element is not found
  }

  onMount(() => {
    // const height = getImageContainerHeight();
    // console.log('Image Container Height:', height);
  });
</script>

<div class="flex flex-col justify-center ">
{#if runningTime < 10}
<HdgWithIcon>{data.hdgContent}</HdgWithIcon>
{/if}
</div>

<div class="flex  justify-center gap-1 ">
 <div id = '' 
class='flex justify-center w-full  p-2 pb-4 h-full '>
    <img  class="w-12/12" src= {`mathImages/${data.imgSrc}.png`} alt="" >
</div>

 <div id = '' 
class='flex justify-center w-full  p-2 pb-4 h-full '>
    <img style="height: 50%;" class="w-12/12" src= {`mathImages/${data.imgSrc}.png`} alt="" >
</div>

</div>