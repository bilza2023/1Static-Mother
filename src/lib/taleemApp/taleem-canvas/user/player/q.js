
function init(){
    if (canvasElement) {
      
      if(interval) clearInterval(interval);
  
      if(!background) background = getCanvasBackground();
      const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
      items = new Items(itemLiterals);
      player = new Player(canvasElement,ctx,assets);
      
      // Get the parent container width (the left-panel div)
      const leftPanelWidth = canvasElement.parentElement.clientWidth;
      // Set the width of the canvas through the Player instance
      player.width = leftPanelWidth;
      
      editor = new EditorBehaviour(items,setSeletecItem);
      player.connect(editor);
      itemsForDropDown = items.getItems();
      player.draw(items.getItems(),background);
  
      interval = setInterval(()=>{
        if(player) { 
          itemsForDropDown = items.getItems();
          player.draw(items.getItems(),background);
          }
      },20);
    }
  }