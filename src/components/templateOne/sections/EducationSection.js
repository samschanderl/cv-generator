import React from 'react'

export default function EducationSection({user}) {
  return (
    <div className="education">
        <h3 className="heading-3">Education</h3>
        {user.education.map(education => (
            <div className="section">
                <div className="date">
                    <p>{education.startYear} - </p>
                    <p>{education.endYear}</p>
                </div>
                <div className="info">
                    <h4>{education.title}</h4>
                    <p className="italic bold text-14 my-half1">{education.city}, {education.institution}</p>
                    <p className="text-12">{education.description}</p>
                </div>        
            </div>

        ))}
    </div>
  )
}
