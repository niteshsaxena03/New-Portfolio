import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        padding: "40px",
        color: "white",
        fontFamily: "'Space Grotesk', sans-serif",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1s ease-out",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Education Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "90%" : "70%",
            padding: "35px",
            background: "linear-gradient(135deg, #1a2f1a 0%, #0d1f1a 100%)",
            borderRadius: "30px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            textAlign: "left",
            transition: "all 0.5s ease-in-out",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #00ff9d, #00c3ff)",
              opacity: 0.7,
            }}
          />

          <h3
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #00ff9d, #00c3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Education
          </h3>

          <p
            style={{
              fontSize: screenWidth < 768 ? "16px" : "18px",
              color: "#e0e0e0",
              lineHeight: "2",
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
                color: "#00ff9d",
                fontWeight: "600",
              }}
            >
              9.07
            </span>
            . I will be graduating in{" "}
            <span
              style={{
                color: "#00c3ff",
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

        {/* Skills Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "90%" : "70%",
            padding: "35px",
            background: "linear-gradient(135deg, #1a1f3f 0%, #0d1a2f 100%)",
            borderRadius: "30px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            textAlign: "left",
            transition: "all 0.5s ease-in-out",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            position: "relative",
            overflow: "hidden",
            transitionDelay: "0.2s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #00c3ff, #6e00ff)",
              opacity: 0.7,
            }}
          />

          <h3
            style={{
              fontSize: "32px",
              marginBottom: "25px",
              background: "linear-gradient(90deg, #00c3ff, #6e00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Skills
          </h3>

          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              style={{
                marginBottom: "20px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.5s ease-in-out",
                transitionDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              <h4
                style={{
                  color: "#00c3ff",
                  fontSize: "20px",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {skillGroup.category}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 16px",
                      background: "rgba(0, 195, 255, 0.1)",
                      borderRadius: "20px",
                      color: "#e0e0e0",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      border: "1px solid rgba(0, 195, 255, 0.2)",
                      ":hover": {
                        background: "rgba(0, 195, 255, 0.2)",
                        transform: "translateY(-2px)",
                      },
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
    </div>
  );
};

export default AboutPage;
