import logo from "./assets/IndoorBadmintonGroupLogo.png";
import homePhoto1 from "./assets/FrontPagePicture.jpg";
import homePhoto2 from "./assets/front.jpg";
import aboutPhoto from "./assets/about.jpg";
import bad1 from "./assets/bad1.jpg";
import bad2 from "./assets/bad2.jpg";
import bad3 from "./assets/bad3.jpg";
import bad4 from "./assets/bad4.jpg";
import com1 from "./assets/com1.jpg";
import com2 from "./assets/com2.jpg";
import com3 from "./assets/com3.jpg";
import com4 from "./assets/com4.jpg";
import com5 from "./assets/com5.jpg";
import com6 from "./assets/com6.jpg";
import com7 from "./assets/com7.jpg";
import com8 from "./assets/com8.jpg";
import com9 from "./assets/com9.jpg";
import com10 from "./assets/com10.jpg";
import com11 from "./assets/com11.jpg";
import sp1 from "./assets/sp1.jpg";
import sp2 from "./assets/sp2.jpg";
import sp3 from "./assets/sp3.jpg";
import sp4 from "./assets/sp4.jpg";
import sp5 from "./assets/sp5.jpeg";
import sp6 from "./assets/sp6.jpeg";
import sp7 from "./assets/sp7.jpeg";
import sp8 from "./assets/sp8.jpeg";
import sp9 from "./assets/sp9.jpg";
import sp10 from "./assets/sp10.jpeg";
import sp11 from "./assets/sp11.jpg";
import sp12 from "./assets/sp12.png";
import sp13 from "./assets/sp13.jpg";
import sp14 from "./assets/sp14.jpg";
import sp15 from "./assets/sp15.jpg";
import ev1 from "./assets/ev1.jpg";
import ev2 from "./assets/ev2.jpg";
import ev1_jpeg from "./assets/ev1.jpeg";
import ev2_jpeg from "./assets/ev2.jpeg";
import ev3_jpeg from "./assets/ev3.jpeg";
import ev4_jpeg from "./assets/ev4.jpeg";
import ev5_jpeg from "./assets/ev5.jpeg";

export const colors = {
  primary: "#0B2A4C", // Dark Blue
  secondary: "#36A9E1", // Sky Blue
  accent: "#F47A5C", // Orange
  accentDark: "#E85A71", // Pink/Red
  light: "#FFFFFF",
  text: "#333333",
  background: "#F9FAFB",
};

export const LOGO_URL = logo;

export const navLinks = [
  { title: "Home", id: "home" },
  { title: "About Us", id: "about" },
  { title: "Badminton", id: "badminton" },
  { title: "Community Service", id: "community" },
  { title: "Sponsors", id: "sponsors" },
  { title: "Upcoming Events", id: "events" },
  { title: "Contact", id: "contact" },
];

export const introContent = {
  title: "Welcome to IBG DFW",
  text: "IBG DFW (Indoor Badminton Group – Dallas-Fort Worth) is a community-based nonprofit organization comprised mostly of alumni from the University of Texas at Dallas (UT Dallas). While our organization started with sports and recreation, particularly badminton, at present, our mission extends far beyond that. We are actively involved in charitable initiatives and community service projects across DFW area. We are striving to excel as a non-profit organization, and we are committed to making a positive impact in our community by giving back.",
  photo1: homePhoto1,
  photo2: homePhoto2,
};

export const aboutContent = {
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

export const badmintonContent = {
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

export const communityContent = {
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

export const sponsorsContent = {
  title: "Our Valued Sponsors",
  text: "Within a short span of time, IBG DFW has been able to establish its name among the sponsors. The biggest sponsors are the members of the organization. Because of the member support, the organization can arrange various types of social, community drive and cultural events.\n\nAdditionally, the sponsorship has extended beyond the members. There are over 50 outside donors for the organization. The donors range from individuals to families to small businesses to corporations. Additionally, some of these sponsors are out of state including Washington, Oregon, New Jersey, Wisconsin, Indiana, California and Virginia.",
  //   logos: [
  //     {
  //       name: "Sponsor Logo 1",
  //       url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+1",
  //     },
  //     {
  //       name: "Sponsor Logo 2",
  //       url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+2",
  //     },
  //     {
  //       name: "Sponsor Logo 3",
  //       url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+3",
  //     },
  //     {
  //       name: "Sponsor Logo 4",
  //       url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+4",
  //     },
  //   ],
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

export const eventsContent = {
  title: "Upcoming Events",
  text: "Stay updated with our latest events, from tournaments to community service days. We'd love for you to join us!",
  events: [
    {
      title: "Luncheon for the South Dallas Community",
      date: "July 12, 2025",
      description:
        "Join us in providing a warm meal and support for our neighbors in South Dallas. A great opportunity to serve and connect.",
      image: com3,
    },
    {
      title: "Gala Dinner",
      date: "August 9, 2025",
      description:
        "An evening of celebration and fundraising to support our ongoing community projects. Formal attire requested.",
      image: ev1,
    },
    {
      title: "Annual Tournament with Opening Ceremony",
      date: "November 21 – November 22, 2025",
      description:
        "Our flagship badminton tournament is back! Two days of intense competition, community spirit, and fun for the whole family.",
      image: ev2,
    },
  ],
  images: [
    homePhoto2,
    ev1,
    ev2,
    ev1_jpeg,
    ev2_jpeg,
    ev3_jpeg,
    ev4_jpeg,
    ev5_jpeg,
    aboutPhoto,
  ],
};

export const contactContent = {
  title: "Get In Touch",
  text: "Have questions or want to get involved? Reach out to us via email, check with our points of contact, or follow our social media to stay connected with the IBG DFW family.",
  generalEmail: "ibgdfwcommunity@gmail.com",
  contacts: [
    "Nafis Nasim",
    "Samsuddin Faisal Mahmood",
    "Abdullah Rana",
    "Ashfaque Chowdhury",
    "Mohammad Mirwazul Islam",
    "Shah Shahriar",
  ],
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61571315613081",
    },
    { name: "Instagram", url: "https://instagram.com/your-profile-link" },
    { name: "X", url: "https://twitter.com/your-handle" },
  ],
};
