import React from 'react';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';


function App() {
  return (
    <div className='App'>

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
