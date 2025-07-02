import React from "react";

const ImageGallery = ({ images, columns = 5, imageClassName = "h-64" }) => {
  const gridCols = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
        gridCols[columns] || "lg:grid-cols-5"
      } gap-6 lg:gap-8`}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          className={`rounded-lg shadow-lg object-cover w-full hover:scale-105 transition-transform duration-300 ${imageClassName}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
