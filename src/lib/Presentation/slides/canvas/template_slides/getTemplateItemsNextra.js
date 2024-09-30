
//@ts-nocheck
import {imgW4lbl} from "./imgW4lbl";
import {imgW2lbl} from "./imgW2lbl";
import {imgW3lbl} from "./imgW3lbl";
import {jt1} from "./jt1";
import {rnl} from "./rnl";
import {h2li} from "./h2li";
import {h3li} from "./h3li";
import {jt2} from "./jt2";

export default function getTemplateItemsNextra(template_name){
let ret = null;
    if(template_name == "jt2"){
    return {
        "items" : jt2.items,
        "extra" : jt2.extra,
    }
    }
    if(template_name == "imgW4lbl"){
    return {
        "items" : imgW4lbl.items,
        "extra" : imgW4lbl.extra,
    }
    }
    if(template_name == "imgW2lbl"){
    return {
        "items" : imgW2lbl.items,
        "extra" : imgW2lbl.extra,
    }
    }
    if(template_name == "jt1"){
    return {
        "items" : jt1.items,
        "extra" : jt1.extra,
    }
    }
    if(template_name == "rnl"){
    return {
        "items" : rnl.items,
        "extra" : rnl.extra,
    }
    }
    if(template_name == "h2li"){
    return {
        "items" : h2li.items,
        "extra" : h2li.extra,
    }
    }
    if(template_name == "h3li"){
    return {
        "items" : h3li.items,
        "extra" : h3li.extra,
    }
    }
    if(template_name == "imgW3lbl"){
    return {
        "items" : imgW3lbl.items,
        "extra" : imgW3lbl.extra,
    }
    }
    

}