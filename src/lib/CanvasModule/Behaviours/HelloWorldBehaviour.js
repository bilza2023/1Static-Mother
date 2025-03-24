
import Behaviour from "../Behaviour/Behaviour";

export default class HelloWorldBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
}
/////////////////////////////////////////////////////////
  mousemove(x , y ,hitItemsUuids) {console.log("Hello World ");}

  click(x , y , hitItem,hitItemsUuids) {

    const text = this.create.text();
    text.text = "Taleem Canvas ===> Hello World ";
    text.x = Math.random() * 900;
    text.y = Math.random() * 350;
    text.color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
/**
 * Very very important
 *  this.items = [ellipse,ellipse,ellipse];
 * In the click handler, you do 
 * this.items = [ellipse,ellipse,ellipse] 
 * which creates a new array     and  assigns it to the class property
 * 
 * This breaks the reference to the original items array in the parent component
 
 * correct use 
    this.items.length = 0;

 */
    // this.itemsEditor.items.push(ellipse);
    this.itemsEditor.items.push(text);
    this.callback();
  }
  ///////////////////////Behaviour methods/////////////


}//EventManager
