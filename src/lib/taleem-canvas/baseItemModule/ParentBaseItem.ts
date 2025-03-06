
import { ItemData } from './ItemData'; 

export default abstract class ParentBaseItem {

itemData: ItemData;
constructor(itemData:ItemData) {
    this.itemData = itemData;
}
static newItemData(){}//  
static dialogueBox(){}//  
///////////////////////////////////
}

//The top level of BaseItem takes in itemData and it is finally used by Draw function in the moddile we have editor and calculator both available till end.