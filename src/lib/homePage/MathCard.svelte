<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons} from "$lib/util";
// import CanvasPlayer from "../Presentation/slides/canvas/canvasPlayer/CanvasPlayer.svelte"
export let name;


const items = [
        {
          "name": "",
          "content": "",
          "showAt": 0,
          "extra": {
            "translate": true,
            "name": "jt_95495568",
            "command": "text",
            "text": `${name}`,
            "x": 2,
            "y": 1.5,
            "color": "#FAE500",
            "font": "20px Arial",
            "shadowOffsetX": 12,
            "shadowOffsetY": 12,
            "shadowColor": "#9D850B",
            "useShowHide": false,
            "showAt": 0,
            "globalAlpha": 1,
            "shadowBlur": 12
          }
        }
      ];

      // {
//   "half": {
//     "canvasWidth": 500,
//     "canvasHeight": 180
//   },
//   "quarter": {
//     "canvasWidth": 250,
//     "canvasHeight": 90
//   },
//   "eighth": {
//     "canvasWidth": 125,
//     "canvasHeight": 45
//   },
//   "twelfth": {
//     "canvasWidth": 83.33,
//     "canvasHeight": 30
//   }
// }

      
const extra = {
        "backgroundColor": "#03260A",
        "canvasWidth": 250,
        "canvasHeight": 90,
        "cellHeight": 25,
        "cellWidth": 25,
        "xFactor": 0,
        "yFactor": 0,
        "showGrid": false,
        "gridLineWidth": 1,
        "gridLineColor": "#363C34"
      };      
</script>
