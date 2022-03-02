import React from "react";
import { useState } from "react";

export default function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    

    addContact([...contacts, form]);

    setForm({fullname : "", phone_number : ""})
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullname"
            id="name"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>

        <div>
          <input
            type="number"
            name="phone_number"
            id="number"
            placeholder="PhoneNumber"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>

        <div >
          <button className="btn">ADD</button>
        </div>
      </form>
    </div>
  );
}
