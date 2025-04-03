<script>
  import CanvasSlidePlayer from "../../lib/taleemApp/CanvasModule/CanvasPlayer/CanvasSlidePlayer.svelte";
  import { onMount } from 'svelte';
  import { page } from '$app/stores'; // Import the page store
  import { get } from 'svelte/store'; // Import get to retrieve the page store value.

  let slide = null;
  let slideName = '';

  onMount(async () => {
    // Access the URL query parameters
    const queryParams = get(page).url.searchParams;

    // Get the slide name from the query parameter
    slideName = queryParams.get('slide');
    // slideName = "slide0";

    if (slideName) {
        try {
            // dynamically import the slide data
            slide = (await import(`./data/${slideName}`)).slide;
        } catch (error) {
            console.error(`Error loading slide ${slideName}:`, error);
        }
    }
  });
</script>

{#if slide}
  <CanvasSlidePlayer {slide} />
{:else if slideName}
    <p>Slide {slideName} could not be loaded</p>
{:else}
    <p>No slide specified in URL. Add ?slide=slide0 to the url</p>
{/if}



