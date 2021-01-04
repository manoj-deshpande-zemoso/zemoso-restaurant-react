import React, { useState } from 'react';
import { SearchContainer } from './SearchContainer';
import { Menu } from './Menu';
import MENU_ITEMS from '../../data/Menu';

export function ItemsContainer(props) {
	
	const [menu, setMenu] = useState(MENU_ITEMS);

	const itemSearchIdentifier = "itemSearch";

	const dragStart = (itemId, event) => {
		console.log(itemId);
		event.dataTransfer.setData("itemId", itemId);
	}

	const filterMenu = () => {
		const itemSearcher = document.querySelector(`#${itemSearchIdentifier}`);
		if(itemSearcher == null) return;
		const itemFilterText = itemSearcher.value.toLowerCase();
		const filteredMenu = {};
		Object.keys(MENU_ITEMS).forEach((itemId) => {
			const item = MENU_ITEMS[itemId];
			if(item.name.toLowerCase().indexOf(itemFilterText) !== -1 || item.category.toLowerCase().indexOf(itemFilterText) !== -1) 
				filteredMenu[itemId] = item;
		});
		setMenu(filteredMenu);
	}

	return(
		<div className="menu-container">
			<SearchContainer onKeyUp={() => filterMenu()} placeholder="Search Menu" id={itemSearchIdentifier}/>
			<Menu menu={menu} dragStart={(itemId, event) => dragStart(itemId, event)}/>
		</div>
	);   
}