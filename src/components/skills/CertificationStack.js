import React from "react";
import { Row, Container } from "react-bootstrap";
import CertificationCard from "./CertificationCard.js";
import "./skills.css";

import NR_Observability_Practitioner from "../../img/certifications/NR_Observability_Practitioner.png";
import NR_Observability_Foundations from "../../img/certifications/NR_Observability_Foundations.png";
import NR_Full_Stack_Observability_Practitioner from "../../img/certifications/NR_Full_Stack_Observability_Practitioner.png";
import OpevCV_DeepLearning from "../../img/certifications/OpevCV_DeepLearning.jpeg";
import DeepLearningAI from "../../img/certifications/DeepLearningAI.png";
import PythonBootcamp from "../../img/certifications/PythonBootcamp.png";
import PySimpleGui from "../../img/certifications/pysimplegui.png";
import Tensorflow_With_Python from "../../img/certifications/Tensorflow_With_Python.png";
import OpenCV from "../../img/certifications/OpenCV.png";
import EnsembleLearning from "../../img/certifications/EnsembleLearning.png";

function CertificationStack() {
  return (
    <>
      <div className="skills-parent" id="skillsSection">
        <h2 className="purple heading">
          Certifications & Badges
        </h2>
        <div className="all-skills-container">
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
            course_title="Introduction to Deep Learning with OpenCV"
            course_org="LinkedIn Learning"
            course_org_link="https://www.linkedin.com/learning/introduction-to-deep-learning-with-opencv"
            course_logo={OpevCV_DeepLearning}
            certificate_link="https://www.linkedin.com/learning/certificates/cdc38890e3f1ac4f3ac362b49480363b14e63069359b1915531836780d04dc99?trk=backfilled_certificate&accountId=42751868&u=42751868&success=true&authUUID=nw95o0sjRAiNFAMttjj2YQ%3D%3D"
            certificate_color_code="#E0E0E0"
          />

          <CertificationCard
            course_title="AI for Medical Diagnosis"
            course_org="DeepLearning.AI"
            course_org_link="https://www.coursera.org/learn/ai-for-medical-diagnosis"
            course_logo={DeepLearningAI}
            certificate_link="https://www.coursera.org/account/accomplishments/verify/6S66A6AVQRZ7"
            certificate_color_code="#477E96"
          />

          <CertificationCard
            course_title="AI for Medical Prognosis"
            course_org="DeepLearning.AI"
            course_org_link="https://www.coursera.org/learn/ai-for-medical-prognosis"
            course_logo={DeepLearningAI}
            certificate_link="https://www.coursera.org/account/accomplishments/verify/P9EMJ7E2MMQF"
            certificate_color_code="#76FBC6"
          />

          <CertificationCard
            course_title="AI for Medical Treatment"
            course_org="DeepLearning.AI"
            course_org_link="https://www.coursera.org/learn/ai-for-medical-treatment"
            course_logo={DeepLearningAI}
            certificate_link="https://www.coursera.org/account/accomplishments/verify/3HT5E53TQZQE"
            certificate_color_code="#EC8590"
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
            course_title="The Complete Python Bootcamp From Zero to Hero in Python"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/complete-python-bootcamp/"
            course_logo={PythonBootcamp}
            certificate_link="https://www.udemy.com/certificate/UC-98C1HHE3/"
            certificate_color_code="#F7D35D"
          />

          <CertificationCard
            course_title="The complete Python GUI with PySimpleGUI"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/the-complete-python-gui-with-pysimplegui-for-2020/"
            course_logo={PySimpleGui}
            certificate_link="https://www.udemy.com/certificate/UC-5e397ce4-0666-4963-b142-6850142842bd/"
            certificate_color_code="#282828"
          />

          <CertificationCard
            course_title="Complete Guide to TensorFlow for Deep Learning with Python"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/"
            course_logo={Tensorflow_With_Python}
            certificate_link="https://www.udemy.com/certificate/UC-6ce00d32-51c0-476a-8c1b-df4510f989ad/"
            certificate_color_code="#E8963E"
          />

          <CertificationCard
            course_title="Python for Computer Vision with OpenCV and Deep Learning"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/python-for-computer-vision-with-opencv-and-deep-learning/"
            course_logo={OpenCV}
            certificate_link="https://www.udemy.com/certificate/UC-6a34b9c2-0090-47da-a054-02fc528530b7/"
            certificate_color_code="#E4EBF7"
          />

          <CertificationCard
            course_title="Ensemble Machine Learning in Python: Random Forest, AdaBoost"
            course_org="Ûdemy"
            course_org_link="https://www.udemy.com/course/machine-learning-in-python-random-forest-adaboost/"
            course_logo={EnsembleLearning}
            certificate_link="https://www.udemy.com/certificate/UC-9e020524-b603-4d21-9101-a008cf5e4908/"
            certificate_color_code="#D4FDA8"
          />
        </div>
      </div>
    </>
  );
}

export default CertificationStack;
