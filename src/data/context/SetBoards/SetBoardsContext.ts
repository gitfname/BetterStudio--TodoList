
import { createContext } from "react"
import { TaskOptions, TasksOptions } from "../../../types"

const SetBoardsContext = createContext<{ setter(payload: Array<TasksOptions>): void, editTask(payload: TaskOptions, boardId: string, taskId: string, removed?:boolean): void }>({setter: () => 0, editTask: () => 0})

export {
    SetBoardsContext
}