import React from 'react';
import { useState, useRef } from 'react';

// icons
import { BsFillPersonFill } from 'react-icons/bs';
import {RiSettings5Fill} from 'react-icons/ri';

// import components
import Profile from './Profile';
import Styles from './Styles';

// import styles
import './Sidebar.scss';

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(true);
  const [showStyles, setShowStyles ] = useState(false);

  const profileBtn = useRef();
  const stylesBtn = useRef();


  const toggleView = (option) => {
    if (option === 'profile') {
      // change button styles
      profileBtn.current.classList.add('active');
      stylesBtn.current.classList.remove('active');
      // change view output
      setShowProfile(true);
      setShowStyles(false);
    }
    else if (option === 'styles') {
      // change button styles
      stylesBtn.current.classList.add('active');
      profileBtn.current.classList.remove('active')
      // change view output
      setShowStyles(true);
      setShowProfile(false);
    }
  }

  return (
    <div className="Sidebar">
        <div className="container">
            <div className="menu">
              <button className="active" ref={profileBtn} onClick={() => toggleView('profile')}><BsFillPersonFill/>Profile</button>
              <button ref={stylesBtn} onClick={() => toggleView('styles')}><RiSettings5Fill/>Style</button>
            </div>
            {showProfile ? <Profile /> : ''}
            {showStyles ? <Styles /> : ''}
        </div>
    </div>
  )
}
