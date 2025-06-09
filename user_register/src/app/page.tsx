'use client'; 

import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRequest from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";
import useClients from "../hooks/useClients";


export default function Home() {

  const {
    client, 
    clients, 
    selectClient, 
    deleteClient, 
    saveClient, 
    newClient,
    tableVisible,
    showTable,
  } = useClients();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Register">
        {tableVisible ?(
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4 cursor-pointer" onClick={newClient}>New Client</Button>
            </div>
            <Table clients={clients} clientSelected={selectClient} clientDeleted={deleteClient}></Table>
          </>

        ): (
          <Form 
            client={client}
            clientChanged={saveClient}
            canceled={() => showTable}
          />
        )}
      </Layout>
    </div>
  );
}
