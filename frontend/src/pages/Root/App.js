import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import './App.scss';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Content/>
            </div>
        </Router>
    );
}

export default App;
