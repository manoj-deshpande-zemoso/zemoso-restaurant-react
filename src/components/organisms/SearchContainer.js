import React from 'react';

export function SearchContainer(props) {
	return(
		<div className="search-container">
			<input type="text" onKeyUp={props.onKeyUp} placeholder={props.placeholder} id={props.id} />
		</div>
	);
}