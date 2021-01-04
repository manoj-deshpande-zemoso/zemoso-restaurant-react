import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MENU_ITEMS from '../../data/Menu';
import TABLES from '../../data/Tables';
import { OrderDetails } from './OrderDetails';
import { SearchContainer } from './SearchContainer';
import { Tables } from './Tables';

export function TablesContainer(props) {
	
	const [tables, setTables] = useState(TABLES);
	const tableSearchIdentifier = "tableSearch";
	
	const filterTables = () => {
		const tableSearcher = document.querySelector(`#${tableSearchIdentifier}`);
		if(tableSearcher == null) return;
		const filteredTables = {};
		const tableFilterText = tableSearcher.value.toLowerCase();
		Object.keys(TABLES).forEach((tableId) => {
			const table = TABLES[tableId];
			if(table.name.toLowerCase().indexOf(tableFilterText) !== -1) filteredTables[tableId] = table;
		});
		setTables(filteredTables);
	}

	const tableOnDrop = (tableId, event) => {
		const itemId = event.dataTransfer.getData("itemId");
		const item = MENU_ITEMS[itemId];
		
		const allTables = JSON.parse(JSON.stringify(tables));
		const tableToUpdate = allTables[tableId];

		const order = tableToUpdate.order;
		if(order[itemId] == null) {
			order[itemId] = 0;
			tableToUpdate.totalItems += 1;
		}
		order[itemId] += 1;
		tableToUpdate.bill += item.price;
		setTables(allTables);
	}

	const [openDialog, setOpenDialog] = useState(false);
	const [orderData, setOrderData] = useState({});
	
	const displayTableOrder = (tableId) => {
		const table = tables[tableId];
		const order = table.order;
		
		setOrderData(<OrderDetails order={order}/>);
		setOpenDialog(true);
	}
	const closeModal = () => setOpenDialog(false);
	
	return(
		<div className="tables-container">
			<SearchContainer onKeyUp={() => filterTables()} placeholder="Search tables" id={tableSearchIdentifier} />
			<Tables tables={tables} 
				displayTableOrder={(tableId) => displayTableOrder(tableId)} 
				tableOnDrop={(tableId, event) => tableOnDrop(tableId, event)}/>
			<OrderDetailsDialog isOpen={openDialog} orderData={orderData} handleClose={closeModal} />
		</div>
	);
}

function OrderDetailsDialog(props) {

	const modalStyles = makeStyles({
		dialogTitle: { background: 'blue', color: 'white' },
		dialogCloseButton: { cursor: 'pointer', float: 'right' },
		generateBillButton: {background: 'blue', textTransform: 'capitalize', color: 'white' },
	})();

	return(
		<Dialog open={props.isOpen} fullWidth="true">
			<DialogTitle className={modalStyles.dialogTitle}>
				Order Details 
				<span onClick={props.handleClose} className={modalStyles.dialogCloseButton}>&times;</span>
			</DialogTitle>
			
			<DialogContent>
				{props.orderData}
			</DialogContent>

			<DialogActions>
				<Button className={modalStyles.generateBillButton} variant="contained">Generate Bill</Button>
			</DialogActions>
		</Dialog>
	)
}
