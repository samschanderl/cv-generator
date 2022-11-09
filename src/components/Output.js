import React from 'react'

// styles
import './Output.scss'

// components
import TemplateOne from './templateOne/TemplateOne';

// import context
import { useDataContext } from '../context/DataProvider';

export default function Output() {
  const {user} = useDataContext();

  return (
    <div className="Output">
        <div className="container">
          <TemplateOne user={user}/>
        </div>
    </div>
  )
}
