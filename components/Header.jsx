import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing react-icons for hamburger icon

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

  // Toggle dropdown visibility
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
        height: "25%", // Height of the header
        padding: "0 20px",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Portfolio Title Styling */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "50px", // Increased font size for prominence
          color: "white",
          letterSpacing: "2px", // Adds space between the letters for style
          marginBottom: "10px", // Add margin between title and buttons
          borderRadius: "40%",
          padding: "10px",
        }}
      >
        Portfolio
      </div>

      {/* Menu Button for Mobile */}
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
            display: "block", // Show button on mobile
          }}
        >
          {isDropdownOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </button>
      )}

      {/* Dropdown Menu for Mobile */}
      {isSmallScreen && isDropdownOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end", // Align items centered under the FaBars/FaTimes icon
            position: "absolute",
            top: "70px", // Position dropdown below the button
            backgroundColor: "transparent",
            width: "92%",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          {names.map((name) => (
            <div key={name} style={{ marginBottom: "5px" }}>
              <Link
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <CustomButton page={name} />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons for Desktop */}
      {!isSmallScreen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {names.map((name) => {
            return (
              <Link
                key={name}
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <CustomButton page={name} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
