
import { TaskOptions } from ".";

interface TasksOptions {
    id: string;
    title: string;
    status: 0 | 1 | 2;
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