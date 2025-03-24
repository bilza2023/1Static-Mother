

import angle from "./drawFunctions/Angle";
import circle from "./drawFunctions/Circle";
import rectangle from "./drawFunctions/Rectangle";


/////////////////////////////////////

const DrawFunctionsMap = new Map();


// ItemsMap.set('background', BackgroundItem);
DrawFunctionsMap.set('angle', angle);
DrawFunctionsMap.set('circle', circle);
DrawFunctionsMap.set('rectangle', rectangle);

export default DrawFunctionsMap;