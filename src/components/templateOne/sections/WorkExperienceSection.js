import React from 'react'

export default function WorkExperienceSection({user}) {
  return (
    <div className="work-experience">
        <h3 className="heading-3">Work Experience</h3>
            {user.workExperience.map(experience => (
                <div className="section">
                    <div className="date">
                        <p>{experience.startYear} - </p>
                        <p>{experience.endYear}</p>
                    </div>
                    <div className="info">
                        <h4>{experience.position}</h4>
                        <p className="italic bold text-14 my-half1">{experience.city}, {experience.company}</p>
                        <p className="text-12 my-1">{experience.description}</p>
                    </div>
                </div>
            ))}
    </div>
  )
}
