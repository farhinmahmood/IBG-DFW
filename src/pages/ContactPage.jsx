import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import SocialIcon from "../components/SocialIcon";
import { colors } from "../colors";
import { Mail as MailIcon } from "lucide-react";

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
    { name: "Linkedin", url: "https://www.linkedin.com/company/ibg-dfw/" },
  ],
};

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
        className="inline-flex items-center gap-2 text-xl font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        style={{ backgroundColor: colors.accent, color: colors.light }}
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

export default ContactPage;
