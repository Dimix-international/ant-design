import {Button, Table, Modal, Input} from "antd";
import {useState} from "react";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export const EditTable = () => {
    const [dataSource, setDataSource] = useState([
        {
            id:1,
            name: 'John',
            email: '3232@mail.ru',
            address: 'john address',
        },
        {
            id:2,
            name: 'Vika',
            email: '32sds32@mail.ru',
            address: 'Vika address',
        },
        {
            id:3,
            name: 'Dima',
            email: 'aa@mail.ru',
            address: 'Dima address',
        },
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email',
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address',
        },
        {
            key: '5',
            render:(record) => {
               return( <>
                    <EditOutlined
                        onClick={() => editStudent(record)}
                    />
                    <DeleteOutlined style={{
                        color:'red',
                        marginLeft:'10px',
                    }}
                      onClick={() => onDeleteStudent(record)}
                    />
                </>
               )
            }
        },
    ];

    const onAddNewStudent = () => {
        const randomNumber = parseInt(Math.random()*1000);
        const newStudent = {
                id:randomNumber,
                name: 'John' + randomNumber,
                email: `${randomNumber}@mail.ru`,
                address: 'address ' + randomNumber,
            };
        setDataSource(prev => [...prev, newStudent]);
    }

    const onDeleteStudent = (student) => {
        Modal.confirm({
            title: 'Are you sure ?',
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSource(prev => prev.filter(item => item.id !== student.id));
            }
        })
    }

    const editStudent = (student) => {
        setIsEditing(true);
        setEditingStudent({...student})
    }

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    }

    const settingChanging = () => {
        setDataSource(prev => prev.map(student => {
            if(student.id === editingStudent.id) {
                return editingStudent
            } else {
                return student
            }
        }))
        resetEditing()
    }
    return(
        <div>
            <Button onClick={onAddNewStudent}>Add new student</Button>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
            <Modal
                title='Edit student'
                visible={isEditing}
                okText={'Save'}
                onCancel={resetEditing}
                onOk={settingChanging}
            >
                <Input value={editingStudent?.name} onChange={(e) =>
                setEditingStudent(prev => ({
                    ...prev,
                    name:e.target.value
                }))}/>
                <Input value={editingStudent?.email} onChange={(e) =>
                setEditingStudent(prev => ({
                    ...prev,
                    email:e.target.value
                }))}/>
                <Input value={editingStudent?.address} onChange={(e) =>
                setEditingStudent(prev => ({
                    ...prev,
                    address:e.target.value
                }))}/>
            </Modal>
        </div>
    )
}