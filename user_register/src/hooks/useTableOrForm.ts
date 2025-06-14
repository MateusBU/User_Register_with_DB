'use client'; 

import { useEffect, useState } from "react";

export default function useTableOrForm(){

    const [visible, setVisible] = useState<'table' | 'form'>('table'); //type table or form

    const showTable = () => setVisible('table');
    const showForm = () => setVisible('form');

    return{
        formVisible: visible === 'form',
        tableVisible: visible === 'table',
        showForm,
        showTable,
    }
}