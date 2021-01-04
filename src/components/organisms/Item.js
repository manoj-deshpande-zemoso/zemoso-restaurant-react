import React from 'react';
import { ItemHeader } from '../molecules/ItemHeader';
import { ItemFooter } from '../molecules/ItemFooter';
import { Card } from '@material-ui/core';

export function Item(props) {
	return(
		<Card className="item" draggable id={props.id} onDragStart={(event) => props.dragStart(props.id, event)}>
			<ItemHeader item={props.item}/>
			<ItemFooter item={props.item}/>
		</Card>
	);
}