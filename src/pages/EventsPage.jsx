import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import homePhoto2 from "../assets/front.jpg";
import aboutPhoto from "../assets/about.jpg";
import com3 from "../assets/com3.jpg";
import ev1 from "../assets/ev1.jpg";
import ev2 from "../assets/ev2.jpg";
import ev1_jpeg from "../assets/ev1.jpeg";
import ev2_jpeg from "../assets/ev2.jpeg";
import ev3_jpeg from "../assets/ev3.jpeg";
import ev4_jpeg from "../assets/ev4.jpeg";
import ev5_jpeg from "../assets/ev5.jpeg";
import { colors } from "../colors";

const eventsContent = {
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

export default EventsPage;
