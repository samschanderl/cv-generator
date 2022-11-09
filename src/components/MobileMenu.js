import React from 'react'

// styles
import './MobileMenu.scss'

export default function MobileMenu({toggleView}) {
  return (
    <div className="mobile-menu">
        <div className="container">
            <button className="active" onClick={toggleView} name="showSidebar">Show Menu</button>
            <button onClick={toggleView} name="showOutput">Show CV</button>
        </div>
    </div>
  )
}
