import { useState, useCallback } from "react"
import SubUseCallback from './SubUseCallback'

/*
useCallback()
-Reference types
-react memo() 

useCallback: giúp tránh tạo ra hàm mới 1 cách không cần thiết trong function component
đôi khi sơ ý tạo ra những component mới 1 cách không cần thiết, không kiểm soát nó có thể dẫn đến component con bị re-render 1 cách không cần thiết cho dù đã áp dụng react memo rồi 
*/

function UseCallback() {
    const [count, setCount] = useState(0)

    /*
    khi ứng dụng bắt đầu chạy nó tạo ra hàm handleIncrease lưu vào bộ nhớ và trả về tham chiếu cho hàm handleIncrease này
    chuyền tham chiếu của hàm này vào prop onIncrease
    sau khi ấn click me nó dẫn đến việc setCount tăng lên 1 => re-render lại hàm app tạo ra 1 phạm vi mới độc lập không liên quan gì tới phạm vi trước đó
    dẫn đến việc thực thi lại code trong hàm handleIncrease tạo ra 1 around fucntion mới 1 tham chiếu mới và trả tham chiếu cho hàm handleIncrease và chuyền vào prop onIncrease
    và memo lấy 2 tham chiếu set kiểm tra === và thấy prop khác nhau  

    => chuyền thằng hàm vào prop chỉ có thể chuyền tham chiếu chứ không chuyền được nội dung hàm
    */
    // const handleIncrease = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // useCallback(hàm xử lý logic, [] mảng chứa dependence hoạt động giống như useEffect)
    /*
        trong 1 số tình huống useCallback có sử dụng biến ở bên ngoài mà nó có khả năng thay đổi sau mỗi lần re-render thì có thể đưa vào dependence cách sử dụng tương tự như useEffect
        nếu có dependence mà dependence thay đổi sau mỗi lần re-render thì useCallback thì nó sẽ tạo ra callback mới và return tham chiếu mới, còn nếu dependence không thay đổi thì nó sẽ trả về tham chiếu trước đó

        trong 1 component có thể nhận được rất nhiều prop, prop (kiểu dữ liệu nguyên thuỷ, kiểu dữ liệu tham chiếu, object, array)
        nếu dùng react memo để các component con không bị re-render không cần thiết và đối với các compoenet con truyền prop là tham chiếu thì phải dùng useCallback hết
    */
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])


    return (
        <>
            {/* quy ước đặt tên những hàm trực tiếp xử lý logic thì dùng "handle" đằng trước
        còn đối với prop phải chờ cái hành động đó xảy ra thì phía trước đặt là "on" */}
            <SubUseCallback onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </>
    )
}

export default UseCallback
