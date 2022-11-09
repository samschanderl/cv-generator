import {useRef} from 'react'

// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

export default function GeneralInfo({user, showFields, handleInput, checkCurrentSection}) {
    const generalSection = useRef();

  return (
    <>
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
    </>                

  )
}
