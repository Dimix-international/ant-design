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
            <EllipsisMiddle suffixCount={2}>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </EllipsisMiddle>,

        </div>
    )
}