//@ts-nocheck
import ItemObject from './ItemObject';

export default class ImageObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
        if (this.itemData.itemExtra.src ==null || this.itemData.itemExtra.image == null){
            this.itemData.itemExtra.src = '/system_images/gen/wood.jpg'; 
        }
        this.loadImage(); 
        this.dialogueBox = [
            {
                componentName: 'TrText',
                title: 'src',
                props: {}
            },
            {
                componentName: 'TrText', // Representing the button for extension type
                title: 'ext',
                props: {
                    options: ['jpg', 'png'], // Custom handling for the buttons
                    current: 'jpg' // Current selected ext
                }
            },
            {
                componentName: 'TrNo',
                title: 'x',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'y',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'width',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'height',
                props: {}
            },
            // CommonCommands
            {
                componentName: 'TrText',
                title: 'name',
                props: {}
            },
            {
                componentName: 'TrPropColor',
                title: 'color',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'showAt',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'globalAlpha',
                props: {
                    min: '0.0',
                    max: '1.0',
                    step: '0.1'
                }
            },
            // gap-dash
            {
                componentName: 'TrPropNumber',
                title: 'dash',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'gap',
                props: {}
            },
            // ShadowCommands
            {
                componentName: 'TrNo',
                title: 'shadowOffsetX',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'shadowOffsetY',
                props: {}
            },
            {
                componentName: 'TrNo',
                title: 'shadowBlur',
                props: {}
            },
            {
                componentName: 'TrColor',
                title: 'shadowColor',
                props: {}
            }
        ];       
    }
    loadImage() {
        const img = new Image();
        img.src = this.itemData.itemExtra.src;
    
        img.onload = () => {
            this.itemData.itemExtra.image = img;
        };
    
        img.onerror = () => {
            console.error(`Image failed to load: ${this.itemData.itemExtra.src}`);
        };
    }

///////////////////////////////////////////////////

}//class
