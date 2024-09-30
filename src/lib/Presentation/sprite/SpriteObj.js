//@ts-nocheck
import { students } from "./students";

export default class SpriteObj{

    constructor(){
    this.slidesArray = [];
        
    }

getSpriteItem(sheet,sheetItem){

    // students.applyItem("student_w_tablet");
    if(sheet == "students"){
        students.applyItem(sheetItem);
    }
    return students;
}



}