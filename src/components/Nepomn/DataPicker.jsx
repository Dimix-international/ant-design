import {DatePicker, TimePicker} from 'antd';
import {useState} from "react";
import moment from "moment";

export const DateRange = () => {
    const [state, setState] = useState({
        startValue: null,
        endValue: null,
        endOpen: false,
    })
    const disabledStartDate = (startValue) => {
        const endValue = state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    const disabledEndDate = (endValue) => {
        const startValue = state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    const onChange = (field, value) => {
        setState(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const onStartChange = (value) => {
        onChange('startValue', value);
    }

    const onEndChange = (value) => {
        onChange('endValue', value);
    }

    const handleStartOpenChange = (open) => {
        if (!open) {
            setState(prev => ({
                ...prev,
                endOpen: true
            }))
        }
    }

    const handleEndOpenChange = (open) => {
        setState(prev => ({
            ...prev,
            endOpen: open
        }))
    }

    const [time, setTime] = useState([moment('13:30', 'HH:mm'), moment('13:50', 'HH:mm')]);
    const onChangeHandler = (e) => {
        setTime([...e])
    }
    return (
        <div>
            <div><DatePicker
                disabledDate={disabledStartDate}
                showTime
                format="HH:mm"
                value={state.startValue}
                placeholder="Start"
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
                suffixIcon={<></>}
            />
                <DatePicker
                    disabledDate={disabledEndDate}
                    showTime
                    format="HH:mm"
                    value={state.endValue}
                    placeholder="End"
                    onChange={onEndChange}
                    open={state.endOpen}
                    onOpenChange={handleEndOpenChange}
                    suffixIcon={<></>}
                /></div>
            <div>
                <TimePicker.RangePicker
                    value={[time[0], time[1]]}
                    showTime={{ format: "HH:mm" }}
                    format="HH:mm"
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
}