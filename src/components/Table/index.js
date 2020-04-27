import React from "react";
import "./style.css";
//import employees from "../../employees.json";
//import { useTable, useSortBy } from 'react-table';
//var tablesort = require('tablesort');
//var Table = document.getElementById('table');

// function Table({ columns, data }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   })
// }


function Table(props) {
    return <table className="table">{props.children}</table>;
}

export default Table;