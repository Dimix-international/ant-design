import {useState} from "react";
import {ModalComponent} from "./Modal";
import {Button} from "antd";

export const ModalContainer = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Open Modal of 1000px width
            </Button>
            <ModalComponent
            visible={visible}
            setVisible={setVisible}
        />
        </>
    )

}