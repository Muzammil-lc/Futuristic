import React from "react";

const DraggableButton = ({ style, onClick }) => {
  return (
    <button className="button-component" style={style} onClick={onClick}>
      Click Me
    </button>
  );
};

export default DraggableButton;
