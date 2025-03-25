
//Interfaces
import type {ICanvasItemTypes} from "./interfaces/ICanvasItems";
import type {IBackground} from "./interfaces/IBackground";
//Core Js 
import Create from "./Create";
import ItemsEditor from "./ItemsEditor";
import EditObject from "./EditObjectsModule/EditObject";
import DrawEngineMonolith from "./DrawMonolith/DrawEngineMonolith";
import Behaviour from "./Behaviour";
//svelte components
import CanvasEditorMonolith from "./svelte/CanvasEditorMonolith.svelte"
//////////////////////////////////////////////////////
export {
//interfaces
                ICanvasItemTypes,
                IBackground,
//core JS
                Create,
                ItemsEditor,
                EditObject, //The only place for EditoObjects and ItemsMap(orignal)
                DrawEngineMonolith,//The main monolith draw engine
                Behaviour,
// .svelte
                CanvasEditorMonolith,//CanvasEditor using DrawEngineMonolith,Behaviour,itemsEditor
}