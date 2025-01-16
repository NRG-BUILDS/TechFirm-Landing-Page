import React, { useEffect, useRef, useState } from "react";

const ValuesDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      backgroundColor: "#000051",
      padding: "2rem",
      margin: "0 auto",
    },
    title: {
      color: "white",
      textAlign: "center",
      marginBottom: "2rem",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
    },
    svgContainer: {
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      display: "block",
    },
    circleText: {
      fill: "white",
      fontSize: "1.55rem",
      fontFamily: "sans-serif",
      dominantBaseline: "middle",
      opacity: 0,
      animation: isVisible ? "fadeIn 0.5s ease-out forwards" : "none",
      animationDelay: "1.5s",
    },
    valuesList: {
      color: "white",
      marginTop: "2rem",
      padding: "0 1rem",
      textAlign: "center",
    },
    valueItem: {
      marginBottom: "1rem",
      opacity: 0,
      animation: isVisible ? "slideUp 0.5s ease-out forwards" : "none",
    },
    valueBold: {
      fontWeight: "bold",
    },
  };

  const getCircleStyles = (delay = 0) => ({
    fill: "transparent",
    strokeWidth: "8",
    strokeDasharray: "628",
    strokeDashoffset: isVisible ? "0" : "628",
    transition: "stroke-dashoffset 2s ease-out",
    transitionDelay: `${delay}s`,
  });

  return (
    <div ref={containerRef} style={styles.container} id="values">
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <h1 style={styles.title}>Our Values</h1>

      <svg viewBox="0 0 450 400" style={styles.svgContainer}>
        {/* Integrity Circle (Blue) */}
        <circle
          cx="225"
          cy="150"
          r="100"
          stroke="#0066ff"
          style={getCircleStyles(0)}
        />
        <text
          x="225"
          y="150"
          textAnchor="middle"
          style={{ ...styles.circleText, animationDelay: "1.5s" }}
        >
          Integrity
        </text>

        {/* Ambition Circle (Green) */}
        <circle
          cx="155"
          cy="250"
          r="100"
          stroke="#00ff00"
          style={getCircleStyles(0.5)}
        />
        <text
          x="155"
          y="250"
          textAnchor="middle"
          style={{ ...styles.circleText, animationDelay: "2s" }}
        >
          Ambition
        </text>

        {/* Passion Circle (Red) */}
        <circle
          cx="295"
          cy="250"
          r="100"
          stroke="#ff0000"
          style={getCircleStyles(1)}
        />
        <text
          x="295"
          y="250"
          textAnchor="middle"
          style={{ ...styles.circleText, animationDelay: "2.5s" }}
        >
          Passion
        </text>
      </svg>

      <div style={styles.valuesList}>
        <p style={{ ...styles.valueItem, animationDelay: "2.5s" }}>
          <span style={styles.valueBold}>Integrity:</span> We are honest,
          transparent and reliable.
        </p>
        <p style={{ ...styles.valueItem, animationDelay: "2.7s" }}>
          <span style={styles.valueBold}>Ambitious:</span> Reaching new heights.
        </p>
        <p style={{ ...styles.valueItem, animationDelay: "2.9s" }}>
          <span style={styles.valueBold}>Passion:</span> We always deliver the
          best.
        </p>
      </div>
    </div>
  );
};

export default ValuesDiagram;
