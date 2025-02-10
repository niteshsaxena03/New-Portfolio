import { useState, useEffect } from "react";

const HomePage = () => {
  const [text, setText] = useState("I am a competitive programmer");
  const roles = [
    "I am a competitive programmer",
    "I am a web developer",
    "I am a mobile developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth when the window is resized
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setText(roles[roleIndex]);
  }, [roleIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark background
        padding: "20px",
        color: "white",
        fontFamily: "'Poppins', sans-serif", // Stylish font
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth < 768 ? "column" : "row", // Adjust layout direction for mobile
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "20px",
        }}
      >
        {/* Left Side (Image) */}
        <div
          style={{
            width: screenWidth < 768 ? "80%" : "40%", // Adjust image container width for mobile
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: screenWidth < 768 ? "0" : "40px",
            marginBottom: screenWidth < 768 ? "20px" : "0",
          }}
        >
          <img
            src="/images/nitesh-saxena.png" // Replace with your image path
            alt="Nitesh Saxena"
            style={{
              width: screenWidth < 768 ? "200px" : "350px", // Adjust image size for mobile
              height: screenWidth < 768 ? "200px" : "350px", // Adjust image size for mobile
              borderRadius: "50%",
              objectFit: "cover",
              border: "8px solid #FF6347", // Border color
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)", // Shadow for depth
            }}
          />
        </div>

        {/* Right Side (Text and Animation) */}
        <div
          style={{
            width: screenWidth < 768 ? "80%" : "60%", // Adjust text container width for mobile
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "white",
            paddingLeft: screenWidth < 768 ? "0" : "40px",
          }}
        >
          <h1
            style={{
              fontSize: screenWidth < 768 ? "48px" : "72px", // Adjust font size for mobile
              marginBottom: "20px",
              fontWeight: "700",
              color: "#FF6347", // Red color for the greeting
              letterSpacing: "5px",
              textAlign: screenWidth < 768 ? "center" : "left", // Center text on mobile
            }}
          >
            Hi, I'm Nitesh Saxena
          </h1>
          <h2
            style={{
              fontSize: screenWidth < 768 ? "28px" : "36px", // Adjust font size for mobile
              fontWeight: "400",
              color: "#00bcd4", // Cyan color for role
              letterSpacing: "2px",
              animation:
                "typing 3s steps(30) 1s infinite, blink .75s step-end infinite",
              textAlign: screenWidth < 768 ? "center" : "left", // Center text on mobile
            }}
          >
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
