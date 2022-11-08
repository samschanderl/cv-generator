import React from 'react'

// styles
import './Output.scss'

// components
import TemplateOne from './templateOne/TemplateOne';

export default function Output() {
  return (
    <div className="Output">
        <div className="container">
          <TemplateOne />
        </div>
    </div>
  )
}
