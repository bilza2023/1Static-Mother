<script lang="ts">
  //Since every thing is important so everything must be final.
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
  import {presentationData} from "./presentationData";
  
//////////////////////////////
    let slides=null;
    let assets:IAssets | null =null;
    let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////      
      onMount(async() => {
      const imagesMap = await loadImages(images,imagesUrl);
      assets = new Assets(imagesMap)
      slides = presentationData;
    });
</script>
{#if slides}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  />
{/if}
