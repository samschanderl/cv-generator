import React from 'react'

// import styles
import './TemplateOne.scss';

// import testdata & test images
import profileImg from '../../testData/Samuel-2.jpg'
import { testData } from '../../testData/testData';

export default function TemplateOne() {
  return (
    <div className="template-one">
        <div className="heading">
            <div className="profile-img">
                <img src={profileImg} alt="" />
            </div>
            <div className="description">
                <h1 className="name">{testData.name}</h1>
                <h3 className="role">{testData.role}</h3>
                <p className="summary">{testData.summary}</p>
            </div>
        </div>
    </div>
  )
}
