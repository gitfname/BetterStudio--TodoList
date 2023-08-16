
import { SetBoardsContext } from "./SetBoardsContext";
import { BoardsContext } from "..";
import { ReactNode, useContext } from "react";
import { editTask } from "../..";

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
        }
    }}>
        {children}
    </SetBoardsContext.Provider>
}

export {
    SetBoardsContextProvider
}