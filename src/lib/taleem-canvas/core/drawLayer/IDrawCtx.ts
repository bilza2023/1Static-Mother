

export interface IDrawCtx {
    getTextWidth(text: string, fontSize: number, fontFamily: string): number;
    
    getCanvasWidth(): number;
    
    getCanvasHeight(): number;
  }