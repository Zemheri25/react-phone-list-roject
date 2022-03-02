import React from 'react';
import { useState } from 'react';

export default function List( {contacts}) {

    const [filterText, setFilterText] = useState ("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    });

    console.log(filtered)




  return (
    <div>

        <input type="text" placeholder='filter contact' value={filterText} onChange = {(e) => setFilterText(e.target.value)} />


        <ul className='mylist'>
            {
                filtered.map((contact, i) => <li key={i}> <span> {contact.fullname} </span> <span> {contact.phone_number} </span> </li>)
            }
        </ul>

        <h3>Total Contacts ({filtered.length}) </h3>
    </div>
  )
}
