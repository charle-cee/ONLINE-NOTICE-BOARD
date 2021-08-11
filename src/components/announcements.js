import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import { Link } from "react-router-dom";

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'subject',
        headerName: 'Subject',

        sortable: false,
        width: 250,
    },
    {
        field: 'details',
        headerName: 'Details',
        sortable: false,
        width: 350,
    },
    {
        field: 'date',
        headerName: 'Date Posted',
        sortable: true,
        width: 200,
    },
    {
        field: 'category',
        headerName: 'Category',
        sortable: false,
        width: 250,
    }

]

const rows = [
    {
        id: 1,
        subject: 'COM311 Class Cancelled',
        details: 'The Monday Class has been cancelled.',
        date: '09/08/2021',
        category: 'Classes'
    },

    {
        id: 2,
        subject: 'Online Class Link',
        details: 'Find Below Class Link.',
        date: '10/08/2021',
        category: 'Classes'
    },
    {
        id: 3,
        subject: 'Electronics For Sale',
        details: 'Electronics for sale in Hostel A.',
        date: '10/08/2021',
        category: 'Business'
    }

]

function Announcements () {

    return (
        <div className="announcements">
            <div style={ { height: 400, width: '100%' }}>
            <DataGrid
            rows= {rows}
            columns= {columns}
            disableSelectionOnClick
            checkboxSelection
            /> </div>
        </div>
    )
}

export default Announcements;