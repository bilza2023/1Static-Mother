

import create from "./create";
import draw from "./draw";
import EditObj from "./editObj";

import { ICoreItemComponent } from "../../ICoreItemComponent";

export const Rectangle: ICoreItemComponent=  {

    create,
    draw,
    editObject:EditObj
} 
