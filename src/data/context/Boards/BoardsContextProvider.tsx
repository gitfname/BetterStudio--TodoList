
import { ReactNode, useState } from "react"
import Boards from "../../Boards";
import { BoardsContext } from "./BoardsContext";

interface Props {
    children: ReactNode;
}

function BoardsContextProvider({ children }: Props) {
    const storedBoards = localStorage.getItem("boards") || ""
    const [boards, setBoards] = useState(
        storedBoards.trim() !== "" ? JSON.parse(storedBoards) : Boards
    )

    return <BoardsContext.Provider value={{ data: boards, setter: (payLoad) => setBoards(payLoad) }}>
        {children}
    </BoardsContext.Provider>
}

export {
    BoardsContextProvider
}