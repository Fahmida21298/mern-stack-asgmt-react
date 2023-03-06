import React from 'react'




const AllStudent = (props) => {


    const removeHandler = (studentId) => {
        const newStudent = props.stu.filter(item => item.id !== studentId)

        props.setStu(newStudent)

    }
    const editHandler = (studentId) => {
        const editStudent = props.stu.find(item => item.id === studentId)
        props.setEdit(true)
        props.setEditTitle(editStudent)
        props.setTitle(editStudent.title)
    }
    const presentHandler = (stuID) => {
        const newPresentStu = props.stu.map(item => {
            if (item.id === stuID) {
                if (item.isPresent === undefined) {
                    item.isPresent = true
                }
                else {
                    alert('This student is already in a list')
                }
            }
            return item
        }
        )
        props.setStu(newPresentStu)
    }
    const absentHandler = (stuID) => {
        const newPresentStu = props.stu.map(item => {
            if (item.id === stuID) {
                if (item.isPresent === undefined) {
                    item.isPresent = false
                }
                else {
                    alert('This student is already in a list')
                }
            }
            return item
        }
        )
        props.setStu(newPresentStu)
    }
    return (
        <div className='All-present'>
            <h3>All Student</h3>

            <ul>
                {props.stu.map(item => (
                    <li>
                        <span>

                            {item.title}
                        </span>
                        <button onClick={() => editHandler(item.id)}>Edit</button>
                        <button onClick={() => removeHandler(item.id)}>Remove</button>
                        <button onClick={() => presentHandler(item.id)}>Make Present</button>
                        <button onClick={() => absentHandler(item.id)}>Make Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllStudent

