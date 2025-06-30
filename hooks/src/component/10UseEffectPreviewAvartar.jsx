import { useEffect, useState } from "react"

function UseEffectPreviewAvartar() {
    const [count, setCount] = useState(1)
    //cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
    useEffect(() => {
        console.log('Mounted or re-render', count);
        //cleanup func
        return () => {
            console.log(`Cleanup`, count);
        }
    }, [count])



    const [avatar, setAvatar] = useState()
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0] //e.target: là phần tử input đang bị tác động (input file).
        file.preview = URL.createObjectURL(file)
        //URL.createObjectURL(file): tạo một link tạm thời (temporary URL) để trình duyệt có thể truy cập file đó mà không cần upload lên server.
        //file.preview: bạn đang gán thêm một thuộc tính mới cho object file để sau này dễ sử dụng khi render preview.
        setAvatar(file)

        //đổi value là tên của ảnh thành null để có thể chọn nhiều lần trên 1 file ảnh
        //e.target.value = null //giúp tạo ra nhiều ảnh nhưng cùng 1 file
    }

    useEffect(() => {
        return () => {
            //nếu có avartar 
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                Click me!
            </button>



            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} width={"80%"} />
            )}
        </div>
    )
}

export default UseEffectPreviewAvartar
