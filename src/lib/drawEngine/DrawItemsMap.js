

import BackgroundItem from "./items/BackgroundItem";
import TextItem from "./items/TextItem";
import Rectangle from "./items/Rectangle";
import Ellipse from "./items/Ellipse";
// import Angle from "./items/Angle";
import Circle from "./items/Circle";
// import Dot from "./items/Dot";
// import Icon from "./items/Icon";
import ImageItem from "./items/ImageItem";
import Piechart from "./items/Piechart";
import Ray from "./items/Ray";
import Sprite from "./items/Sprite";
import Triangle from "./items/Triangle";
import Line from "./items/Line";
// import Lines from "./items/Lines";
import List from "./items/List";


/////////////////////////////////////

const DrawItemsMap = new Map();


DrawItemsMap.set('background', BackgroundItem);
DrawItemsMap.set('rectangle', Rectangle);
DrawItemsMap.set('ellipse', Ellipse);
DrawItemsMap.set('circle', Circle);
// DrawItemsMap.set('dot', Dot);
DrawItemsMap.set('piechart', Piechart);
DrawItemsMap.set('triangle', Triangle);


DrawItemsMap.set('text', TextItem);
// DrawItemsMap.set('angle', Angle);
// DrawItemsMap.set('icon', Icon);

DrawItemsMap.set('ray', Ray);
DrawItemsMap.set('line', Line);
// DrawItemsMap.set('lines', Lines);
DrawItemsMap.set('list', List);

DrawItemsMap.set('sprite', Sprite);
DrawItemsMap.set('image', ImageItem);


export default DrawItemsMap;