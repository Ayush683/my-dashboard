import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions';

const AddCategory = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name) {
      dispatch(addCategory({ id: Date.now(), name, widgets: [] }));
      setName('');
    }
  };

  return (
    <div className="add-category">
      <input 
        type="text" 
        placeholder="Category Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleAdd}>+ Add Category</button>
    </div>
  );
};

export default AddCategory;
