import {Form, Button, Checkbox, DatePicker, Input, Select} from "antd";
import Link from "antd/lib/typography/Link";

export const FormComponent = () => {

    return (
        <div style={{width: '500px', padding: '20px'}}>
            <Form
                autoComplete={'off'} //будет показ ошибки если ввели-удалили
                labelCol={{span: 10}}
                wrapperCol={{span: 14}}
                onFinish={(values) => {
                    console.log({values});
                }}
                onFinishFailed={(error) => {
                    console.log({error})
                }}
            >
                <Form.Item
                    name={'fullName'}
                    label={'Full Name'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your name',
                        },
                        {
                            whitespace: true, //чтобы нельзя ввести после пробелов
                            message: 'Please enter your name',
                        },
                        {min: 3, message: 'At least 3 symbols!'},
                    ]}
                    hasFeedback={true}//появится зеленый кружок если ок
                >
                    <Input placeholder={'Type your name'}/>
                </Form.Item>

                <Form.Item
                    name={'email'}
                    label={'Email'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email',
                        },
                        {
                            type: 'email',
                            message: 'Please enter a valid email!',
                        },
                    ]}
                    hasFeedback={true}
                >
                    <Input placeholder={'Type your email'}/>
                </Form.Item>

                <Form.Item
                    name={'password'}
                    label={'Password'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password',
                        },
                        {
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: 'Minimum eight characters, at least one letter and one number'
                        }
                    ]}
                    hasFeedback={true}
                >
                    <Input.Password placeholder={'Type your password'}/>
                </Form.Item>

                <Form.Item
                    name={'confirmPassword'}
                    label={'Confirm Password'}
                    dependencies={['password']} //обязательно
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Does not match with password!');
                                }
                            }
                        )
                    ]}
                    hasFeedback={true}
                >
                    <Input.Password placeholder={'Confirm your password'}/>
                </Form.Item>

                <Form.Item
                    name={'gender'}
                    label={'Gender'}
/*                    requiredMark={'optional'}*/
                >
                    <Select placeholder={'Select your gender'}>
                        <Select.Option value={'male'}>Male</Select.Option>
                        <Select.Option value={'female'}>Female</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={'dob'}
                    label={'Date of Birth'}
                    rules={[
                        {
                            required: true,
                            message: 'Please provide your date of birth',
                        },
                    ]}
                    hasFeedback={true}
                >
                    <DatePicker style={{width: '100%'}}
                                placeholder={'Choose date of birth'}/>
                </Form.Item>


                <Form.Item
                    name={'website'}
                    label={'Website'}
                    rules={[
                        {
                            type: 'url',
                            message: 'Please enter valid url',
                        }
                    ]}
                    hasFeedback={true}
                >
                    <Input placeholder={'Add your website url'}/>
                </Form.Item>

                <Form.Item
                    name={'agreement'}
                    wrapperCol={{span: 24}}
                    style={{textAlign: 'right'}}
                    valuePropName={'checked'}
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject('To proceed, you need to agree with our terms and conditions')
                        },
                    ]}
                >
                    <Checkbox>
                        Agree to our <Link href={'#'}>Terms and
                        Conditions</Link>
                    </Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{span: 20, offset: 4}}>
                    <Button type={'primary'} block
                            htmlType={'submit'}>Register</Button>
                </Form.Item>
            </Form>
        </div>
    )
}