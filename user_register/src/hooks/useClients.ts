'use client'; 

import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRequest from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";
import useTableOrForm from "./useTableOrForm";

const repository: ClientRequest = new CollectionClient();

export default function useClients(){
    
    const [client, setClient] = useState<Client>(Client.empty()); //type Client
    const [clients, setClients] = useState<Client[]>([]); //type Client
    const {formVisible, tableVisible, showForm, showTable} = useTableOrForm();
    
    
    useEffect(getAll, []);
  
  function getAll(){
    repository.getAll().then(clients => {
      setClients(clients);
      showTable();
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function deleteClient(client: Client) {
    await repository.delete(client);
    getAll();
  }

  async function saveClient(client: Client){
    await repository.save(client);
    getAll();
  }

  function newClient(){
    setClient(Client.empty());
    showForm();
  }

  return{
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    tableVisible,
    showTable,
  }

}