
import { createContext } from "react";
import { TaskOptions, TasksOptions } from "../../../types";

const BoardsContext = createContext<{data: Array<TasksOptions>, setter(payload: Array<TasksOptions>): void}>({data: [], setter: () => null})

export {
    BoardsContext
}