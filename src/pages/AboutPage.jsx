import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import aboutPhoto from "../assets/about.jpg";
import { colors } from "../colors";

const aboutContent = {
  title: "About IBG DFW",
  intro:
    "IBG DFW is a community based non-profit organization that was established in December 2024. There are currently over 100 members who are part of this organization. The group engages in sports as well as community service in the DFW region.",
  mission: {
    title: "Our Mission",
    text: "The mission of the IBG DFW is to promote fitness, an active lifestyle, and health while fostering camaraderie among members through the sport of badminton. Our goal is to create a welcoming and inclusive environment where players of all skill levels can enjoy the game, improve their abilities, and participate in regular practice sessions, tournaments, and sports events. \n\nBeyond the game, IBG is an inclusive betterment group that is committed to community engagement by involving family members and fostering equitable opportunities. We aim to support underserved communities and promote sustainable development by addressing social, economic, and environmental challenges both in the Dallas Fort Worth area in the state of Texas as well as in Bangladesh. \n\nThrough collaboration, advocacy, and innovative programs, IBG strives to create pathways for individuals to thrive and contribute to a better, more inclusive future for all.",
  },
  history: {
    title: "Our History",
    points: [
      "IBG DFW started as an informal sports gathering organized by a group of friends in the year 2020 when the COVID pandemic happened.",
      "The group started to grow over time and many people from the community were interested to join the group.",
      "The group started to also involve the family members in various types of events including fundraising, cultural and sports activities. The children of the members participated and volunteered in these events.",
      "The group engaged in various types of community service activities since 2023 including donation to flood victims, cloth drives, food drives and other activities.",
      "The group decided to formally recognize the community service through the formation of the non-profit organization in December 2024.",
    ],
  },
  images: [aboutPhoto],
};

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
