
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import BaseItem from '../../BaseEditObject/BaseItem';


export default class EditObj extends BaseItem {
  constructor(itemData:IAngle) {
    super(itemData);
  }

}