// import UseEffectDependencies from './component/7UseEffectDependencies'
// import UseState1 from './component/1UseState1'
// import UseState2 from './component/2UseStatet2'
// import ToDoList from './component/3ToDoList'
// import Memo from './component/14Memo'
// import UseCallback from './component/15UseCallback'
// import UseMemo from './component/16UseMemo'
// import UseRecucer from './component/17UseRecucer'
// import UseReducerToDoList from './component/18UseReducerToDoList'
// import MountedUnmountedShow from './component/5MountedUnmountedShow'
// import UseEffect from './component/6useEffect'
// import ToDo from "./component/TodoUseReducer/ToDo"
// import UseContext from "./component/UseContext/19UseContext"
import Content from "./component/UseContext/Content"
import { useContext } from "react"
import { ThemeContext } from './ThemeContext'
import './App.css'
import UseImperativeHandle from "./component/useImperativeHandle/19UseImperativeHandle"
import Parent from "./component/DataOfChildToParent/Parent"




function App() {
  const context = useContext(ThemeContext)
  return (
    <>
      {/*context global */}
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />

      <UseImperativeHandle />
      <Parent />
      {/* <ToDo /> */}
      {/* <UseReducerToDoList /> */}
      {/* <UseRecucer /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <Memo /> */}
      {/* <UseEffect /> */}
      {/* <MountedUnmountedShow /> */}
      {/* <ToDoList /> */}
      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
      {/* <UseContext /> */}
    </>
  )
}


export default App
