
interface IEqSpItem {
    code : string;
    type : "code" | "text" | "heading" | "image" | "table" | "tableCode";
}

interface IEqsItem {
    uuid: string;
    name: string;
    content: string;
    sortOrder?: number;
    showAt: number | null;
    startTime?: number;
    endTime?: number;
    code: string;
    type: string;
    sp: IEqSpItem[]; 

}

export default  IEqsItem;