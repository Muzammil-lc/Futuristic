import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/dndTypes";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <DraggableItem type={ItemTypes.TEXT} label="Text" />
      <DraggableItem type={ItemTypes.IMAGE} label="Image" />
      <DraggableItem type={ItemTypes.BUTTON} label="Button" />
    </div>
  );
};

const DraggableItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <button ref={drag} className="toolbar-item">
      {label}
    </button>
  );
};

export default Toolbar;
