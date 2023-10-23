import React, { useContext } from "react";
import "./projects.css";
import Card from "./card";
import ThemeContext from "../../utility/themeContext";
import imgClassification from "../../img/imgClassification.png";
import heartAnalysisImg from "../../img/heartAnalysis.jpg";

const Projects = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: theme ? "white" : "black"
      }}
      id="projectSection"
    >
      <h2 id="projectHeading">Artificial Intelligence and Deep Learning</h2>
      <div
        style={{
          width: "80vw",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          title="Image Classification with React and Tensorflow JS"
          srcLink="https://github.com/sauravmishra1710/Image-Classification-with-React-and-Tensorflow-js/"
          miscLink="https://sauravmishra1710.github.io/Image-Classification-with-React-and-Tensorflow-js/"
          description={[
            "A simple image classification app created using tensorflow-js and react. The app uses the pre-built MobileNet v2 model for image classification without going through any additional training process.",
            "Key Technologies Used: ReactJS, TensorflowJS, and hosted on github pages."
          ]}
          miscDescription="Demo"
          image={imgClassification}
        />
        <Card
          title="Heart Failure Condition And Survival Analysis"
          srcLink="https://github.com/sauravmishra1710/Heart-Failure-Condition-And-Survival-Analysis"
          miscLink="https://jeeemi.org/index.php/jeeemi/article/view/225"
          description={[
            "Perform a survival analysis based on the time-to-event (death event) for the subjects to assess the likelihood of a death and severity of the heart failure condition.",
            "Key technology: Python 3.8.8, Numpy, Pandas, Matplotlib, Plotly, Kaplan-Meier estimates, Cox regression models XGBoost, and LightGBM "
          ]}
          miscDescription="View Paper"
          image={heartAnalysisImg}
        />
        
      </div>
    </div>
  );
};

export default Projects;
