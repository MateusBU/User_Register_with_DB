'use client'; 

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

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Register">
        <Table clients={clients} clientSelected={clientSelected} clientDeleted={clientDeleted}></Table>
      </Layout>
    </div>
  );
}
