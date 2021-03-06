import React from "react";

const Previews = ({ photos, handleOpen }) => {
  return (
    <div className="gallery-preview">
      {photos &&
        photos.map((image, i) => (
          <div
            className="gallery-preview-image"
            onClick={() => handleOpen()}
            key={i}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        ))}
    </div>
  );
};

export default Previews;
