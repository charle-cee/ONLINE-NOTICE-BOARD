import MaterialTable, {Column}  from '@material-table/core';
import React, { useState, useEffect }from 'react';
import TopBar from '../../components/topBar/TopBar';
import Axios from 'axios';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


    

function Recent () {

    const [announcementList, setAnnouncementList] = useState([]);
    
    const columns = [
            {
                title: 'id',
                field: 'id',
                headerName: 'ID',
                sortable: false,
                width: 70,
            },
            {
                title: 'subject',
                field: 'Subject',
                headerName: 'Subject',
                sortable: false,
                width: 250,
            },
            {
                title: 'details',
                field: 'Details',
                headerName: 'Details',
                sortable: false,
                width: 350,
            },
            {
                title: 'date',
                field: 'Date Posted',
                headerName: 'Date Posted',
                sortable: true,
                width: 200,
            },
            {
                title: 'category',
                field: 'Category',
                headerName: 'Category',
                sortable: false,
                width: 250,
            },
            {
                title: 'phonenumber',
                field: 'Phone Number',
                headerName: 'Phone Number',
                sortable: false,
                width: 250,
            }
        
        ]

        
        useEffect (() => [
            fetch("http://localhost:3001/api/get").then(response => response.json())
            .then(response => setAnnouncementList(response))
        ],
        [])


    return (
        <div className="announcements">
            <TopBar />
            <MaterialTable
                icons={tableIcons}
                title="Recent Announcements"
                data={announcementList}
                columns={columns}
            />

        </div>
    )
}

export default Recent;
