import ComponentObject from "../canvasEditor/componentObjects/ComponentObject"

// ComponentRegistry.js
export default class CanvasComponentRegistry {
    constructor() {
        this.components = new Map();
    }

    // Register a new component
    register(name, ComponentClass) {
        if (!(ComponentClass.prototype instanceof ComponentObject)) {
            throw new Error(`Component ${name} must extend ComponentObject`);
        }
        
        if (this.components.has(name)) {
            throw new Error(`Component ${name} is already registered`);
        }
        
        this.components.set(name, ComponentClass);
    }

    // Create a component instance
    create(name, itemData=null, fnList={}, extraData = null) {
    
        const ComponentClass = this.components.get(name);
        
        if (!ComponentClass) {
            throw new Error(`Component ${name} not found in registry`);
        }
        
        const n = new ComponentClass(itemData, fnList);
        return n; 
        // return extraData ? 
        //     new ComponentClass(itemData, fnList, extraData) : 
        //     new ComponentClass(itemData, fnList);
    }

    // Check if a component is registered
    hasComponent(name) {
        return this.components.has(name);
    }

    // Get list of all registered components
    getRegisteredComponents() {
        return Array.from(this.components.keys());
    }
}

