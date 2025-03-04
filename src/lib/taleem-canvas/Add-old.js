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

export default class Add {
    constructor(items,env) {
        this.items = items; 
        this.env = env; 
    }

    sprite() {
        const item = new Sprite();
        item.env = this.env;
        this.items.push(item);
        return item;
    }

    image() {
        const item = new ImageItem();
        item.env = this.env;
        this.items.push(item);
        return item;
    }

    piechart() {
        const item = new Piechart();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }
    list() {
        const item = new List();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }
    list() {
        const item = new List();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }
    rectangle() {
        const item = new Rectangle();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    circle() {
        const item = new Circle();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    ellipse() {
        const item = new Ellipse();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    line() {
        const item = new Line();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    ray() {
        const item = new Ray();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    triangle() {
        const item = new Triangle();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }

    text() {
        const item = new TextItem();
        item.env = this.env ;
        this.items.push(item);
        return item;
    }
}
