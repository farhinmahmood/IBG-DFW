import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { aboutContent, colors } from "../data";

const AboutPage = () => (
  <PageWrapper>
    <SectionTitle>{aboutContent.title}</SectionTitle>
    <div className="mb-16 flex justify-center">
      <img
        src={aboutContent.images[0]}
        alt="About IBG DFW"
        className="rounded-xl shadow-2xl w-full max-w-3xl h-auto object-cover"
      />
    </div>
    <p className="text-center max-w-4xl mx-auto text-lg text-gray-600 mb-16">
      {aboutContent.intro}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="bg-white p-8 rounded-lg shadow-lg h-full">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {aboutContent.mission.title}
        </h3>
        <p className="text-gray-600 whitespace-pre-line leading-relaxed">
          {aboutContent.mission.text}
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg h-full">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          {aboutContent.history.title}
        </h3>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          {aboutContent.history.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </PageWrapper>
);

export default AboutPage;
