// slideRegistry.js
export default class SlideRegistry {

    constructor() {
        if (SlideRegistry.instance) {
            return SlideRegistry.instance;
        }
        SlideRegistry.instance = this;
        this.slideTypes = new Map();
    }
 
    static getInstance() {
        if (!SlideRegistry.instance) {
            SlideRegistry.instance = new SlideRegistry();
        }
        return SlideRegistry.instance;
    }

    registerSlideType(slideModule) {
        this.slideTypes.set(slideModule.type, slideModule);
    }

    getPlayerComponent(type) {
        return this.slideTypes.get(type)?.PlayerComponent;
    }

    getEditorComponent(type) {
      
        return this.slideTypes.get(type)?.EditorComponent;
    }
}
