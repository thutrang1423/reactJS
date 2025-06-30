import { useState } from "react"
import SubMemo1 from "./SubMemo1"
import SubMemo2 from "./SubMemo2"

//Hooks, HOC, Render props

//1. memo() -> Higher Order component(HOC) dùng cho cả function component và class component
//HOC: component bậc cao nó không dùng bên trong component mà nó wrap lại component 
//2. useCallback()

//memo: giúp ghi nhớ lại các prop của component để nó quyết định có render lại các component đó hay không để nó tối ưu tính năng
//tóm lại memo giúp xử lý component tránh bị re-render không cần thiết 

/*
Nguyên lý hoạt động memo:
memo nhận vào 1 component và nó check các prop của component sau mỗi lần render có bị thay đổi hay không
thì 1 component có thể nhận vô số prop thì chỉ cần ít nhất 1 prop thay đổi thì nó sẽ quyết định cho cả component re-render 
còn nếu không có giá trị prop nào thay đổi thì nó sẽ không re-render component này 
cách memo kiểm tra prop compoenent đó có thay đổi hay không nó sữ dụng toán tử strick === để kiểm tra

dùng khi có 1 component nào đó sử dụng tới nhiều prop trong 1 mán hình, 1 chức năng và bên trong nó cũng có nhiều state cần render và phần UI nó 
có thể gây ảnh hưởng đến performance thì có thể dùng memo cho tất cả component con



còn đối với compoent đơn giản, màn hình đó độ phức tạp thấp thì không nên dùng
*/

function Memo() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const increase2 = () => {
        setCount(count2 + 1)
    }

    return (
        <div>
            <SubMemo1 /> {/*cho dù không sử dụng state count nhưng vẫn bị render lại*/}
            <SubMemo2 count={count} />
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Click me!</button>
            <button onClick={increase2}>Click me!</button>
        </div>
    )
}

export default Memo