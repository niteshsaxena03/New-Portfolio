import React from "react";
import {
  FaHeart,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background:
          "linear-gradient(0deg, rgba(6, 11, 25, 1) 0%, rgba(13, 23, 42, 0.95) 100%)",
        color: "#e0e0e0",
        padding: "2.5rem 1.5rem 2rem",
        borderTop: "1px solid rgba(0, 195, 255, 0.2)",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <a
            href="https://github.com/niteshsaxena03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a0b0c0",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00c2ff";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#a0b0c0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/niteshsaxena03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a0b0c0",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00c2ff";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#a0b0c0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/niteshsaxena03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a0b0c0",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00c2ff";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#a0b0c0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaTwitter size={24} />
          </a>
        </div>

        <div
          style={{
            padding: "0.5rem 2rem",
            borderRadius: "30px",
            background: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(5px)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>Made with</span>
          <FaHeart style={{ color: "#ff3366" }} />
          <span>and</span>
          <FaCode style={{ color: "#00ff8a" }} />
          <span>by Nitesh Saxena</span>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            color: "#667380",
            letterSpacing: "1px",
          }}
        >
          &copy; {currentYear} Nitesh Saxena. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
