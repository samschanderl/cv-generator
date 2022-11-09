import React from 'react';

// import icons
import { FaBirthdayCake } from 'react-icons/fa';
import { HiMail, HiHome } from 'react-icons/hi';
import {BsTelephoneFill} from 'react-icons/bs';

export default function ContactSection({user}) {
  return (
    <div className="contact-data">
        <h3 className="heading-3">Contact Information</h3>
        <p className="pill"><FaBirthdayCake className="icon" />{!user.dateOfBirth ? 'Your Birthday' : user.dateOfBirth}</p>
        <p className="pill"><HiMail className="icon"/>{!user.email ? 'Your Email' : user.email}</p>
        <p className="pill"><BsTelephoneFill className="icon" />{!user.phone ? 'Your Phone Number' : user.phone}</p>
        <p className="pill"><HiHome className="icon"/>{!user.address ? 'Your Address' : user.address}</p>
    </div>
  )
}
