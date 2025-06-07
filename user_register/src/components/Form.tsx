import {useState} from 'react'
import Client from "../core/Client";
import Input from "./Input";
import Button from './Button';

interface FormProps{
    client?: Client
}
export default function Form(props: FormProps){
    const id = props.client?.id; // use ?, because the client may have no id

    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return(
        <div className='
            bg-gradient-to-r from-purple-200 to-blue-200
            p-5 rounded-lg'>
            {id ? (
                <Input 
                    readOnly={true}
                    text="Id" 
                    value={id}
                    className="mb-4"
                />
            ) : false}
            <Input 
                readOnly={false}
                text="Name" 
                value={name}
                valueChanged={setName}
                className="mb-4"
            />
            <Input 
                readOnly={false}
                text="Age" 
                type="number" 
                value={age}
                valueChanged={setAge}
                className="mb-4"
            />
            <div className='flex justify-end mt-7'>
                <Button color='blue' className='mr-2 cursor-pointer'>
                    {id ? 'Change': 'Save'}
                </Button>
                <Button color='gray' className='mr-2 cursor-pointer'>
                    Cancel
                </Button>
            </div>
        </div>
    )
}