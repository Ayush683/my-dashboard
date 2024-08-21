
import React, { useState } from 'react';
import './AddWidgetForm.css'; 

const AddWidgetForm = ({ categoryId, onAddWidget, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      const newWidget = { id: Date.now(), name, text };
      console.log('Adding new widget:', newWidget);  // Debugging
      onAddWidget(categoryId, newWidget);
      setName('');
      setText('');
      onClose();
    } else {
      console.log('Please provide both name and text.');  // Debugging
    }
  };

  return (
    <div className="add-widget-form">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Add New Widget</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Widget Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit">Add Widget</button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetForm;
