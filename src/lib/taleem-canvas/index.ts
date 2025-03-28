

import {CoreItemsMap} from "./core/index";
import Player from "./user/player/Player";
import Items from "./user/Items";
import Assets from "./core/assets/Assets";
import type {IAssets} from "./core/assets/IAssets";
import type {ICanvasItemTypes} from "./core/interfaces/ICanvasItems";
import type {IBackground} from "./core/interfaces/IBackground";
import loadImages from "./loadImages";
import getCanvasBackground from "./core/getCanvasBackground";

type AvailableItems = Parameters<typeof CoreItemsMap.set>[0];

export{
    Player,
    Assets,
    Items,
    loadImages,
    getCanvasBackground,
    type IAssets,
    type IBackground,
    type ICanvasItemTypes,
    type AvailableItems,
}