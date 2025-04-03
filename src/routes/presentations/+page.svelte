<script lang="ts">
  //Since every thing is important so everything must be final.
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
  import { page } from '$app/stores'; // Import the page store
  import { get } from 'svelte/store'; // Import get to retrieve the page store value.
  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages"
  import ProjectToolbar from "../../ProjectToolbar.svelte";
//////////////////////////////
    let slides=null;
    let assets:IAssets | null =null;
    // let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    // let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////      
      onMount(async () => {
        debugger;
    //     const queryParams = get(page).url.searchParams;
    // let presentationName = queryParams.get('presentation');
    let presentationName="presentationZero";
    if (presentationName) {
        try {
            // dynamically import the slide data
            slides = (await import(`./data/${presentationName}`)).presentationData;
            // slides =  JSON.parse(localStorage.getItem("editorPresentation"));
            /////////////////////////////////////////////////////////
          let imagesUrl   = "/images/";//if needed take it out of onmount
          //since we just want images of 1 slide.
          const images = getPresentationImages(slides);
          // let images = [...images,...imagesFromSlides]; //imp
          const imagesMap = await loadImages(images,imagesUrl);
          assets = new Assets(imagesMap)
          
          
        } catch (error) {
            console.error(`Error loading slide ${presentationName}:`, error);
        }
    }
    //////////////////////////////////////////////////
    
    // const imagesFromSlides = getPresentationImages(presentationData);
    //   images = [...images,...imagesFromSlides]; //imp
    // //////////////////////////////////////////////////
    //   const imagesMap = await loadImages(images,imagesUrl);
    //   assets = new Assets(imagesMap)
    //   slides = presentationData;
    });
</script>
<ProjectToolbar />
{#if slides && assets}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  />
{/if}
