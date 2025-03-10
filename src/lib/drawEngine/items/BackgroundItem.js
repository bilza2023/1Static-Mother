
import DrawItem from './DrawItem.js';
import uuid from './uuid.js';

export default class BackgroundItem extends DrawItem {
  constructor(itemData) {
    super(itemData);
 }

 static newItemData(){
    return {
      uuid: uuid(),
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
  }
  drawBgImage(ctx) {
    const base64String = this.env.getBackgroundImage(this.itemData.backgroundImage);

    if (!base64String || typeof base64String !== "string") {
        console.error("Invalid background image:", this.itemData.backgroundImage);
        return;
    }

    // ✅ Create an `Image` object if not already cached
    if (!this.cachedBgImage) {
        this.cachedBgImage = new Image();
        this.cachedBgImage.src = base64String;
    }

    // ✅ Ensure the image is fully loaded before drawing
    if (this.cachedBgImage.complete) {
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.drawImage(this.cachedBgImage, 0, 0, this.env.getCanvasWidth(), this.env.getCanvasHeight());
        ctx.globalAlpha = 1;
    } else {
        this.cachedBgImage.onload = () => {
            ctx.globalAlpha = this.itemData.globalAlpha;
            ctx.drawImage(this.cachedBgImage, 0, 0, this.env.getCanvasWidth(), this.env.getCanvasHeight());
            ctx.globalAlpha = 1;
        };
    }
}


  getBackgroundImages(){
    return Array.from(this.env.backgroundImages.keys());
  }
  
  drawGrid(ctx) {

    ctx.strokeStyle = this.itemData.gridLineColor;
    ctx.lineWidth = this.itemData.gridLineWidth;
    
    const width = this.env.getCanvasWidth();
    const height = this.env.getCanvasHeight();

    for (let x = this.itemData.cellWidth; x < width; x += this.itemData.cellWidth) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal grid lines
    for (let y = this.itemData.cellHeight; y < height; y += this.itemData.cellHeight) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

  }

  draw(ctx) {
    ctx.globalAlpha = this.itemData.globalAlpha;
    // ✅ Get canvas width & height from Env
    const width = this.env.getCanvasWidth();
    const height = this.env.getCanvasHeight();
    // ✅ Fill the entire canvas area
    ctx.fillStyle = this.itemData.backgroundColor;
    ctx.fillRect(0, 0, width, height);
    // ✅ Draw grid if enabled

    if (this.itemData.backgroundImage !== null) {
      this.drawBgImage(ctx);
    }
    if (this.itemData.showGrid) {
      this.drawGrid(ctx);
    }
  }

  // drawBackgroundImage() {
  //   const { slideExtra } = this;
  //   if (slideExtra.bgImg && assets.bgImages) {
  //     for (const element of assets.bgImages) {
  //       if (element.name === slideExtra.bgImg) {
  //         this.bgImage(element.img, slideExtra.bgGlobalAlpha);
  //         break;
  //       }
  //     }
  //   }
  // }

  // bgImage(img, alpha = 1) {
  //   const { ctx, canvas } = this;
  //   ctx.globalAlpha = alpha;
  //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  //   ctx.globalAlpha = 1;
  // }

}
