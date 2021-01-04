import React from 'react';
import { Item } from './Item';

export function Menu(props) {
	const menu = props.menu;
	const itemElements = Object.keys(menu).map(itemId => {
		const item = menu[itemId];
		return(
			<Item key={itemId} id={itemId} item={item} dragStart={(itemId, event) => props.dragStart(itemId, event)} />
		);
	});
	return(
	    <div className="menu">{itemElements}</div>
	);
}