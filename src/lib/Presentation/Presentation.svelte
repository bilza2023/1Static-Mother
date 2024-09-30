<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import TblStr from "./slides/TblStr.svelte";
    import TblStrEd from "./slides/TblStrEd.svelte";
    import EqPlayer from "./slides/eqs/EqPlayer/EqPlayer.svelte";
    import EqsEditor from "./slides/eqs/EqsEditor/EqsEditor.svelte";
    import CanvasEditor from "./slides/canvas/canvasEditor/CanvasEditor.svelte";
    import CanvasPlayer from "./slides/canvas/canvasPlayer/CanvasPlayer.svelte";
    import GridPlayer from "./slides/grid/gridPlayer/GridPlayer.svelte";
    import GridEditor from "./slides/grid/gridEditor/GridEditor.svelte";
//sprite - sheet    
    import { students } from "./sprite/students";
    import { figs } from "./sprite/figs";
    import { alphabets } from "./sprite/alphabets";
    import { people } from "./sprite/people";
    import inspect from "./inspect.js";
    let spriteImgArray  = []; 

    let bgImages  = []; 

    export let currentSlide;
    export let currentTime;
    export let saveCurrentSlideAsSlideTemplate;//??
    export let tcode = "fbise9math";
    export let setPulse = () => {};
    export let displayMode = true;
      
    let ready = false;

$:{
    currentSlide;
    inspect(currentSlide);
}   

onMount(async()=>{
    
    // Sprite Sheets
    students.img = new Image(); students.img.src = students.url;
    figs.img = new Image(); figs.img.src = figs.url;
    alphabets.img = new Image(); alphabets.img.src = alphabets.url;
    people.img = new Image(); people.img.src = people.url;
    
    spriteImgArray.push(students);
    spriteImgArray.push(figs);
    spriteImgArray.push(alphabets);
    spriteImgArray.push(people);
    //////////////////////////////////////
//
    const P = 'system_images/bg_images/';    

const paper01 = new Image(); paper01.src = P + "paper01.jpg";
bgImages.push({"name" : P + "paper01.jpg" , "img" : paper01});

const drywall = new Image(); drywall.src = P + "drywall.jpg";
bgImages.push({"name" : P + "drywall.jpg" , "img" : drywall});

const black_board = new Image(); black_board.src = P + "black_board.jpg";
bgImages.push({"name" : P + "black_board.jpg" , "img" : black_board});

const black_board_mat = new Image(); black_board_mat.src = P + "black_board_mat.jpg";
bgImages.push({"name" : P + "black_board_mat.jpg" , "img" : black_board_mat});
 
const wood = new Image(); wood.src = P + "wood.jpg";
bgImages.push({"name" : P + "wood.jpg" , "img" : wood});

const tinted = new Image(); tinted.src = P + "tinted.jpg";
bgImages.push({"name" : P + "tinted.jpg" , "img" : tinted});
 
const black_mat = new Image(); black_mat.src = P + "black_mat.jpg";
bgImages.push({"name" : P + "black_mat.jpg" , "img" : black_mat});

const white_mat = new Image(); white_mat.src = P + "white_mat.jpg";
bgImages.push({"name" : P + "white_mat.jpg" , "img" : white_mat});

const granite = new Image(); granite.src = P + "granite.jpg";
bgImages.push({"name" : P + "granite.jpg" , "img" : granite});

const gray_marble = new Image(); gray_marble.src = P + "gray_marble.jpg";
bgImages.push({"name" : P + "gray_marble.jpg" , "img" : gray_marble});

const brown_stone = new Image(); brown_stone.src = P + "brown_stone.jpg";
bgImages.push({"name" : P + "brown_stone.jpg" , "img" : brown_stone});


const gray_stone = new Image(); gray_stone.src = P + "gray_stone.jpg";
bgImages.push({"name" : P + "gray_stone.jpg" , "img" : gray_stone});

const design_old = new Image(); design_old.src = P + "design_old.jpg";
bgImages.push({"name" : P + "design_old.jpg" , "img" : design_old});

const blue_waves = new Image(); blue_waves.src = P + "blue_waves.jpg";
bgImages.push({"name" : P + "blue_waves.jpg" , "img" : blue_waves});

const wall = new Image(); wall.src = P + "wall.jpg";
bgImages.push({"name" : P + "wall.jpg" , "img" : wall});

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
ready = true;
}) ; 

$:{
//--14 sep 2024 :: so every time a slide changes we load the images required by it. We go over each item and if that item is "command.image" we load the inage in it    
    currentSlide;
    loadImages();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

// We go over each item and if that item is "command.image" we load the inage in it
async function loadImages() {
//   debugger;
  for (let i = 0; i < currentSlide.items.length; i++) {
    const item = currentSlide.items[i];

    if (item.extra.command == 'image' || item.extra.command == 'image2') {
      try {
          const url = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/'+ item.extra.src + '.' + item.extra.ext;
          const img = await loadImage( url);
          item.extra.image = img;
          
      }   catch (err) {
        // console.error('Error loading image:', err);
        // do nothing 
      }
    }
  }
}

</script>
{#if currentSlide.type == "TblStr"}
    {#if displayMode}
        <TblStr
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
        />
    {:else}
        <TblStrEd
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
        />
    {/if}
{/if}

<!-- Eqs -->
{#if currentSlide.type == "Eqs"}
    {#if displayMode}
        <EqPlayer
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
            {setPulse}
        />
    {:else}
        <EqsEditor
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
            {currentTime}
            startTime={currentSlide.startTime}
        />
    {/if}
{/if}

<!-- grid -->
{#if currentSlide.type == "grid"}
    {#if displayMode}
        <GridPlayer
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
            {setPulse}
        />
    {:else}
        <GridEditor
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
            {currentTime}
        />
    {/if}
{/if}

<!-- CanvasEditor -->
{#if ready}
{#if currentSlide.type == "canvas"}
    {#if displayMode }
        <CanvasPlayer
            {currentTime}
            items={currentSlide.items}
            extra={currentSlide.extra}
            {spriteImgArray}
            {bgImages}
            
        />
    {:else}
        <CanvasEditor
            bind:items={currentSlide.items}
            bind:extra={currentSlide.extra}
            {tcode}
            bind:currentTime
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            {spriteImgArray}
            {bgImages}
            {saveCurrentSlideAsSlideTemplate}
        />
    {/if}
{/if}
{/if}
