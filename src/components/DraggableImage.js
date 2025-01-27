import React, { useState } from "react";

const DraggableImage = ({ style, onClick }) => {
  const [src, setSrc] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className="image-component" style={style} onClick={onClick}>
      {src ? (
        <img src={src} alt="Uploaded" width="100%" />
      ) : (
        <input type="file" onChange={handleImageUpload} />
      )}
    </div>
  );
};

export default DraggableImage;
