import React from "react";

const ImageMain = ({ photos, handleOpen }) => {
  return (
    <div
      className="gallery-main-image"
      onClick={handleOpen}
      style={{
        backgroundImage: `url('${photos[0]}')`,
      }}
    ></div>
  );
};

export default ImageMain;
