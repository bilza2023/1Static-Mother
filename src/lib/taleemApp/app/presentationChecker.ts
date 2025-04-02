

interface IMessage {
    type : "normal" | "critical";
    content:string;
}

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
export default function presentationChecker(slides){
 let messages:IMessage[] = []

/////////////////////////////////////////////
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    //==> Step 1: check common fields
    const commonMessages = checkSideBasics(slide,i+1);// +1 to get number of slide
        messages = [...messages , ...commonMessages];
    if(slide.type == "canvas"){
        const canvasMessages =   checkCanvas(slide,i+1); // +1 to get number of slide
        messages = [...messages , ...canvasMessages];
    }
    if(slide.type == "eqs"){
        const eqMessages = checkEqs(slide,i+1);// +1 to get number of slide
        messages = [...messages , ...eqMessages];
    }
    
}////main for loop ends
return messages;
}
////////////////Helper function
function checkSideBasics(slide,index):IMessage[]{
let messages = [];    
//1: Check uuid
if(!slide.uuid) {
    slide.uuid = uuid();
    msg(messages,"normal", "uuid missing in slide #"+ index);
};   
//2: check start time and end time
if(typeof slide.startTime !== 'number' || typeof slide.calcEndTime !== 'number' ){
    msg(messages,"critical", "missing startTime or endTime in slide #"+ index); 
} 
//3: Check if startTime is smaller than endTime
if(slide.startTime > slide.calcEndTime){ //remember endTime is for period now
    msg(messages,"critical", "startTime greater than endTime in slide #"+ index); 
} 
//4 must have some items
if(slide.items.length < 1){
    msg(messages,"normal", "No items in slide  #"+ index); 
}
///////////////////////////////
return messages;

}
function checkEqs(slide,index):IMessage[]{
let messages = []
return messages;

}
function checkCanvas(slide,index):IMessage[]{
let messages = []
return messages;

}
function msg(messages:IMessage[],type:"normal"|"critical", content:string){
    messages.push({"type": type,content });
}

function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }