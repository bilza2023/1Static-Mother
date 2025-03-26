


export default function piechart(itemData,ctx){
    ctx.save();
    ctx.globalAlpha = itemData.opacity;
    let { x, y, radius, data, showLabels, labelFontSize, labelColor } = itemData;
    let startAngle = 0;

    data.forEach((item) => {
      let sliceAngle = (item.percentage / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.stroke();

      if (showLabels) {
        let midAngle = startAngle + sliceAngle / 2;
        let labelX = x + Math.cos(midAngle) * (radius * 0.7);
        let labelY = y + Math.sin(midAngle) * (radius * 0.7);
        ctx.fillStyle = labelColor;
        ctx.font = `${labelFontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.label, labelX, labelY);
      }
      startAngle += sliceAngle;
    });
    ctx.restore();
  }