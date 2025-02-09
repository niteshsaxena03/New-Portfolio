import React from "react";
import { FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0a0a0a",
    color: "white",
    padding: "2rem 1rem",
    textAlign: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const textStyle = {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const iconStyle = {
    color: "#ff6f61",
    fontSize: "1.2rem",
  };

  const linkStyle = {
    color: "#4a90e2",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#ff6f61",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          Made with <FaHeart style={iconStyle} /> and{" "}
          <FaCode style={iconStyle} /> by Nitesh Saxena
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.8" }}>
          &copy; 2025 Nitesh Saxena. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
