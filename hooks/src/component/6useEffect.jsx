import { useEffect, useState } from "react"

function UseEffect() {

    /*
    Events: add / remove event listener
    observer pattern: subscribe/ unsubcribe
    closure
    timers: setInterval, setTimeout, clearInterval, clearTimeout
    useState
    Mounted / unmounted
        trong useEffect:callback luôn được gọi sau khi component mounted
        cleanup function luôn được gọi trước khi component unmount
        cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
    */


    const [title, setTitle] = useState('')
    /*1. useEffect(callback): 
        gọi callback mỗi khi component re-render
        gọi callback sau khi component thêm element vào DOM
    */
    useEffect(() => {
        console.log('re-render', title);
        document.title = title
    })


    /*
    2. useEffect(callback, []):
        chỉ gọi callback 1 lần sau khi component mounted: gọi api 1 lần để lấy dữ liệu lên
    */
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffect
