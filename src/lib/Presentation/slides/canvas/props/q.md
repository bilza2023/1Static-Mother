please look at the prop class below. i want this class to hold 1 numerical value and thats all . However that value change as per time (and is returned by val function) and we can set its value at certain time.

To set some specific value at certain time we use the this.setCommands array and check it every time one calls "val" function.
I want that i should return correct value no matter at what sequence currentTime is sent to "val" function.
please check this code to see if it does what i expect it to do???

//code
//@ts-nocheck

export default class Prop {
    constructor(initialValue = 0) {
      this.initialValue = initialValue;
      this.setCommands = [];
    }
  
    set(at,value){
      this.setCommands.push({ at , value });
    }

    val(currentTime) {
      this.setCommands.sort((a, b) => a.at - b.at);

      let currentValue = this.initialValue;
      for (let command of this.setCommands) {
        if (currentTime >= command.at) {
          currentValue = command.value;
        } 
      }
      return currentValue;
    }
  }
  
