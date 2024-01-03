import React, { memo } from "react";

const ClearButton = memo(({ handleClear }) => {
  console.log("Render => ClearButton Componenti...");
  return (
    <div>
      ClearButton Componenti
      <button className="btn btn-success m-4" onClick={handleClear}>
        Clear Button
      </button>
    </div>
  );
});

export default ClearButton;
