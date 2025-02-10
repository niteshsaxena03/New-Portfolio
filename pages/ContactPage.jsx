import CustomBox from "../components/CustomBox";

const ContactPage = () => {
  // Social media links with the provided URLs
  const socialLinks = {
    GitHub: "https://github.com/niteshsaxena03", // GitHub link
    LinkedIn: "https://www.linkedin.com/in/niteshsaxena03/", // LinkedIn link
    Twitter: "https://x.com/NiteshSaxena03", // Twitter (X.com) link
    Gmail: "mailto:niteshsaxena114@gmail.com", // Gmail link
  };

  const sites = ["GitHub", "LinkedIn", "Twitter", "Gmail"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {sites.map((site) => {
          return (
            <a
              href={socialLinks[site]} // Linking to the respective social media URL
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security feature for opening links in new tabs
              key={site}
              style={{
                textDecoration: "none", // Remove underline
                marginBottom: "15px", // Space between links
              }}
            >
              <CustomBox site={site} />{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;
