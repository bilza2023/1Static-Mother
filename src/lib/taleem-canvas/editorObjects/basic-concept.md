

# The 3 Core Objectives of Taleem-Canvas library is:

    1: **Draw Engine**: Provide a simple Html5 canvas draw engine based on items.

    2: **Interactive App**: Add interactivity using *Behaviour Objects* so that user can modify the behaviour of the Draw Engine and use it like an **Interactive App**. 
    
    3: Keep the library compatible with Svelte: oooo yaaaa this is one of the main objectives.In the modern era any UI library has to be wrapped in either react or svelte etc etc. So one of the objective of this library is to also provide svelte components with it.

--- 

## 1: Provide Simple Canvas Draw Engine:
    
 - This library provide a very simple "items" (rectangle, circle etc) based Canvas Draw Engine.
 
 - Each item is a drawable object (rectangle, circle etc). Items are simple object-literal with specific fields seperate for each item. For example "rectangle" item has "width" field but "circle" item has "radius" field. 
        
 - The **"Draw Engine"** main objective is to just take "items" and draw them on the html5 canvas. The "Draw Engine" is exported as **"Player"** object.
        
 - The library also exports an object **"Create"** which can create the object-literal with default values for each items.
  - The user can create as many items they want (preferably in an array called "items"). When ever the user want to draw these items he can call:
        ```javascript
            function draw(items){
                player.items = items;
                player.draw();
            }  
        ```    
  - The user can edit any fields of the item (conditions apply) and the item will be drawn with the changed values. 

 > The main difference between a normal javascript object and a Ui object is that:
  -  With UI object you have to communicate using event-handlers 
  -  With normal javascript object you communicate through callbacks / functions (by calling each other function).  
<small>This means that there will always be a "set of event-handlers" which will be a tie-between a javascript code working in the UI Components and javascript code not in UI components / not visible on screen.</small>


## 2: Provide Behaviour Objects:

>Using the **Behaviour Objects** we can convert the **Player object** (which is simple Draw Engine) into an interactive App.    

   - The user can extend the **Behaviour Objects** and connect it to the **player**.
   - The **Behaviour Objects** which contain event-handlers connects its self to the **player** mouse events and take actions as given programmed by the user.
   - Each derived class of **Behaviour Objects** is considered to be a different role for the Player.For example there is an example behaviour provided in the library called "HelloWorldBehaviour" which will make every user click on the canvas write "Hello world" on the screen.


## 3: Svelte components

... work in progress