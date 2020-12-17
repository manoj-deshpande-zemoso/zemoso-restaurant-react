import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const api = axios.create({
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
    },
    baseURL: 'localhost:8080/zemoso'
})

function TableContainer() {

    const[tables, setTables] = useState([]);

    const getTables = async () => {
        api.get('/tables').then(res => setTables(res.data)).catch(err=> console.log(err));
    }

    getTables();

    return(
        <div>
            {
                tables.map(table => 
                    <div>
                        <h2>{table.name}</h2>
                        <p>
                            <div>Bill: Rs. {table.bill}</div>
                            <div>Total Items: {table.totalItems}</div>
                        </p>
                    </div>
                )
            }
        </div>
    );
}

ReactDOM.render(<TableContainer></TableContainer>, document.getElementById('root'));