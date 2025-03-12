
import BackgroundItem from "./drawItems/BackgroundItem.js";
import Rectangle from "./drawItems/Rectangle.js";
import Circle from "./drawItems/Circle.js";
import Ellipse from "./drawItems/Ellipse.js";
import Dot from "./drawItems/Dot.js";
import Angle from "./drawItems/Angle.js";
import Line from "./drawItems/Line.js";
import Ray from "./drawItems/Ray.js";
import Triangle from "./drawItems/Triangle.js";
import ImageItem from "./drawItems/ImageItem.js";
import TextItem from "./drawItems/TextItem.js";
import List from "./drawItems/List.js";
import Piechart from "./drawItems/Piechart.js";
import Sprite from "./drawItems/Sprite.js";

export default class Create {
//special item BackgroundItem 
static    background() {return  BackgroundItem.newItemData() ;}
static    sprite() {return  Sprite.newItemData();}
static    dot() {return  Dot.newItemData();}
static    angle() {return  Angle.newItemData();}
static    image() {return  ImageItem.newItemData();}
static    piechart() {return  Piechart.newItemData();}
static    list() {return  List.newItemData();}
static    rectangle() {return  Rectangle.newItemData();}
static    circle() {return  Circle.newItemData();}
static    ellipse() {return Ellipse.newItemData() ;}
static    line() {return  Line.newItemData();}
static    ray() {return  Ray.newItemData();}
static    triangle() {return  Triangle.newItemData();}
static    text() {return  TextItem.newItemData();}
}
