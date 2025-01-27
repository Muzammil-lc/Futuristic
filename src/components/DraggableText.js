import React from "react";

const DraggableText = ({ style, onClick }) => {
  return (
    <div
      className="text-component"
      style={style}
      onClick={onClick}
      contentEditable
      suppressContentEditableWarning
    >
      Edit me
    </div>
  );
};

export default DraggableText;
