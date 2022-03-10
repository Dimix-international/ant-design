import {Table} from "antd";
import React, {useEffect} from "react";
import {useTable} from "./useTable";
import './table.css';
import {DateRange} from "./DataPicker";

export const TableComponent = () => {
    const {columns, dataSource, setToggleOpenDataPicker} = useTable();
    const onChangePage = (page) => {
        console.log(page)
    }

    return (
        <div>
            <DateRange />
        </div>
    )
}