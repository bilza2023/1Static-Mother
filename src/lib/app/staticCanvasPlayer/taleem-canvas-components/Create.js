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

    sprite() {return new Sprite();}
    image() {return new ImageItem();}
    piechart() {return new Piechart();}
    list() {return new List();}
    rectangle() {return new Rectangle();}
    circle() {return new Circle();}
    ellipse() {return new Ellipse();}
    line() {return new Line();}
    ray() {return new Ray();}
    triangle() {return new Triangle();}
    text() {return new TextItem();
    }
}
