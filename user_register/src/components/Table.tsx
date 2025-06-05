import Client from "../core/Client"

interface TableProps{
    clients: Client[],
}
export default function Table(props: TableProps){

    function renderHeader(){
        return(
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
            </tr> 
        )
    }

    function renderData(){
        //if there is client (not null), map is used
        return props.clients?.map((client, i) =>{
            return(
                <tr key={client.id}
                    className={i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                </tr>
            )
        });
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