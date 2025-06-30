import { useState } from 'react'
import '../App.css'


const orders = [100, 200, 300]

function UseState1() {

    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        console.log(total);
        return total
    }) //inital state có thể là số, mãng hay chuỗi bất kỳ kiểu dữ liệu nào nhưng nếu chuyền hàm thì giá trị được return sẽ được làm initial state

    const handleIncrease = () => {
        setCounter(counter + 1)

        //set state với callback
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        //gộp 2 câu lệnh thành 1 lần render
    }



    //ví dụ 2
    const [info, setInfo] = useState({
        name: "Nguyen Van A",
        age: 18,
        address: "tpHCM"
    })

    const handleUpdate = () => {
        setInfo(
            // {
            //   ...info,
            //   bio: 'Yêu màu hồng'
            // }

            prev => {
                //...logic
                return {
                    ...prev,
                    bio: 'Yêu màu hồng'
                }
            }
        )
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>



            {/* ví dụ 2 */}
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default UseState1
