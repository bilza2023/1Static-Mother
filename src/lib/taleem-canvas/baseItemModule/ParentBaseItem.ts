
// Just the base
export default class ParentBaseItem {

itemData:{x:Number,y:Number,width:Number,height:Number,type:String}


constructor(itemData:{x:Number,y:Number,width:Number,height:Number,type:String}) {
    this.itemData = itemData;
}
static newItemData(){}//  
static dialogueBox(){}//  
///////////////////////////////////
}

//The top level of BaseItem takes in itemData and it is finally used by Draw function in the moddile we have editor and calculator both available till end.