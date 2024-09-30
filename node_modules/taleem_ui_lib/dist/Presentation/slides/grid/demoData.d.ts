export default function demoData(): {
    startTime: number;
    endTime: number;
    slideExtra: {
        key: string;
        value: number;
    }[];
    type: string;
    items: {
        name: string;
        content: string;
        showAt: number;
        extra: {};
    }[];
};
