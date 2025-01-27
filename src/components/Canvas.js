import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/dndTypes";
import DraggableText from "./DraggableText";
import DraggableImage from "./DraggableImage";
import DraggableButton from "./DraggableButton";

const Canvas = ({ components, setComponents, setSelectedComponent }) => {
  const [, drop] = useDrop({
    accept: [ItemTypes.TEXT, ItemTypes.IMAGE, ItemTypes.BUTTON],
    drop: (item) => {
      setComponents((prev) => [
        ...prev,
        { id: Date.now(), type: item.type, styles: {} },
      ]);
    },
  });

  const renderComponent = (component) => {
    switch (component.type) {
      case ItemTypes.TEXT:
        return (
          <DraggableText
            key={component.id}
            style={component.styles}
            onClick={() => setSelectedComponent(component)}
          />
        );
      case ItemTypes.IMAGE:
        return (
          <DraggableImage
            key={component.id}
            style={component.styles}
            onClick={() => setSelectedComponent(component)}
          />
        );
      case ItemTypes.BUTTON:
        return (
          <DraggableButton
            key={component.id}
            style={component.styles}
            onClick={() => setSelectedComponent(component)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={drop} className="canvas">
      {components.map(renderComponent)}
    </div>
  );
};

export default Canvas;
