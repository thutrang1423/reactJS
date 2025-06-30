import { useState, useMemo, useRef } from "react"

/*
useMemo viết trong function component
tránh thực hiện lai một logic nào đó trong component không cần thiết
*/

function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            // price: Number
            // price: parseInt(price)
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    console.log(products);
    const total = useMemo(() => { //useMemo tránh bị lặp lại logic không cần thiết
        const result = products.reduce((result, prod) => {
            console.log('tính toán lại...');
            return result + prod.price
        }, 0)
        return result
    }, [products]) //chỉ khi products thay đổi mới chạy lại code tính total

    return (
        <>
            <input
                value={name}
                ref={nameRef}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </>
    )
}

export default UseMemo
