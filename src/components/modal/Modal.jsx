import * as Prop from "prop-types";
import {Button, Form, Input, Modal} from "antd";


const {Item} = Form;

export const ModalComponent = ({visible, setVisible}) => {
    const [form] = Form.useForm();
    const sendFormData = (values) => {
        console.log(values);
        setVisible(false);
        form.resetFields();
    }

    const onCloseForm = () => {
        setVisible(false);
        form.resetFields();
    }
    return (
        <Modal
            title={'Add banner'}
            centered
            visible={visible}
            onCancel={onCloseForm}
            width={1000}
            footer={null}
            className={'modalComponent'}
            wrapClassName={'modalBanner'}
        >
            <Form
                form={form}
                labelCol ={ {span: 4 }}
                wrapperCol= { {span: 14 }}
                layout={'vertical'}
                onFinish={sendFormData}
            >
                <Item
                    label="Field A"
                    name={'title'}
                    rules={[
                        {
                            required: true,
                            message: 'Title is required!'
                        }
                    ]}
                >
                    <Input
                        placeholder="input placeholder"
                    />
                </Item>
                <Item>
                    <Button htmlType={'submit'} type="primary">Submit</Button>
                </Item>
            </Form>
        </Modal>
    )
}

ModalComponent.propsTypes= {
    visible:Prop.bool.isRequired,
    setVisible:Prop.func.isRequired,
}