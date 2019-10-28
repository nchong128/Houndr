import React from 'react';
import styled from 'styled-components';

const ResumeFileUpload = () => {
	return (
		<div className="file">
			<label className="file-label">
				<input type="file" className="file-input" name="resume" />
				<span className="file-cta">
					<span className="file-label">
						Choose your resume...
					</span>
				</span>
			</label>
		</div>
	);
};

export default function UploadResume(props) {
	return(
		<div className="box">
			<form className="form" action="">
				<div className="columns is-1 is-variable">
					<div className="column is-6">
						<input type="text" className="input is-rounded" placeholder="Resume name"/>
					</div>
					<div className="column is-4">
						<ResumeFileUpload/>
					</div>
					<div className="column is-2 level-right">
						<button className="button is-rounded is-primary">Submit</button>
					</div>
				</div>
			</form>
		</div>
	)
};