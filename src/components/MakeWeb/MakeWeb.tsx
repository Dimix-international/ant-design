import {Button, Space} from "antd"
import {
    SearchOutlined,
    PoweroffOutlined,
    CheckCircleTwoTone, HeartTwoTone, TagOutlined, PlayCircleTwoTone
} from '@ant-design/icons';
import {ReactNode, useEffect, useState} from "react";
import {
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {Typography, Switch} from "antd";
import {getTwoToneColor, setTwoToneColor} from '@ant-design/icons';
import { Select } from 'antd';
import {SelectComponent} from "../SelectComponent";
import {SelectMultyJsx} from "../SelectMulty";

const { Option } = Select;
const select = ['jack', 'lucy', 'Yiminghe'];
const select2 = ['гусь', 'лебедь', 'дуб'];

export const MakeWeb = () => {
    const [isLoading, setLoading] = useState(false);
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [ellipsis, setEllipsis] = useState(true);

    const {Text, Paragraph} = Typography;

    const enterLoading = () => {
        setLoading(true);

    }


    const EllipsisMiddle = ({
                                suffixCount,
                                children
                            }: { suffixCount: number, children: string }) => {
        const start = children.slice(0, children.length - suffixCount).trim();
        const suffix = children.slice(-suffixCount).trim();
        return (
            <Text style={{maxWidth: '100%'}} ellipsis={{suffix}}>
                {start}
            </Text>
        );

    };

    useEffect(() => {
        setTwoToneColor('#eb2f96'); // установливаем цвет иконки two tone по умолч
    }, [])

    useEffect(() => {
        if (isLoading) {
            const idTimeout = setTimeout(() => {
                setLoading(false)
            }, 6000)

            return () => {
                clearTimeout(idTimeout)
            }
        }
    }, [isLoading])

    return (
        <div>
            <Switch
                checked={ellipsis}
                onChange={() => {
                    setEllipsis(!ellipsis);
                }}
            />
            <EllipsisMiddle suffixCount={12}>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </EllipsisMiddle>,
            <Paragraph ellipsis={ellipsis}>
                Ant Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team.
            </Paragraph>
            <Paragraph ellipsis={ellipsis ? {
                rows: 2,
                expandable: true,
                symbol: 'more'
            } : false}>
                {/*текст в две строки , expandable: true - его можно разворачивать, more - подпись по клику развернем текст */}
                Ant Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team. Ant
                Design, a design language for background applications, is
                refined by Ant UED Team.
            </Paragraph>

            <Text
                //
                style={ellipsis ? {width: 100} : undefined}
                ellipsis={ellipsis ? {tooltip: 'I am ellipsis now!'} : false}
            >
                Ant Design, a design language for background applications, is
                refined by Ant UED Team.
            </Text>
            <Button type={'primary'} href={'https://www.google.com/'}
                    size={'large'} shape="circle" icon={<SearchOutlined/>}/>
            <Space>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined/>}
                    loading={isLoading}
                    onClick={enterLoading}
                    htmlType={'submit'}
                >
                    Click me!
                </Button>
            </Space>
            <Space>
                <HeartTwoTone twoToneColor="#eb2f96"/>
                <CheckCircleTwoTone twoToneColor="#52c41a"/>
                <SyncOutlined twoToneColor="#52c41a" spin/>
                <SmileOutlined rotate={180}/>
                <LoadingOutlined/>
                <PlayCircleTwoTone/>
            </Space>
            <Text keyboard>
                Esc
            </Text>
            <Paragraph editable={{
                onChange: setEditableStr,
                tooltip: 'Edit'
            }}>{editableStr}</Paragraph>
            <div>
                <SelectComponent data={select}/>
                <SelectComponent data={select2}/>
            </div>
            <div>
                <SelectMultyJsx />
            </div>
        </div>
    )
}