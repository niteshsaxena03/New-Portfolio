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

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
        padding: "20px",
        color: "white",
      }}
    >
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} screenWidth={screenWidth} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
