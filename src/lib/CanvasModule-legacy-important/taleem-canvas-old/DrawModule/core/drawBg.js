


export default function drawBg(ctx,item,env) {
    // debugger;
    ctx.globalAlpha = item.globalAlpha;
    // ✅ Get canvas width & height from Env
    const width = env.getCanvasWidth();
    const height = env.getCanvasHeight();
    // ✅ Fill the entire canvas area
    ctx.fillStyle = item.backgroundColor;
    ctx.fillRect(0, 0, width, height);
    // ✅ Draw grid if enabled

    if (item.backgroundImage !== null) {
      drawBgImage(ctx,item,env);
    }
    if (item.showGrid) {
      drawGrid(ctx,item,env);
    }
}
////////////////////////////////////////////////////////////////////

function drawBgImage(ctx,item,env) {
  const base64String = env.getBackgroundImage(item.backgroundImage);

  if (!base64String || typeof base64String !== "string") {
      console.error("Invalid background image:", item.backgroundImage);
      return;
  }

      const cachedBgImage = new Image();
      cachedBgImage.src = base64String;

  // ✅ Ensure the image is fully loaded before drawing
  if (cachedBgImage.complete) {
      ctx.globalAlpha = item.globalAlpha;
      ctx.drawImage(cachedBgImage, 0, 0, env.getCanvasWidth(), env.getCanvasHeight());
      ctx.globalAlpha = 1;
  } else {
      cachedBgImage.onload = () => {
          ctx.globalAlpha = item.globalAlpha;
          ctx.drawImage(cachedBgImage, 0, 0, env.getCanvasWidth(), env.getCanvasHeight());
          ctx.globalAlpha = 1;
      };
  }
}

function drawGrid(ctx,item,env) {

  ctx.strokeStyle = item.gridLineColor;
  ctx.lineWidth = item.gridLineWidth;
  
  const width = env.getCanvasWidth();
  const height = env.getCanvasHeight();

  for (let x = item.cellWidth; x < width; x += item.cellWidth) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Draw horizontal grid lines
  for (let y = item.cellHeight; y < height; y += item.cellHeight) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

}
