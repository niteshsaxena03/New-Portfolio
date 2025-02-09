const CustomButton = ({ page }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 140,
        borderRadius: "25px", // Rounded corners
        margin: 10,
        backgroundColor: "#1e2a47", // Dark blue background
        color: "white", // White text for contrast
        fontWeight: "bold",
        fontSize: "16px", // Adjusted font size for readability
        textTransform: "uppercase", // Capitalize text
        cursor: "pointer", // Add pointer cursor to indicate clickability
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow for depth
        transition: "all 0.3s ease", // Smooth transition for hover effects
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#e74c3c"; // Red hover effect
        e.target.style.transform = "scale(1.05)"; // Slightly enlarge the button on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#1e2a47"; // Revert to original dark blue
        e.target.style.transform = "scale(1)"; // Reset scale
      }}
    >
      {page}
    </div>
  );
};

export default CustomButton;
