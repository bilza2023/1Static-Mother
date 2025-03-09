<script>
  /**
   * 9-Mar-2025: Do not change
   * This is the Usage Example of PlayerTaleem which just takes 2 values (items and background); 
   * */  
   import PlayerTaleem from "../../lib/CanvasModule/PlayerTaleem.svelte";
      let items = [
        {
        uuid: "abc",
        type: 'rectangle',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        filled: true,
        lineWidth: 1,
        dash: 0,
        gap: 0,
        color: "red",
        globalAlpha: 1
      }
      ]; 
      let background =  {
        uuid: "44456",
        type: 'background',  
        backgroundColor: 'gray',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: null,
        globalAlpha: 1,
        ///////////////////
        showGrid: true,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
  </script>
  
  <PlayerTaleem {items} {background}  />  
    