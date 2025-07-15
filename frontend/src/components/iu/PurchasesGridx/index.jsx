import React from "react";

const PurchasesGrid = () => {
  return (
    <div className="grid-container">
      {[1, 2, 3, 4, 5 , 6,7].map((item) => (
        <div key={item} className="grid-item">Swap {item}</div>
      ))}
    </div>
  );
};

export default PurchasesGrid;
