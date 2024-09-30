


export default function getNewItem(){
let item = { name:"" , content : "" ,  extra:{}};
item.extra ={
      step :0, 
      startTime : 0, 
      endTime : 0, 
      fsStartTime : 0, 
      fsEndTime :0, 
      code : "", 
      type : "code", //new addition 
      sp : [],        
      fs : []
    } 
return item;
}
// spVisibility : true,  add later
// fsVisibility : false,
