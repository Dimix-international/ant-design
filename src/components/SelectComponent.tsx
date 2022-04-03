import {Select} from 'antd';
import React from "react";

const {Option} = Select;

type SelectComponentType = {
    data: string []
}
export const SelectComponent:React.FC<SelectComponentType> = ({data}:any) => {
    function handleChange(value:any) {
        console.log(`selected ${value}`);
    }

    console.log(data)
    return (
        <div>
            <Select defaultValue={data[0]} style={{width: 120}}
                    onChange={handleChange}>
                {data.map((d:any, index:number) => (
                    <Option key={index} value={d}>{d}</Option>
                ))}
            </Select>
        </div>
    )
}