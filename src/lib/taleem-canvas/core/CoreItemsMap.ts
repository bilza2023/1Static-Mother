


// import TextItem from "./items/TextItem";
import {Rectangle} from "./coreItems/rectangle";
// import Ellipse from "./items/Ellipse";
// // import Angle from "./items/Angle";
// import Circle from "./items/Circle";
// // import Dot from "./items/Dot";
// // import Icon from "./items/Icon";
// import ImageItem from "./items/ImageItem";
// import Piechart from "./items/Piechart";
// import Ray from "./items/Ray";
// import Sprite from "./items/Sprite";
// import Triangle from "./items/Triangle";
// import Line from "./items/Line";
// // import Lines from "./items/Lines";
// import List from "./items/List";

//////////////////////////////////////////////
import {ICoreItemComponent} from "./ICoreItemComponent";

const CoreItemsMap = new Map();

CoreItemsMap.set('rectangle', Rectangle);
// CoreItemsMap.set('ellipse', Ellipse);
// CoreItemsMap.set('circle', Circle);
// CoreItemsMap.set('dot', Dot);
// CoreItemsMap.set('piechart', Piechart);
// CoreItemsMap.set('triangle', Triangle);
// CoreItemsMap.set('text', TextItem);
// CoreItemsMap.set('angle', Angle);
// CoreItemsMap.set('icon', Icon);
// CoreItemsMap.set('ray', Ray);
// CoreItemsMap.set('line', Line);
// CoreItemsMap.set('list', List);
// CoreItemsMap.set('sprite', Sprite);
// CoreItemsMap.set('image', ImageItem);


export default CoreItemsMap;