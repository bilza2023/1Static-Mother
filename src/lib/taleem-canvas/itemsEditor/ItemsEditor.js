//We are working with items-object-literals . But to edit them raw is a difficult affait so we need a class specially for editing items-object-literals into methods ItemsEditObject.

//keep in mind it is not itemsOBject for canvas 
//Purpose : ItemsEditObject just act on items - provide helper functions with no memory and state since state is the responsibility of EventManagerWrapper/EventManagerModule  (SelectedItemManager), this object just has to provide utilitu function when it comes to items.

//--KEEP IN MIND WHERE THIS OBJECT IS USED ==> WHEN DEALING WITH RAW ITEMS AND EDITING THEM sPECIALLY inside Behaviour object

export default class ItemsEditor{

    constructor(items){
        this.items = items;
    }

    addItems(newItems){
        this.items.push(...newItems);
    }
    // set items(newItems){
    //     this.items = newItems;
    //     // this.items = [...this.items,...newItems];
    // }
    // get items (){
    //     return this.items;
    // }

    /////////////////////////////////////////////////
}//ItemsEditObject