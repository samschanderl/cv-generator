import { logRoles } from '@testing-library/react';
import { useEffect } from 'react';
import {useRef } from 'react';

// import section components
import GeneralInfo from './GeneralInfo';

// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

// import data context
import { useDataContext } from '../../context/DataProvider';

// import styles
import './Profile.scss';

export default function Profile() {
    // data from context API
    const { user, setUser } = useDataContext();

    // create refs to the sections to style and display them based on actions
    const generalSection = useRef();
    const skillsSection = useRef();

      // show fields of certain sections based on click
    const showFields = async (section) => {
        if (section === 'general-info') {
            // add active class and remove from others
            removeActiveClasses();
            generalSection.current.classList.add('active');
        }
        else if (section === 'skills') {
            // add active class and remove from others
            removeActiveClasses();
            skillsSection.current.classList.add('active');
        }
        }

    const checkCurrentSection = async (sectionName) => {
        const state = await sectionName.current.classList.contains('active');
        // console.log(sectionName, state)
        return state
    }

    // add the input values to the user object. IMPORTANT: make sure input field contains name attribute equal to object
    const handleInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        var dataArray = [{}];
        dataArray[0][key] = value;
        setUser(user => ({
            ...user,
            ...dataArray[0],
        }));
    }

    const removeActiveClasses = () => {
        generalSection.current.classList.remove('active');
        skillsSection.current.classList.remove('active');
    }

    useEffect(() => {
        console.log(user);
    }, [user])

  return (
    <div>            
        <form>
            {/* General information */}
            <div className="general-info section">
            <div className="section-title" onClick={() => showFields('general-info')} >
                { checkCurrentSection(generalSection) ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                <h3>General Information</h3>
            </div>
            
            <div ref={generalSection} className="fields active">
                <label>Name
                <input placeholder="Your Name" value={user.name} onChange={handleInput} name="name"></input>
                </label>
                <label>Current Job 
                <input placeholder="Your Job Role" value={user.role} onChange={handleInput} name="role"></input>
                </label>
            </div>

            </div>

            {/* Skills */}
            <div className="skills section">
            <div className="section-title" onClick={() => showFields('skills')} >
                {checkCurrentSection(skillsSection) ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                <h3>Skills</h3>
            </div>
            
            <div ref={skillsSection} className="fields">
                <label> Skills
                <input placeholder="Add Your Skills"></input>
                </label>
            </div>

            <GeneralInfo 
                showFields={showFields} 
                user={user} 
                handleInput={handleInput}
                checkCurrentSection={checkCurrentSection}
            />

            </div>
        </form>
  </div>
  )
}
