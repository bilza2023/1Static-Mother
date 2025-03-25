

/////////////////////////////////////////////////////////////////////
  export default class DrawCtx {
    
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
/////////////////////////////////////////////////////////////////////
  constructor(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement) {
    this.ctx = ctx;
    this.canvas = canvas;
  }
  clear(){
    const { ctx, canvas } = this;
    const bgColor =  'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }
  public getTextWidth(text: string, fontSize: number, fontFamily: string): number {
    this.ctx.font = `${fontSize}px ${fontFamily}`;
    return this.ctx.measureText(text).width;
  }

  public getCanvasWidth(): number {
    return this.ctx.canvas.width;
  }

  public getCanvasHeight(): number {
    return this.ctx.canvas.height;
  }
}