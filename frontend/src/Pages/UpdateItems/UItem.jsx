import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Uitem() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({ ItemName: "", FromLab: "", ItemDescription: "", Quantity: ""});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3206/getItems");
      setItems(result.data);
    } catch (err) {
      console.log("Error with axios", err);
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem({ ...item });
  };

  const handleEditChange = (key, value) => {
    setSelectedItem(prev => ({ ...prev, [key]: value }));
  };

  const handleEdit = async () => {
    if (selectedItem) {
      try {
        await axios.put(`http://localhost:3206/updateItem/${selectedItem.ItemID}`, selectedItem);
        fetchData();
        setSelectedItem(null);
      } catch (err) {
        console.log("Error updating item", err);
      }
    }
  };

  const handleDelete = async () => {
    if (selectedItem) {
      try {
        await axios.delete(`http://localhost:3206/deleteItem/${selectedItem.ItemID}`);
        setItems(items.filter(item => item.ItemID !== selectedItem.ItemID));
        setSelectedItem(null);
      } catch (err) {
        console.log("Error deleting item", err);
      }
    }
  };

  const handleNewInputChange = (key, value) => {
    setNewItem(prev => ({ ...prev, [key]: value }));
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post("http://localhost:3206/CreateItem", newItem);
      setItems([...items, response.data]);
      setNewItem({ ItemName: "", FromLab: "", ItemDescription: "", Quantity: "" });
    } catch (err) {
      console.log("Error adding item", err);
    }
  };

  return (
    <div>
      <h1>Item Management</h1>
      <div className="master-detail-container">
        <div className="master-section">
          <table className="dtuitem">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>ID</th>
                <th>From Lab</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.ItemID} onClick={() => handleRowClick(item)} className="clickable-row">
                  <td className='citem'>{item.ItemName}</td>
                  <td className='citem'>{item.ItemID}</td>
                  <td className='citem'>{item.FromLab}</td>
                  <td className='citem'>{item.ItemDescription}</td>
                  <td className='citem'>{item.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          {selectedItem && (
            <div>
              <h2>Edit Item</h2>
              <InputText className="inputadd" value={selectedItem.ItemName} onChange={(e) => handleEditChange('ItemName', e.target.value)} />
              <InputText className="inputadd" value={selectedItem.FromLab} onChange={(e) => handleEditChange('FromLab', e.target.value)} />
              <InputText className="inputadd" value={selectedItem.ItemDescription} onChange={(e) => handleEditChange('ItemDescription', e.target.value)} />
              <InputText className="inputadd" value={selectedItem.Quantity} onChange={(e) => handleEditChange('Quantity', e.target.value)} />
              <Button className="btnadd" label="Save" onClick={handleEdit} />
              <Button className="btnadd" label="Delete" onClick={handleDelete} />
            </div>
          )}
          <div>
            <h2>Add Item</h2>
            <InputText className="inputadd" value={newItem.ItemName} onChange={(e) => handleNewInputChange('ItemName', e.target.value)} placeholder="Name" />
            <InputText className="inputadd" value={newItem.FromLab} onChange={(e) => handleNewInputChange('FromLab', e.target.value)} placeholder="From Lab" />
            <InputText className="inputadd" value={newItem.ItemDescription} onChange={(e) => handleNewInputChange('ItemDescription', e.target.value)} placeholder="Description" />
            <InputText className="inputadd" value={newItem.Quantity} onChange={(e) => handleNewInputChange('Quantity', e.target.value)} placeholder="Quantity" />
            <Button className="btnadd" label="Add" onClick={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uitem;
