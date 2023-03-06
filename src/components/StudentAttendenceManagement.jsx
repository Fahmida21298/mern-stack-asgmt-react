import React from 'react'
import StudentForm from './StudentForm';
import StudentSection from './StudentSection';
import { useState } from 'react';
const StudentAttendenceManagement = () => {
  const [stu, setStu] = useState([])
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(null)
    return (
    <div>

    
    <StudentForm
        stu={stu}
        setStu={setStu}
        title={title}
        setTitle={setTitle}
        edit={edit}
        setEdit={setEdit}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />
      
        <StudentSection
          stu={stu}
          setStu={setStu}
          edit={edit}
          setEdit={setEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
        />
        </div>

    )
}

export default StudentAttendenceManagement