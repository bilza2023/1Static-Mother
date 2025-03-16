
import TaleemPlayer from "./taleemPlayer/TaleemPlayer";
import TaleemCanvas from "./DrawModule/TaleemCanvas";
import ItemsEditor from "./editorObjects/itemsEditor/ItemsEditor";
import Create from "./DrawModule/Create";
import Behaviour from "./editorObjects/Behaviour";
import AddToolbar from "./addToolbar/AddToolbar.svelte"
import EditorBehaviour from "./editorObjects/behaviours/EditorBehaviour";
import HelloWorldBehaviour from "./editorObjects/behaviours/HelloWorldBehaviour";
import ItemsMap from "./editorObjects/ItemsMap";
export {
    ItemsMap, //core but may be changed soon
    TaleemPlayer, //CORE COMPONENT
    TaleemCanvas, //CORE COMPONENT
    Create, //CORE COMPONENT
    ItemsEditor,
    Behaviour, // Imp but not core



                AddToolbar, ////examples purpose only not core component
                EditorBehaviour, //examples purpose only not core component
                HelloWorldBehaviour //examples purpose only not core component
}