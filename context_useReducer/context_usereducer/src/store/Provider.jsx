import Context from "./Context"
import { useReducer, useState } from "react" //dùng useReducer vì khi state ở phạm vi toàn cục nó có thể chứa khá là nhiều state và cấu trúc phức tạp hơn. useState giúp dễ quản lý và luồng của nó tạo ra tương tự như thư viện redux
import reducer, { initState } from "./reducer"
import logger from "./logger"


function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context.Provider value={[state, dispatch]}> {/*chuyền prop muốn làm global state vào value này */}
            {children}  {/*giúp cho tất cả component bên dưới đều có thể lấy state và dispatch để dùng*/}
        </Context.Provider>
    )
}

export default Provider
