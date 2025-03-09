

/////////////////////////////////////////////
export default class SelectedItem{
    constructor(){
    
    }

     select(ObjByPlayer){ //itemsObjByPlayer is in itemObject format
      this.selectedItem = ObjByPlayer;
     }

     unSelected(){
        this.selectedItem = null;
        this.itemsEditor.handles.remove();
      }

     isItemSelected(){
        if(this.selectedItem == null){
          return false;
        }else {
          return true;
        }
      }
      

}//SelectedItemManager