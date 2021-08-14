import React, { useState } from "react";
import { db } from "../../Auth/Config";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [qty, setQty] = useState();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString())

  const onSubmit = e => {
    e.preventDefault();
      db.collection("Weight")
      .add({
        name,
        type,
        qty,
        description,
        date
      })
      .then(() => setName(""), setType(""), setQty(""), setDescription(""),setDate(new Date().toLocaleString()));
  };

  return (
      <>
      <h2>Add Item</h2>
    <form onSubmit={onSubmit}>
      <input
        placeholder="Name"
        value={name}
        name="name"
        onChange={e => setName(e.currentTarget.value)}
        type="text"
        required
      />
      <input
        placeholder="Type"
        value={type}
        name="type"
        onChange={e => setType(e.currentTarget.value)}
        type="text"
        required
      />
      <input
        placeholder="weight"
        value={qty}
        name="qty"
        onChange={e => setQty(e.currentTarget.value)}
        type="number"
        required
      />
      <input
        placeholder="Description"
        value={description}
        name="description"
        onChange={e => setDescription(e.currentTarget.value)}
        type="text"
        required
      />
      <button style={{cursor:"pointer"}}>Submit</button>
    </form>
    </>
  );
};
export default AddItemForm;