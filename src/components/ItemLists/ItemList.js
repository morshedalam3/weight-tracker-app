import React, { useState, useEffect } from "react"
import moment from 'moment';
import { db } from "../../Auth/Config";
import '../../asset/Style.css'

const useItems = () => {
  const [items, setItems] = useState([]); 
  useEffect(() => {
    const unsubscribe = db.collection("Weight") 
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() 
        }));
        setItems(listItems); 
      });
    return () => unsubscribe();
  }, []);
  return items;
};
const handleDeleteItem = id => {
 
    db.collection("Weight")
    .doc(id)
    .delete();
};
const ItemList = ({ handleEditItem }) => {
  const listItem = useItems();
  
  return (
      <center>
 <table className="tg">
      <tbody>
        <tr>
          <td className="tg-ycr8">Name</td>
          <td className="tg-ycr8">Type</td>
          <td className="tg-i81m">Weight</td>
          <td className="tg-a02x">Description</td>
          <td className="tg-a02x">Created at</td>
          <td className="tg-6hdc"> Action</td>
        </tr>
      </tbody>
      {listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className="tg-ycr8">{item.name}</td>
            <td className="tg-ycr8">{item.type}</td>
            <td className="tg-i81m">{item.qty}</td>
            <td className="tg-a02x">{item.description}</td>
            <td className="tg-a02x">{moment(item.date).fromNow()}</td>
            <td className="tg-6hdc">
              <button style={{cursor:"pointer"}} onClick={() => handleEditItem(item)}>Edit</button>
              <button style={{cursor:"pointer"}} onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
    </center>

   
  );
};
export default ItemList;