

import { ICanvasItemTypes } from "../../CanvasModule-legacy-important/index";
import {Create} from "../../CanvasModule-legacy-important/index";


export default class Add {
  items:ICanvasItemTypes[];
  redraw:()=>void;

 constructor(items:ICanvasItemTypes[]=[],redraw:()=>void=()=>{}){
 this.items = items;
 this.redraw = redraw;
 }   

//////////////////////////////////////////////////
 rectangle() {
   debugger;
    const item = Create.rectangle();
    this.items.push(item);
     this.redraw(); return item;
}
  sprite() {
    const item = Create.sprite();
    this.items.push(item);
     this.redraw(); return item;
}
  dot() {
    const item = Create.dot();
    this.items.push(item);
     this.redraw(); return item;
}
  angle() {
    const item = Create.angle();
    this.items.push(item);
     this.redraw(); return item;
}
  image() {
    const item = Create.image();
    this.items.push(item);
     this.redraw(); return item;
}
  piechart() {
    const item = Create.piechart();
    this.items.push(item);
     this.redraw(); return item;
}
  list() {
    const item = Create.list();
    this.items.push(item);
     this.redraw(); return item;
}
  
  circle() {
    // debugger;
    const item = Create.circle();
    this.items.push(item);
     this.redraw(); return item;
}
  ellipse() {
    debugger;
    const item = Create.ellipse();
    this.items.push(item);
     this.redraw(); return item;
}
  line() {
    const item = Create.line();
    this.items.push(item);
     this.redraw(); return item;
}
  ray() {
    const item = Create.ray();
    this.items.push(item);
     this.redraw(); return item;
}
  triangle() {
    const item = Create.triangle();
    this.items.push(item);
     this.redraw(); return item;
}
  text() {
    const item = Create.text();
    this.items.push(item);
     this.redraw(); return item;
}

}
