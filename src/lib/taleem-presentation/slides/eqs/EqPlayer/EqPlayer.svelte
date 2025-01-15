<script>
/**
 * 17-Nov-2024 
This is Just a go-through component just for currentTime to change items.
- There should not be currentTime inside any Player since the Player has to do nothing with time , another layer/function should edit the data and player should just play it.
- the player will have setCurrentTime (old set pulse) to set time at run time (in player)
- Editor will need currentTime (from sound file) to sync animation with it.
- Acrually player and editor both need currentTime but in player it does not go to player-core where as in editor it can go a bit deep ??
- do not move currentTime to store since i do not want to share in across.
*/  
import EqPlayerCore from './EqPlayerCore.svelte';
import {itemsStore} from "./store";
      
        export let items = []; 
        export let slideExtra; 
        export let currentTime = 0;
        export let setPulse = 0;

$:{
  //--no more items beyond this point-- however if the items change as loading a new file. the we can react to it...
  items;
  itemsStore.set(items);
  // console.log("items ::::::===>>>>>>>>>",items);
}     

</script>

<EqPlayerCore   

  {slideExtra}
  {currentTime}
  {setPulse}
/>      