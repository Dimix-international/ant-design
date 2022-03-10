import {Button, DatePicker} from "antd";
import React, {useState} from "react";
import moment from "moment";

export const DatepickerComponent = ({visible, setSelectedKeys, selectedKeys, confirm, clearFilters, toggleOpenDataPicker, setToggleOpenDataPicker}) => {
    const [temDate, setTemDate] = useState('');

    const onChangeData = (value) => {
        const date = moment(value).format('L');
        setTemDate(date);
    }
    const addDate = () => {
        setToggleOpenDataPicker(false);
        setSelectedKeys([temDate]);
        confirm();
    }
    const resetDate = () => {
        setToggleOpenDataPicker(false);
        setTemDate('');
        clearFilters();
        confirm();
    }
    const extraFooterJSX = () => {
        return (
            <>
                <Button onClick={resetDate}>cancel</Button>
                <Button onClick={addDate}>add</Button>
            </>
        )
    }
    console.log(moment(selectedKeys[0]))
    return (
        <DatePicker
            inputReadOnly={false}
            open={toggleOpenDataPicker}
            value={temDate ? moment(temDate) : moment(selectedKeys[0])}
            onChange={onChangeData}
            renderExtraFooter={extraFooterJSX}
            dropdownClassName={'customPicker'}
        />
    )
}