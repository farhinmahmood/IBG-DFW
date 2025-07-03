import React from "react";
import PageWrapper from "../components/PageWrapper";
import { introContent, colors, LOGO_URL } from "../data";

const HomePage = () => (
  <PageWrapper>
    <div className="text-center">
      <img
        src={LOGO_URL}
        alt="IBG DFW Logo"
        className="mx-auto h-32 sm:h-40 md:h-48 w-auto mb-8"
      />
      <h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        style={{ color: colors.primary }}
      >
        {introContent.title}
      </h1>
      <p className="max-w-4xl mx-auto text-lg text-gray-600 mb-12">
        {introContent.text}
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src="./src/assets/FrontPagePicture.jpg"
        alt="IBG DFW badminton group"
        className="rounded-xl shadow-2xl w-full max-w-4xl h-auto object-cover"
      />
    </div>
  </PageWrapper>
);

export default HomePage;
