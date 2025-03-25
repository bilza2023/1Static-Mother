
Here is my CreateItems.ts object : This object return the data structures which are required by canvas draw object to draw items.

Requirements:
1: check the names of each item and get a list of common fields in all items (uuid,name,type should be in all). Using these common fields create an interface IBaseCanvasItem.ts which has all these fields and we will use this to extend other types. 
2: Create ICanvasITems.ts file (it imports IBaseCanvasItem.ts) AND..   has the interface for each of the 14 items given in the CreaItems.ts static functions using the same names (for example ICircle for Circle and IEllipse for Ellipse ); ==> finally export all these 14 interfaces in an array (or what every way there is in typescript to export a set of interfaces).


/**
 * 24 March 2025
 * Every thing is important and Every thing is final.
 * 14 objects:24 March 2025
 */


export default class CreateItem {


static Angle(){
    {
        return {
          uuid: uuid(),
          type : 'angle',
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

static Circle(){
    return {
        uuid: uuid(),
        type: 'circle',
        name: 'circle-001',
        x: 150,
        y: 150,
        radius: 50,
        rotation: 0,
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
static Dot(){
    return {
        uuid: uuid(),
        type: 'dot',
        name: 'dot',
        x: 100,
        y: 100,
        label: "label",
        radius: 5,
        text_color: "yellowbezier",
        text_size: 40,
        color: "red",
        opacity: 1
      };
}
static Ellipse(){
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
static Icon(){
    return {
        uuid: uuid(),
        type: 'icon',
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
static Image(){
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
static Line(){
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
static List(){
    return {
        uuid: uuid(),
        type: "list",
        x: 100,
        y: 100,
        listArray: [
          "First item",
          "Second item",
          "Third item"
        ],
        fontSize: 20,
        fontFamily: "Arial",
        color: "black",
        lineGap: 5,
        indentation: 5,
        opacity: 1,
      };
}
static PieChart(){
    return {
        uuid: uuid(),
        type: "piechart",
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
static Ray(){
    return {
        uuid: uuid(),
        type: 'ray',
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
static Rectangle(){
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
static Sprite(){
    return {
        uuid: uuid(),
        type: "sprite",
        name: "sprite",
        color: "red",
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
static Text(){
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
static Triangle(){
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
  