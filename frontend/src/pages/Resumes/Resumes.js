import React from 'react';
import UploadResume from "./UploadResume";
import ResumeCard from './ResumeCard';
import styled from 'styled-components';

export default function Resumes(props) {
	return (
		<div className="columns is-centered">
				<div className="column is-four-fifths">
					<h1 className="subtitle mtm">Manage</h1>
					<h1 className="title">Your resumes</h1>
					<UploadResume/>
					<div className="columns is-centered ">
						<div className="column is-one-third">
							<ResumeCard/>
							<ResumeCard/>
						</div>
						<div className="column is-one-third">
							<ResumeCard/>
						</div>
						<div className="column is-one-third">
							<ResumeCard/>
						</div>
					</div>
				</div>
		</div>
	)
};