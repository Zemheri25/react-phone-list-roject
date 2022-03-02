import React from 'react';
import List from './list';
import Form from './form';
import { useState,useEffect } from 'react';

export default function Contects() {
    const [contacts, setContacts] = useState([
        {
            fullname : "Ömer",
            phone_number : 34545765
        },
        {
            fullname : "Ahmet",
            phone_number : 6575674
        },
        {
            fullname : "Ayşe",
            phone_number : "7897865"
        }
    ]);
    

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts = {contacts}/>
        <Form addContact = {setContacts} contacts = {contacts}/>
    </div>
  )
}
