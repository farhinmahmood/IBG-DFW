import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import bad1 from "../assets/bad1.jpg";
import bad2 from "../assets/bad2.jpg";
import bad3 from "../assets/bad3.jpg";
import bad4 from "../assets/bad4.jpg";
import { colors } from "../colors";

const badmintonContent = {
  title: "The Heart of the Game",
  mainText:
    "IBG DFW members meet every Friday evening at Allen Mosque to play the Badminton Sports. There are more than 50 active badminton players who regularly participate and play Badminton. Additionally, the group organizes an Annual Tournament every year for the members and their families as well as the community members to celebrate the spirit of Badminton sports. More than 150 people usually attend this event.",
  joiningInfo: {
    title: "Join Our Badminton Group",
    text: "IBG DFW is always looking for new members to join the Badminton group. The monthly fee to join the group is $15. It covers the court rental fees and shuttle fees. The group includes all types of players ranging from professional to amateur. Coaching is also available upon request.",
    donationText:
      "A portion of the membership fee also goes towards the Allen Mosque donation.",
  },
  workshopInfo: {
    title: "Summer Badminton Workshop",
    text: "IBG DFW members organize badminton workshops for children 7 years or older every summer. The capacity of this workshop is up to 20 members. The workshop is led by experienced coaches and the children have a great time learning about Badminton as well as community service.",
  },
  images: [bad1, bad2, bad3, bad4],
};

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
