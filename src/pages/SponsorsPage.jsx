import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import { sponsorsContent, colors } from "../data";

const SponsorsPage = () => (
  <PageWrapper className="bg-white">
    <SectionTitle>{sponsorsContent.title}</SectionTitle>
    <p className="text-center max-w-4xl mx-auto text-lg text-gray-600 whitespace-pre-line mb-16">
      {sponsorsContent.text}
    </p>

    <div className="mb-24">
      <h3
        className="text-2xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Sponsor Highlights
      </h3>
      <ImageGallery images={sponsorsContent.images} imageClassName="h-48" />
    </div>

    {/* <h3
      className="text-2xl font-bold text-center mb-8"
      style={{ color: colors.primary }}
    >
      Our Business & Corporate Sponsors
    </h3>
    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 lg:gap-12">
      {sponsorsContent.logos.map((sponsor) => (
        <div key={sponsor.name}>
          <img
            src={sponsor.url}
            alt={sponsor.name}
            className="h-20 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div> */}
  </PageWrapper>
);
export default SponsorsPage;
