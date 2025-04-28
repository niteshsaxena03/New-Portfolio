import { useState, useEffect } from "react";
import DSABox from "../components/DSABox";
import dsaData from "../data/dsaData";

const DSAPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 480
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobileScreen(width <= 480);
      setIsSmallScreen(width <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animations for page loading
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#070b11",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        padding: isMobileScreen
          ? "60px 10px 20px"
          : isSmallScreen
            ? "70px 20px 25px"
            : "100px 30px 30px",
      }}
    >
      <style>{animations}</style>

      {/* Floating lights */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: isMobileScreen ? "120px" : isSmallScreen ? "200px" : "300px",
            height: isMobileScreen
              ? "120px"
              : isSmallScreen
                ? "200px"
                : "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 112, 255, 0.15) 0%, rgba(7, 11, 17, 0) 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: isMobileScreen ? "150px" : isSmallScreen ? "250px" : "350px",
            height: isMobileScreen
              ? "150px"
              : isSmallScreen
                ? "250px"
                : "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 255, 149, 0.1) 0%, rgba(7, 11, 17, 0) 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <div
        style={{
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          animation: "fadeIn 0.8s ease-out forwards",
        }}
      >
        <h1
          style={{
            fontSize: isMobileScreen ? "26px" : isSmallScreen ? "32px" : "36px",
            textAlign: "center",
            marginBottom: isMobileScreen ? "20px" : "30px",
            background: "linear-gradient(135deg, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "700",
            letterSpacing: "1px",
            padding: isMobileScreen ? "0 10px" : "0",
          }}
        >
          Data Structures & Algorithms
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobileScreen ? "15px" : isSmallScreen ? "20px" : "30px",
            width: "100%",
          }}
        >
          {dsaData.map((dsa, index) => (
            <DSABox
              key={index}
              dsa={dsa}
              screenWidth={screenWidth}
              isMobileScreen={isMobileScreen}
              isSmallScreen={isSmallScreen}
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSAPage;
