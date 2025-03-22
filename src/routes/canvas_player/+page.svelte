
<script>
    import {presentation} from "../../lib/presentation_from_db";    
      import CanvasPlayer from "../../lib/CanvasModule/CanvasPlayer/CanvasPlayer.svelte";
   
    const appItems = presentation.slides[0].items;
  
    let items = [];
        let images = [
          "atom.png",
          "baloons.png",
          "activity1.jpg",
          "drops.png"
        ];
        let imagesUrl   = "/images/";
        let background =  {
          uuid: "44455764hfghyjty6",
          type: 'background',  
          backgroundColor: '#9cc19c',
          cellHeight: 25,
          cellWidth: 25,
          backgroundImage: "black_mat",
          globalAlpha: 1,
          showGrid: false,
          gridLineWidth: 1,
          gridLineColor: '#685454'
        };
                
    for (let i = 0; i < appItems.length; i++) {
        const appItem =   appItems[i];
        items.push(appItem.itemExtra);
      }

  </script>
  
  <CanvasPlayer 
  {items}
  {images}
  {imagesUrl}
  {background}
  />