import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./TeamShowcase.css";

const TeamShowcase = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const teamMembers = [
    {
      id: 1,
      name: "Thabo Mokoena",
      role: "Managing Director",
      department: "Management",
      image: "https://i.pravatar.cc/600?img=12",
      linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
      email: "thabo@pmd.co.za",
      phone: "+27821234567",
    },
    {
      id: 2,
      name: "Lerato Dlamini",
      role: "Operations Manager",
      department: "Management",
      image: "https://i.pravatar.cc/600?img=47",
      linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
      email: "lerato@pmd.co.za",
      phone: "+27821234568",
    },
    {
      id: 3,
      name: "Mpho Nkosi",
      role: "Graphic Designer",
      department: "Design & Print",
      image: "https://i.pravatar.cc/600?img=33",
      linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
      email: "mpho@pmd.co.za",
      phone: "+27821234569",
    },
  ];

  const departments = [
    "All",
    "Management",
    "Design & Print",
    "Digital & Admin",
  ];

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  const handleFilterChange = (event, department) => {
    event.preventDefault();
    setSelectedDepartment(department);
  };

  return (
    <section className="team-showcase">
      <div className="team-container">
        <div className="team-header">
          <span className="team-eyebrow">
            Meet The Team
          </span>

          <h2 className="team-title">
            The People Behind
            <span> PMD.</span>
          </h2>

          <p className="team-description">
            Meet the dedicated people who bring together professional
            printing, creative branding, digital applications, and reliable
            customer service at PMD.
          </p>
        </div>

        <div
          className="team-filters"
          role="group"
          aria-label="Filter team members"
        >
          {departments.map((department) => (
            <button
              key={department}
              type="button"
              className={`team-filter ${
                selectedDepartment === department
                  ? "team-filter-active"
                  : ""
              }`}
              onClick={(event) =>
                handleFilterChange(event, department)
              }
              aria-pressed={
                selectedDepartment === department
              }
            >
              {department}
            </button>
          ))}
        </div>

        <div className="team-grid">
          {filteredMembers.map((member) => (
            <article
              className="team-card"
              key={member.id}
            >
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>

              <div className="team-card-content">
                <span className="team-department">
                  {member.department}
                </span>

                <h3 className="team-member-name">
                  {member.name}
                </h3>

                <p className="team-member-role">
                  {member.role}
                </p>

                <div className="team-socials">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="team-social"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope />
                  </a>

                  <a
                    href={`tel:${member.phone}`}
                    className="team-social"
                    aria-label={`Call ${member.name}`}
                  >
                    <FaPhoneAlt />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="team-empty">
            <p>
              No team members found in this department.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamShowcase;