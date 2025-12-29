import React from 'react';
import wear from './Womenshirts';
import './Women.css'
const Women = () => {
  return (
    <div className="women">
      {wear.map((item) => (
        <div className="shirt-item">
          <img src={item.img} alt={item.n} />

          <p className="brand">{item.n}</p>
          <p className="desc">{item.para}</p>

          <div className="price-box">
            <span className="price">{item.prices}</span>
            <span className="actual">{item.actual}</span>
            <span className="discount">{item.discount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Women;