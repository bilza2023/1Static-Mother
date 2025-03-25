



interface IBackground  {
    
    uuid: string,
    type: 'background';
    color: string;
    opacity: number;
//////////////////////////
    backgroundColor: string,
    cellHeight: number,
    cellWidth: number,
    backgroundImage: string | null,
    ///////////////////
    showGrid: boolean,
    gridLineWidth: number,
    gridLineColor: string
  }

  export type {IBackground}