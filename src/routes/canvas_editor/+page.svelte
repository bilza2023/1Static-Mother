
<script>
  import {presentation} from "../../lib/presentation_from_db";    
    import CanvasEditor from "../../lib/CanvasModule/CanvasEditor/CanvasEditor.svelte";
    // let items = [
    //   {
    //   uuid: "abc",
    //   type: 'rectangle',
    //   name: 'rectangle001',
    //   x: 100,
    //   y: 100,
    //   width: 100,
    //   height: 100,
    //   rotation: 0,
    //   filled: true,
    //   lineWidth: 1,
    //   dash: 0,
    //   gap: 0,
    //   color: "red",
    //   globalAlpha: 1
    //   }
    //   ];

    const appItems = presentation.slides[0].items;

    let items = [];

    for (let i = 0; i < appItems.length; i++) {
      const appItem =   appItems[i];
      // debugger;
      items.push(appItem.itemExtra);
      
    }
 
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
</script>



<CanvasEditor 
{items}
{images}
{imagesUrl}
{background}
/>