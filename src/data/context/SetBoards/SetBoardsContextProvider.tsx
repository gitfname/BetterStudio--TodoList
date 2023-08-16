
import { SetBoardsContext } from "./SetBoardsContext";
import { BoardsContext } from "..";
import { ReactNode, useContext } from "react";
import { editTask } from "../..";
import { TaskOptions } from "../../../types";
import { v4 as uuid4 } from "uuid"

interface Props {
    children: ReactNode;
}

function SetBoardsContextProvider({ children }: Props) {
    const { setter: setBoards, data: boards } = useContext(BoardsContext)

    return <SetBoardsContext.Provider value={{
        setter: (payload) => setBoards(payload),
        editTask: (payLoad, boardId, taskId, removed) => {
            const res = editTask({list: boards, payLoad, boardId, taskId, removed})

            if(typeof res !== "string") setBoards(res)

            localStorage.setItem("boards", JSON.stringify(res))
        },
        newTask: (boardId) => {
            const targetBoardIndex = boards.findIndex(board => board.id === boardId)
            if(targetBoardIndex === -1) return
            const newList = [...boards];
            const newTask: TaskOptions = {
                content: "",
                id: uuid4(),
                status: newList[targetBoardIndex].status
            }
            newList[targetBoardIndex].items.splice(0, 0, newTask)
            setBoards(newList)
            return newTask
        }
    }}>
        {children}
    </SetBoardsContext.Provider>
}

export {
    SetBoardsContextProvider
}