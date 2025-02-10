import { useState, useEffect } from "react";

const AboutPage = () => {
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
        backgroundColor: "#121212", // Dark background
        padding: "40px",
        color: "white",
        fontFamily: "'Poppins', sans-serif", // Stylish font
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Education Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "90%" : "60%",
            padding: "25px",
            background: "linear-gradient(135deg, #2F4F4F, #1A3D2A)", // Dark green gradient
            borderRadius: "25px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "15px",
              color: "white",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Education
          </h3>
          <p
            style={{
              fontSize: screenWidth < 768 ? "16px" : "18px",
              color: "#ddd",
              lineHeight: "1.8",
              fontWeight: "300",
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            I am currently pursuing a B.Tech in Computer Science (AI/ML) at
            Sharda University, with a CGPA of{" "}
            <span style={{ color: "#FF6347" }}>9.07</span>. I will be graduating
            in <span style={{ color: "#FF6347" }}>2026</span>, with a focus on
            Artificial Intelligence, Machine Learning, and full-stack
            development.
          </p>
        </div>

        {/* Skills Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth < 768 ? "90%" : "60%",
            padding: "25px",
            background: "linear-gradient(135deg, #003366, #1D2A56)", // Dark blue gradient
            borderRadius: "25px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "15px",
              color: "white",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Skills
          </h3>
          <p
            style={{
              fontSize: screenWidth < 768 ? "16px" : "18px",
              color: "#ddd",
              lineHeight: "1.8",
              fontWeight: "300",
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: "#FF6347", fontWeight: "bold" }}>
              Frontend:
            </strong>{" "}
            ReactJS, React Native, Tailwind CSS, Redux, JavaScript
            <br />
            <strong style={{ color: "#FF6347", fontWeight: "bold" }}>
              Backend:
            </strong>{" "}
            Node.js, Express.js, MongoDB, Firebase
            <br />
            <strong style={{ color: "#FF6347", fontWeight: "bold" }}>
              Other:
            </strong>{" "}
            Git, REST APIs, Algorithms, Data Structures
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
