

export default class  CreateHandles {

  constructor(createRectangleFactory){
    this.createRectangleFactory =  createRectangleFactory;
  }
  create() {
      const handleMove =   this.getHandleData(0, 0, "purple", "move");
      const handleWidth =  this.getHandleData(0, 0, "green", "width");
      const handleHeight = this.getHandleData(0, 0, "blue", "height");
      //----Add to items array
      return [ handleMove,handleWidth,handleHeight];
  }
  getHandleData(x,y,color,handleType){
    if (!this.createRectangleFactory) {
      throw new Error("Rectangle factory not provided to Handles");
  }
  
      const handle = this.createRectangleFactory();
      handle.x = x;
      handle.y = y;
      handle.width = 10;
      handle.height = 10;
      handle.color = color;
      handle.flag = "handle";
      handle.handleType = handleType; //move,wodth,height
      return handle;
  }
}
////////////////////
