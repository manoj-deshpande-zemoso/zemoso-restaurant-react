import React from 'react';
import { Table } from './Table';

export function Tables(props) {

	const tables = props.tables;
	const tableElements = Object.keys(tables).map( tableId => {
		const table = tables[tableId];
		return(
			<Table table={table} id={tableId} key={tableId} 
				displayTableOrder={() => props.displayTableOrder(tableId)} 
				tableOnDrop={(event) => props.tableOnDrop(tableId, event)} />
		);
	});
	return(
		<div className="tables">{tableElements}</div>
	);
}