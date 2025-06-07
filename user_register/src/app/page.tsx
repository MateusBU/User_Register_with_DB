'use client'; 

import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";


export default function Home() {

  const rawClients = [
    { name: 'Ana', age: 34, id: '1' },
    { name: 'Mateus', age: 30, id: '2' },
    { name: 'Carlos', age: 47, id: '3' },
    { name: 'Pedro', age: 19, id: '4' },
  ];

  // Convert to class instances
  const clients = rawClients.map(c => new Client(c.name, c.age, c.id));

  function clientSelected(client: Client) {
    console.log(client);
  }

  function clientDeleted(client: Client) {
    console.log(client);
  }

  function saveClient(client: Client){
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Register">
        {visible === 'table' ?(
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4 cursor-pointer" onClick={() => setVisible('form')}>New Client</Button>
            </div>
            <Table clients={clients} clientSelected={clientSelected} clientDeleted={clientDeleted}></Table>
          </>

        ): (
          <Form 
            client={clients[0]}
            clientChanged={saveClient}
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  );
}
