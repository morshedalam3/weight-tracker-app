import React, { useState, useEffect } from "react";

const UpdateItem = ({ setEditing, currentItem, updateItem }) => {

  const [item, setItem] = useState(currentItem);
  useEffect(() => {
    setItem(currentItem);
  }, [currentItem]);

  const onSubmit = e => {
    e.preventDefault();
    updateItem({ currentItem }, item);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <>
      <h2>Update Item</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="Update Item">Update Item :</label>
        <input type="text" name="name" value={item.name} onChange={onChange} />
        <input type="text" name="type" value={item.type} onChange={onChange} />
        <input type="number" name="qty" value={item.qty} onChange={onChange} />
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={onChange}
        />
        <button style={{cursor:"pointer"}}>Update</button>
        <button style={{cursor:"pointer"}} onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </>
  );
};
export default UpdateItem;