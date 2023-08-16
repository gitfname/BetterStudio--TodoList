import { Board } from "./components"

function App() {
  return (
    <div className="w-full min-h-screen h-screen py-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-12 gap-4 h-full">

        <Board
          id="22"
          items={[]}
          title="Todo"
          baseColor="#FEF4F3"
          titleColor="#6E1E29"
          actionBtnColor="#D37A87"
          countColor="#D4AFB4"
        />

        <Board
          id="22"
          items={[]}
          title="Doing"
          baseColor="#FFFBF2"
          titleColor="#795B19"
          actionBtnColor="#C2A25B"
          countColor="#DECCA4"
        />

        <Board
          id="22"
          items={[]}
          title="Done"
          baseColor="#F4F9F3"
          titleColor="#286C1A"
          countColor="#BCD7B6"
          showActionBtn={false}
        />

      </div>
    </div>
  )
}

export default App
