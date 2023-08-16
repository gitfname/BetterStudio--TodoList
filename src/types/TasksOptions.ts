
import { TaskOptions } from ".";

interface TasksOptions {
    id: string;
    title: string;
    items: Array<TaskOptions>;
    baseColor: string;
    titleColor: string;
    actionBtnColor?: string;
    countColor: string;
    showActionBtn?: boolean;
}

export type {
    TasksOptions
}