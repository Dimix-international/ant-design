import {DatePicker, Dropdown, Image, Menu, Tag, Typography} from "antd";
import {activeData} from "../../data";
import React, {useEffect, useRef, useState} from "react";
import {CloseOutlined, DownOutlined, MoreOutlined} from "@ant-design/icons";
import moment from "moment";

export const useTable = () => {
    const [toggleOpenDataPicker, setToggleOpenDataPicker] = useState(false);
    const [date, setDate] = useState('');

    const onChangeData = (date) => {
        setDate(date);
    }
    const openDataPicker = (e) => {
        e.stopPropagation();
        setToggleOpenDataPicker(prev => !prev);
    }

    const onClickHandler = e => e.stopPropagation(); //чтобы не закрывалось когда выбрали дату

    const JSXDatapicker = () => {
        return(
            <div className={'dateColumn'} onClick={onClickHandler} onBlur={() => setToggleOpenDataPicker(false)}>
                <Typography.Text> Data</Typography.Text>
                {!toggleOpenDataPicker ?  <DownOutlined onClick={openDataPicker}/> : <CloseOutlined onClick={openDataPicker}/>}

                <DatePicker
                    onBlur={() => setToggleOpenDataPicker(false)} className={'datepicker'} open={toggleOpenDataPicker}
                            onChange={onChangeData}
                />
            </div>
        )
    }

    const clickIconHandler = () => {
        if(toggleOpenDataPicker) {
            setToggleOpenDataPicker(prev => !prev)
        }
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    const columns = [
        {
            title: 'Name', //імя колонкі
            dataIndex: 'title', // с каким полем из данных работаем
            key: 'title', //для ant (для простоты равен dataIndex
            render:(text) => <Typography.Text>{text}</Typography.Text>
        },
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number',
            render:(text) => <Typography.Text>{text}</Typography.Text>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            filterIcon:<DownOutlined onClick={() => setToggleOpenDataPicker(!toggleOpenDataPicker)}/>,
            filters: [
                {
                    text: <DatePicker value={date} onChange={onChangeData}/>,
                    value: `${moment(date).format('L')}` // что сохранять - логика филтрации
                },
            ],
            onFilter: (value, record) => {
                console.log(value, record)
            },
            render:(text) => <>
                <Typography.Text>
                    {text}
                </Typography.Text></>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filterIcon:<DownOutlined onClick={clickIconHandler}/>,
            filters: [
                {
                    text:'Food', //визуально на что кликать
                    value: 'food' // что сохранять - логика филтрации
                },
                {
                    text:'Health', //визуально на что кликать
                    value: 'health' // что сохранять - логика филтрации
                },
                {
                    text:'Sport', //визуально на что кликать
                    value: 'sport' // что сохранять - логика филтрации
                },
                {
                    text:'Education', //визуально на что кликать
                    value: 'education' // что сохранять - логика филтрации
                },
            ],
            onFilter: (value, item) => {
                // value - что выбрал пользователь в filters value
                // item - текущее значение данных
                return item.category === value
            }
        },
        {
            title: 'Subcategory',
            dataIndex: 'subcategory',
            key: 'subcategory',
            filterIcon:<DownOutlined onClick={clickIconHandler}/>,
            filters: [
                {
                    text:'Sub#1', //визуально на что кликать
                    value: 'sub#1' // что сохранять - логика филтрации
                },
                {
                    text:'Sub#2', //визуально на что кликать
                    value: 'sub#2' // что сохранять - логика филтрации
                },
                {
                    text:'Sub#3', //визуально на что кликать
                    value: 'sub#3' // что сохранять - логика филтрации
                },
                {
                    text:'Sub#4', //визуально на что кликать
                    value: 'sub#4' // что сохранять - логика филтрации
                },
            ],
            onFilter: (value, item) => {
                // value - что выбрал пользователь в filters value
                // item - текущее значение данных
                return item.category.subcategory === value
            }
        },
        {
            title: 'Company name',
            dataIndex: 'companyName',
            key: 'companyName',
            filterIcon:<DownOutlined onClick={clickIconHandler}/>,
            filters: [
                {
                    text:'IBM', //визуально на что кликать
                    value: 'IBM' // что сохранять - логика филтрации
                },
                {
                    text:'Master Card', //визуально на что кликать
                    value: 'MasterCard' // что сохранять - логика филтрации
                },
                {
                    text:'Ferrary', //визуально на что кликать
                    value: 'ferary' // что сохранять - логика филтрации
                },
                {
                    text:'Pizza Hunt', //визуально на что кликать
                    value: 'pizzaHunt' // что сохранять - логика филтрации
                },
            ],
            onFilter: (value, item) => {
                // value - что выбрал пользователь в filters value
                // item - текущее значение данных
                return item.companyName === value
            }
        },
        {
            title: 'Coupon price, AED',
            dataIndex: 'countPrice',
            key: 'countPrice',
            render:(text) => <Typography.Text>{text}</Typography.Text>,
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            render:(text) => <Typography.Text>{text}</Typography.Text>,
        },
        {
            title: 'Purchases',
            dataIndex: 'purchases',
            key: 'purchases',
            sorter:(a,b) => a.purchases - b.purchases,
            //  sortDirections: ['descend']  as SortOrder[]
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filterIcon:<DownOutlined onClick={clickIconHandler}/>,
            filters: [
                {
                    text:'Published', //визуально на что кликать
                    value: 'published' // что сохранять - логика филтрации
                },
                {
                    text:'Not Published', //визуально на что кликать
                    value: 'notPublished' // что сохранять - логика филтрации
                },
            ],
            onFilter: (value, item) => {
                // value - что выбрал пользователь в filters value
                // item - текущее значение данных
                return item.status === value
            },
            render:(text) =><Tag>{text.toUpperCase()}</Tag>
        },
        {
            render: () => (
                <Dropdown.Button overlay={menu} icon={<MoreOutlined />} />
            ),
        }
    ]

// Each child in a list should have a unique "key"
    const dataSource = activeData.map(good => ({...good, key: good.id}))
    return {
        columns,
        dataSource,
        setToggleOpenDataPicker,
        toggleOpenDataPicker,
    }
}