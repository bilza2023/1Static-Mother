

import angle from "./drawFunctions/Angle";
import circle from "./drawFunctions/Circle";
import rectangle from "./drawFunctions/Rectangle";
import text from "./drawFunctions/Text";


/////////////////////////////////////

const DrawFunctionsMap = new Map();


// ItemsMap.set('background', BackgroundItem);
DrawFunctionsMap.set('angle', angle);
DrawFunctionsMap.set('circle', circle);
DrawFunctionsMap.set('rectangle', rectangle);
DrawFunctionsMap.set('text', text);

export default DrawFunctionsMap;