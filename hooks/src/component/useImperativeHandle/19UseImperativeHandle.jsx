import { useRef, useEffect } from 'react';
import Video from './Video'

/*
    UseImperativeHandle giúp có thể điều chỉnh 1 ref của 1 function component
*/

function UseImperativeHandle() {
    const videoRef = useRef() //videoRef có 1 property là curent và nó sẽ tham chiếu tới video trong element thật của nó
    // useEffect(() => {
    //     console.log(videoRef.current);
    // })

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }



    return (
        <>
            {/*gọi Video nhưng thực ra đang gọi forwardRef này trước nhận ref */}
            <Video ref={videoRef} /> {/*ref vẫn được chuyền trong Video nhưng được chuyền thằng cho forwardRef*/}
            {/*Video này đang public ra ngoài hẵn 1 ref, ref là 1 thành phần nằm trong fucntion component Video nhưng mình lại open hết ra ngoài
            trong khi nhu cầu chỉ có play và plause thôi. khi open quá nhiều method mà ta không dùng tới nó có thể gây ra mất đi tính toàn vẹn của dữ liệu, gây rửi ro cho component Video, vì bên ngoài có thể tương tác nhiều hơn những gì mình nghĩ*/}
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}

export default UseImperativeHandle

