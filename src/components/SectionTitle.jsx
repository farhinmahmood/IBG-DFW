import React from "react";
import { colors } from "../colors";

const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl md:text-4xl font-bold text-center mb-12"
    style={{ color: colors.primary }}
  >
    {children}
  </h2>
);

export default SectionTitle;
