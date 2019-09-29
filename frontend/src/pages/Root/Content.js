import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from '../Landing/Landing';
import Resumes from '../Resumes/Resumes';

function Content(props) {
	return (
		<div>
		<Route exact path="/" component={Landing}/>
		<Route exact path="/resumes" component={Resumes}/>
		</div>
	)
}

export default Content;