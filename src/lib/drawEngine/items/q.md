
Question 1: As you can see that each of my DrawItem child has his own data for example
Ellipse has 
interface EllipseItemData extends ItemData {
    uuid: string;
    type: string;
    x: number;
    y: number;
    radiusX: number;
    radiusY: number;
    rotation: number;
    startAngle: number;
    endAngle: number,
    lineWidth: number,
    filled: boolean,
    color: string,
    globalAlpha: number
}

and Circle has 
interface CircleItemData extends ItemData {
  uuid: string;
  type: string;
  globalAlpha: number;

  x: number;
  y: number;
  radius: number;
  rotation: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  dash: number;
  gap: number;
  filled: boolean;
  color: string;
}

Now in order to get and set these properties 

    option 1: use 1 single pair of "getProperty" and "setProperty" functions to get and set any field from respective child object "itemData"

    option 2: Provide a complete API for each item seperately for example circle has circle.setRadius() and ellipse has sllipse.setRadiusX(). 

    option3: any other better option

    each option pros and cons this is important as you can see i am creating a cavasn drawing api any suggestion on this topic   