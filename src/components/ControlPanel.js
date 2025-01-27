import React, { useState, useEffect } from "react";

const ControlPanel = ({ selectedComponent, onUpdate, onDelete }) => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (selectedComponent) {
      setStyles(selectedComponent.styles || {});
    }
  }, [selectedComponent]);

  if (!selectedComponent)
    return (
      <div className="control-panel">
        <h3>Select an element to edit</h3>
      </div>
    );

  const predefinedStyles = {
    text: [
      { name: "color", label: "Text Color", type: "text" },
      { name: "fontSize", label: "Font Size (px)", type: "text" },
      { name: "fontWeight", label: "Font Weight", type: "text" },
      { name: "fontFamily", label: "Font Family", type: "text" },
      {
        name: "textAlign",
        label: "Text Align (left, center, right)",
        type: "text",
      },
      { name: "lineHeight", label: "Line Height", type: "text" },
    ],
    image: [
      { name: "width", label: "Width (px)", type: "text" },
      { name: "height", label: "Height (px)", type: "text" },
      { name: "borderRadius", label: "Border Radius (px)", type: "text" },
      { name: "boxShadow", label: "Box Shadow", type: "text" },
      { name: "margin", label: "Alignment (auto for center)", type: "text" },
    ],
    button: [
      { name: "color", label: "Text Color", type: "text" },
      { name: "backgroundColor", label: "Background Color", type: "text" },
      { name: "padding", label: "Padding", type: "text" },
      { name: "border", label: "Border", type: "text" },
      { name: "cursor", label: "Cursor Type", type: "text" },
      { name: "margin", label: "Alignment (auto for center)", type: "text" },
    ],
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    const updatedStyles = { ...styles, [name]: value };
    setStyles(updatedStyles);
    onUpdate(selectedComponent.id, updatedStyles);
  };

  return (
    <div className="control-panel">
      <h3>Edit {selectedComponent.type} Properties</h3>

      {predefinedStyles[selectedComponent.type]?.map((style) => (
        <div key={style.name} className="style-input">
          <label>{style.label}</label>
          <input
            type={style.type}
            name={style.name}
            value={styles[style.name] || ""}
            onChange={handleStyleChange}
            placeholder={`Enter ${style.label}`}
          />
        </div>
      ))}

      <button
        className="delete-btn"
        onClick={() => onDelete(selectedComponent.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ControlPanel;
