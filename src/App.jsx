import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Award,
  Heart,
  DollarSign,
  Calendar,
  Mail,
  Menu,
  X,
  Phone,
  Mail as MailIcon,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

// --- How to Add Your Local Images (IMPORTANT) ---
// 1. In your project's 'src' folder, create a folder named 'assets'.
// 2. Rename your image files to not have spaces. For example:
//    'Front Page Picture.jpg' -> 'badminton-group.jpg'
//    '444469621...n.jpg' -> 'fundraising-group.jpg'
// 3. Move these renamed image files into the 'src/assets' folder.
// 4. Uncomment the two lines below and make sure the file names match.
// import badmintonGroupPhoto from './assets/badminton-group.jpg';
// import fundraisingGroupPhoto from './assets/fundraising-group.jpg';

// --- Color Palette from Logo ---
const colors = {
  primary: "#0B2A4C", // Dark Blue
  secondary: "#36A9E1", // Sky Blue
  accent: "#F47A5C", // Orange
  accentDark: "#E85A71", // Pink/Red
  light: "#FFFFFF",
  text: "#333333",
  background: "#F9FAFB",
};

// --- CONTENT & CONFIGURATION ---
const LOGO_URL = "/Indoor Badminton Group logo .png"; // Using the logo you provided

// --- Navigation Links for Multi-Page Setup ---
const navLinks = [
  { title: "Home", id: "home", icon: Home },
  { title: "About Us", id: "about", icon: Users },
  { title: "Badminton", id: "badminton", icon: Award },
  { title: "Community Service", id: "community", icon: Heart },
  { title: "Sponsors", id: "sponsors", icon: DollarSign },
  { title: "Upcoming Events", id: "events", icon: Calendar },
  { title: "Contact", id: "contact", icon: Mail },
];

// --- Page-Specific Content ---

const introContent = {
  title: "Welcome to IBG DFW",
  text: "IBG DFW (Indoor Badminton Group – Dallas-Fort Worth) is a community-based nonprofit organization comprised mostly of alumni from the University of Texas at Dallas (UT Dallas). While our organization started with sports and recreation, particularly badminton, at present, our mission extends far beyond that. We are actively involved in charitable initiatives and community service projects across DFW area. We are striving to excel as a non-profit organization, and we are committed to making a positive impact in our community by giving back.",
};

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
  images: [
    "/about.jpg",
    // "https://placehold.co/400x300/36A9E1/FFFFFF?text=Team+Gathering",
    // "https://placehold.co/400x300/F47A5C/FFFFFF?text=Community+Event",
  ],
};

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
  images: ["/bad1.jpg", "/bad2.jpg", "/bad3.jpg", "/bad4.jpg"],
};

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
      image: "/com1.jpg",
    },
    {
      title: "Canyon Creek Wetlands Restoration",
      description:
        "IBG DFW has also committed to supporting the Canyon Creek Wetlands and Wildscape Ecosystem Restoration Project in Richardson, Texas. The property is approximately 30 acres of Black Land prairie that have been impacted by aggressive plants such as scabiosa which are invasive to the native wildlife. The goal of this project is to remove invasive species and preserve/enhance a wildscape ecosystem of native plants and animals that the community enjoys; IBG members volunteer on third Saturdays of every month to enrich nature and the community. The members are working closely with the city of Richardson on this project.",
      image: "/com11.jpg",
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
      image: "/com3.jpg",
    },
  ],
  images: [
    "/com4.jpg",
    "/com5.jpg",
    "/com6.jpg",
    "/com7.jpg",
    "/com8.jpg",
    "/com9.jpg",
    "/com10.jpg",
    "/com11.jpg",
    "/com1.jpg",
    "/com3.jpg",
  ],
};

const sponsorsContent = {
  title: "Our Valued Sponsors",
  text: "Within a short span of time, IBG DFW has been able to establish its name among the sponsors. The biggest sponsors are the members of the organization. Because of the member support, the organization can arrange various types of social, community drive and cultural events.\n\nAdditionally, the sponsorship has extended beyond the members. There are over 50 outside donors for the organization. The donors range from individuals to families to small businesses to corporations. Additionally, some of these sponsors are out of state including Washington, Oregon, New Jersey, Wisconsin, Indiana, California and Virginia.",
  logos: [
    {
      name: "Sponsor Logo 1",
      url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+1",
    },
    {
      name: "Sponsor Logo 2",
      url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+2",
    },
    {
      name: "Sponsor Logo 3",
      url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+3",
    },
    {
      name: "Sponsor Logo 4",
      url: "https://placehold.co/200x100/e0e0e0/333333?text=Sponsor+Logo+4",
    },
  ],
  images: [
    "/sp1.jpg",
    "/sp2.jpg",
    "/sp3.jpg",
    "/sp4.jpg",
    "/sp5.jpeg",
    "/sp6.jpeg",
    "/sp7.jpeg",
    "/sp8.jpeg",
    "/sp9.jpg",
    "/sp10.jpeg",
    "/sp11.jpg",
    "/sp12.png",
    "/sp13.jpg",
    "/sp14.jpg",
    "/sp15.jpg",
  ],
};

