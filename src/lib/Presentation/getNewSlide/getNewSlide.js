//@ts-nocheck
import newSlideData from "./newSlideData";
import getNewItem from "./getNewItem";

export default function getNewSlide(type) {
 let slide;
//  debugger;
 switch (type) {
    case 'HdgPara':
    slide = newSlideData("HdgPara");
    slide.items.push(getNewItem('heading'));
    slide.items.push(getNewItem('para'));
    break;

    case 'HdgImg':
    slide = newSlideData("HdgImg");
    slide.items.push(getNewItem('heading'));
    slide.items.push(getNewItem('imgSrc'));
    break;

    case 'BlinkingMessage':
    slide = newSlideData("BlinkingMessage");
    slide.items.push(getNewItem(''));
    break;
    
    case 'ImgWCaption':
    slide = newSlideData("ImgWCaption");
    slide.items.push(getNewItem('img'));
    slide.items.push(getNewItem('caption'));
    break;
 
    case 'HdgList':
    slide = newSlideData("HdgList");
    slide.slideExtra.push({key : "data" , value: "This is some data"});
    slide.slideExtra.push({key : "rows" , value:2});
    break;

    case 'TblStr':
    slide = newSlideData("TblStr");
    slide.slideExtra.push({key : "data" , value: "first,second"});
    break;

    case 'Eqs':
    slide = newSlideData("Eqs");    
    break;

    case 'img':
    slide = newSlideData("img");
    slide.items.push(getNewItem(''));
    break;
   
    case 'canvas':
        // debugger;
    slide = newSlideData("canvas");
    
    slide.extra = {
        backgroundColor: '#efebb8',
        canvasWidth : 1000,
        canvasHeight : 360,
        cellHeight : 25,
        cellWidth : 25,
        bgImg : 'system_images/bg_images/black_mat.jpg',
        bgGlobalAlpha : 1,
        xFactor : 0,
        yFactor : 0,
        ///////////////////
        showGrid : false,
        gridLineWidth : 1,
        gridLineColor : 'gray'
    }

      
    break;
 
    default:
    slide =  newSlideData(type);
    break;
 }
return slide;
}
/////////////////////////////////////////////
/////////////////////////////////////////////

//////////////////////////////////////////////////


// function addGrid(){
    //     return { 
    //                startTime:0,
    //                endTime:0,
    //                type : 'grid',
    //                version : 0,
    //                template : '',
    //                items : [],
    //                slideExtra : []
    //     };
//    }