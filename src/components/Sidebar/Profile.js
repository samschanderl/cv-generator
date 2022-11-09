import { useEffect } from 'react';
import {useRef } from 'react';

// import section components
import GeneralInfoSection from './sections/GeneralInfoSection';
import SkillsSection from './sections/SkillsSection.js'

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
        const classList = await sectionName.current.classList
        // console.log(sectionName, state)
        console.log(classList);
        if (classList.contains('active')) {
            return true
        }
        return false
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

            <GeneralInfoSection
                showFields={showFields} 
                user={user} 
                section={generalSection}
                handleInput={handleInput}
                checkCurrentSection={checkCurrentSection}
            />

            <SkillsSection
                showFields={showFields} 
                user={user} 
                setUser={setUser}
                section={skillsSection}
                checkCurrentSection={checkCurrentSection}
            />


  </div>
  )
}
