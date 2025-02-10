const ProjectBox = ({ project, screenWidth }) => {
  const isMobile = screenWidth < 768;

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
        minHeight: "200px",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Left Side (Image) */}
      <div style={{ width: isMobile ? "100%" : "30%", textAlign: "center" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "220px",
            height:"120px",
            borderRadius: "10px",
            marginBottom: isMobile ? "10px" : "0",
          }}
        />
      </div>

      {/* Right Side (Content) */}
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
          {project.title}
        </h2>
        <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#ddd" }}>
          {project.description}
        </p>
        <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#ddd" }}>
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
        <div>
          <a
            href={project.liveLink}
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
            View Project
          </a>
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: isMobile ? "6px 12px" : "8px 16px",
                backgroundColor: "#28a745",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "bold",
                marginLeft: isMobile ? "0" : "10px",
              }}
            >
              Watch Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
