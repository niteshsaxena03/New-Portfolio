import { useState, useEffect } from "react";
import DSABox from "../components/DSABox";
import dsaData from "../data/dsaData";

const DSAPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 480
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobileScreen(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        padding: isMobileScreen ? "80px 15px 20px" : "100px 30px 30px",
      }}
    >
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
            width: isMobileScreen ? "150px" : "300px",
            height: isMobileScreen ? "150px" : "300px",
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
            width: isMobileScreen ? "180px" : "350px",
            height: isMobileScreen ? "180px" : "350px",
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
        }}
      >
        <h1
          style={{
            fontSize: isMobileScreen ? "28px" : "36px",
            textAlign: "center",
            marginBottom: isMobileScreen ? "20px" : "30px",
            background: "linear-gradient(135deg, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Data Structures & Algorithms
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobileScreen ? "20px" : "30px",
            width: "100%",
          }}
        >
          {dsaData.map((dsa, index) => (
            <DSABox
              key={index}
              dsa={dsa}
              screenWidth={screenWidth}
              isMobileScreen={isMobileScreen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSAPage;
