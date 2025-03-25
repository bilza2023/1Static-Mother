

I have a html5 canvas drawing app. 
For this i have
    1:  items (circle, ellipse etc) (they are just javascript class literals so also called item-literals). example
    static rectangle():IRectangle{
    return {
        uuid: uuid(),
        type: 'rectangle',
        name: 'rectangle001',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 0,
        filled: true,
        lineWidth: 1,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
      };
}
    2: A set of draw functions which is paired with each of the item-literal and draws it on the canvas.
    3: Editor Object : This is where I have questions:

I need an editor object since i want to interact with the items on the screen.
EditorObject is an object which takes in item-literal and convert it into for example RectangleEditObject , CircleEditObject
 
 > EditObject converts each item into a rectangular Object which has x,y,width and height

 * The main objective of converting item-literals  to EditObject is to find 
 *  1: isHit (for mouse selection etc).
 *  2: Edit X and Y (animation etc).
 * The Edit Object priovide a uniform interface inwhich each item has x,y,width and height all 4.
 * So a circle as CircleEditObject uses set circle.width so set its radius,
 * Between the 2 pair of guaranteed variables x and y are absolutely important. 

Question1: Do you suggest any other such basic variable that should be guaranteed by EditObject for item literals . I have "opacity" so each item has opacity.

Question 2:
What do you think about this strategy of converting item-literals into EditObjects with each having getters and setters for x,y,width and height and thus each one has isHit function so we can find out if it is hit or not you comments
Any better suggestions for hit-detection (for example we use different isHir algorithems inside each child EditObject for each item : for example a circle will calculate its isHit using circle formula rather than using rectangle which is not very precise )


