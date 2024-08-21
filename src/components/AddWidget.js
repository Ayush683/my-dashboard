
import React, { useState } from 'react';

const AddWidget = ({ onAddWidget }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (name && text) {
      onAddWidget({ id: Date.now(), name, text });
      setName('');
      setText('');
    }
  };

  return (
    <div className="add-widget">
      <input 
        type="text" 
        placeholder="Widget Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Widget Text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={handleAdd}>+ Add Widget</button>
    </div>
  );
};

export default AddWidget;
