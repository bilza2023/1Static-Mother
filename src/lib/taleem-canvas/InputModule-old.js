
export default class InputModule {
    constructor() {
        this.callbacks = {
            keydown: null,
            keyup: null
        };

        this.initListeners();
    }

    initListeners() {
        document.addEventListener("keydown", (e) => this.handleEvent(e, "keydown"));
        document.addEventListener("keyup", (e) => this.handleEvent(e, "keyup"));
    }

    handleEvent(event, type) {
        if (this.callbacks[type]) {
            this.callbacks[type](event);
        }
    }

    on(eventType, callback) {
        if (this.callbacks[eventType] !== undefined) {
            this.callbacks[eventType] = callback;
        }
    }
}
