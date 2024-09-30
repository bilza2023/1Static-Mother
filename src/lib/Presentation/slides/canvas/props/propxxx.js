//@ts-nocheck

export default class Prop {
  constructor(initialValue = 0,setCommands=[]) {
      this.initialValue = initialValue;
      this.setCommands = setCommands;
      this.sorted = false;
  }

  set(at, value) {
      this.setCommands.push({ at, value });
      this.sorted = false; // Mark as unsorted whenever a new command is added
  }

  val(currentTime) {
      if (!this.sorted) {
          this.setCommands.sort((a, b) => a.at - b.at);
          this.sorted = true; // Mark as sorted after sorting
      }

      let currentValue = this.initialValue;
      for (let command of this.setCommands) {
          if (currentTime >= command.at) {
              currentValue = command.value;
          }
      }
      return currentValue;
  }
}
