import React from "react";

const StylingOptions = ({ onStyleChange }) => {
  return (
    <div className="styling-options">
      <label>Font Size:</label>
      <input
        type="number"
        onChange={(e) => onStyleChange("fontSize", e.target.value + "px")}
      />

      <label>Text Color:</label>
      <input
        type="color"
        onChange={(e) => onStyleChange("color", e.target.value)}
      />
    </div>
  );
};

export default StylingOptions;
