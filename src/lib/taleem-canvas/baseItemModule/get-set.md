set(key, value) {

    const validKeys = Object.keys(this.newItemData() );
    // Check if the key exists in the valid keys
    if (validKeys.includes(key)) {
      this.itemExtra[key] = value;
      return value;  // ✅ Return updated value
    }
    
    return false;  // ❌ Return false if the key doesn't exist
  }

  get(key) {
    // Get the valid keys from the class's static itemExtraData method
    const validKeys = Object.keys(this.constructor.itemExtraData());
    
    // Check if the key exists in the valid keys
    if (validKeys.includes(key)) {
      return this.itemExtra[key];
    }
    
    return undefined; // Or return a default value if needed
  }