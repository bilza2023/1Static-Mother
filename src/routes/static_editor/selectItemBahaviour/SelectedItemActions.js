

/////////////////////////////////////////////
export default class SelectedItemActions{
    constructor(itemsEditor){
      this.itemsEditor = itemsEditor;
      this.selectedItem = null;
    }

     select(ObjByPlayer){ //itemsObjByPlayer is in itemObject format
      this.selectedItem = ObjByPlayer;
      this.itemsEditor.handles.create();
      this.itemsEditor.handles.update(this.selectedItem);
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
      
     moveSelectedItem(x,y){
        if(this.selectedItem){
          this.selectedItem.x = x;
          this.selectedItem.y = y;
          this.itemsEditor.handles.update(this.selectedItem);
        }
      }
     widenSelectedItem(x , y){
        if(this.selectedItem){
          this.selectedItem.width = x - this.selectedItem.x  ;
          this.itemsEditor.handles.update(this.selectedItem);
        }
      }
     heightenSelectedItem(x , y){
        if(this.selectedItem){
          this.selectedItem.height =  y - this.selectedItem.y ;
          this.itemsEditor.handles.update(this.selectedItem);
        }
      }
}//SelectedItemManager