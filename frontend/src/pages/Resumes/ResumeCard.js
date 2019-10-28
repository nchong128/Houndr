import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const ResumeCard = ({name, uploadedAt}) => {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<p className="title is-4">{name}</p>
						<p className="subtitle is-6">{uploadedAt}</p>
					</div>
					<div className="media-right">
						<FontAwesomeIcon icon={faDownload}/>
					</div>
				</div>
				<div className="content">
				</div>
			</div>
		</div>
	)
}
export default ResumeCard;