import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import './App.sass';


function App() {
    document.title = "Houndr: Resume Tracker";

    return (
    <div className="App">
      <Navbar/>
      <Content/>

    </div>
    );
}

export default App;
