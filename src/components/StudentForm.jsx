import React from 'react'

const StudentForm = (props) => {
    const createHandler = (e) => {
        e.preventDefault()
        if (!props.title) {
            alert('Please provide a valid Name.')
            return
        }
        const addnew = {
            id: Date.now() + '',
            title: props.title,
            isPresent: undefined
        }
        props.setStu([...props.stu, addnew])
        props.setTitle('')
    }
    const updateHandler = (e) => {
        e.preventDefault()
        if (!props.title) {
            alert('Please provide a valid name.')
            return
        }
        const newStuList = props.stu.map(item => {
            if (item.id === props.editTitle.id) {
                item.title = props.title
            }
            return item
        })
        props.setStu(newStuList)
        props.setTitle('')
        props.setEdit(false)
        props.setEditTitle(null)

    }
    return (
        <form onSubmit={(e) => { props.edit ? updateHandler(e) : createHandler(e) }}>
            <input type="text" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
            <button type='submit'> {props.edit ? "Updated Student Name" : "Add New Student"}</button>
        </form>
    )
}

export default StudentForm