import { useState, useRef, useEffect } from "react"

//lưu các giá trị qua 1 tham chiếu bên ngoài function component
/*
    useRef(initialValue) 
    nó chỉ sử dụng giá trị khởi tạo trong lần đầu tiên component được mount
    và sau khi re-render nó sẽ không sử dụng giá trị khởi tạo đó lần nữa 

    const ref = useRef(99)
    console.log(ref) => trả về 1 object {current:99}
    console.log(ref.current) => trả về initial value
*/

function UseRef() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current);
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect);
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('Stop ->', timerId.current);
    }

    console.log(count, prevCount.current);


    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRef
