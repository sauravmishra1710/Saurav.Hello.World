import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

const CertificationCard = ({course_title, course_org, course_org_link, course_logo, certificate_link, certificate_color_code}) => {
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate_color_code }}
              >
                <img
                  className="logo_img"
                  src={course_logo}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title">
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title">
              {course_title}
            </h2>
            <h3 className="cert-body-subtitle">
            <a
              href={course_org_link}
              target="_blank"
              rel="noopener noreferrer"
            >{course_org}</a>
            </h3>
          </div>
        </div>
      </Fade>
    );
  }

export default CertificationCard;
