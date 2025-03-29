


import {Angle} from "./coreItems/angle";
import {Rectangle} from "./coreItems/rectangle";
import {Ellipse} from "./coreItems/ellipse";
import {Circle} from "./coreItems/circle";
import {Line} from "./coreItems/line";
import {PieChart} from "./coreItems/piechart";
import {Ray} from "./coreItems/ray";
import {Text} from "./coreItems/text";
import {Triangle} from "./coreItems/triangle";
import {Dot} from "./coreItems/dot";
import {List} from "./coreItems/list";
// import {Icon} from "./coreItems/icon";
import {Image} from "./coreItems/image";
import {Sprite} from "./coreItems/sprite";

//////////////////////////////////////////////
import {ICoreItemComponent} from "./ICoreItemComponent";

const CoreItemsMap = new Map();

CoreItemsMap.set('angle', Angle);
CoreItemsMap.set('rectangle', Rectangle);
CoreItemsMap.set('ellipse', Ellipse);
CoreItemsMap.set('circle', Circle);
CoreItemsMap.set('dot', Dot);
CoreItemsMap.set('piechart', PieChart);
CoreItemsMap.set('triangle', Triangle);
CoreItemsMap.set('text', Text);
CoreItemsMap.set('ray', Ray);
CoreItemsMap.set('line', Line);
CoreItemsMap.set('list', List);
CoreItemsMap.set('sprite', Sprite);
CoreItemsMap.set('image', Image);

// CoreItemsMap.set('icon', Icon);


export default CoreItemsMap;