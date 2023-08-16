
import { Board } from "./components"
import Tasks from "./data/Tasks"

function App() {
  return (
    <div className="w-full min-h-screen h-screen py-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-12 gap-4 h-full">

        {
          Tasks?.map(board => (
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

      </div>
    </div>
  )
}

export default App
