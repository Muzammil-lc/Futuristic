import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import ControlPanel from "./components/ControlPanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

function App() {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleUpdateComponent = (id, newStyles) => {
    setComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === id
          ? { ...comp, styles: { ...comp.styles, ...newStyles } }
          : comp
      )
    );
  };

  const handleDeleteComponent = (id) => {
    setComponents(components.filter((comp) => comp.id !== id));
    setSelectedComponent(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="sidebar">
          <Toolbar />
        </div>
        <Canvas
          components={components}
          setComponents={setComponents}
          setSelectedComponent={setSelectedComponent}
        />
        <ControlPanel
          selectedComponent={selectedComponent}
          onUpdate={handleUpdateComponent}
          onDelete={handleDeleteComponent}
        />
      </div>
    </DndProvider>
  );
}

export default App;
