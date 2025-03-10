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
static    background() {return  BackgroundItem.newItemData() ;}
static    sprite() {return  Sprite.newItemData();}
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
