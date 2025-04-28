import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProjectBox = ({
  project,
  screenWidth,
  isMobileScreen,
  animationDelay = 0,
}) => {
  const isMobile = screenWidth < 768;
  const isSmallMobile = screenWidth < 380;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Animation styles
  const animationStyle = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        background:
          "linear-gradient(145deg, rgba(13, 24, 36, 0.8) 0%, rgba(9, 15, 26, 0.9) 100%)",
        padding: isSmallMobile
          ? "15px 12px"
          : isMobileScreen
            ? "18px 15px"
            : "30px",
        borderRadius: isMobileScreen ? "12px" : "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        width: "100%",
        gap: isSmallMobile
          ? "12px"
          : isMobileScreen
            ? "15px"
            : isMobile
              ? "20px"
              : "40px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(0, 195, 255, 0.1)",
        transition: "all 0.3s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
      onMouseEnter={(e) => {
        if (!isMobileScreen) {
          e.target.style.transform = "translateY(-5px)";
          e.target.style.boxShadow = "0 15px 40px rgba(0, 136, 255, 0.2)";
          e.target.style.borderColor = "rgba(0, 195, 255, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobileScreen) {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
          e.target.style.borderColor = "rgba(0, 195, 255, 0.1)";
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
          background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
          opacity: 0.8,
          backgroundSize: "200% 200%",
          animation: isVisible ? "shimmer 3s ease infinite" : "none",
        }}
      />

      {/* Left Side (Image) */}
      <div
        style={{
          width: isMobile ? "100%" : "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: isMobileScreen ? "10px" : "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            transition: "all 0.3s ease",
            width: isMobileScreen ? "100%" : "auto",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: isMobileScreen ? "100%" : isMobile ? "280px" : "320px",
              height: isSmallMobile
                ? "120px"
                : isMobileScreen
                  ? "140px"
                  : isMobile
                    ? "160px"
                    : "180px",
              objectFit: "cover",
              display: "block",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobileScreen) {
                e.target.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobileScreen) {
                e.target.style.transform = "scale(1)";
              }
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Right Side (Content) */}
      <div
        style={{
          width: isMobile ? "100%" : "60%",
          padding: isSmallMobile
            ? "3px 0"
            : isMobileScreen
              ? "5px 0"
              : isMobile
                ? "10px 0"
                : "0",
        }}
      >
        <h2
          style={{
            fontSize: isSmallMobile
              ? "18px"
              : isMobileScreen
                ? "20px"
                : isMobile
                  ? "24px"
                  : "28px",
            marginBottom: isSmallMobile
              ? "8px"
              : isMobileScreen
                ? "10px"
                : "15px",
            background: "linear-gradient(45deg, #00c2ff, #00ff8a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "700",
            letterSpacing: isMobileScreen ? "0.5px" : "1px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontSize: isSmallMobile ? "13px" : isMobileScreen ? "14px" : "16px",
            color: "#e0e0e0",
            lineHeight: isMobileScreen ? "1.5" : "1.6",
            marginBottom: isSmallMobile
              ? "12px"
              : isMobileScreen
                ? "15px"
                : "20px",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            padding: isSmallMobile
              ? "6px 8px"
              : isMobileScreen
                ? "8px 10px"
                : "10px 15px",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: isMobileScreen ? "8px" : "10px",
            marginBottom: isSmallMobile
              ? "12px"
              : isMobileScreen
                ? "15px"
                : "20px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <p
            style={{
              fontSize: isSmallMobile
                ? "12px"
                : isMobileScreen
                  ? "13px"
                  : "15px",
              color: "#a0b0c0",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
          >
            <span style={{ color: "#00ff8a" }}>Tech:</span> {project.techStack}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: isSmallMobile ? "6px" : isMobileScreen ? "8px" : "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: isSmallMobile ? "4px" : isMobileScreen ? "5px" : "8px",
              padding: isSmallMobile
                ? "7px 12px"
                : isMobileScreen
                  ? "8px 14px"
                  : "10px 18px",
              background: "linear-gradient(90deg, #0055ff, #00c2ff)",
              color: "white",
              textDecoration: "none",
              borderRadius: isMobileScreen ? "6px" : "8px",
              fontSize: isSmallMobile
                ? "12px"
                : isMobileScreen
                  ? "13px"
                  : "15px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              border: "none",
              boxShadow: "0 4px 15px rgba(0, 136, 255, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 7px 20px rgba(0, 136, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0, 136, 255, 0.3)";
            }}
          >
            <FaExternalLinkAlt
              size={isSmallMobile ? 11 : isMobileScreen ? 12 : 14}
            />
            View Project
          </a>

          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: isSmallMobile ? "4px" : isMobileScreen ? "5px" : "8px",
                padding: isSmallMobile
                  ? "7px 12px"
                  : isMobileScreen
                    ? "8px 14px"
                    : "10px 18px",
                background: "linear-gradient(90deg, #00c275, #00ff8a)",
                color: "white",
                textDecoration: "none",
                borderRadius: isMobileScreen ? "6px" : "8px",
                fontSize: isSmallMobile
                  ? "12px"
                  : isMobileScreen
                    ? "13px"
                    : "15px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                border: "none",
                boxShadow: "0 4px 15px rgba(0, 255, 136, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 7px 20px rgba(0, 255, 136, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 255, 136, 0.3)";
              }}
            >
              <FaPlayCircle
                size={isSmallMobile ? 11 : isMobileScreen ? 12 : 14}
              />
              Watch Demo
            </a>
          )}

          <a
            href="https://github.com/niteshsaxena03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isSmallMobile ? "34px" : isMobileScreen ? "36px" : "40px",
              height: isSmallMobile ? "34px" : isMobileScreen ? "36px" : "40px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#a0b0c0",
              textDecoration: "none",
              borderRadius: isMobileScreen ? "6px" : "8px",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.color = "#ffffff";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.05)";
              e.target.style.color = "#a0b0c0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaGithub size={isSmallMobile ? 15 : isMobileScreen ? 16 : 18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
