import { useState, useEffect } from "react";

const HomePage = () => {
  const [role, setRole] = useState("Competitive Programmer");
  const roles = ["Competitive Programmer", "Web Developer", "App Developer"];
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
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 25px rgba(0, 136, 255, 0.6); }
      50% { box-shadow: 0 0 45px rgba(0, 255, 136, 0.8); }
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
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
        backgroundColor: "#0a0e17",
        padding: screenWidth < 480 ? "10px" : "20px",
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
          background:
            "linear-gradient(135deg, #0a0e17 0%, #131c2e 50%, #0a0e17 100%)",
          animation: "gradientPulse 15s ease infinite",
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          width: screenWidth < 480 ? "120px" : "200px",
          height: screenWidth < 480 ? "120px" : "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #1a2d4e 0%, transparent 70%)",
          top: "15%",
          left: "5%",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: screenWidth < 480 ? "180px" : "300px",
          height: screenWidth < 480 ? "180px" : "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #2a1a3e 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          opacity: 0.3,
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
          padding: screenWidth < 480 ? "15px 5px" : "20px",
          position: "relative",
          zIndex: 1,
          gap: screenWidth < 480 ? "20px" : "40px",
        }}
      >
        {/* Image Container */}
        <div
          style={{
            width: screenWidth < 768 ? "100%" : "45%",
            transition: "all 0.5s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: screenWidth < 480 ? "20px" : "0",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              padding: screenWidth < 480 ? "6px" : "8px",
              background: "linear-gradient(145deg, #00c2ff, #0055ff, #00ff8a)",
              backgroundSize: "300% 300%",
              animation: "gradientPulse 5s ease infinite",
            }}
          >
            <img
              src="/images/nitesh-saxena.png"
              alt="Nitesh Saxena"
              style={{
                width:
                  screenWidth < 480
                    ? "180px"
                    : screenWidth < 768
                      ? "210px"
                      : "320px",
                height:
                  screenWidth < 480
                    ? "180px"
                    : screenWidth < 768
                      ? "210px"
                      : "320px",
                borderRadius: "50%",
                objectFit: "cover",
                border:
                  screenWidth < 480 ? "3px solid #0a0e17" : "4px solid #0a0e17",
                boxShadow: "0px 0px 30px rgba(0, 136, 255, 0.4)",
                transition: "all 0.5s ease",
                cursor: "pointer",
                animation: "float 6s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow =
                  "0px 0px 50px rgba(0, 255, 136, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0px 0px 30px rgba(0, 136, 255, 0.4)";
              }}
            />
          </div>
        </div>

        {/* Text Container */}
        <div
          style={{
            width: screenWidth < 768 ? "95%" : "55%",
            position: "relative",
            background: "rgba(13, 18, 30, 0.7)",
            backdropFilter: "blur(10px)",
            padding: screenWidth < 480 ? "20px 15px" : "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(0, 136, 255, 0.2)",
            transition: "all 0.5s ease",
            marginBottom: screenWidth < 480 ? "20px" : "0",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 15px 40px rgba(0, 136, 255, 0.3)";
            e.target.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <h1
            style={{
              fontSize:
                screenWidth < 480
                  ? "32px"
                  : screenWidth < 768
                    ? "42px"
                    : "56px",
              marginBottom: screenWidth < 480 ? "15px" : "20px",
              fontWeight: "700",
              background: "linear-gradient(45deg, #00c2ff, #0055ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "2px",
              textAlign: screenWidth < 768 ? "center" : "left",
              filter: "drop-shadow(0 0 10px rgba(0, 136, 255, 0.4))",
              lineHeight: 1.2,
            }}
          >
            Hi, I'm Nitesh Saxena
          </h1>
          <div
            style={{
              height: "3px",
              width: screenWidth < 768 ? "100%" : "70%",
              background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
              marginBottom: screenWidth < 480 ? "15px" : "25px",
              borderRadius: "3px",
            }}
          />
          <h2
            style={{
              fontSize:
                screenWidth < 480
                  ? "20px"
                  : screenWidth < 768
                    ? "24px"
                    : "32px",
              fontWeight: "400",
              color: "#e0e0e0",
              letterSpacing: "1px",
              textAlign: screenWidth < 768 ? "center" : "left",
              marginBottom: screenWidth < 480 ? "10px" : "15px",
              lineHeight: 1.3,
            }}
          >
            I am a{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #00ff8a, #00c2ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "600",
                transition: "all 0.5s ease",
                display: "inline-block",
                filter: "drop-shadow(0 0 8px rgba(0, 255, 136, 0.3))",
                padding: "0 5px",
              }}
            >
              {role}
            </span>
          </h2>
          <p
            style={{
              fontSize: screenWidth < 480 ? "16px" : "18px",
              lineHeight: "1.7",
              color: "#a0b0c0",
              marginTop: screenWidth < 480 ? "15px" : "20px",
              textAlign: screenWidth < 768 ? "center" : "left",
            }}
          >
            Passionate about creating elegant solutions and pushing the
            boundaries of technology. Let's build something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
