

import angle from "./Angle";
import circle from "./Circle";
import dot from "./Dot";
import ellipse from "./Ellipse";
import icon from "./Icon";
import image from "./Image";
import line from "./Line";
import list from "./List";
import piechart from "./PieChart";
import ray from "./Ray";
import rectangle from "./Rectangle";
import sprite from "./Sprite";
import text from "./Text";
import triangle from "./Triangle";
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