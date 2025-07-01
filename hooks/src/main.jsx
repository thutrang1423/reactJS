import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./ThemeContext.jsx"


//Fake comments, custom event cách tự phát đi 1 event tuỳ ý
function emmitComment(id) {
  setInterval(() => {
    window.dispatchEvent( //dispatchEvent tự động phát 1 event
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emmitComment(1)
emmitComment(2)
emmitComment(3)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
