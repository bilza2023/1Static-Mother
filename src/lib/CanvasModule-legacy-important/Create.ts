
/**
 * 24 March 2025
 * Every thing is important and Every thing is final.
 * 14 objects:24 March 2025
 */
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "./interfaces/ICanvasItems";
import {IBackground} from "./interfaces/IBackground";

export default class Create {
    
static angle():IAngle{
    {
        return {
          uuid: uuid(),
          type : 'angle',
          name : 'angle-001',
          x : 100,
          y : 100,
          radius: 25,
          ticks: 3,
          startAngle: -90,
          endAngle: 0,
          lineWidth: 1,
          showOrigin: true,
    
          color: "red",
          opacity: 1
        };
}  
}
static circle():ICircle{
    return {
        uuid: uuid(),
        type: 'circle',
        name: 'circle-001',
        x: 150,
        y: 150,
        radius: 50,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        lineWidth: 1,
        dash: 0,
        gap: 0,
        filled: true,
        color: "red",
        opacity: 1
      };
}
static dot():IDot{
    return {
        uuid: uuid(),
        type: 'dot',
        name: 'dot',
        x: 100,
        y: 100,
        label: "label",
        radius: 5,
        textColor: "yellowbezier",
        textSize: 40,
        color: "red",
        opacity: 1
      };
}
static ellipse():IEllipse{
    return {
        uuid: uuid(),
        type: 'ellipse',
        name: 'ellipse-001',
        x: 100,
        y: 100,
        radiusX: 50,
        radiusY: 75,
        rotation: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        lineWidth: 1,
        filled: false,
        color: "red",
        opacity: 1
    };
}
static icon():IIcon{
    return {
        uuid: uuid(),
        type: 'icon',
        name: 'icon-001',
        x: 100,
        y: 100,
        text: "This is Heading",
        fontSize: 28,
        iconSize: 100,
        fontFamily: 'Arial',
        icon: '🦏',
        showBg: false,
        iconOnTop: true,
        iconErrorX: 0,
        iconErrorY: 0,
        bgColor: 'gray', 
        color: "red",
        opacity: 1
      };
}
static image():IImage{
    return {
        uuid: uuid(),
        type: 'image',
        name: 'image-001',
        rotation: 0,
        color: 'red',
        x: 50,
        y: 50,
        src: 'drops.png', // This is just the reference name
        width: 200,
        height: 200,
        opacity: 1
    };
}
static line():ILine{
    return {
        uuid: uuid(),
        type: 'line',
        name: 'line-01',
        x1: 100,
        y1: 100,
        x2: 300,
        y2: 200,
        lineWidth: 2,
        rotation: 0,
        dash: 0,
        gap: 0,
        color: "blue",
        opacity: 1
    };
}
static list():IList{
    return {
        uuid: uuid(),
        type: "list",
        name: "list-001",
        color: "black",
        opacity: 1,
//////////////////////////
        x: 100,
        y: 100,
        listArray: ["First item","Second item","Third item"],
        fontSize: 20,
        fontFamily: "Arial",
        lineGap: 5,
        indentation: 5,
      };
}
static piechart():IPieChart{
    return {
        uuid: uuid(),
        type: "piechart",
        name: "piechart-001",
        x: 200,
        y: 200,
        radius: 100,
        data: [
          { label: "A", percentage: 30, color: "red" },
          { label: "B", percentage: 50, color: "blue" },
          { label: "C", percentage: 20, color: "green" },
        ],
        showLabels: true,
        labelFontSize: 14,
        labelColor: "black",
        opacity: 1,
      };
}
static ray():IRay{
    return {
        uuid: uuid(),
        type: 'ray',
        name: 'ray-001',
        x1: 150,
        y1: 150,
        x2: 350,
        y2: 250,
        arrowWidth: 8,
        arrowHeight: 12,
        startArrow: true,
        endArrow: true,
        lineWidth: 2,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
    };
}
static rectangle():IRectangle{
    return {
        uuid: uuid(),
        type: 'rectangle',
        name: 'rectangle001',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 0,
        filled: true,
        lineWidth: 1,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
      };
}
static sprite():ISprite{
    return {
        uuid: uuid(),
        type: "sprite",
        name: "sprite",
        src: "people", // Default until set dynamically
        selectedItem: "man_tblt_stndg", //selectedItem == sprite item
        x: 10,
        y: 10,
        width: 200,
        height: 200,
        rotation: 0,
        opacity: 1,
      };
}
static text():IText{
    return {
        uuid: uuid(),
        type: "text",
        x: 100,
        y: 100,
        text: "Add text..",
        name: "text-001",
        fontSize: 30,
        rotation: 30,
        fontFamily: "Arial",
        color: "black",
        opacity: 1,
        width: 0,
        height: 0
      };
}
static triangle():ITriangle{
    return {
        uuid: uuid(),
        type: 'triangle',
        name: "tiangle-001",
        x1: 100, y1: 100,
        x2: 50, y2: 200,
        x3: 200, y3: 200,
        rotation: 0,
        lineWidth: 2,
        filled: true,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
    };
}
//////////////////////////////////
static background():IBackground{
    return {
        uuid: uuid(),
        type: 'background',  
        backgroundColor: 'gray',
        color: 'gray', //use this instead of backgroundColor
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: null,
        opacity: 1,
        ///////////////////
        showGrid: true,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
}

}//obj
/////////////////////////////
function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }
  