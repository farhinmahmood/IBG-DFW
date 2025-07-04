import React from "react";
import { Facebook, Linkedin } from "lucide-react";

const SocialIcon = ({ name }) => {
  const iconProps = {
    className: "h-8 w-8",
    strokeWidth: 2,
  };
  switch (name) {
    case "Facebook":
      return <Facebook {...iconProps} />;
    case "Linkedin":
      return <Linkedin {...iconProps} />;
    default:
      return null;
  }
};

export default SocialIcon;
