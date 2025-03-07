



export default function drawHandles(){
    function drawHandles(){
       
        //handleMove
        const handleMove =  Create.rectangle();
        handleMove.x = selectedItem.x;
        handleMove.y = selectedItem.y;
        handleMove.width = 10;
        handleMove.height = 10;
        handleMove.color = "red";
        ///---special
        handleMove.flag = "handle";
        handleMove.handleType = "move";
       
       
        items = [...items , handleMove];
      }
}