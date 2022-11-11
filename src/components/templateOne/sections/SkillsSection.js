import React from 'react'

export default function SkillsSection({user}) {
  return (
    <div className="skills">
        <h3 className="heading-3">Skills</h3>
        {user.skills.map(skill => <p className="pill" key={skill}>{skill}</p>
        )}
    </div>
  )
}
