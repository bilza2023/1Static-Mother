
import TextObject from "./items/TextObject";
import Rectangle from "./items/Rectangle";
import Ellipse from "./items/Ellipse";
import Angle from "./items/Angle";
import Circle from "./items/Circle";
import Dot from "./items/Dot";
import Icon from "./items/Icon";
import Image from "./items/Image";
import Piechart from "./items/Piechart";
import Ray from "./items/Ray";
import Sprite from "./items/Sprite";
import Triangle from "./items/Triangle";
import Line from "./items/Line";
import Lines from "./items/Lines";
import List from "./items/List";


/////////////////////////////////////

const ItemsMap = new Map();


ItemsMap.set('rectangle', Rectangle);
ItemsMap.set('ellipse', Ellipse);
ItemsMap.set('circle', Circle);
ItemsMap.set('dot', Dot);
ItemsMap.set('piechart', Piechart);
ItemsMap.set('triangle', Triangle);


ItemsMap.set('text', TextObject);
ItemsMap.set('angle', Angle);
ItemsMap.set('icon', Icon);

ItemsMap.set('ray', Ray);
ItemsMap.set('line', Line);
ItemsMap.set('lines', Lines);
ItemsMap.set('list', List);

ItemsMap.set('sprite', Sprite);
ItemsMap.set('image', Image);


export default ItemsMap;