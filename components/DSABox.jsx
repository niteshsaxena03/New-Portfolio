import {
  FaExternalLinkAlt,
  FaTrophy,
  FaCode,
  FaLaptopCode,
  FaImage,
} from "react-icons/fa";
import { useState } from "react";

const DSABox = ({ dsa, isMobileScreen, isSmallScreen, animationDelay = 0 }) => {
  const [imageError, setImageError] = useState(false);

  // Select the appropriate icon based on the title
  const getIcon = (title) => {
    const size = isMobileScreen ? 16 : isSmallScreen ? 18 : 20;
    if (title.includes("ICPC")) return <FaTrophy color="#ff9900" size={size} />;
    if (title.includes("Codeforces"))
      return <FaCode color="#ff3366" size={size} />;
    if (title.includes("LeetCode"))
      return <FaLaptopCode color="#00ff8a" size={size} />;
    return null;
  };

  // Fallback content if image fails to load
  const renderImageContent = () => {
    if (imageError) {
      return (
        <div
          style={{
            width: isMobileScreen ? "70px" : isSmallScreen ? "90px" : "120px",
            height: isMobileScreen ? "70px" : isSmallScreen ? "90px" : "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
          }}
        >
          <FaImage
            size={isMobileScreen ? 24 : isSmallScreen ? 32 : 48}
            color="rgba(255,255,255,0.5)"
          />
        </div>
      );
    }

    return (
      <img
        src={dsa.image}
        alt={dsa.title}
        onError={() => setImageError(true)}
        style={{
          width: isMobileScreen ? "70px" : isSmallScreen ? "90px" : "120px",
          height: isMobileScreen ? "70px" : isSmallScreen ? "90px" : "120px",
          objectFit: "contain",
          transition: "all 0.5s ease",
          filter: "drop-shadow(0 5px 15px rgba(220, 0, 255, 0.3))",
        }}
        onMouseEnter={(e) => {
          if (!isMobileScreen) {
            e.target.style.transform = "scale(1.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobileScreen) {
            e.target.style.transform = "scale(1)";
          }
        }}
      />
    );
  };

  // Animation styles
  const animationStyle = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobileScreen || isSmallScreen ? "column" : "row",
        alignItems: "center",
        background:
          "linear-gradient(145deg, rgba(16, 24, 36, 0.8) 0%, rgba(9, 15, 26, 0.9) 100%)",
        padding: isMobileScreen ? "15px" : isSmallScreen ? "20px" : "30px",
        borderRadius: isMobileScreen ? "12px" : "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        width: "100%",
        gap: isMobileScreen ? "15px" : isSmallScreen ? "20px" : "40px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(220, 0, 255, 0.1)",
        transition: "all 0.3s ease",
        marginBottom: isMobileScreen ? "15px" : isSmallScreen ? "20px" : "30px",
        height: "100%",
        opacity: 0,
        animation: `fadeInUp 0.5s ease-out forwards ${animationDelay}s`,
      }}
      onMouseEnter={(e) => {
        if (!isMobileScreen && !isSmallScreen) {
          e.target.style.transform = "translateY(-5px)";
          e.target.style.boxShadow = "0 15px 40px rgba(220, 0, 255, 0.2)";
          e.target.style.borderColor = "rgba(220, 0, 255, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobileScreen && !isSmallScreen) {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
          e.target.style.borderColor = "rgba(220, 0, 255, 0.1)";
        }
      }}
    >
      <style>{animationStyle}</style>

      {/* Top accent border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: isMobileScreen ? "2px" : "3px",
          background: "linear-gradient(90deg, #c300ff, #ff0062)",
          opacity: 0.8,
        }}
      />

      {/* Image Section */}
      <div
        style={{
          width: isMobileScreen || isSmallScreen ? "100%" : "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isMobileScreen ? "5px" : "0",
        }}
      >
        <div
          style={{
            borderRadius: isMobileScreen ? "10px" : "12px",
            overflow: "hidden",
            padding: isMobileScreen ? "10px" : isSmallScreen ? "15px" : "20px",
            background: "rgba(0, 0, 0, 0.2)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            position: "relative",
            transition: "all 0.3s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderImageContent()}
        </div>
      </div>

      {/* Text Section */}
      <div
        style={{
          width: isMobileScreen || isSmallScreen ? "100%" : "75%",
          padding: isMobileScreen ? "5px 0" : isSmallScreen ? "8px 0" : "0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobileScreen ? "7px" : "10px",
            marginBottom: isMobileScreen
              ? "7px"
              : isSmallScreen
                ? "10px"
                : "15px",
          }}
        >
          {getIcon(dsa.title)}
          <h2
            style={{
              fontSize: isMobileScreen
                ? "18px"
                : isSmallScreen
                  ? "22px"
                  : "28px",
              background: "linear-gradient(45deg, #c300ff, #ff0062)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "700",
              letterSpacing: isMobileScreen
                ? "0.3px"
                : isSmallScreen
                  ? "0.5px"
                  : "1px",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {dsa.title}
          </h2>
        </div>

        <p
          style={{
            fontSize: isMobileScreen ? "13px" : isSmallScreen ? "14px" : "16px",
            color: "#e0e0e0",
            lineHeight: isMobileScreen ? "1.5" : "1.6",
            marginBottom: isMobileScreen
              ? "12px"
              : isSmallScreen
                ? "15px"
                : "20px",
          }}
        >
          {dsa.description}
        </p>

        <a
          href={dsa.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: isMobileScreen ? "6px" : "8px",
            padding: isMobileScreen
              ? "7px 14px"
              : isSmallScreen
                ? "8px 16px"
                : "10px 18px",
            background: "linear-gradient(90deg, #c300ff, #ff0062)",
            color: "white",
            textDecoration: "none",
            borderRadius: isMobileScreen ? "6px" : "8px",
            fontSize: isMobileScreen ? "13px" : isSmallScreen ? "14px" : "15px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            border: "none",
            boxShadow: "0 4px 15px rgba(220, 0, 255, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 7px 20px rgba(220, 0, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(220, 0, 255, 0.3)";
          }}
        >
          <FaExternalLinkAlt
            size={isMobileScreen ? 11 : isSmallScreen ? 12 : 14}
          />
          See Profile
        </a>
      </div>
    </div>
  );
};

export default DSABox;
