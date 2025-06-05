'use client';

import Client from "../core/Client"
import { IconEdit, IconTrash } from "./icons";

interface TableProps{
    clients: Client[],
    clientSelected?: (client: Client) => void //returns void
    clientDeleted?: (client: Client) => void
}
export default function Table(props: TableProps){

    const showActions = props.clientDeleted || props.clientSelected

    function renderHeader(){
        return(
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showActions ? <th className="p-4">Actions</th> : false}
            </tr> 
        )
    }

    function renderData(){
        //if there is client (not null), map is used
        /* each client has his specif action (delete or edit) */
        return props.clients?.map((client, i) =>{
            return(
                <tr key={client.id}
                    className={i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderAction(client) : false}
                </tr>
            )
        });
    }

    function renderAction(client: Client){
        return(
            <td className="flex justify-center"> {/*same line => flex */}
                {props.clientSelected ?(
                    <button onClick={() => props.clientSelected?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50 cursor-pointer
                    `}>
                        {IconEdit}
                    </button>
                ): false}
                {props.clientDeleted ?(
                    //onClick calls a callback from page.tsx. The function has the same name                
                    <button onClick={() => props.clientDeleted?.(client)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50 cursor-pointer
                    `}>
                        {IconTrash}
                    </button>
                ): false}
            </td>
        )
    }

    //overflow-hidden ensures the contents respect the border-radius:
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
                bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800  
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}