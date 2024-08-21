// // searchwidget.js
// import React, { useState } from 'react';

// const SearchWidget = ({ categories }) => {
//   const [query, setQuery] = useState('');

//   const filteredWidgets = categories.flatMap(category => 
//     category.widgets.filter(widget => widget.name.toLowerCase().includes(query.toLowerCase()))
//   );

//   return (
//     <div className="search-widget">
//       <input 
//         type="text" 
//         placeholder="Search Widgets" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//       />
//       <div className="search-results">
//         {filteredWidgets.map(widget => (
//           <div key={widget.id}>
//             <h4>{widget.name}</h4>
//             <p>{widget.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchWidget;
