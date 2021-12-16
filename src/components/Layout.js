import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import FadeIn from "react-fade-in";

export default function Layout({ children, style }) {
  return (
    <div>
      <Navbar />
      <div className={`py-20 px-5 sm:px-16 md:px-20 ${style}`}>
        <FadeIn>{children}</FadeIn>
      </div>
      <Footer />
    </div>
  );
}