const eventsContent = {
  title: "Upcoming Events",
  text: "Stay updated with our latest events, from tournaments to community service days. We'd love for you to join us!",
  events: [
    {
      title: "Luncheon for the South Dallas Community",
      date: "July 12, 2025",
      description:
        "Join us in providing a warm meal and support for our neighbors in South Dallas. A great opportunity to serve and connect.",
      image: "/com3.jpg",
    },
    {
      title: "Gala Dinner",
      date: "August 9, 2025",
      description:
        "An evening of celebration and fundraising to support our ongoing community projects. Formal attire requested.",
      image: "/ev1.jpg",
    },
    {
      title: "Annual Tournament with Opening Ceremony",
      date: "November 21 – November 22, 2025",
      description:
        "Our flagship badminton tournament is back! Two days of intense competition, community spirit, and fun for the whole family.",
      image: "/ev2.jpg",
    },
  ],
  images: [
    "/front.jpg",
    "/ev1.jpg",
    "/ev2.jpg",
    "/ev1.jpeg",
    "/ev2.jpeg",
    "/ev3.jpeg",
    "/ev4.jpeg",
    "/ev5.jpeg",
    "/about.jpg",
  ],
};

const contactContent = {
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

// --- Reusable Components ---

const PageWrapper = ({ children, className = "" }) => (
  <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 mt-20 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl md:text-4xl font-bold text-center mb-12"
    style={{ color: colors.primary }}
  >
    {children}
  </h2>
);

const ImageGallery = ({ images, columns = 5 }) => {
  const gridCols = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
        gridCols[columns] || "lg:grid-cols-5"
      } gap-6 lg:gap-8`}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="rounded-lg shadow-lg object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
};

const SocialIcon = ({ name }) => {
  const iconProps = {
    className: "h-8 w-8",
    strokeWidth: 2,
  };
  switch (name) {
    case "Facebook":
      return <Facebook {...iconProps} />;
    case "Instagram":
      return <Instagram {...iconProps} />;
    case "X":
      return <Twitter {...iconProps} />;
    default:
      return null;
  }
};

// --- Page Components ---

const HomePage = () => (
  <PageWrapper>
    <div className="text-center">
      <img
        src="/Indoor Badminton Group logo .png"
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
        src="/Front Page Picture.jpg"
        alt="IBG DFW badminton group"
        className="rounded-xl shadow-2xl w-full max-w-4xl h-auto object-cover"
      />
    </div>
  </PageWrapper>
);

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
      <ImageGallery images={sponsorsContent.images} />
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

const EventsPage = () => (
  <PageWrapper>
    <SectionTitle>{eventsContent.title}</SectionTitle>
    <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-16">
      {eventsContent.text}
    </p>
    <div className="max-w-4xl mx-auto space-y-12">
      {eventsContent.events.map((event, index) => (
        <div
          key={index}
          className="md:flex gap-8 items-center bg-white p-6 rounded-lg shadow-lg"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full md:w-1/3 h-64 object-cover rounded-md mb-4 md:mb-0"
          />
          <div className="md:w-2/3">
            <h3
              className="text-2xl font-bold"
              style={{ color: colors.primary }}
            >
              {event.title}
            </h3>
            <p className="font-semibold mt-1" style={{ color: colors.accent }}>
              {event.date}
            </p>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-24">
      <h3
        className="text-2xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Event Gallery
      </h3>
      <ImageGallery images={eventsContent.images} columns={3} />
    </div>
  </PageWrapper>
);

const ContactPage = () => (
  <PageWrapper>
    <SectionTitle>{contactContent.title}</SectionTitle>
    <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12">
      {contactContent.text}
    </p>

    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        General Inquiries
      </h3>
      <a
        href={`mailto:${contactContent.generalEmail}`}
        className="inline-flex items-center gap-2 text-xl font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-600"
        style={{ backgroundColor: colors.accent }}
      >
        <MailIcon size={20} />
        <span>{contactContent.generalEmail}</span>
      </a>
    </div>

    <div className="max-w-4xl mx-auto">
      <h3
        className="text-2xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Points of Contact
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 text-center">
        {contactContent.contacts.map((name, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold" style={{ color: colors.primary }}>
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        Follow Us
      </h3>
      <div className="mt-8 flex justify-center space-x-6">
        {contactContent.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="sr-only">{social.name}</span>
            <SocialIcon name={social.name} />
          </a>
        ))}
      </div>
    </div>
  </PageWrapper>
);

// --- Header Component ---

const Header = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    navigateTo(pageId);
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center space-x-2"
            >
              <img className="h-16 w-auto" src={LOGO_URL} alt="IBG DFW Logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === link.id
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  }`}
                  style={{
                    backgroundColor:
                      currentPage === link.id ? colors.accent : "transparent",
                    "--hover-bg": colors.accent,
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== link.id)
                      e.currentTarget.style.backgroundColor = colors.accent;
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== link.id)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// --- Main Application Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "badminton":
        return <BadmintonPage />;
      case "community":
        return <CommunityPage />;
      case "sponsors":
        return <SponsorsPage />;
      case "events":
        return <EventsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      <Header currentPage={currentPage} navigateTo={setCurrentPage} />

      <main>{renderPage()}</main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IBG DFW. All Rights Reserved.</p>
          <p className="text-sm mt-1">
            A Community-Based Nonprofit Organization
          </p>
        </div>
      </footer>
    </div>
  );
}
