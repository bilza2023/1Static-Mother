//@ts-nocheck
import uuid from "./uuid.js";

export default function getNewItem( name='',content='', extra = {},arr=[]) {
// debugger;
return {
    uuid: uuid() , //added on 31-may 2024 --not used yet 
    name , 
    content, 
    showAt :0, 
    hideAt :null, //added on 31-may 2024 --not used yet
    extra,
    arr  //newly added 29-mar-2024
};

}