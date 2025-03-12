
import TaleemCanvas from "./DrawModule/TaleemCanvas.js";
import Create from "./DrawModule/Create.js";
import Behaviour from "./editorObjects/Behaviour";
import AddToolbar from "./addToolbar/AddToolbar.svelte"
import EditorBehaviour from "./editorObjects/behaviours/EditorBehaviour";
import HelloWorldBehaviour from "./editorObjects/behaviours/HelloWorldBehaviour";

export {
    TaleemCanvas, //CORE COMPONENT
    Create, //CORE COMPONENT

    Behaviour, // Imp but not core



                AddToolbar, ////examples purpose only not core component
                EditorBehaviour, //examples purpose only not core component
                HelloWorldBehaviour //examples purpose only not core component
}