import React from 'react';

function Navbar(props) {
	return (
		<nav class="navbar">
			<div class="navbar-brand">
				<a href="www.google.com" className="navbar-item">
					{/*<img src="https://img.icons8.com/ios/100/000000/dog.png"/>*/}
					<img src="https://img.icons8.com/ultraviolet/80/000000/dog.png"/>
				</a>

				<a data-target="navbarMenu" className="navbar-burger burger">
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>

			<div id="navbarMenu" className="navbar-menu" >
				<div className="navbar-start">
					<a href="" className="navbar-item">Home</a>
					<a href="" className="navbar-item">Resumes</a>
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