// import { useRef } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react' //là higher compoenent giúp chuyển tiếp ref
import video1 from '../../video/video1.mp4'

/*
nếu dùng ref chuyền cho thằng 1 react element mà nó đại diện cho 1 thẻ trong dom thật thì sẽ lấy được dom element của nó
chuyền prop là 1 ref cho function component thì mặc định fucntion component không có ref, thì chuyền như vậy sẽ không trả ra gì cho videoRef


*/

function Video(props, ref) {
    const videoRef = useRef()

    //useImperativeHandle(ref, callback(return object)) : chỉ đưa ra ngoài những thành phần bên trong object 
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    })) //nguyên object này sẽ được gán cho VideoRef bên compoenent UseImperativeHandle

    return (
        <video //nó lấy tham chiếu node video này lưu vào videoRef bên UseImperativeHandle function component
            // ref={ref} không dùng ref ở đây sẽ dẫn đến đưa toàn bộ Dom element ra ngoài
            ref={videoRef} //video này nằm trong component Video nên không sợ đưa toàn bộ Dom element ra ngoài, dù nó có toàn quyền truy cập trong compoenent Video
            src={video1}
            width={300}
        // controls
        />
    )
}

export default forwardRef(Video)  //export ra higher component
//forwardRef này sẽ nhận đối só là Video và chuyền ref vào làm prop trong Video