import React from "react";
import "./Teams.css";

const TeamMember = ({ name, image, description }) => (
  <div className="team-member">
    <div className="team-member-card">
      <div className="team-member-content">
        <div className="team-member-image">
          <img src={image} alt={name} />
        </div>
        <div className="team-member-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Chuma Igwe",
      image: "img/team/chuma.jpg",
      description:
        "Chuma Igwe holds a master's degree in marketing from the University that is famed for the most prestigious Marketing Faculty in Europe: The University of Strathclyde Glasgow in 1980. Thereafter he joined Nigerian Breweries where he garnered a distinguished career in very senior positions spanning from Sales, Distribution, Marketing and Corporate Communications.",
    },
    {
      name: "Damian Wilson Nwatarali",
      image: "img/team/damian.jpg",
      description:
        "Nwatarali is a graduate of the University of Ibadan, Heriot-Watt University, Edunburgh and University of Uyo. A fellow of African Centre for supply chain management and senior parent of The NSE-ASI securities. He has also attended executive development programmes of both local and international institutions including the prestigious London Business School.",
    },
    {
      name: "Lucky Nwachukwu",
      image: "img/team/lucky.jpg",
      description:
        "He is a graduate of Business Management from the University of Nigeria. He had a brief stint with Central Bank of Nigeria before joining the Management cadre of Nigerian Breweries plc. He has specialist background in Logistics, Communication and General Management.",
    },
    {
      name: "Uzochukwu Unegba",
      image: "img/team/lucky.jpg",
      description:
        "Uzochukwu is a Product Manager with a strong foundation in technology and project execution. A graduate of Igbinedion University, Okada, with a BSc in Computer Science & Information Technology, he has built a distinguished career by driving digital transformation in senior IT and product development roles. At Agricorp International Development Limited, he has spearheaded transformative initiatives such as blockchain-powered supply chain solutions and ERP system implementations. He continues to innovate from concept to market launch, blending technical expertise with strategic project leadership to deliver operational excellence.",
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <h2>Meet the Team</h2>
          <div className="section-divider"></div>
        </div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
