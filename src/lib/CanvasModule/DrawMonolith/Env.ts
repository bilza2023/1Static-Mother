

/////////////////////////////////////////////////////////////////////
  export default class Env {
  private ctx: CanvasRenderingContext2D;
/////////////////////////////////////////////////////////////////////
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
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