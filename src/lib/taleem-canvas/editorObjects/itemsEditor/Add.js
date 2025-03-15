
import Create from "../../DrawModule/Create";
import itemsMap from "../ItemsMap";

export default class Add {
 constructor(items){
 this.items = items;
 }   

 getEditObject(itemType,item){
    const OBJ = itemsMap.get(itemType);
    const editObj = new OBJ(item);
    return editObj;
 }
//////////////////////////////////////////////////
 rectangle() {
    const item = Create.rectangle();
    this.items.push(item);
    return  this.getEditObject('rectangle',item);
}
  sprite() {
    const item = Create.sprite();
    this.items.push(item);
    return  this.getEditObject('sprite',item);
}
  dot() {
    const item = Create.dot();
    this.items.push(item);
    return  this.getEditObject('dot',item);
}
  angle() {
    const item = Create.angle();
    this.items.push(item);
    return  this.getEditObject('angle',item);
}
  image() {
    const item = Create.image();
    this.items.push(item);
    return  this.getEditObject('image',item);
}
  piechart() {
    const item = Create.piechart();
    this.items.push(item);
    return  this.getEditObject('piechart',item);
}
  list() {
    const item = Create.list();
    this.items.push(item);
    return  this.getEditObject('list',item);
}
  
  circle() {
    // debugger;
    const item = Create.circle();
    this.items.push(item);
    return  this.getEditObject('circle',item);
}
  ellipse() {
    const item = Create.ellipse();
    this.items.push(item);
    return  this.getEditObject('ellipse',item);
}
  line() {
    const item = Create.line();
    this.items.push(item);
    return  this.getEditObject('line',item);
}
  ray() {
    const item = Create.ray();
    this.items.push(item);
    return  this.getEditObject('ray',item);
}
  triangle() {
    const item = Create.triangle();
    this.items.push(item);
    return  this.getEditObject('triangle',item);
}
  text() {
    const item = Create.text();
    this.items.push(item);
    return  this.getEditObject('text',item);
}

}
