import React, { useEffect, useRef, useState } from "react";

const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      width: "100%",
      margin: "0 auto",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      "@media (min-width: 1024px)": {
        gridTemplateColumns: "repeat(12, 1fr)",
        minHeight: "600px",
      },
    },
    imageContainer: {
      gridColumn: "1 / -1",
      height: "400px",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
      "@media (min-width: 1024px)": {
        gridColumn: "1 / 9",
        height: "100%",
      },
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    contentContainer: {
      gridColumn: "1 / -1",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "2.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
      "@media (min-width: 1024px)": {
        gridColumn: "9 / -1",
      },
    },
    visionTitle: {
      color: "#FF0000",
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      textAlign: "center",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s",
    },
    visionText: {
      textAlign: "center",
      marginBottom: "2rem",
      lineHeight: "1.4",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s",
    },
    missionTitle: {
      color: "#FF0000",
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      textAlign: "center",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s",
    },
    missionText: {
      textAlign: "center",
      lineHeight: "1.4",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s",
    },
  };

  return (
    <div ref={sectionRef}>
      <style>
        {`
          @media (min-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(12, 1fr) !important;
            }
            .image-container {
              grid-column: 1 / 9 !important;
              height: 100% !important;
            }
            .content-container {
              grid-column: 9 / -1 !important;
            }
          }
        `}
      </style>
      <div style={styles.container} className="grid-container">
        <div style={styles.imageContainer} className="image-container">
          <img src="img/about.jpg" alt="Eagle in flight" style={styles.image} />
        </div>
        <div style={styles.contentContainer} className="content-container">
          <div style={styles.visionTitle}>Vision</div>
          <p style={styles.visionText}>
            We are driven by a vision to be the best provider of what we do in
            the market place.
          </p>

          <div style={styles.missionTitle}>Mission</div>
          <p style={styles.missionText}>
            To deliver top choice and genuine business solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
