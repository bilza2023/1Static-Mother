


export interface DialogueBoxOption {
    name: string;
    type: 'Number' | 'Boolean' | 'Color' | 'Float' | string;
    config: {
      min?: number;
      max?: number;
      step?: number;
    };
  }