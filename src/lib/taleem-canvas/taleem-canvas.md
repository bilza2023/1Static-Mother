
## Assets

 - Assets is part of the core since we can export it from the library (independently) and the user can use the same assets with different player objects if they want since we will only create assets if user does not provide (for now assets loading is must either by user of self loading) 
 - Assets are not used in other parts of the app, since now images are not part of the assets so we can use assets only for taleem-canvas lib
 - The inclusion of assets enable us to just get canvas and ctx and start drawing.
 - Managing should be done on top / boilerplate level (player.ts)

 ## Custom Canvas Items:

 - We can add Custom Canvas Items. Every new "item" should have following
 
    1: Data interface.
    2: Create function: as per Data interface.
    3: Edit Object: as per Data interface and "BaseEditObject" (for user) 
    4: Draw function: as per Data interface 
 
 - After that i can do following
    
    1: Add the entry into Create.ts object.How ???
    2: Add the draw function entry into drawFunctions Map.
    3: Add the Edit OBject entry in "EditObjMap" (now itemsMap). 