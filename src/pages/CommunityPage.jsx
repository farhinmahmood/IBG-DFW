import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import com1 from "../assets/comser/com1.jpg";
import com3 from "../assets/comser/com3.jpg";
import com4 from "../assets/comser/com4.jpg";
import com5 from "../assets/comser/com5.jpg";
import com6 from "../assets/comser/com6.jpg";
import com7 from "../assets/comser/com7.jpg";
import com8 from "../assets/comser/com8.jpg";
import com9 from "../assets/comser/com9.jpg";
import com10 from "../assets/comser/com10.jpg";
import com11 from "../assets/comser/com11.jpg";
import { colors } from "../colors";

const communityContent = {
  title: "Serving Our Community",
  projects: [
    {
      title: "Monthly Food Drive",
      description:
        "IBG DFW has committed to support the underprivileged homeless communities and refugees in South Dallas. Members of IBG DFW visited South Dallas and decided to assist these communities as social service. The group organizes a food drive for this community on the first Saturday of every month. The objective of this food drive is to cater to 100 homeless people and refugees in the area. The preparation for the food drive starts the Friday evening before, where members and their families, including the children, participate and prepare the packages to be delivered the next morning by IBG DFW members.",
      packages: [
        {
          name: "Hot Meal Package",
          details:
            "This includes a grilled chicken Sandwich and water bottle for each individual. This sandwich package is prepared by IndoPak Supermarket which is a grocery & cafe chain in DFW area.",
        },
        {
          name: "Dry Food Package",
          details:
            "This includes dry food items purchased from Sam’s Club. Some of the typical items included in this package are cookies, chips, bananas, muffins, sugar, flour, etc.",
        },
      ],
      image: com1,
    },
    {
      title: "Canyon Creek Wetlands Restoration",
      description:
        "IBG DFW has also committed to supporting the Canyon Creek Wetlands and Wildscape Ecosystem Restoration Project in Richardson, Texas. The property is approximately 30 acres of Black Land prairie that have been impacted by aggressive plants such as scabiosa which are invasive to the native wildlife. The goal of this project is to remove invasive species and preserve/enhance a wildscape ecosystem of native plants and animals that the community enjoys; IBG members volunteer on third Saturdays of every month to enrich nature and the community. The members are working closely with the city of Richardson on this project.",
      image: com11,
    },
    {
      title: "Other Projects & Collaborations",
      description:
        "In addition to our flagship projects, we actively seek opportunities to collaborate with other organizations and support students at our alma mater, The University of Texas at Dallas.",
      collaborations: [
        "Participated in a canned food drive with the Office of Alumni Relations to help raise canned food for the current students and UTD community.",
        "Worked with the Basic Needs Resource Center department at the University of Texas at Dallas.",
        "Organized a big clothing drive among its members and donated these items to the Basic Needs Resource Center to help current students in need.",
      ],
      image: com3,
    },
  ],
  images: [com4, com5, com6, com7, com8, com9, com10, com11, com1, com3],
};

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
