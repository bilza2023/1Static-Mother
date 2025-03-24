

import angle from "./drawFunctions/Angle";
import circle from "./drawFunctions/Circle";
import dot from "./drawFunctions/Dot";
import ellipse from "./drawFunctions/Ellipse";
import icon from "./drawFunctions/Icon";
import image from "./drawFunctions/Image";
import line from "./drawFunctions/Line";
import list from "./drawFunctions/List";
import piechart from "./drawFunctions/PieChart";
import ray from "./drawFunctions/Ray";
import rectangle from "./drawFunctions/Rectangle";
import sprite from "./drawFunctions/Sprite";
import text from "./drawFunctions/Text";
import triangle from "./drawFunctions/Triangle";
/////////////////////////////////////
const DrawFunctionsMap = new Map();
DrawFunctionsMap.set('angle', angle);
DrawFunctionsMap.set('circle', circle);
DrawFunctionsMap.set('dot', dot);
DrawFunctionsMap.set('ellipse', ellipse);
DrawFunctionsMap.set('icon', icon);
DrawFunctionsMap.set('image',image);
DrawFunctionsMap.set('line',line);
DrawFunctionsMap.set('list',list);
DrawFunctionsMap.set('piechart',piechart);
DrawFunctionsMap.set('ray',ray);
DrawFunctionsMap.set('rectangle', rectangle);
DrawFunctionsMap.set('sprite', sprite);
DrawFunctionsMap.set('text', text);
DrawFunctionsMap.set('triangle', triangle);

export default DrawFunctionsMap;