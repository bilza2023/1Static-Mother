export default function draw(item: IPieChart, drawCtx: DrawCtx, assets: IAssets) {
  drawCtx.ctx().globalAlpha = item.opacity;
  let { x, y, radius, data, showLabels, labelFontSize, labelColor } = item;
  
  // Check if data is in string form and try to parse it
  let parsedData;
  if (typeof data === 'string') {
      try {
          parsedData = JSON.parse(data);
      } catch (e) {
          console.error("Failed to parse pie chart data:", e);
          // Draw a placeholder or error indicator if parsing fails
          drawCtx.ctx().beginPath();
          drawCtx.ctx().arc(x, y, radius, 0, 2 * Math.PI);
          drawCtx.ctx().fillStyle = "gray";
          drawCtx.ctx().fill();
          drawCtx.ctx().strokeStyle = "red";
          drawCtx.ctx().stroke();
          
          // Show error message
          drawCtx.ctx().fillStyle = "red";
          drawCtx.ctx().font = "14px Arial";
          drawCtx.ctx().textAlign = "center";
          drawCtx.ctx().fillText("Invalid data format", x, y);
          return;
      }
  } else {
      parsedData = data;
  }
  
  // If data isn't an array after parsing, handle the error
  if (!Array.isArray(parsedData)) {
      console.error("Pie chart data is not an array");
      drawCtx.ctx().beginPath();
      drawCtx.ctx().arc(x, y, radius, 0, 2 * Math.PI);
      drawCtx.ctx().fillStyle = "gray";
      drawCtx.ctx().fill();
      drawCtx.ctx().strokeStyle = "red";  
      drawCtx.ctx().stroke();
      return;
  }
  
  let startAngle = 0;
  
  parsedData.forEach((item) => {
    let sliceAngle = (item.percentage / 100) * 2 * Math.PI;
    drawCtx.ctx().beginPath();
    drawCtx.ctx().moveTo(x, y);
    drawCtx.ctx().arc(x, y, radius, startAngle, startAngle + sliceAngle);
    drawCtx.ctx().closePath();
    drawCtx.ctx().fillStyle = item.color;
    drawCtx.ctx().fill();
    drawCtx.ctx().stroke();

    if (showLabels) {
      let midAngle = startAngle + sliceAngle / 2;
      let labelX = x + Math.cos(midAngle) * (radius * 0.7);
      let labelY = y + Math.sin(midAngle) * (radius * 0.7);
      drawCtx.ctx().fillStyle = labelColor;
      drawCtx.ctx().font = `${labelFontSize}px Arial`;
      drawCtx.ctx().textAlign = "center";
      drawCtx.ctx().textBaseline = "middle";
      drawCtx.ctx().fillText(item.label, labelX, labelY);
    }
    startAngle += sliceAngle;
  });
}