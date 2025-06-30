import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: 'JS'
    },
    {
        id: 2,
        name: 'HTML & CSS'
    },
    {
        id: 3,
        name: 'REACT'
    },
]

function UseEffectChat() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        //cleanup giúp xoá listen event của khoá học cũ trước khi mở listen event của khó học mới, và gỡ toàn bộ dữ liệu trong listen event sau khi unmount
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])


    return (
        <>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' : "#fff"
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UseEffectChat
