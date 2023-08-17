
import { Board } from "./components"
import { useContext } from "react"
import { BoardsContext } from "./data"
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const { data: Boards, setter: setBoards } = useContext(BoardsContext);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const newList = [...Boards];
    const sourceBoardId = result.source.droppableId
    const sourceTaskIndex = result.source.index
    const targetBoardId = result.destination?.droppableId
    const targetBoardIndex = newList.findIndex(board => board.id === targetBoardId)
    if (targetBoardIndex === -1) return
    const targetTaskIndex = result.destination?.index
    const sourceBoardIndex = newList.findIndex(board => board.id === sourceBoardId)
    if (sourceBoardIndex === -1) return
    let [removedItem] = newList[sourceBoardIndex].items.splice(sourceTaskIndex, 1)

    if (newList[targetBoardIndex].status === 2 && removedItem.status !== 2) {
      removedItem = {
        ...removedItem,
        status: 2
      }
    }
    else if (newList[targetBoardIndex].status === 1 && removedItem.status !== 1) {
      removedItem = {
        ...removedItem,
        status: 1
      }
    }
    else if (newList[targetBoardIndex].status === 0 && removedItem.status !== 0) {
      removedItem = {
        ...removedItem,
        status: 0
      }
    }

    newList[targetBoardIndex].items.splice(targetTaskIndex, 0, removedItem)
    localStorage.setItem("boards", JSON.stringify(newList))
    setBoards(newList)
  }

  return (
    <div className="w-full min-h-screen py-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-12 gap-4 h-full">
        <DragDropContext
          onDragEnd={handleOnDragEnd}
        >
          {
            Boards?.map(board => (
              <Board
                key={board.id}
                id={board.id}
                items={board.items}
                title={board.title}
                baseColor={board.baseColor}
                titleColor={board.titleColor}
                actionBtnColor={board?.actionBtnColor || ""}
                countColor={board.countColor}
                showActionBtn={board.showActionBtn}
              />
            ))
          }
        </DragDropContext>

      </div>
    </div>
  )
}

export default App
