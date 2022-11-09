// import React 
import { useState } from 'react';

// import custom hooks
import { useWindowSize } from './hooks/useWindowSize';

// import styles
import './App.scss';

// components
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Output from './components/Output';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showOutput, setShowOutput] = useState(true);

  const width = useWindowSize();

  const toggleView = (e) => {
    if (e.target.name === 'showSidebar') {
      e.target.classList.add('active');
      e.target.nextSibling.classList.remove('active');
      setShowOutput(false);
      setShowSidebar(true);
    }
    else if (e.target.name === 'showOutput') {
      e.target.classList.add('active');
      e.target.previousSibling.classList.remove('active');
      setShowSidebar(false);
      setShowOutput(true);
    }
  }  

  return (
    <div className="App">
      <Navbar />
      <p>{width}</p>
      <div className="main">
        <MobileMenu toggleView={toggleView}/>
        {showSidebar || width >=720 ? <Sidebar /> : ''}
        {showOutput || width >=720 ? <Output />: ''}
      </div>

    </div>
  );
}

export default App;
