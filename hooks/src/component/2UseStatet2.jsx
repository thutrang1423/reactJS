import { useState } from 'react'
import '../App.css'

const gifts = [
    'CPU 9',
    'RAM 32GB RGB',
    'RGB Keyboard',
]

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JS'
    },
    {
        id: 3,
        name: 'ReactJS'
    },
]

function UseState2() {
    const [gift, setGift] = useState()
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }




    //one way biding: Dữ liệu chỉ đi từ component (logic) → UI
    const [name, setName] = useState('')
    // console.log(name);



    //two way biding: Dữ liệu đi từ component → UI và ngược lại từ UI → component
    const [age, setAge] = useState('')
    // console.log(age);


    const [name1, setName1] = useState('')
    const [email, setEmail] = useState('')
    const handleChange = () => {
        console.log({ name1, email });
    }


    //two way biding radio  
    const [checked, setChecked] = useState()
    const handleSubmit = () => {
        console.log({ id: checked })
    }


    //two way biding checkbox
    const [checked1, setChecked1] = useState([])
    const handleCheck = (id) => {
        setChecked1(prev => {
            // [...prev, id]

            const isChecked = checked1.includes(id)
            if (isChecked) {
                return checked1.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const handleSubmit2 = () => {
        console.log({ ids: checked1 })
    }



    return (
        <>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>


            <br />
            {/* one way biding */}
            <input onChange={e => setName(e.target.value)} />
            <button onClick={() => setName('Nguyen Van BB')}>Change name</button>



            <br />
            {/* two way biding */}
            <input
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <button onClick={() => setAge('30')}>Change age</button>


            <br />
            <input
                value={name1}
                onChange={e => setName1(e.target.value)}
            />
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleChange}>Change</button>



            <br />
            {/* two way biding radio  */}
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='radio'
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>




            <br />
            {/* two way biding checkbox  */}
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked1.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit2}>Register</button>

        </>
    )
}

export default UseState2
