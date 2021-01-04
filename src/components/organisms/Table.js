import React from 'react';
import { CardSubDetail } from '../atoms/CardSubDetail';

export function Table(props) {
	const table = props.table;
	const tableName = table.name;
	const billText = `Rs. ${table.bill}`;
	const totalItemsText = `Total Items: ${table.totalItems}`;
	return(
		<div className='table' id={props.id} 
			onDragOver={(event) => event.preventDefault()}
			onDrop={(event) => props.tableOnDrop(event)}
			onClick={props.displayTableOrder}>
			<CardSubDetail classes="table-name-element" innerText={tableName}/>   
			<CardSubDetail classes="bill" innerText={billText}/>
			<CardSubDetail classes="total-items" innerText={totalItemsText}/>
		</div>
	)
}