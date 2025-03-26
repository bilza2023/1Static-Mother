


import {Angle} from "./coreItems/angle";
import {Rectangle} from "./coreItems/rectangle";
import {Ellipse} from "./coreItems/ellipse";
import {Circle} from "./coreItems/circle";
// import {Dot} from "./coreItems/Dot";
// import {Line} from "./coreItems/Line";
// import {List} from "./coreItems/List";
// import {Icon} from "./coreItems/Icon";
// import {ImageItem} from "./coreItems/ImageItem";
import {PieChart} from "./coreItems/piechart";
// import {Ray} from "./coreItems/Ray";
// import {Sprite} from "./coreItems/Sprite";
import {Text} from "./coreItems/text";
import {Triangle} from "./coreItems/triangle";
// // import Lines from "./coreItems/Lines";

//////////////////////////////////////////////
import {ICoreItemComponent} from "./ICoreItemComponent";

const CoreItemsMap = new Map();

CoreItemsMap.set('angle', Angle);
CoreItemsMap.set('rectangle', Rectangle);
CoreItemsMap.set('ellipse', Ellipse);
CoreItemsMap.set('circle', Circle);
// CoreItemsMap.set('dot', Dot);
CoreItemsMap.set('piechart', PieChart);
CoreItemsMap.set('triangle', Triangle);
CoreItemsMap.set('text', Text);
// CoreItemsMap.set('icon', Icon);
// CoreItemsMap.set('ray', Ray);
// CoreItemsMap.set('line', Line);
// CoreItemsMap.set('list', List);
// CoreItemsMap.set('sprite', Sprite);
// CoreItemsMap.set('image', ImageItem);


export default CoreItemsMap;