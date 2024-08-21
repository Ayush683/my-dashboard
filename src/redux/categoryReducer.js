// categoryReducer.js
import { ADD_WIDGET, REMOVE_WIDGET, ADD_CATEGORY, REMOVE_CATEGORY } from './actions';

const initialState = [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', text: 'Details about cloud accounts' },
        { id: 2, name: 'Cloud Account Risk Management', text: 'Manage risks in cloud accounts' }
      ]
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [
        { id: 3, name: 'Top 5 Name Specific Alerts', text: 'Top 5 alerts based on names' },
        { id: 4, name: 'Workload Alerts', text: 'Alerts related to workloads' }
      ]
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Image Risk Assessment', text: 'Assess risks in images' },
        { id: 6, name: 'Image Security Issues', text: 'Identify security issues in images' }
      ]
    }
  ];
  

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];

    case REMOVE_CATEGORY:
      return state.filter(category => category.id !== action.payload);

      case ADD_WIDGET:
      const updatedState = state.map(category => 
        category.id === action.payload.categoryId
          ? { ...category, widgets: [...category.widgets, action.payload.widget] }
          : category
      );
      console.log('Updated State after ADD_WIDGET:', updatedState);  // Debugging
      return updatedState;
  
      case REMOVE_WIDGET:
        return state.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        );

    default:
      return state;
  }
};

export default categoryReducer;
