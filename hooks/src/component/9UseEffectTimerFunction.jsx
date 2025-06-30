import { useEffect, useState } from "react"

function UseEffectTimerFunction() {
    const [countdown, setCountDown] = useState(180)

    /*
    khi làm việc với react component có thể bị unmount trong bất cứ trường hợp nào
    thì trong component có sử dụng setInterval, setTimeout, assyn bất động bộ, listener Event, subcribe event thì nhớ cleanup khi unmount 
     */

    /*
    nếu dùng interval trực tiếp
        setInterval chạy thì nó sẽ re-render lại hàm 1 lần và mỗi lần chạy lại re-render thì sẽ tạo ra setinterval mới 
        đẫn đến nhiều setinterval chạy cùng lúc và set song song nhau khiến   
    */


    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         /*
    //         nếu để countdown - 1 
    //         countdown sẽ tham chiếu lên hàm useEffect và ra ngoài dẫn đến useEffect sẽ unounted 
    //         cho nên useEffect sẽ chỉ chạy 1 lần dù setInetrval vẫn chạy liên tục
    //         */
    //         setCountDown(prevState => prevState - 1) // dùng prevState(callback) để không phải gọi lại biến countdown ở bên ngoài
    //         console.log('Count down');
    //     }, 1000)

    //     //cleanup func
    //     return () => clearInterval(timerId)
    // }, [])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountDown(countdown - 1)
            console.log('Count down');
        }, 1000)

        //cleanup func
        return () => clearTimeout(timerId)
    }, [countdown])



    return (
        <div>
            <h1>
                {countdown}
            </h1>
        </div>
    )
}

export default UseEffectTimerFunction
