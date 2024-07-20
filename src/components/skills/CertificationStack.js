import React from "react";
import { Row, Container } from "react-bootstrap";
import CertificationCard from "./CertificationCard.js";
import "./skills.css";

import NR_Observability_Practitioner from "../../img/certifications/NR_Observability_Practitioner.png";
import NR_Observability_Foundations from "../../img/certifications/NR_Observability_Foundations.png";
import NR_Full_Stack_Observability_Practitioner from "../../img/certifications/NR_Full_Stack_Observability_Practitioner.png";
import DeepLearningAI from "../../img/certifications/DeepLearningAI.png";
import OCIDSP2023OPN from "../../img/certifications/OCIDSP2023OPN.png";
import PySimpleGui from "../../img/certifications/pysimplegui.png";
import OCI23AIFCA from "../../img/certifications/OCI23AIFCA.png";
import OMLADB2023CA from "../../img/certifications/OMLADB2023CA.png";
import OCIF2023CA from "../../img/certifications/OCIF2023CA.png";
import OCI2024GAIOCP from "../../img/certifications/OCI2024GAIOCP.png";


function CertificationStack() {
  return (
    <>
      <div className="skills-parent" id="skillsSection">
        <h2 className="purple heading">
          Certifications & Badges
        </h2>
        <div className="all-skills-container">
        <CertificationCard
            course_title="OCI 2024 Generative AI Certified Professional"
            course_org="Oracle University"
            course_org_link="https://education.oracle.com/oracle-cloud-infrastructure-2024-generative-ai-professional/pexam_1Z0-1127-24"
            course_logo={OCI2024GAIOCP}
            certificate_link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=F9F58B80B8146F7515260AF4A40D60B067C91059E8CAB00DB4C8979A8F9E792A"
            certificate_color_code="#d29f5e"
          />

          <CertificationCard
            course_title="OCI Certified Data Science Professional"
            course_org="Oracle University"
            course_org_link="https://education.oracle.com/oracle-cloud-infrastructure-2024-data-science-professional/pexam_1Z0-1110-24"
            course_logo={OCIDSP2023OPN}
            certificate_link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=1D3D588E4877E8A8A66DE1BA9DFBCB332A4488207BEE9FBCAA56A47A60F76B60"
            certificate_color_code="#d29f5e"
          />

          <CertificationCard
            course_title="OCI ML using Autonomous Database Associate"
            course_org="Oracle University"
            course_org_link="https://education.oracle.com/oracle-machine-learning-using-autonomous-database-2023-associate/pexam_1Z0-1096-23"
            course_logo={OMLADB2023CA}
            certificate_link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=EB3492006DC2DEC001B2DFE8D40F61699C22921F1F3549A5B5CD6F8FAC415C4B"
            certificate_color_code="#d9e0ed"
          />

          <CertificationCard
            course_title="OCI AI Certified Foundations Associate"
            course_org="Oracle University"
            course_org_link="https://mylearn.oracle.com/ou/learning-path/become-an-oci-ai-foundations-associate-2023/127177"
            course_logo={OCI23AIFCA}
            certificate_link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E2C8645D7E5B1D381282E2961DED6EBE67CAD5C5D6FDA25EA6C8483819224CD5"
            certificate_color_code="#ad795e"
          />

          <CertificationCard
            course_title="OCI Certified Foundations Associate"
            course_org="Oracle University"
            course_org_link="https://mylearn.oracle.com/ou/learning-path/become-an-oci-foundations-associate-2023/122043"
            course_logo={OCIF2023CA}
            certificate_link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4DBEF6FEA727973AD7E30CEE7B2F23DE44E08FBC67A30ED3985736CD4F4165BC"
            certificate_color_code="#9b5734"
          />

          <CertificationCard
            course_title="New Relic Observability Practitioner Badge"
            course_org="New Relic University"
            course_org_link="https://learn.newrelic.com/"
            course_logo={NR_Observability_Practitioner}
            certificate_link="https://credentials.newrelic.com/b0dd13d0-4fb0-46b0-9153-2cefbee1d273#gs.0pu08n"
            certificate_color_code="#16e884"
          />

          <CertificationCard
            course_title="New Relic Observability Foundations Badge"
            course_org="New Relic University"
            course_org_link="https://learn.newrelic.com/"
            course_logo={NR_Observability_Foundations}
            certificate_link="https://credentials.newrelic.com/5a7b636f-8b67-43fc-ab97-7f22945ef96f#gs.0q1hhn"
            certificate_color_code="#16e884"
          />

          <CertificationCard
            course_title="Full Stack Observability Practitioner Exam"
            course_org="New Relic University"
            course_org_link="https://learn.newrelic.com/"
            course_logo={NR_Full_Stack_Observability_Practitioner}
            certificate_link="https://credentials.newrelic.com/5bd08f4b-8331-4e4f-a00d-534c141ba69d"
            certificate_color_code="#16e884"
          />

          <CertificationCard
            course_title="AI for Medicine Specialization"
            course_org="DeepLearning.AI"
            course_org_link="https://www.deeplearning.ai/courses/ai-for-medicine-specialization/"
            course_logo={DeepLearningAI}
            certificate_link="https://www.coursera.org/account/accomplishments/specialization/KQD3MKQFMMYS"
            certificate_color_code="#3C7AE4"
          />

          <CertificationCard
            course_title="The complete Python GUI with PySimpleGUI"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/the-complete-python-gui-with-pysimplegui-for-2020/"
            course_logo={PySimpleGui}
            certificate_link="https://www.udemy.com/certificate/UC-5e397ce4-0666-4963-b142-6850142842bd/"
            certificate_color_code="#282828"
          />
        </div>
      </div>
    </>
  );
}

export default CertificationStack;
