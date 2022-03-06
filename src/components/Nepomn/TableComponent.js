import {DatePicker, Table} from "antd";
import React, {useState} from "react";
import {useTable} from "./useTable";
import './table.css';
import {DownOutlined} from "@ant-design/icons";

export const TableComponent = () => {
    const {columns, dataSource, setToggleOpenDataPicker} = useTable();
    return (
        <div onClick={() => setToggleOpenDataPicker(false)}><Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
                //defaultPageSize: 5, //кол-во элементов в таблице
                /*showSizeChanger: true, //пользов сможет выбрать кол-во элементов за раз
                pageSizeOptions: [5,10,20,50], //элементы выбора,*/
                position: ["bottomCenter"]
            }}
        /></div>
    )
}