import BackgroundItem from "./items/BackgroundItem.js";
import Rectangle from "./items/Rectangle.js";
import Circle from "./items/Circle.js";
import Ellipse from "./items/Ellipse.js";
import Line from "./items/Line.js";
import Ray from "./items/Ray.js";
import Triangle from "./items/Triangle.js";
import ImageItem from "./items/ImageItem.js";
import TextItem from "./items/TextItem.js";
import List from "./items/List.js";
import Piechart from "./items/Piechart.js";
import Sprite from "./items/Sprite.js";

export default class Create {
//special item BackgroundItem 
static    background() {return  BackgroundItem.itemExtraData() ;}
static    sprite() {return  Sprite.itemExtraData();}
static    image() {return  ImageItem.itemExtraData();}
static    piechart() {return  Piechart.itemExtraData();}
static    list() {return  List.itemExtraData();}
static    rectangle() {return  Rectangle.itemExtraData();}
static    circle() {return  Circle.itemExtraData();}
static    ellipse() {return Ellipse.itemExtraData() ;}
static    line() {return  Line.itemExtraData();}
static    ray() {return  Ray.itemExtraData();}
static    triangle() {return  Triangle.itemExtraData();}
static    text() {return  TextItem.itemExtraData();}
}
