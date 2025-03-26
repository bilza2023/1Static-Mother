


import {Angle} from "./coreItems/angle";
import {Rectangle} from "./coreItems/rectangle";
// import Ellipse from "./coreItems/Ellipse";
import {Circle} from "./coreItems/circle";
// // import Dot from "./coreItems/Dot";
// import Line from "./coreItems/Line";
// import List from "./coreItems/List";
// // import Icon from "./coreItems/Icon";
// import ImageItem from "./coreItems/ImageItem";
// import Piechart from "./coreItems/Piechart";
// import Ray from "./coreItems/Ray";
// import Sprite from "./coreItems/Sprite";
// import TextItem from "./coreItems/TextItem";
// import Triangle from "./coreItems/Triangle";
// // import Lines from "./coreItems/Lines";

//////////////////////////////////////////////
import {ICoreItemComponent} from "./ICoreItemComponent";

const CoreItemsMap = new Map();

CoreItemsMap.set('angle', Angle);
CoreItemsMap.set('rectangle', Rectangle);
// CoreItemsMap.set('ellipse', Ellipse);
CoreItemsMap.set('circle', Circle);
// CoreItemsMap.set('dot', Dot);
// CoreItemsMap.set('piechart', Piechart);
// CoreItemsMap.set('triangle', Triangle);
// CoreItemsMap.set('text', TextItem);
// CoreItemsMap.set('icon', Icon);
// CoreItemsMap.set('ray', Ray);
// CoreItemsMap.set('line', Line);
// CoreItemsMap.set('list', List);
// CoreItemsMap.set('sprite', Sprite);
// CoreItemsMap.set('image', ImageItem);


export default CoreItemsMap;