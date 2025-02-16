import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const names = ["Home", "About", "Projects", "DSA", "Contact"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0a0a0a",
        height: "25%",
        padding: "0 20px",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Portfolio Title - Remains unchanged */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 50,
          marginBottom: 40,
          background: "linear-gradient(45deg, #FF6347, #00bcd4)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          margin: 10,
        }}
      >
        Portfolio
      </div>

      {/* Mobile Menu Button - Remains unchanged */}
      {isSmallScreen && (
        <button
          onClick={toggleDropdown}
          style={{
            backgroundColor: "#0a0a0a",
            color: "#f39c12",
            fontSize: "20px",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            display: "block",
          }}
        >
          {isDropdownOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </button>
      )}

      {/* Updated Dropdown Menu */}
      {isSmallScreen && isDropdownOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "absolute",
            top: "70px",
            backgroundColor: "transparent",
            width: "92%",
            borderRadius: "5px",
            padding: "10px",
            zIndex: 2, // Ensure dropdown appears above other elements
          }}
        >
          {names.map((name) => (
            <div key={name} style={{ marginBottom: "5px" }}>
              <Link
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
                onClick={() => setDropdownOpen(false)} // Close menu on click
              >
                <CustomButton page={name} />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Navigation - Remains unchanged */}
      {!isSmallScreen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {names.map((name) => (
            <Link
              key={name}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <CustomButton page={name} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
