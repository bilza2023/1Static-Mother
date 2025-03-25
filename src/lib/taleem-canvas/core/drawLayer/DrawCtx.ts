

/////////////////////////////////////////////////////////////////////
  export default class DrawCtx {
    
  private _ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
/////////////////////////////////////////////////////////////////////
  constructor(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement) {
    this._ctx = ctx;
    this.canvas = canvas;
  }
  ctx(){return this._ctx;}
  clear(){
    const { _ctx, canvas } = this;
    const bgColor =  'gray';
    _ctx.clearRect(0, 0, canvas.width, canvas.height);
    _ctx.fillStyle = bgColor;
    _ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }
  public getTextWidth(text: string, fontSize: number, fontFamily: string): number {
    this._ctx.font = `${fontSize}px ${fontFamily}`;
    return this._ctx.measureText(text).width;
  }

  public getCanvasWidth(): number {
    return this._ctx.canvas.width;
  }

  public getCanvasHeight(): number {
    return this._ctx.canvas.height;
  }
}