
import TaleemPlayer from "./taleemPlayer/TaleemPlayer";
import TaleemCanvas from "./DrawModule/TaleemCanvas";
import ItemsEditor from "./editorObjects/itemsEditor/ItemsEditor";
import Create from "./DrawModule/Create";
import Behaviour from "./editorObjects/Behaviour";
import EditorBehaviour from "./editorObjects/behaviours/EditorBehaviour";
import HelloWorldBehaviour from "./editorObjects/behaviours/HelloWorldBehaviour";
import ItemsMap from "./editorObjects/ItemsMap";
import loadImages from "./loadImages";
// ---------------svelte---------------------
import AddToolbar from "./addToolbar/AddToolbar.svelte"
// import ShapeItem from "./ShapeTypes.ts";
export {
    // ShapeItem,
    ItemsMap, //core but may be changed soon
    TaleemPlayer, //CORE COMPONENT
    TaleemCanvas, //CORE COMPONENT
    Create, //CORE COMPONENT
    loadImages, //CORE COMPONENT
    
    ItemsEditor,
    Behaviour, // Imp but not core



                AddToolbar, ////examples purpose only not core component
                EditorBehaviour, //examples purpose only not core component
                HelloWorldBehaviour //examples purpose only not core component
}