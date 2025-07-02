import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import { communityContent, colors } from "../data";

const CommunityPage = () => (
  <PageWrapper>
    <SectionTitle>{communityContent.title}</SectionTitle>
    <div className="space-y-24">
      {communityContent.projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-xl"
        >
          <div
            className={`order-2 ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            {project.packages && (
              <div className="space-y-4 mt-6 border-t pt-4">
                {project.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex}>
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: colors.accentDark }}
                    >
                      {pkg.name}
                    </h4>
                    <p className="text-gray-600">{pkg.details}</p>
                  </div>
                ))}
              </div>
            )}
            {project.collaborations && (
              <ul className="list-disc list-inside space-y-3 mt-4 text-gray-600">
                {project.collaborations.map((collab, collabIndex) => (
                  <li key={collabIndex}>{collab}</li>
                ))}
              </ul>
            )}
          </div>
          <div
            className={`order-1 ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-24">
      <h3
        className="text-2xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Our Community in Action
      </h3>
      <ImageGallery images={communityContent.images} columns={5} />
    </div>
  </PageWrapper>
);

export default CommunityPage;
