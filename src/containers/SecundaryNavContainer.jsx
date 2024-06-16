/* eslint-disable react/prop-types */
import { useState } from "react";
import SecundaryNav from "../components/SecundaryNav";

function SecundaryNavContainer({setQuery}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SecundaryNav
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      setQuery={setQuery}
    />
  );
}

export default SecundaryNavContainer;
