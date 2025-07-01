import Content from "./Content"
import { useState, createContext } from "react"
import './styleUseContext.css'

export const ThemeContext = createContext() //createContext() là 1 method. Nó sẽ trả về ThemeContext là 1 object của provider

/*
CompA => CompB => CompC
context giúp CompA => CompC

create context
provider: người cung cấp dữ liệu
consumer: người nhận dữ liệu

trong ứng dụng react có thể sử dụng vô số các context khác nhau 
mỗi lần gọi createContext() sẽ gọi ra 1 context cụ thể 
và khi muốn lấy 1 context của provider thì component con phải lấy đúng context đó
*/

function UseContext() {
    // const [theme, setTheme] = useState('dark')
    // const toggleTheme = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark')
    // }
    // return (
    //     <>
    //         <button onClick={toggleTheme}>Toggle theme</button>
    //         <Content theme={theme} />
    //     </>
    // )

    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}> {/*value là prop */}
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content />
        </ThemeContext.Provider>
    )
}

export default UseContext
