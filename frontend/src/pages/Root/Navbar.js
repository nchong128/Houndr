import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
	return (
		<nav class="navbar">
			<div class="navbar-brand">
				<Link to="/" class="navbar-item">
					<img src="https://img.icons8.com/ultraviolet/80/000000/dog.png"/>
				</Link>

				<a data-target="navbarMenu" className="navbar-burger burger">
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>

			<div id="navbarMenu" className="navbar-menu" >
				<div className="navbar-start">
					<Link to="/" class="navbar-item">Home</Link>
					<Link to="/resumes" class="navbar-item">Your Resumes</Link>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a
								href=""
								className="button is-link"
							>Sign up</a>
							<a href="" className="button is-light">Log in</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;