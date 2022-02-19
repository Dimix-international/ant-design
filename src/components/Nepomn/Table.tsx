import {Table, Typography, Image} from "antd";
import {data, DataType} from "../../data";
import React, {FC} from "react";
const columns = [
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'title', //для ant
        render:(text:string) => <Typography.Text copyable={true}>{text}</Typography.Text>
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        filters: [
            {
                text:'men\'s clothing', //визуально на что кликать
                value: 'men' // что сохранять - логика филтрации
            },
            {
                text:'women\'s clothing', //визуально на что кликать
                value: 'women' // что сохранять - логика филтрации
            },
            {
                text:'electronics', //визуально на что кликать
                value: 'electr' // что сохранять - логика филтрации
            },
            {
                text:'jewelery', //визуально на что кликать
                value: 'jewel' // что сохранять - логика филтрации
            },
        ],
        onFilter: (value:string | number | boolean, item:DataType) => {
            // value - что выбрал пользователь в filters value
            // item - текущее значение данных
            return item.category.includes(value as string)
        }
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter:(a:DataType,b:DataType) => a.price - b.price,
      //  sortDirections: ['descend']  as SortOrder[]
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render:(url:string) => <Image  src={url} alt={'good'} width={150}/>

    }
]

// Each child in a list should have a unique "key"
const dataSource = data.map(good => ({...good, key: good.id}))

type TableType = {
    rows:number
}
export const _Table:FC<TableType> = React.memo( (props) => {
    const {rows} = props;

    return(
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
                pageSize:rows,
                //defaultPageSize: 5, //кол-во элементов в таблице
                /*showSizeChanger: true, //пользов сможет выбрать кол-во элементов за раз
                pageSizeOptions: [5,10,20,50], //элементы выбора,*/
                position: ["bottomCenter"]
            }}
        />
    )
})