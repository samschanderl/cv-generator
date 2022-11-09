import React from 'react';


// import styles
import './TemplateOne.scss';
import '../../styles/global-styles.scss';

// import testdata & test images
import placeholderImg from '../../testData/placeholder-image.png';

// import sections
import ContactSection from './sections/ContactSection';
import WorkExperienceSection from './sections/WorkExperienceSection';

export default function TemplateOne({ user }) {
  return (
    <div className="template-one">
        <div className="overview">
            <div className="profile-img">
                <img src={!user.img ? placeholderImg : user.img} alt="" />
            </div>
            <div className="description">
                <h1 className="name">{!user.name ? 'Your Name' : user.name}</h1>
                <h3 className="role">{!user.role ? 'Your Job Position' : user.role}</h3>
                <p className="summary">{!user.description ? 'A short description of yourself' : user.description}</p>
            </div>
            <div className="divider"></div>
        </div>

        <ContactSection user={user}/>
        <WorkExperienceSection user={user}/>

        <div className="education"></div>
        <div className="other"></div>
    </div>
  )
}
