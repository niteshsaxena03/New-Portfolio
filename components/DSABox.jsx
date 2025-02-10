const DSABox = ({ achievement, screenWidth }) => {
  const isMobile = screenWidth < 768; // Adjust layout for mobile screens

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
        width: isMobile ? "90%" : "60%",
        minHeight: "150px",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Image Section (30% on Desktop, Full Width on Mobile) */}
      <div style={{ width: isMobile ? "100%" : "30%", textAlign: "center" }}>
        <img
          src={achievement.image}
          alt={achievement.title}
          style={{
            width: isMobile ? "80px" : "100px",
            height: isMobile ? "80px" : "100px",
            borderRadius: "10px",
            marginBottom: isMobile ? "10px" : "0",
          }}
        />
      </div>

      {/* Text Section (70% on Desktop, Full Width on Mobile) */}
      <div
        style={{
          width: isMobile ? "100%" : "70%",
          paddingLeft: isMobile ? "0" : "20px",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "20px" : "24px",
            marginBottom: "10px",
            color: "white",
          }}
        >
          {achievement.title}
        </h2>
        <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#ddd" }}>
          {achievement.description}
        </p>
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: isMobile ? "6px 12px" : "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: "bold",
          }}
        >
          See Profile
        </a>
      </div>
    </div>
  );
};

export default DSABox;
