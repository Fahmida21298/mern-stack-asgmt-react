import React from 'react'
import Absent from './Absent'
import AllStudent from './AllStudent'
import Present from './Present'

const StudentSection = (props) => {
    
    const toggleHandler = (studentId) => {
        const newStudentList = props.stu.map(item => {
            if (item.id === studentId) {
                item.isPresent = !item.isPresent // true !true false
            }

            return item
        })

        props.setStu(newStudentList)
    }
    return (
        <div className="components">
            <AllStudent
            stu = {props.stu}
            setStu={props.setStu}
            title= {props.title}
            setTitle={props.setTitle}
            edit={props.edit}
            setEdit={props.setEdit}
            editTitle={props.editTitle}
            setEditTitle={props.setEditTitle}/>
            <Present
             stu = {props.stu}
             setStu={props.setStu}
             toggleHandler={toggleHandler}
             />
            <Absent
             stu = {props.stu}
             setStu={props.setStu}
             toggleHandler={toggleHandler}

             />
        </div>
    )
}

export default StudentSection