import React, { useState } from "react";
import { auth, db } from '../Auth/Config';
import ItemList from "../components/ItemLists/ItemList";
import AddItemForm from "../components/additemform/additemform";
import '../asset/Style.css'
import UpdateItem from "../components/updateitem/updateitem";

const Main = () => {
    //   SignOut function
    const logout = () => {
        auth.signOut();
    }

    const initialItemState = [
        { id: null, name: "", type: "", qty: "", description: "" ,date:new Date().toLocaleString()}
    ];

    const [editing, setEditing] = useState(false);

    const [currentItem, setCurrentItem] = useState(initialItemState);

    const handleEditItem = item => {
        setEditing(true);
        setCurrentItem({
            id: item.id,
            name: item.name,
            type: item.type,
            qty: item.qty,
            description: item.description,
            date: item.date
        });
    };

    const updateItem = ({ currentItem }, updatedItem) => {
        setEditing(false);
            db.collection("Weight")
            .doc(currentItem.id)
            .update(updatedItem);
    };

    return (
        <div>
             <div style={{marginTop : "20px"}}>
            <center>
            <span style={{fontSize: "20px", fontWeight:"bold",color:"green"}}>Anonymous Login Success</span>
            <button style={{marginLeft : "20px",padding:"10px", border:"none", backgroundColor:"red", color:"white",cursor:"pointer"}}
            onClick={logout}>
                Logout
            </button>
            </center>
        </div>
            <h1>Weight Tracker App</h1>
            <h2>Item List</h2>
            <ItemList handleEditItem={handleEditItem} />
            
            {editing ? (
                <UpdateItem
                    setEditing={setEditing}
                    currentItem={currentItem}
                    updateItem={updateItem}
                />
            ) : (
                <AddItemForm />
            )}
        </div>
    );
};
export default Main;