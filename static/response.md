


1: why is this important in css?
  width: 100%;
height: auto;

2: why not check the window size first time as well ??? do we need to keep a note of orignal canvas size with which we size the canvas (for example an app has all its drawing on a canvas of size 1000*360 px) so if the pix values are moved in code they can fix it ????
  const ORIGINAL_WIDTH = 800;

3:   DO use relative units for positioning and sizing elements within your canvas to make them scale proportionally.

i am using fixed variables like x=300 y=200 and not x=24% and y=19% , is this bad??? what are the effects of this ??? do i need to convert my x,y values to percentages?
