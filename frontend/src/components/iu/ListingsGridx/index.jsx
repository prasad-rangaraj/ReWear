import React from "react";

const ListingsGrid = () => {
  return (
    <div className="grid-container">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div key={item} className="grid-item">Item {item}</div>
      ))}
    </div>
  );
};

export default ListingsGrid;
