import './App.scss';

// components
import Navbar from './components/Navbar';
import Output from './components/Output';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Output />
      </div>

    </div>
  );
}

export default App;
