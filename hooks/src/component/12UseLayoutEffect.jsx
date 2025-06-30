import { useEffect, useState, useLayoutEffect } from "react"

/*
useEffect
Cập nhật lại state
Cập nhât lại DOM (mutated(đột biến) chỉ sửa lại 1 property trong object, nhìn bên ngào vẫn là object nhưng bên tong có thể đã update 1 vài thành phần nhỏ)
Render lại UI
Gọi cleanup nếu deps thay đổi
Gọi useEffect callback


useLayoutEffect
Cập nhật lại state
Cập nhật DOM (mutated)
Gọi cleanup nếu deps thay đổi (sync)
Gọi useLayoutEffect callback (sync)
Render lại UI 
*/

function UseLayoutEffect() {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Click</button>
        </div>
    )
}

export default UseLayoutEffect
