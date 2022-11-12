import { useRef } from 'react';
import {MdModeEdit, MdOutlineRemoveCircleOutline} from 'react-icons/md';

// import styles
import './WorkExperience.scss';

// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

export default function SkillsSection({user, setUser, showFields, section, toggleArrowDown}) {

    const currentYear = new Date().getFullYear();

    const jobInput = useRef();
    const companyInput = useRef();
    const startYearInput = useRef();
    const endYearInput = useRef();
    const descriptionInput = useRef();

    const addWorkExperience = (e) => {
        e.preventDefault();
        let newID = (Math.floor(Math.random()*10000));
        let newWorkExperience = [...user.workExperience, 
            {
            id: newID,
            role: jobInput.current.value,
            company: companyInput.current.value,
            startYear: startYearInput.current.value,
            endYear: endYearInput.current.value,
            description: descriptionInput.current.value,

        }]
        console.log(newWorkExperience);
        setUser(user => ({
            ...user, 
            workExperience: newWorkExperience
            }))
    }

    const editWorkExperience = (experienceID) => {
        console.log(experienceID);
        console.log('editing')
        const selectedItem = user.workExperience.filter(experience => {
            return experience.id === experienceID
        });
        jobInput.current.value = selectedItem[0].position;
        companyInput.current.value = selectedItem[0].company;
        startYearInput.current.value = selectedItem[0].startYear;
        endYearInput.current.value = selectedItem[0].endYear;
        descriptionInput.current.value = selectedItem[0].description;
        console.log(selectedItem[0])
    }
    
    const removeWorkExperience = (e) => {
        e.preventDefault();
        console.log('removing work experience')
    }

  return (
    <>
        <form>
            <div className="work-experience section">
                <div className="section-title" onClick={() => showFields('work-experience')} >
                    {toggleArrowDown === 'work-experience' ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                    <h3>Work Experience</h3>
                </div>
                
                <div ref={section} className="fields">
                    <h3>Add A New Experience</h3>
                    <div className="fields-group">
                        <label> Position
                            <input
                                ref={jobInput}
                                placeholder="Your job position" 
                                name="role">
                            </input>
                        </label>
                        <label> Company
                            <input 
                                ref={companyInput}
                                placeholder="Company name" 
                                name="company">
                            </input>
                        </label>
                        <label> Start Year
                            <input 
                                ref={startYearInput}
                                type="number"
                                min="1950"
                                max={currentYear + 10}
                                step="1"
                                value="2015"
                                placeholder="Company name" 
                                name="startYear">
                            </input>
                        </label>
                        <label> End Year
                            <input 
                                ref={endYearInput}
                                type="number"
                                min="1950"
                                max={currentYear + 10}
                                step="1"
                                value="2022"
                                placeholder="Start Year" 
                                name="endYear">
                            </input>
                        </label>
                        <label> Short Description
                            <input 
                                ref={descriptionInput}
                                placeholder="Short description of your job role" 
                                name="description">
                            </input>
                        </label>
                        <button className="btn btn--blue" onClick={addWorkExperience}>Add Work Experience</button>
                    </div>

                    <div className="experience-display">
                    <p className="experience-heading">Your Previous Experience</p>
                    {user.workExperience.map(experience => (
                        <p className="experience-item" key={experience.position}>
                            {experience.position} - {experience.startYear}-{experience.endYear}
                            <span className="icons edit" onClick={() => {editWorkExperience(experience.id)}}><MdModeEdit/></span>
                            <span className="icons remove" onClick={removeWorkExperience}><MdOutlineRemoveCircleOutline /></span>
                        </p>
                    ))}
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
