// src/App.jsx
import { useState } from 'react'
import Welcome from './components/Welcome'
import StudentCard from './components/StudentCard'
import StudentForm from './components/StudentForm'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [students, setStudents] = useState([])

  const handleStudentAdd = (newStudent) => {
    setStudents(prev => [...prev, newStudent])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 React Components Demo</h1>

        <Welcome 
          name="Sarisah Tawanwarasak" 
          age={20} 
          university="มหาวิทยาลัยเทคโนโลยี"
        />

        <Counter />

        {/* ฟอร์มเพิ่มนักศึกษา */}
        <StudentForm onStudentAdd={handleStudentAdd} />

        {/* แสดงรายชื่อนักศึกษา */}
        <h2>📋 รายชื่อนักศึกษาทั้งหมด</h2>
        <div className="student-list">
          {students.map((std) => (
            <StudentCard key={std.id} student={std} />
          ))}
        </div>
      </header>
    </div>
  )
}

export default App