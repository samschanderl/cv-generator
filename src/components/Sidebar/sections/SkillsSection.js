import { useRef } from 'react';

// import styles
import './SkillsSection.scss';

// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

export default function SkillsSection({user, setUser, showFields, checkCurrentSection, section}) {

    const skillInput = useRef();

    const addSkill = (e) => {
        e.preventDefault();
        const newSkill = skillInput.current.value;
        const newSkillsArray = [...user.skills, newSkill];
        setUser(user => ({
            ...user,
            skills: newSkillsArray
        }))

    }

    const removeSkill = (e) => {
        const newSkillsArray = user.skills.filter(skill => 
            skill !== e.target.previousSibling.textContent
        );
        setUser(user => ({
            ...user, 
            skills: newSkillsArray
        }))
    }

  return (
    <>
        <form>
            <div className="skills section">
                <div className="section-title" onClick={() => showFields('skills')} >
                    {checkCurrentSection(section) ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                    <h3>Skills</h3>
                </div>
                
                <div ref={section} className="fields">
                    <label> Skills
                        <input 
                            ref={skillInput}
                            placeholder="Add Your Skills" 
                            name="skills">
                        </input>
                        <button onClick={addSkill}>Add Skill</button>
                    </label>
                    <div className="skills-display">
                    {user.skills.map(skill => (
                        <span className="pill pill--light">{skill}<span className="remove" onClick={removeSkill}>x</span></span>
                    ))}
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
