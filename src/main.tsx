
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BoardsContextProvider } from './data/index.ts'
import { SetBoardsContextProvider } from './data/context/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BoardsContextProvider>
    <SetBoardsContextProvider>
      <App />
    </SetBoardsContextProvider>
  </BoardsContextProvider>
)
