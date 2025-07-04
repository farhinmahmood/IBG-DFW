import React from "react";

const SponsorImageGallery = ({
  images,
  columns = 3,
  imageClassName = "h-64",
}) => {
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
      {images.map((item, index) => (
        <div
          key={index}
          //   className="rounded-lg shadow-lg"
          className={`rounded-lg shadow-lg ${imageClassName}`}
        >
          <img
            src={item}
            alt={`Sponsor image ${index + 1}`}
            className="object-contain w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default SponsorImageGallery;
