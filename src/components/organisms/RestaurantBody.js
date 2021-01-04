import React from 'react';
import { ItemsContainer } from './ItemsContainer';
import { TablesContainer } from './TablesContainer';

export function RestaurantBody(props) {
	return(
		<div className="restaurant">
			<TablesContainer />
			<ItemsContainer />
		</div>
	);
}