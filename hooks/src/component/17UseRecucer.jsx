import { useState, useReducer } from "react"

/*
kiểu dữ liệu của state không phải kiểu nguyên thuỷ nữa mà là array, object
hoặc nó nhiều tần nhiều lớp, trong array hay object có vài array hay object con thì khi đó update lại sẽ rất phức tạp
hay khi có rất nhiều state trong 1 component và có thể set cùng lúc nhiều state hay các state có sự phụ thuộc nhau
*/

function UseRecucer() {
    /*useState
    1. init state: 0 
    2. Action: Up (state + 1) / Down (state - 1)
    */
    // const [count, setCount] = useState(0)
    // return (
    //     <>
    //         <h1>{count}</h1>
    //         <button
    //             onClick={() => setCount(count - 1)}
    //         >
    //             Down
    //         </button>
    //         <button
    //             onClick={() => setCount(count + 1)}
    //         >
    //             Up
    //         </button>
    //     </>
    // )

    // useReducer
    /*
    1. init state: 0 
    2. Action: Up (state + 1) / Down (state - 1)
    3. Reducer
    4. Dispatch (kích hoạt 1 action)
    */
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count - 1)}
            >
                Down
            </button>
            <button
                onClick={() => setCount(count + 1)}
            >
                Up
            </button>
        </>
    )
}

export default UseRecucer
