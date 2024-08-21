import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../redux/actions';
import Category from './Category';
import AddCategory from './AddCategory';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  const handleAddWidget = (categoryId, widget) => {
    console.log('Adding widget:', widget);
    dispatch(addWidget(categoryId, widget));
  };

  const filterWidgets = (category) => {
    return category.widgets.filter((widget) =>
      widget.name && widget.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="dashboard">
      <h1>CNAPP Dashboard</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {categories.map((category) => (
        <Category
          key={category.id}
          category={{
            ...category,
            widgets: filterWidgets(category),
          }}
          onAddWidget={(widget) => handleAddWidget(category.id, widget)}
          onRemoveWidget={(widgetId) => handleRemoveWidget(category.id, widgetId)}
        />
      ))}
      <AddCategory />
    </div>
  );
};

export default Dashboard;
