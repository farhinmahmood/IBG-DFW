import React from "react";
import PageWrapper from "../components/PageWrapper";
import logo from "../assets/IndoorBadmintonGroupLogo.png";
import homePhoto1 from "../assets/FrontPagePicture.png";
import { colors } from "../colors";

const LOGO_URL = logo;

const introContent = {
  title: "Welcome to IBG DFW",
  text: "IBG DFW (Indoor Badminton Group – Dallas-Fort Worth) is a community-based nonprofit organization comprised mostly of alumni from the University of Texas at Dallas (UT Dallas). While our organization started with sports and recreation, particularly badminton, at present, our mission extends far beyond that. We are actively involved in charitable initiatives and community service projects across DFW area. We are striving to excel as a non-profit organization, and we are committed to making a positive impact in our community by giving back.",
  photo1: homePhoto1,
};

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
        src={introContent.photo1}
        alt="IBG DFW badminton group"
        className="rounded-xl shadow-2xl w-full max-w-4xl h-auto object-cover"
      />
    </div>
  </PageWrapper>
);

export default HomePage;
