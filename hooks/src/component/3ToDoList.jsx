import { useState } from 'react'
import '../App.css'

function ToDoList() {
    const [job, setJob] = useState('')
    //const [jobs, setJobs] = useState(storageJobs ?? []) //storageJobs là null hay undefined thì phải trả mãng rổng

    const [jobs, setJobs] = useState(() => {
        try {
            const storageJobs = JSON.parse(localStorage.getItem('jobs'))
            return Array.isArray(storageJobs) ? storageJobs : []
        } catch (e) {
            console.warn('Dữ liệu jobs trong localStorage không hợp lệ:', e)
            return []
        }
    })

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            //save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs) //.setItem('jobs', jsonJobs): Hàm này dùng để lưu dữ liệu

            return newJobs
        })
        setJob('')
    }

    const handleDelete = (indexToDelete) => {
        const newJobs = jobs.filter((_, index) => index !== indexToDelete)
        //(_, index) là tham số truyền vào callback của filter. Trong đó:_ là phần tử hiện tại (không dùng tới nên đặt _).index là vị trí của phần tử hiện tại trong mảng.
        //index !== indexToDelete: nghĩa là giữ lại những phần tử có chỉ số khác indexToDelete (tức là loại bỏ phần tử tại vị trí indexToDelete).
        setJobs(newJobs)
        localStorage.setItem('jobs', JSON.stringify(newJobs))
    }


    return (
        <>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <button onClick={() => {
                setJobs([])
                localStorage.removeItem('jobs')
            }}>Clear All</button>


            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList
