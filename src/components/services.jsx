import React from "react";

// Separate CSS file content
const styles = `
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.blog-card {
  background: white;
  
  text-align: left;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
}
.blog-title {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.blog-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #8b0000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: #5a0000;
}

.read-more::after {
  content: "→";
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .blog-grid {
    padding: 1rem;
    gap: 1rem;
    }
  
  .blog-title {
    font-size: 1.25rem;
  }
}
`;

export const Services = (props) => {
  // Create a style element and inject CSS
  React.useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">What We Do</h2>
          <p className="text-white">
            We offer a variety of services to help your business succeed. Our
            team of experts is dedicated to providing top-notch solutions
            tailored to your needs.
          </p>
        </div>
        <div className="blog-grid">
          {props.data &&
            props.data.map((service) => (
              <article key={service.name} className="blog-card">
                <img
                  src={service.image}
                  alt={service.name}
                  className="blog-image"
                />
                <div className="blog-content">
                  <h2 className="blog-title">{service.name}</h2>
                  <p className="blog-description">{service.text}</p>
                  <a href="#contact" className="read-more">
                    Contact Us
                  </a>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};
