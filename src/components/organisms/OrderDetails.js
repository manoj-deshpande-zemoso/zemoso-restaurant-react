import { IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import React from 'react';
import MENU_ITEMS from '../../data/Menu';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

export function OrderDetails(props) {
    const order = props.order;
    const emptyRowInsertion = (
        <TableRow>
            <TableCell colSpan={5}>No items ordered...</TableCell>
        </TableRow>
    );

    const tableStyles = makeStyles({
        clearIcon: {
            color: 'blue',
            cursor: 'pointer'
        },
        servingsInput: {
            width: '50px'
        }
    })();

    const orderDetails = (
        Object.keys(order).map( itemId => {
            const item = MENU_ITEMS[itemId];
            return(
                <TableRow key={itemId}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                        <TextField id="filled-basic" className={tableStyles.servingsInput} type="number" value={order[itemId]} InputLabelProps={{shrink: true}}/>
                    </TableCell>
                    <TableCell>{item.price * order[itemId]}</TableCell>
                    <TableCell>
                        <IconButton>
                            <ClearRoundedIcon className={tableStyles.clearIcon} style={{color: 'blue', cursor: 'pointer'}}></ClearRoundedIcon>
                        </IconButton>
                    </TableCell>
                </TableRow>
            )
        })
    );


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Servings</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { Object.keys(order).length===0 && emptyRowInsertion }
                { orderDetails }
                </TableBody>
            </Table>
        </TableContainer>
    );
}