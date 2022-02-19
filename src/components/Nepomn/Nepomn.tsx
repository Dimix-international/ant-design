import React, {useState} from "react";
import {Header} from "./Header";
import {Col, InputNumber, Row, Slider, Typography} from "antd";
import {_Table} from "./Table";


export const Nepomn = () => {
    const [rows, setRows] = useState(10);
    return (
        <>
            <Header/>
            <Row>
                <Col span={12} offset={6}>
                    <Typography.Title level={4}>Количество товаров</Typography.Title>
                </Col>
                <Col span={12} offset={6}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={setRows}
                        value={rows}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ margin: '0 16px' }}
                        value={rows}
                        onChange={setRows}
                    />
                </Col>
            </Row>
            <Row>
                <Col
                    xs={24}
                    md={{
                        span:12, //ширина
                        offset:6, //отступы
                    }}
                >
                    <_Table rows={rows}/>
                </Col>
            </Row>
        </>
    );

}