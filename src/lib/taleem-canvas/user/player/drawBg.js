


export default function drawBg(item,drawCtx,assets) {
    // debugger;
    drawCtx.ctx().globalAlpha = item.opacity;
    // ✅ Get canvas width & height from Env
    const width = drawCtx.getCanvasWidth();
    const height = drawCtx.getCanvasHeight();
    // ✅ Fill the entire canvas area
    drawCtx.ctx().fillStyle = item.backgroundColor;
    drawCtx.ctx().fillRect(0, 0, width, height);
    // ✅ Draw grid if enabled

    if (item.backgroundImage !== null) {
      drawBgImage(drawCtx,item,assets);
    }
    if (item.showGrid) {
      drawGrid(drawCtx,item);
    }
}
////////////////////////////////////////////////////////////////////

function drawBgImage(drawCtx,item,assets) {
  // debugger;
  const base64String = assets.getBackgroundImage(item.backgroundImage);

  if (!base64String || typeof base64String !== "string") {
      console.error("Invalid background image:", item.backgroundImage);
      return;
  }

      const cachedBgImage = new Image();
      cachedBgImage.src = base64String;

  // ✅ Ensure the image is fully loaded before drawing
  if (cachedBgImage.complete) {
      drawCtx.ctx().globalAlpha = item.opacity;
      drawCtx.ctx().drawImage(cachedBgImage, 0, 0, drawCtx.getCanvasWidth(), drawCtx.getCanvasHeight());
      drawCtx.ctx().globalAlpha = 1;
  } else {
      cachedBgImage.onload = () => {
          drawCtx.ctx().globalAlpha = item.opacity;
          drawCtx.ctx().drawImage(cachedBgImage, 0, 0, drawCtx.getCanvasWidth(), drawCtx.getCanvasHeight());
          drawCtx.ctx().globalAlpha = 1;
      };
  }
}

function drawGrid(drawCtx,item,env) {

  drawCtx.ctx().strokeStyle = item.gridLineColor;
  drawCtx.ctx().lineWidth = item.gridLineWidth;
  
  const width = drawCtx.getCanvasWidth();
  const height = drawCtx.getCanvasHeight();

  for (let x = item.cellWidth; x < width; x += item.cellWidth) {
    drawCtx.ctx().beginPath();
    drawCtx.ctx().moveTo(x, 0);
    drawCtx.ctx().lineTo(x, height);
    drawCtx.ctx().stroke();
  }

  // Draw horizontal grid lines
  for (let y = item.cellHeight; y < height; y += item.cellHeight) {
    drawCtx.ctx().beginPath();
    drawCtx.ctx().moveTo(0, y);
    drawCtx.ctx().lineTo(width, y);
    drawCtx.ctx().stroke();
  }

}
