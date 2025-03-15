
import TaleemPlayer from "./taleemPlayer/TaleemPlayer.js";
import TaleemCanvas from "./DrawModule/TaleemCanvas.js";
import ItemsEditor from "./editorObjects/itemsEditor/ItemsEditor.js";
import Create from "./DrawModule/Create.js";
import Behaviour from "./editorObjects/Behaviour";
import AddToolbar from "./addToolbar/AddToolbar.svelte"
import EditorBehaviour from "./editorObjects/behaviours/EditorBehaviour";
import HelloWorldBehaviour from "./editorObjects/behaviours/HelloWorldBehaviour";

export {
    TaleemPlayer, //CORE COMPONENT
    TaleemCanvas, //CORE COMPONENT
    Create, //CORE COMPONENT
    ItemsEditor,
    Behaviour, // Imp but not core



                AddToolbar, ////examples purpose only not core component
                EditorBehaviour, //examples purpose only not core component
                HelloWorldBehaviour //examples purpose only not core component
}