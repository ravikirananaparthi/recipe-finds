import React from 'react';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
function App(props) {
  return (
    <div className='grid md:grid-cols-3'>
    <Navbar/>
    <Main/>
    </div>
  );
}

export default App;