
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
            const res = editTask({ list: boards, payLoad, boardId, taskId, removed })

            if (typeof res !== "string") setBoards(res)

            localStorage.setItem("boards", JSON.stringify(res))
        },
        newTask: (boardId, payLoad) => {
            const targetBoardIndex = boards.findIndex(board => board.id === boardId)
            if (targetBoardIndex === -1) return
            const newList = [...boards];
            const newTask: TaskOptions = {
                content: payLoad.content || "",
                id: uuid4(),
                status: payLoad.status || newList[targetBoardIndex].status
            }
            newList[targetBoardIndex].items.splice(0, 0, newTask)
            localStorage.setItem("boards", JSON.stringify(newList))
            setBoards(newList)
            return newTask
        },
        deleteTask: (taskId, boardId) => {
            const newList = [...boards]
            if (boardId) {
                const targetBoardIndex = boards.findIndex(board => board.id === boardId)
                if (targetBoardIndex === -1) {
                    console.log("board not found : " + boardId);
                    return
                }
                const targetTaskIndex = boards[targetBoardIndex].items.findIndex(task => task.id === taskId)
                if (targetTaskIndex === -1) {
                    console.log("task not found");
                    
                    return
                }
                newList[targetBoardIndex].items.splice(targetTaskIndex, 1)
                setBoards(newList)
            }
            else {
                let targetTaskIndex;
                let targetBoardIndex = boards.findIndex(board => {
                    const taskIndex = board.items.findIndex(task => task.id === taskId)
                    if (taskIndex !== -1) {
                        targetTaskIndex = taskIndex
                        return true
                    }
                });
                if (targetBoardIndex === -1 || !targetTaskIndex || targetTaskIndex === -1) return
                newList[targetBoardIndex].items.splice(targetTaskIndex, 1)
                setBoards(newList)
            }
            localStorage.setItem("boards", JSON.stringify(newList))
        }
    }}>
        {children}
    </SetBoardsContext.Provider>
}

export {
    SetBoardsContextProvider
}