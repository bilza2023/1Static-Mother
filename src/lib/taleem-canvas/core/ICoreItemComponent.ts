
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
/////////////////////////////////////
import DrawCtx from "./DrawCtx";
import { IAssets } from "../../assets/IAssets";
import {ICanvasItemTypes} from "./coreItemsInterfaces/ICanvasItems";
import BaseEditObject from "./BaseEditObject/BaseItem";

interface ICoreItemComponent {

    create : ()=>ICanvasItemTypes,
    EditObject :BaseEditObject,
    draw:(item:ICanvasItemTypes,drawCtx:DrawCtx,assets:IAssets)=>void    
   
   }

export type {
    ICoreItemComponent
}   