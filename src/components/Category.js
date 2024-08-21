// Category.js
import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  const [isAddingWidget, setIsAddingWidget] = useState(false);

  const handleAddWidgetClick = () => {
    setIsAddingWidget(true);
  };

  const handleCloseForm = () => {
    setIsAddingWidget(false);
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget 
            key={widget.id} 
            widget={widget} 
            onRemove={() => onRemoveWidget(widget.id)} 
          />
        ))}
        <div className="add-widget-box" onClick={handleAddWidgetClick}>
          <h3>+ Add Widget</h3>
          <p>Add a new widget to this category</p>
        </div>
      </div>
      {isAddingWidget && (
        <AddWidgetForm 
          categoryId={category.id} 
          onAddWidget={onAddWidget} 
          onClose={handleCloseForm} 
        />
      )}
    </div>
  );
};

export default Category;
