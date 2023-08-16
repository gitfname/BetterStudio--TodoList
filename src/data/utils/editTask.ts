
import { TaskOptions, TasksOptions } from "../../types";

interface Props {
    list: Array<TasksOptions>;
    boardId: string;
    taskId: string;
    payLoad: TaskOptions;
    removed?: boolean;
}

export function editTask({ list, taskId, boardId, payLoad, removed }: Props) {

    const newList = [...list]

    const targetBoardIndex = newList.findIndex(board => board.id === boardId)

    if (targetBoardIndex === -1) return "board not found"
    const targetTaskIndex = newList[targetBoardIndex]?.items?.findIndex(task => task.id === taskId)
    if (targetTaskIndex === -1) return "task not found"

    
    // if the removed parameter is true then delete the task and return the new list
    console.log(removed);
    
    if(removed) {
        const [removedItem] = newList[targetBoardIndex].items.splice(targetTaskIndex, 1)
        console.log(removedItem);
        return newList
    }
    
    // if the status does't changed. then just update the task
    if (newList[targetBoardIndex].items[targetTaskIndex].status === payLoad.status) {
        newList[targetBoardIndex].items[targetTaskIndex] = payLoad
        return newList
    }

    // if the status of the task is changed then update the task and also change send it to
    // corresponding Board
    newList[targetBoardIndex].items.splice(targetTaskIndex, 1)
    const newTargetBoardIndex = newList.findIndex(board => board.status === payLoad.status)
    newList[newTargetBoardIndex].items.splice(0, 0, payLoad)

    return newList
}