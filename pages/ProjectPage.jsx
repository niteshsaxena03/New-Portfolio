import { useState, useEffect } from "react";
import ProjectBox from "../components/ProjectBox";

const projects = [
  {
    title: "The Drawing Board",
    description:
      "A sophisticated drawing application with vector-based shapes, freehand brushes, and text tools using ReactJS and HTML5 Canvas.",
    techStack: "ReactJS, Canvas API, RoughJS, Context API",
    image: "/images/drawing-board.png", // Correct path for Vercel deployment
    liveLink: "https://the-drawing-board.vercel.app/",
    demoVideo: null,
  },
  {
    title: "The CP Sphere",
    description:
      "A competitive programming platform featuring contest reminders, discussion forums, and template sharing, improving user engagement by 20%.",
    techStack: "MongoDB, ExpressJS, ReactJS, NodeJS",
    image: "/images/cp-sphere.png", // Correct path for Vercel deployment
    liveLink: "https://thecpsphere.vercel.app/",
    demoVideo: "https://youtu.be/QpQVVKsgd1I",
  },
  {
    title: "The NY Network",
    description:
      "A social media platform with real-time news feed, post creation, and trending updates, increasing daily active users by 15%.",
    techStack: "ReactJS, Firebase, Redux, NodeJS",
    image: "/images/ny-network.png", // Correct path for Vercel deployment
    liveLink: "https://thenynetwork.netlify.app",
    demoVideo: "https://www.youtube.com/watch?v=ZM9dMHaW9rk",
  },
];

const ProjectPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 480
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobileScreen(width <= 480);
      setIsSmallScreen(width <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation keyframes
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes gradientPulse {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @media (max-width: 480px) {
      .project-container {
        gap: 20px;
      }
    }
    
    @media (max-width: 380px) {
      .project-container {
        gap: 15px;
      }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060c17 0%, #0a1121 100%)",
        padding: isMobileScreen
          ? "20px 10px 30px"
          : isSmallScreen
            ? "30px 15px 40px"
            : "50px 40px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{animations}</style>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          width: isMobileScreen ? "120px" : isSmallScreen ? "200px" : "300px",
          height: isMobileScreen ? "120px" : isSmallScreen ? "200px" : "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 136, 255, 0.05) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: isMobileScreen ? "150px" : isSmallScreen ? "250px" : "400px",
          height: isMobileScreen ? "150px" : isSmallScreen ? "250px" : "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />

      {/* Page title */}
      <h1
        style={{
          fontSize: isMobileScreen ? "26px" : isSmallScreen ? "34px" : "48px",
          textAlign: "center",
          margin: isMobileScreen
            ? "0 0 20px"
            : isSmallScreen
              ? "5px 0 30px"
              : "10px 0 40px",
          background: "linear-gradient(45deg, #00c2ff, #00ff8a)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          letterSpacing: isMobileScreen
            ? "0.8px"
            : isSmallScreen
              ? "1.5px"
              : "2px",
          fontWeight: "700",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out",
        }}
      >
        My Projects
      </h1>

      <div
        className="project-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobileScreen ? "20px" : isSmallScreen ? "30px" : "40px",
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            project={project}
            screenWidth={screenWidth}
            isMobileScreen={isMobileScreen}
            animationDelay={0.2 + index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
