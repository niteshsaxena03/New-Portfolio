import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isMobileScreen, setIsMobileScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 480 : false
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobileScreen(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: ["ReactJS", "React Native", "Tailwind CSS", "Redux", "JavaScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      category: "Other",
      items: ["Git", "REST APIs", "Algorithms", "Data Structures"],
    },
  ];

  // Animation keyframes
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes glowBorder {
      0%, 100% { box-shadow: 0 0 15px rgba(0, 195, 255, 0.5); }
      50% { box-shadow: 0 0 25px rgba(0, 255, 136, 0.7); }
    }
  `;

  const skillColors = {
    Frontend: {
      background: "linear-gradient(135deg, #1a2d4e 0%, #0d1f2f 100%)",
      accent: "linear-gradient(90deg, #00c2ff, #0055ff)",
      glow: "rgba(0, 195, 255, 0.6)",
    },
    Backend: {
      background: "linear-gradient(135deg, #1c2f1c 0%, #0d1f1a 100%)",
      accent: "linear-gradient(90deg, #00ff8a, #00c275)",
      glow: "rgba(0, 255, 136, 0.6)",
    },
    Other: {
      background: "linear-gradient(135deg, #2d1c2f 0%, #1f0d1a 100%)",
      accent: "linear-gradient(90deg, #c300ff, #ff00aa)",
      glow: "rgba(220, 0, 255, 0.6)",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060c17 0%, #0a1121 100%)",
        padding: isMobileScreen
          ? "20px 12px"
          : screenWidth < 768
            ? "30px 20px"
            : "50px 40px",
        color: "white",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{animations}</style>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          width: isMobileScreen ? "150px" : "300px",
          height: isMobileScreen ? "150px" : "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 136, 255, 0.05) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: isMobileScreen ? "250px" : "400px",
          height: isMobileScreen ? "250px" : "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%)",
          bottom: "5%",
          left: "10%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobileScreen ? "25px" : "40px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Page Title */}
        <h1
          style={{
            fontSize: isMobileScreen
              ? "28px"
              : screenWidth < 768
                ? "36px"
                : "48px",
            textAlign: "center",
            margin: isMobileScreen ? "5px 0 10px" : "10px 0 20px",
            background: "linear-gradient(45deg, #00c2ff, #00ff8a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          About Me
        </h1>

        {/* Education Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "100%" : "80%",
            padding: isMobileScreen ? "25px 15px" : "35px",
            background:
              "linear-gradient(145deg, rgba(13, 24, 36, 0.8) 0%, rgba(9, 15, 26, 0.9) 100%)",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            textAlign: "left",
            transition: "all 0.8s ease-in-out",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(0, 195, 255, 0.1)",
            animation: isVisible ? "glowBorder 4s infinite" : "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
              opacity: 0.8,
            }}
          />

          <h3
            style={{
              fontSize: isMobileScreen ? "24px" : "32px",
              marginBottom: isMobileScreen ? "15px" : "20px",
              background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
              letterSpacing: isMobileScreen ? "1px" : "2px",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            Education
          </h3>

          <p
            style={{
              fontSize: isMobileScreen
                ? "15px"
                : screenWidth < 768
                  ? "16px"
                  : "18px",
              color: "#e0e0e0",
              lineHeight: "1.8",
              fontWeight: "400",
              letterSpacing: "0.5px",
              marginBottom: "20px",
              transition: "all 0.3s ease",
            }}
          >
            I am currently pursuing a B.Tech in Computer Science at Sharda
            University, with a CGPA of{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "600",
              }}
            >
              9.07
            </span>
            . I will be graduating in{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "600",
              }}
            >
              2026
            </span>
            , specializing in full-stack web development and mobile app
            development. My focus lies in creating responsive, user-friendly
            applications using modern technologies and best practices.
          </p>
        </div>

        {/* Skills Section */}
        <div
          style={{
            width: screenWidth < 768 ? "100%" : "80%",
            transition: "all 0.5s ease-in-out",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transitionDelay: "0.2s",
          }}
        >
          <h3
            style={{
              fontSize: isMobileScreen ? "24px" : "32px",
              marginBottom: isMobileScreen ? "15px" : "25px",
              background: "linear-gradient(90deg, #00ff8a, #00c2ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
              letterSpacing: isMobileScreen ? "1px" : "2px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Skills
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobileScreen
                ? "1fr"
                : screenWidth < 768
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
              gap: isMobileScreen ? "15px" : "20px",
              width: "100%",
            }}
          >
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                style={{
                  background: skillColors[skillGroup.category].background,
                  borderRadius: "16px",
                  padding: isMobileScreen ? "20px 15px" : "25px",
                  boxShadow: `0 10px 25px rgba(0, 0, 0, 0.3)`,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.5s ease",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${0.3 + index * 0.1}s`,
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = `0 15px 30px ${skillColors[skillGroup.category].glow}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: skillColors[skillGroup.category].accent,
                  }}
                />

                <h4
                  style={{
                    fontSize: isMobileScreen ? "18px" : "22px",
                    marginBottom: isMobileScreen ? "12px" : "15px",
                    background: skillColors[skillGroup.category].accent,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {skillGroup.category}
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: isMobileScreen ? "8px" : "10px",
                    marginTop: isMobileScreen ? "10px" : "15px",
                  }}
                >
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: isMobileScreen ? "6px 12px" : "8px 16px",
                        borderRadius: "30px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: isMobileScreen ? "12px" : "14px",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Box (Same content, new style) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "100%" : "80%",
            padding: isMobileScreen ? "25px 15px" : "35px",
            background:
              "linear-gradient(145deg, rgba(13, 24, 36, 0.8) 0%, rgba(9, 15, 26, 0.9) 100%)",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            textAlign: "left",
            transition: "all 0.5s ease-in-out",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255, 0, 100, 0.1)",
            transitionDelay: "0.4s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #ff0062, #8a00ff)",
              opacity: 0.8,
            }}
          />

          <h3
            style={{
              fontSize: isMobileScreen ? "24px" : "32px",
              marginBottom: isMobileScreen ? "15px" : "20px",
              background: "linear-gradient(90deg, #ff0062, #8a00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
              letterSpacing: isMobileScreen ? "1px" : "2px",
              textTransform: "uppercase",
            }}
          >
            Experience
          </h3>

          <p
            style={{
              fontSize: isMobileScreen
                ? "15px"
                : screenWidth < 768
                  ? "16px"
                  : "18px",
              color: "#e0e0e0",
              lineHeight: "1.8",
              fontWeight: "400",
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            As a developer, I have contributed to various projects, enhancing my
            skills in both frontend and backend development. I have experience
            in creating responsive web applications, designing user interfaces,
            and implementing complex functionalities. My project experience
            includes building e-commerce platforms, social media applications,
            and educational tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
