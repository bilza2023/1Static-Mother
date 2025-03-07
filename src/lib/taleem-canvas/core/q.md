
look at this function
  handleEvent(event, type) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      // if(type == "click"){debugger;}
      // debugger;
      // Find All items that ARE hit 
      let hitItems = [];
      let hitItemsUuids = [];
      for (let item of this.itemObjects) {
        if (item.isHit(mouseX, mouseY)) {
          hitItems.push(item);
          hitItemsUuids.push(item.itemData.uuid);
        }
      }
  
      // Always trigger the callback with hitItem (or null if no item was hit)
      if (this.callbacks[type]) {
        this.callbacks[type](event, hitItems,hitItemsUuids);//from here we get the hit-item as well as uuids of the items/itemObject is same
      }
    }
    
This function return mouse events from html5 canvas and reutrn them to the attached event-handler

i think the problem is here
   const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
in some cases i get       