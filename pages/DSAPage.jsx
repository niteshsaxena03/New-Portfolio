import { useState, useEffect } from "react";
import DSABox from "../components/DSABox";

const achievements = [
  {
    title: "ACM ICPC Regionals",
    description:
      "Qualified for ACM ICPC Kanpur Regionals 2024 after securing Rank 1 in my college.",
    image: "/images/icpc.png", // Correct path for Vercel deployment
    link: "https://icpc.global/ICPCID/HU1MX4AWA8HJ",
  },
  {
    title: "Codeforces Specialist",
    description:
      "Solved 200+ problems on Codeforces with a Specialist rating of 1421.",
    image: "/images/codeforces.png", // Correct path for Vercel deployment
    link: "https://codeforces.com/profile/niteshsaxena003",
  },
  {
    title: "LeetCode Knight",
    description:
      "Solved 500+ problems on LeetCode and achieved a Knight rating badge with 1888 rating.",
    image: "/images/leetcode.png", // Correct path for Vercel deployment
    link: "https://leetcode.com/u/niteshsaxena03/",
  },
];

const DSAPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
        padding: "20px",
        color: "white",
      }}
    >
    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {achievements.map((achievement, index) => (
          <DSABox
            key={index}
            achievement={achievement}
            screenWidth={screenWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default DSAPage;
