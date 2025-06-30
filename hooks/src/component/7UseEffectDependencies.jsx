import { useEffect, useState } from "react"

/*
    trong useEffect:callback luôn được gọi sau khi component mounted
    cleanup function luôn được gọi trước khi component unmount 
 */

const tabs = ['posts', 'comments', 'albums']
function UseEffectDependencies() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)


    /*
    useEffect(callback, [dependencies])
        dependencies: nó là biến có thể là prop chuyền từ ngoài cũng có thể là state trong component
        callback sẽ được gọi lại mỗi khi dependencies thay đổi
        mỗi khi component re-render lại thì useEffect sẽ kiểm tra dependencies trước và sau khi render có khác nhau hay không
        nó sử dụng toán tử === để kiểm tra dependencies có thay đổi hay không
    */

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    //listen Dom event vào useEffeact
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        // setShowGoToTop(window.scrollY>=200)

        //window không thể unmounted cho dù tắt component do nó được gắn trên trình duyệt
        window.addEventListener('scroll', handleScroll)

        //cleanup function: để giải quyết thì thêm remote event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#333',
                        background: '#fff'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default UseEffectDependencies
