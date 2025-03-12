
import Player from "./Player";
import Create from "./Create";
import Behaviour from "./editorObjects/Behaviour";
import AddToolbar from "./addToolbar/AddToolbar.svelte"
import EditorBehaviour from "./editorObjects/behaviours/EditorBehaviour";
import HelloWorldBehaviour from "./editorObjects/behaviours/HelloWorldBehaviour";

export {
    Player as TaleemCanvas, //CORE COMPONENT
    Create, //CORE COMPONENT

    Behaviour, // Imp but not core



                AddToolbar, ////examples purpose only not core component
                EditorBehaviour, //examples purpose only not core component
                HelloWorldBehaviour //examples purpose only not core component
}