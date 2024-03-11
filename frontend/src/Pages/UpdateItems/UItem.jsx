import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

function App() {
  const initialCategories = [
    {
      itemId: "123",
      code: "A1",
      name: "Laptop",
      quantity: "2",
      status: "Available",
    },
    {
      itemId: "124",
      code: "A2",
      name: "Mobile Phone",
      quantity: "2",
      status: "Available",
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategory, setNewCategory] = useState({ itemId: '', code: '', name: '',quantity: '', status: '' });

  const handleEdit = () => {
    if (selectedCategory) {
      const updatedCategories = categories.map(category => {
        if (category.itemId === selectedCategory.itemId) {
          return selectedCategory;
        }
        return category;
      });
      setCategories(updatedCategories);
      setSelectedCategory(null);
    }
  };
  
  const handleDelete = () => {
    if (selectedCategory) {
      setCategories(categories.filter(category => category.itemId !== selectedCategory.itemId));
      setSelectedCategory(null);
    }
  };

  const handleAdd = () => {
    if (newCategory.name && newCategory.code) {
      setCategories([...categories, { ...newCategory, itemId: categories.length + 1 }]);
      setNewCategory({ itemId: '', code: '', name: '',quantity: '', status: '' });
    }
  };

  return (
    <div>
      <h1></h1>
      <div className="master-detail-container">
        <div className="master-section">
          <DataTable className='dtuitem'
            value={categories}
            selectionMode="single"
            selection={selectedCategory}
            onSelectionChange={(e) => setSelectedCategory(e.value)}
          >
            <Column className='citem' field="itemId" header="ID"></Column>
            <Column className='citem' field="code" header="Code"></Column>
            <Column className='citem' field="name" header="Name"></Column>
            <Column className='citem' field="quantity" header="Quantity"></Column>
            <Column className='citem' field="status" header="Status"></Column>
          </DataTable>
        </div>
        <div className="detail-section">
        {selectedCategory && (
          <div>
            <h2>Edit Items</h2>
            <InputText className='inputadd'
              value={selectedCategory.code}
              onChange={(e) => setSelectedCategory({ ...selectedCategory, code: e.target.value })}
            />
            <InputText className='inputadd'
              value={selectedCategory.name}
              onChange={(e) => setSelectedCategory({ ...selectedCategory, name: e.target.value })}
            />
            <InputText className='inputadd'
              value={selectedCategory.quantity}
              onChange={(e) => setSelectedCategory({ ...selectedCategory, quantity: e.target.value })}
            />
            <InputText className='inputadd'
              value={selectedCategory.status}
              onChange={(e) => setSelectedCategory({ ...selectedCategory, status: e.target.value })}
            />
            <Button className='btnadd' label="Save" icon="pi pi-check" onClick={handleEdit} />
            <Button className='btnadd' label="Delete" icon="pi pi-trash" onClick={handleDelete} />
          </div>
        )}
        <div>
          <h2>Add Items</h2>
          <InputText className='inputadd'
            value={newCategory.code}
            onChange={(e) => setNewCategory({ ...newCategory, code: e.target.value })}
            placeholder="Code"
          />
          <InputText className='inputadd'
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            placeholder="Name"
          /> 
          <InputText className='inputadd'
            value={newCategory.quantity}
            onChange={(e) => setNewCategory({ ...newCategory, quantity: e.target.value })}
            placeholder="Quantity"
          />
          <InputText className='inputadd'
            value={newCategory.status}
            onChange={(e) => setNewCategory({ ...newCategory, status: e.target.value })}
            placeholder="Status"
          />
          <Button className='btnadd' label="Add" icon="pi pi-plus" onClick={handleAdd} />
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
