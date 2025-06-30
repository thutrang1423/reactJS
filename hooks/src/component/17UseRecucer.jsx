import { useState, useReducer } from "react"

/*
kiểu dữ liệu của state không phải kiểu nguyên thuỷ nữa mà là array, object
hoặc nó nhiều tần nhiều lớp, trong array hay object có vài array hay object con thì khi đó update lại sẽ rất phức tạp
hay khi có rất nhiều state trong 1 component và có thể set cùng lúc nhiều state hay các state có sự phụ thuộc nhau
*/

//init state
const initState = 0

//Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    console.log('reducer running...');

    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error("Invalid acion");
    }
}

function UseRecucer() {
    // useReducer
    /*
    1. init state: 0 
    2. Action: Up (state + 1) / Down (state - 1)
    3. Reducer
    4. Dispatch (kích hoạt 1 action)

    dispatch nhận action => chạy hàm reducer nhận thêm tham số state 
    trả về state mới sẽ update lại vào state count và render lại function component
    */
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </>
    )


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

}

export default UseRecucer
