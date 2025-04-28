const CustomButton = ({ page, isActive, isMobileScreen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: isMobileScreen ? 36 : 45,
        width: isMobileScreen ? 110 : 130,
        borderRadius: isMobileScreen ? "8px" : "10px",
        margin: isMobileScreen ? "3px" : "5px",
        backgroundColor: isActive
          ? "rgba(0, 195, 255, 0.15)"
          : "rgba(13, 23, 42, 0.5)",
        color: isActive ? "#00c2ff" : "#e0e0e0",
        fontWeight: isActive ? "600" : "500",
        fontSize: isMobileScreen ? "14px" : "16px",
        letterSpacing: isMobileScreen ? "0.5px" : "1px",
        textTransform: "uppercase",
        cursor: "pointer",
        boxShadow: isActive
          ? "0 4px 12px rgba(0, 195, 255, 0.25)"
          : "0 4px 12px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        border: isActive
          ? "1px solid rgba(0, 195, 255, 0.4)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "rgba(0, 195, 255, 0.15)";
        e.target.style.color = "#00c2ff";
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 6px 15px rgba(0, 195, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = isActive
          ? "rgba(0, 195, 255, 0.15)"
          : "rgba(13, 23, 42, 0.5)";
        e.target.style.color = isActive ? "#00c2ff" : "#e0e0e0";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = isActive
          ? "0 4px 12px rgba(0, 195, 255, 0.25)"
          : "0 4px 12px rgba(0, 0, 0, 0.15)";
      }}
    >
      {page}
      {isActive && (
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "10%",
            width: "80%",
            height: isMobileScreen ? "1px" : "2px",
            background:
              "linear-gradient(90deg, transparent, #00c2ff, transparent)",
            borderRadius: "2px",
          }}
        />
      )}
    </div>
  );
};

export default CustomButton;
