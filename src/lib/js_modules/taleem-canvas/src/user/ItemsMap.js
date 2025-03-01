

// import Angle from "./items/Angle";
import Circle from "../items/Circle";
// import Dot from "./items/Dot";
import Ellipse from "../items/Ellipse";
import ImageItem from "../items/ImageItem";
import Line from "../items/Line";
import List from "../items/List";
import Piechart from "../items/Piechart";
import Ray from "../items/Ray";
import Rectangle from "../items/Rectangle";
import Sprite from "../items/Sprite";
import TextItem from "../items/TextItem";
import Triangle from "../items/Triangle";

// import Icon from "./items/Icon";
// import Lines from "./items/Lines";

/////////////////////////////////////

    const ItemsMap = new Map();

    ItemsMap.set('rectangle', Rectangle);
    ItemsMap.set('ellipse', Ellipse);
    ItemsMap.set('circle', Circle);
    // ItemsMap.set('dot', Dot);
    ItemsMap.set('piechart', Piechart);
    ItemsMap.set('triangle', Triangle);


    ItemsMap.set('text', TextItem);
    // ItemsMap.set('angle', Angle);
    // ItemsMap.set('icon', Icon);

    ItemsMap.set('ray', Ray);
    ItemsMap.set('line', Line);
    // ItemsMap.set('lines', Lines);
    ItemsMap.set('list', List);

    ItemsMap.set('sprite', Sprite);
    ItemsMap.set('Image', ImageItem);

export default ItemsMap;