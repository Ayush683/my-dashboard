import React from 'react';
import circleChart from '../assets/images/circleChart.png';
import circleChart2 from '../assets/images/circleChart2.png';
import graph from '../assets/images/graph.png';
import riskpercent from '../assets/images/riskpercent.jpg';
import riskpercent2 from '../assets/images/riskpercent2.jpg';

const Widget = ({ widget, onRemove }) => {
  console.log('Rendering Widget:', widget);

  return (
    <div className="widget">
      <i className="ri-delete-bin-6-line" onClick={onRemove}></i>
      <h3>{widget.name}</h3>

      {widget.name === 'Cloud Accounts' && (
        <img src={circleChart} alt="Circle Chart" className="widget-image" />
      )}

      {widget.name === 'Cloud Account Risk Management' && (
        <img src={circleChart2} alt="Circle Chart2" className="widget-image2" />
      )}

      {widget.name === 'Top 5 Name Specific Alerts' && (
        <img src={graph} alt="Graph" className="widget-image3" />
      )}

      {widget.name === 'Workload Alerts' && (
        <img src={graph} alt="Graph" className="widget-image3" />
      )}

      {widget.name === 'Image Risk Assessment' && (
        <img src={riskpercent} alt="Graph" className="widget-image4" />
      )}

      {widget.name === 'Image Security Issues' && (
        <img src={riskpercent2} alt="Graph" className="widget-image4" />
      )}

      <p>{widget.description}</p>
    </div>
  );
};


export default Widget;
