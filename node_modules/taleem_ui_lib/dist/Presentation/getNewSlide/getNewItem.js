//4-nov-2024
//@ts-nocheck
/***
- No data from Presentation and Ample data from component internal.2
- DO NOT USE GLOBALS FROM PRESENTATION / ENGINE TO SLIDES 
- dont use callbacks in comps since they are just display items.its not an app its presentation.
 */

export default function getNewItem( content, name='',extra = {}) {

return {
    name , 
    content, 
    showAt :0, 
    extra
};

}