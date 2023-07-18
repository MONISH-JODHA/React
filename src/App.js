import React from 'react'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <TextForm heading="Enter the text below" title="Text Analyser" />

      </div>

    </>
  );
}

export default App;
