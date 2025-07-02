import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BadmintonPage from "./pages/BadmintonPage";
import CommunityPage from "./pages/CommunityPage";
import SponsorsPage from "./pages/SponsorsPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import { colors } from "./data";

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
      <Footer />
    </div>
  );
}
