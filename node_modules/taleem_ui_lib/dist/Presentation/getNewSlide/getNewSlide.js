//@ts-nocheck
import newSlideData from "./newSlideData";
import getNewItem from "./getNewItem";
import uuid from "./uuid.js";

export default function getNewSlide(type) {
 let slide;
//  debugger;
 switch (type) {
    case 'HdgPara':
    slide = addHdgPara();
    break;

    case 'HdgImg':
    slide = addHdgImg();
    break;

    case 'BlinkingMessage':
    slide = addBlinkingMessage();
    break;
    
    case 'ImgWCaption':
    slide = addImgWCaption();
    break;
 
    case 'HdgList':
    slide = addHdgList();
    break;
    case 'TblStr':
    slide = addTblStr();
    break;

    case 'Eqs':
    slide = addEqs();
    break;

    case 'grid':
    slide = addGrid();
    break;
    case 'img':
    slide = addImg();
    break;
 
    default:
    slide = addDefault(type);
    break;
 }
return slide;
}
/////////////////////////////////////////////
/////////////////////////////////////////////
function addDefault(name){
//start time and end time will be re-written once the slide is inserted
    const newSlide = newSlideData(name);
    newSlide.uuid = uuid();
    // newSlide.items.push(getNewItem('The Title','heading'));
    // newSlide.items.push(getNewItem('graph','imgSrc'));

    return newSlide;
}

function addGrid(){
 return { 
            startTime:0,
            endTime:0,
            type : 'grid',
            version : 0,
            template : '',
            items : [],
            slideExtra : []
 };
}
function addHdgImg(){
//start time and end time will be re-written once the slide is inserted
    const newSlide = newSlideData("HdgImg");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('The Title','heading'));
    newSlide.items.push(getNewItem('graph','imgSrc'));
    return newSlide;
}
function addHdgPara(){
//start time and end time will be re-written once the slide is inserted
    const newSlide = newSlideData("HdgPara");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('The Title','heading'));
    newSlide.items.push(getNewItem('some text here...','para'));

    return newSlide;
}
function addImg(){
//start time and end time will be re-written once the slide is inserted
    const newSlide = newSlideData("img");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('',''));
    return newSlide;
}

function  addBlinkingMessage(){
const newSlide = newSlideData("BlinkingMessage");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('',''));
    return newSlide;
}

function addImgWCaption(){
const newSlide = newSlideData("ImgWCaption");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('graph','img'));
    newSlide.items.push(getNewItem('This is a graph of the company','caption'));
    return newSlide;
}
function addHdgList(){
const newSlide = newSlideData("HdgList");
    newSlide.uuid = uuid();
    // newSlide.items.push(getNewItem('graph','img'));
    // newSlide.items.push(getNewItem('This is a graph of the company','caption'));
    newSlide.slideExtra.push({key : "data" , value: "This is some data"});
    newSlide.slideExtra.push({key : "rows" , value:2});
    return newSlide;
}

function addTblStr(){
const newSlide = newSlideData("TblStr");
    newSlide.uuid = uuid();
    // newSlide.items.push(getNewItem('graph','img'));
    newSlide.slideExtra.push({key : "data" , value: "first,second"});
    return newSlide;
}

function addEqs(){
const newSlide =  {
  startTime : 0,    //This is slide start and end time
  endTime : 10,    
  type : 'Eqs',    
  template : '',    
  version : '',    
  slideExtra : [],    
  /////////////////
 items :[]
};
    newSlide.uuid = uuid();
    return newSlide;
}
//////////////////////////////////////////////////
