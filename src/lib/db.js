import AjaxBase from "./ajax/AjaxBase";

import { API_URL } from "./util/index";

const tcode =  new AjaxBase("tcode",API_URL); 
const user =  new AjaxBase("user",API_URL); 
// const slideTemplate =  new AjaxBase("slideTemplate",API_URL); 

export const db = { 
tcode ,
user 
// slideTemplate

}
