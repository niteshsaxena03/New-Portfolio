import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const names = ["Home", "About", "Projects", "DSA", "Contact"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 480
  );
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setIsMobileScreen(window.innerWidth <= 480);
      if (window.innerWidth > 768) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          "linear-gradient(180deg, rgba(6, 11, 25, 1) 0%, rgba(13, 23, 42, 0.95) 100%)",
        padding: isMobileScreen ? "12px 15px" : "15px 30px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        borderBottom: "1px solid rgba(0, 195, 255, 0.2)",
      }}
    >
      {/* Portfolio Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: isMobileScreen ? 28 : isSmallScreen ? 36 : 44,
            background: "linear-gradient(45deg, #00c2ff, #00ff8a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 2px 5px rgba(0, 195, 255, 0.3))",
            position: "relative",
          }}
        >
          Portfolio
          <div
            style={{
              position: "absolute",
              height: "2px",
              width: "80%",
              bottom: "-2px",
              left: "10%",
              background:
                "linear-gradient(90deg, transparent, #00c2ff, #00ff8a, transparent)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      {isSmallScreen && (
        <button
          onClick={toggleDropdown}
          style={{
            backgroundColor: "rgba(0, 195, 255, 0.1)",
            color: "#00c2ff",
            padding: isMobileScreen ? "8px" : "10px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid rgba(0, 195, 255, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(0, 195, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(0, 195, 255, 0.1)";
          }}
        >
          {isDropdownOpen ? (
            <FaTimes size={isMobileScreen ? 20 : 24} color="#00c2ff" />
          ) : (
            <FaBars size={isMobileScreen ? 20 : 24} color="#00c2ff" />
          )}
        </button>
      )}

      {/* Mobile Dropdown Menu */}
      {isSmallScreen && isDropdownOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: isMobileScreen ? "60px" : "80px",
            right: isMobileScreen ? "10px" : "20px",
            width: isMobileScreen ? "160px" : "200px",
            background: "rgba(13, 23, 42, 0.98)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            padding: isMobileScreen ? "12px" : "15px",
            zIndex: 200,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(0, 195, 255, 0.15)",
            animation: "fadeIn 0.3s ease-out forwards",
          }}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>
          {names.map((name) => (
            <div key={name} style={{ marginBottom: "8px" }}>
              <Link
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
                onClick={() => setDropdownOpen(false)}
              >
                <CustomButton
                  page={name}
                  isActive={
                    (name === "Home" && location.pathname === "/") ||
                    (name !== "Home" &&
                      location.pathname === `/${name.toLowerCase()}`)
                  }
                  isMobileScreen={isMobileScreen}
                />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      {!isSmallScreen && (
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {names.map((name) => (
            <Link
              key={name}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                page={name}
                isActive={
                  (name === "Home" && location.pathname === "/") ||
                  (name !== "Home" &&
                    location.pathname === `/${name.toLowerCase()}`)
                }
                isMobileScreen={isMobileScreen}
              />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
