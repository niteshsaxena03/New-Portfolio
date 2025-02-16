import { useState, useEffect } from "react";

const HomePage = () => {
  const [role, setRole] = useState("Competitive Programmer");
  const roles = ["Competitive Programmer", "Web Developer", "Mobile Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Global animations
  const styleAnimations = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes gradientPulse {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setRole(roles[roleIndex]);
  }, [roleIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#000000",
        padding: "20px",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{styleAnimations}</style>

      {/* Animated Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, #2a2a2a 0%, #0a0a0a 100%)",
          animation: "gradientPulse 8s ease infinite",
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: screenWidth < 768 ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Image Container */}
        <div
          style={{
            width: screenWidth < 768 ? "100%" : "50%",
            transition: "all 0.5s ease",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <img
            src="/images/nitesh-saxena.png"
            alt="Nitesh Saxena"
            style={{
              width: screenWidth < 768 ? "200px" : "350px",
              height: screenWidth < 768 ? "200px" : "350px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "8px solid #FF6347",
              boxShadow: "0px 0px 30px rgba(255, 99, 71, 0.8)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              animation: "float 4s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05) rotate(2deg)";
              e.target.style.boxShadow = "0px 0px 50px rgba(255, 99, 71, 1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) rotate(0deg)";
              e.target.style.boxShadow = "0px 0px 30px rgba(255, 99, 71, 0.8)";
            }}
          />
        </div>

        {/* Text Container */}
        <div
          style={{
            width: screenWidth < 768 ? "80%" : "60%",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: screenWidth < 768 ? "48px" : "72px",
              marginBottom: "20px",
              fontWeight: "700",
              background: "linear-gradient(45deg, #FF6347, #FFA500)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "5px",
              textAlign: screenWidth < 768 ? "center" : "left",
              filter: "drop-shadow(0 0 10px rgba(255, 99, 71, 0.5))",
            }}
          >
            Hi, I'm Nitesh Saxena
          </h1>
          <h2
            style={{
              fontSize: screenWidth < 768 ? "28px" : "36px",
              fontWeight: "400",
              color: "#00bcd4",
              letterSpacing: "2px",
              textAlign: screenWidth < 768 ? "center" : "left",
              position: "relative",
            }}
          >
            I am a{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #00bcd4, #00ff88)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "600",
                transition: "all 0.5s ease",
                display: "inline-block",
                filter: "drop-shadow(0 0 10px rgba(0, 188, 212, 0.3))",
              }}
            >
              {role}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
