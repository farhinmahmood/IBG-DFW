import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import { badmintonContent, colors } from "../data";

const BadmintonPage = () => (
  <PageWrapper className="bg-white">
    <SectionTitle>{badmintonContent.title}</SectionTitle>
    <p className="text-center max-w-4xl mx-auto text-lg text-gray-600 mb-16">
      {badmintonContent.mainText}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-16">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {badmintonContent.joiningInfo.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {badmintonContent.joiningInfo.text}
        </p>
        <p className="text-gray-700 font-semibold italic mt-auto">
          {badmintonContent.joiningInfo.donationText}
        </p>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {badmintonContent.workshopInfo.title}
        </h3>
        <p className="text-gray-600 flex-grow">
          {badmintonContent.workshopInfo.text}
        </p>
      </div>
    </div>
    <h3
      className="text-2xl font-bold text-center mb-8"
      style={{ color: colors.primary }}
    >
      Gallery
    </h3>
    <ImageGallery images={badmintonContent.images} columns={4} />
  </PageWrapper>
);

export default BadmintonPage;
