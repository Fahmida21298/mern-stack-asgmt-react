import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentSection from './components/StudentSection';
import { useState } from 'react';
import StudentAttendenceManagement from './components/StudentAttendenceManagement';


function App() {


  const [stu, setStu] = useState([])
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(null)
  return (
    <div className="App">
        <StudentAttendenceManagement/>
        <StudentAttendenceManagement/>
      </div>
   
  );
}

export default App;
