// import { useContext } from 'react'
// import { StoreContext } from './store'
//thay thế
import { useStore, actions } from './store'
import './App.css'
import Heading from './componentCSS/heading'
import Paragraph from './componentCSS/paragraph'
import GlobalStyles from './GlobalStyles'
import Item from "./componentCSS/Item";
import ButtonClsx from './componentCSS/button/ButtonClsx'
import Button from './componentCSS/button'

import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
  // const [state, dispatch] = useContext(StoreContext)
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }


  return (
    <>
      {/* <input
        value={todoInput}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}



      {/* CSS */}
      <GlobalStyles>
        <Heading />
        <Paragraph />
        <Item />
        {/* <ButtonClsx /> */}
        <Button primary /> {/*thêm prop primary và tạo button primary. 'primary' nhận về 1 prop tên là primary kiểu dữ liệu là bloolean true*/}
      </GlobalStyles>



      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} /> {/*prop element này nhận vào 1 react element */}
        <Route path='/news' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

    </>
  )
}

export default App
