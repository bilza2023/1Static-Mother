
interface IEqSpItem {
    code : string;
    type : "code" | "text" | "heading" | "image" | "table" | "tableCode";
}

interface IEqsItem {
    uuid: string;
    name: string;
    content: string;
    showAt: number | null;
    hideAt: number | null;
    itemExtra: {
        startTime?: number;
        endTime?: number;
        code: string;
        type: string;
        sp: IEqSpItem[]; // You might want to create a specific interface for 'sp' if you know its structure
    };

}

export default  IEqsItem;