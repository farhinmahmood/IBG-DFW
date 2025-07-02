import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";
import { eventsContent, colors } from "../data";

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
