
import {IPieChart} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";

export default function draw(item:IPieChart,drawCtx: DrawCtx,assets:IAssets){
    drawCtx.ctx().globalAlpha = item.opacity;
    let { x, y, radius, data, showLabels, labelFontSize, labelColor } = item;
    let startAngle = 0;

    data.forEach((item) => {
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