
import Taleem from "./presentation/taleemObject/Taleem"
import Editor from './presentation/editor/Editor.svelte';
import Player from './presentation/players/Player.svelte';
import SlideObject from "./slides/slideObject/slideObject";
import ItemsMap from "./slides/canvas/staticItems/ItemsMap";

import {
        CanvasEditor,
        CanvasPlayer,
        EqPlayer,
        EqsEditor
        } from './slides';

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export {
    Taleem, // name may need changing
    SlideObject,
    Editor,
    Player,
    ItemsMap,

    CanvasEditor,
    CanvasPlayer,
    EqPlayer,
    EqsEditor,
}