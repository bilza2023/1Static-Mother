

import Rectangle from "./drawItems/Rectangle";
import Circle from "./drawItems/Circle";
import Ellipse from "./drawItems/Ellipse";
import Dot from "./drawItems/Dot";
import Angle from "./drawItems/Angle";
import Line from "./drawItems/Line";
import Ray from "./drawItems/Ray";
import Triangle from "./drawItems/Triangle";
import ImageItem from "./drawItems/ImageItem";
import TextItem from "./drawItems/TextItem";
import List from "./drawItems/List";
import Piechart from "./drawItems/Piechart";
import Sprite from "./drawItems/Sprite";

export default class Create {
//special item BackgroundItem 
// static    background() {return  BackgroundItem.newItemData() ;}
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
