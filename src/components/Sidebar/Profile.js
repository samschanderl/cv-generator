import { useState } from 'react';
import {useRef } from 'react';

// import section components
import GeneralInfoSection from './sections/GeneralInfoSection';
import ContactInfoSection from './sections/ContactInfoSection';
import SkillsSection from './sections/SkillsSection.js';
import WorkExperience from './sections/WorkExperience';

// import data context
import { useDataContext } from '../../context/DataProvider';

// import styles
import './Profile.scss';

export default function Profile() {
    // data from context API
    const { user, setUser } = useDataContext();

    // use state
    const [toggleArrowDown, setToggleArrowDown] = useState('general-info');

    // create refs to the sections to style and display them based on actions
    const generalSection = useRef();
    const contactSection = useRef();
    const skillsSection = useRef();
    const workExperienceSection = useRef();
    const educationSection = useRef();

      // show fields of certain sections based on click
    const showFields = async (section) => {
        if (section === 'general-info') {
            // add active class and remove from others
            removeActiveClasses();
            generalSection.current.classList.add('active');
            setToggleArrowDown('general-info');
        }
        else if (section === 'contact-info') {
            // add active class and remove from others
            removeActiveClasses();
            contactSection.current.classList.add('active');
            setToggleArrowDown('contact-info');
        }
        else if (section === 'work-experience') {
            // add active class and remove from others
            removeActiveClasses();
            workExperienceSection.current.classList.add('active');
        }
        else if (section === 'education') {
            // add active class and remove from others
            removeActiveClasses();
            educationSection.current.classList.add('active');
        }
        else if (section === 'skills') {
            // add active class and remove from others
            removeActiveClasses();
            skillsSection.current.classList.add('active');
            setToggleArrowDown('skills');
            console.log(toggleArrowDown)
        }
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
        contactSection.current.classList.remove('active');
        skillsSection.current.classList.remove('active');
    }

  return (
    <div>            

            <GeneralInfoSection
                showFields={showFields} 
                user={user} 
                toggleArrowDown={toggleArrowDown}
                section={generalSection}
                handleInput={handleInput}
            />
            <ContactInfoSection
                showFields={showFields} 
                user={user} 
                toggleArrowDown={toggleArrowDown}
                setUser={setUser}
                section={contactSection}
                handleInput={handleInput}
            />
            <SkillsSection
                showFields={showFields} 
                toggleArrowDown={toggleArrowDown}
                user={user} 
                setUser={setUser}
                section={skillsSection}
            />
            <WorkExperience
                showFields={showFields} 
                toggleArrowDown={toggleArrowDown}
                user={user} 
                setUser={setUser}
                section={workExperienceSection}
            />


  </div>
  )
}
