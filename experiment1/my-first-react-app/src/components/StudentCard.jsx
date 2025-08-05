// src/components/StudentCard.jsx
import React from 'react'

function StudentCard({ student }) {
  const { id, name, major, year, gpa, hobbies } = student
  
  const getGradeColor = (gpa) => {
    if (gpa >= 3.5) return '#10b981' // เขียว
    if (gpa >= 3.0) return '#f59e0b' // เหลือง
    if (gpa >= 2.5) return '#ef4444' // แดง
    return '#6b7280' // เทา
  }

  return (
    <div className="student-card">
      <div className="info-section">
        <h3>{name}</h3>
        <p className="student-id">รหัส: {student.studentId}</p>
        <p className="major">{major}</p>
        <p className="year">ชั้นปีที่ {year}</p>
        
        <div className="gpa-section">
          <span>เกรดเฉลี่ย: </span>
          <span 
            className="gpa-value"
            style={{ color: getGradeColor(gpa) }}
          >
            {gpa.toFixed(2)}
          </span>
        </div>
        
        {hobbies && hobbies.length > 0 && (
          <div className="hobbies">
            <h4>งานอดิเรก:</h4>
            <div className="hobby-tags">
              {hobbies.map((hobby, index) => (
                <span key={index} className="hobby-tag">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCard