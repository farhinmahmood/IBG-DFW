import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

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

export default SocialIcon;
