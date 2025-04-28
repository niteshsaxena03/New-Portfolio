import { useState, useEffect } from "react";
import CustomBox from "../components/CustomBox";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Social media links with the provided URLs
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/niteshsaxena03",
      icon: <FaGithub size={24} />,
      color: "#00c2ff",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/niteshsaxena03/",
      icon: <FaLinkedin size={24} />,
      color: "#0077b5",
    },
    {
      name: "Twitter",
      url: "https://x.com/NiteshSaxena03",
      icon: <FaTwitter size={24} />,
      color: "#00ff8a",
    },
    {
      name: "Gmail",
      url: "mailto:niteshsaxena114@gmail.com",
      icon: <FaEnvelope size={24} />,
      color: "#ff3366",
    },
  ];

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
    
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 195, 255, 0.5); }
      50% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.7); }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060c17 0%, #0a1121 100%)",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{animations}</style>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 136, 255, 0.05) 0%, transparent 70%)",
          top: "5%",
          right: "10%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%)",
          bottom: "5%",
          left: "10%",
          zIndex: 0,
        }}
      />

      {/* Page title */}
      <h1
        style={{
          fontSize: screenWidth < 768 ? "36px" : "48px",
          textAlign: "center",
          margin: "0 0 50px",
          background: "linear-gradient(45deg, #00c2ff, #00ff8a)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          letterSpacing: "2px",
          fontWeight: "700",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out",
          position: "relative",
          zIndex: 1,
        }}
      >
        Connect With Me
      </h1>

      <div
        style={{
          background:
            "linear-gradient(145deg, rgba(13, 24, 36, 0.7) 0%, rgba(9, 15, 26, 0.8) 100%)",
          backdropFilter: "blur(10px)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(0, 195, 255, 0.1)",
          maxWidth: "500px",
          width: "100%",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
          transitionDelay: "0.2s",
          animation: isVisible ? "pulse 4s infinite" : "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #00c2ff, #00ff8a)",
            opacity: 0.8,
            borderRadius: "20px 20px 0 0",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            color: "#e0e0e0",
            textAlign: "center",
            lineHeight: 1.7,
            marginBottom: "30px",
          }}
        >
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: screenWidth < 500 ? "1fr" : "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
              style={{
                textDecoration: "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease",
                transitionDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 20px",
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  color: "#e0e0e0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.4)";
                  e.target.style.borderColor = `${link.color}50`;
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px ${link.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.2)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    color: link.color,
                    transition: "all 0.3s ease",
                  }}
                >
                  {link.icon}
                </div>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "#a0b0c0",
              textAlign: "center",
              margin: 0,
            }}
          >
            <span style={{ color: "#00ff8a" }}>Email:</span>{" "}
            niteshsaxena114@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
