import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa"; // LinkedIn, Twitter, Github, Gmail

const CustomBox = ({ site }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose icon based on the site
  let icon;
  let iconSize = 40; // Set size for icons

  switch (site) {
    case "LinkedIn":
      icon = <FaLinkedin size={iconSize} color="white" />;
      break;
    case "Twitter":
      icon = <FaTwitter size={iconSize} color="white" />;
      break;
    case "Gmail":
      icon = <FaEnvelope size={iconSize} color="white" />;
      break;
    case "GitHub":
      icon = <FaGithub size={iconSize} color="white" />;
      break;
    default:
      icon = <FaLinkedin size={iconSize} color="white" />; // Default to LinkedIn icon
  }

  return (
    <div
      style={{
        height: isSmallScreen ? 120 : 150, // Adjust size for mobile
        width: isSmallScreen ? 300 : 500, // Adjust size for mobile
        borderRadius: "15px",
        background: "linear-gradient(135deg, #8b0000, #003366)", // Dark red to blue gradient
        border: "2px solid #f39c12", // Thin golden border
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", // Shadow for depth
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth hover effect
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
      }}
    >
      <div>{icon}</div> {/* Displaying the respective icon */}
      <span
        style={{
          fontSize: "30px", // Adjust font size for mobile
          fontWeight: "bold",
          color: "white", // White text color
          textTransform: "uppercase", // Uppercase text for emphasis
          marginTop: "10px", // Space between icon and text
        }}
      >
        {site}
      </span>
    </div>
  );
};

export default CustomBox;
