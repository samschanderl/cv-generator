
// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

export default function GeneralInfo({user, showFields, handleInput, checkCurrentSection, section}) {

  return (
    <>
        <form>
            <div className="general-info section">
                <div className="section-title" onClick={() => showFields('general-info')} >
                    { checkCurrentSection(section) ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                    <h3>General Information</h3>
                </div>
                
                <div ref={section} className="fields active">
                    <label>Name 
                        <input 
                            placeholder="Your Name" 
                            value={user.name} 
                            onChange={handleInput} 
                            name="name" 
                            className={user.name ? 'filled' : ''}
                        />
                    </label>
                    <label>Date of Birth 
                        <input 
                            type="date"
                            placeholder="Date of Birth" 
                            value={user.dateOfBirth} 
                            onChange={handleInput} 
                            name="dateOfBirth" 
                            className={user.dateOfBirth ? 'filled' : ''}
                        />
                    </label>
                    <label>Current Job 
                        <input 
                            placeholder="Your Job Role" 
                            value={user.role} 
                            onChange={handleInput} 
                            name="role" 
                            className={user.role ? 'filled' : ''}
                        />
                    </label>
                    <label>Short description
                        <textarea 
                            placeholder="Short description of yourself" 
                            value={user.description} 
                            onChange={handleInput} 
                            name="description" 
                            className={user.description ? 'filled' : ''}
                            />
                    </label>
                </div>
            </div>
        </form>

    </>                

  )
}
