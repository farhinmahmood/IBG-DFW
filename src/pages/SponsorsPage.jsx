import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/sp3.jpg";
import sp4 from "../assets/sp4.jpg";
import sp5 from "../assets/sp5.jpeg";
import sp6 from "../assets/sp6.jpeg";
import sp7 from "../assets/sp7.jpeg";
import sp8 from "../assets/sp8.jpeg";
import sp9 from "../assets/sp9.jpg";
import sp10 from "../assets/sp10.jpeg";
import sp11 from "../assets/sp11.jpg";
import sp12 from "../assets/sp12.png";
import sp13 from "../assets/sp13.jpg";
import sp14 from "../assets/sp14.jpg";
import sp15 from "../assets/sp15.jpg";
import { colors } from "../colors";

const sponsorsContent = {
  title: "Our Valued Sponsors",
  text: "Within a short span of time, IBG DFW has been able to establish its name among the sponsors. The biggest sponsors are the members of the organization. Because of the member support, the organization can arrange various types of social, community drive and cultural events.\n\nAdditionally, the sponsorship has extended beyond the members. There are over 50 outside donors for the organization. The donors range from individuals to families to small businesses to corporations. Additionally, some of these sponsors are out of state including Washington, Oregon, New Jersey, Wisconsin, Indiana, California and Virginia.",
  images: [
    sp1,
    sp2,
    sp3,
    sp4,
    sp5,
    sp6,
    sp7,
    sp8,
    sp9,
    sp10,
    sp11,
    sp12,
    sp13,
    sp14,
    sp15,
  ],
};

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
  </PageWrapper>
);
export default SponsorsPage;
