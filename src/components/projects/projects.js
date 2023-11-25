import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./projects.css";
import Card from "./card";
import ThemeContext from "../../utility/themeContext";
import { Bounce, Fade } from "react-reveal";

import working from "../../img/page_logos/working.jpg";
import imgClassification from "../../img/projects/imgClassification.png";
import heartAnalysisImg from "../../img/projects/heartAnalysis.jpg";
import unetpp from "../../img/projects/nested_unet_architecture.png";
import unet from "../../img/projects/Unet_Architecture.png";
import inception from "../../img/projects/inception.png";
import batchnorm from "../../img/projects/BatchNorm.jpg";
import gradcam from "../../img/projects/gradcam.png";
import covid19 from "../../img/projects/covid19.jpg";
import malaria from "../../img/projects/malaria.png";
import notepadpy from "../../img/projects/NotepadPy.gif";
import tictactoe from "../../img/projects/tictactoe.gif";
import imageviewer from "../../img/projects/PyImageViewer.jpg";
import covid19Analysis from "../../img/projects/covid19_analysis.png";
import facemask from "../../img/projects/FaceMask.gif";
import healthcareAI from "../../img/projects/HealthcareAI.png";

const Projects = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={5}>
            <div
              className="col-lg-8"
              style={{ marginTop: "80px", marginLeft: "50px" }}
            >
              <Fade top duration={1000}>
                <h1 id="heading" className="purple">
                  Projects
                </h1>
              </Fade>

              <div className="project-text">
                <Bounce right duration={1000}>
                  <p>
                    Actual learning experience comes by actively engaging in
                    putting to action the theoretical knowledge gained for
                    practical implementation to design and build solutions. It
                    helps gain conceptual insights as well as practical
                    expertise.
                  </p>
                </Bounce>
                <p></p>
                <Bounce left duration={1000}>
                  <p>
                    I always try to put{" "}
                    <span className="purple">
                      <b>
                        {" "}
                        my learnings into practical solutions to gain much
                        needed hands-on experience
                      </b>
                    </span>
                    .
                  </p>
                </Bounce>
                <p></p>
                <Bounce left duration={1000}>
                  <p>Here are a few projects I have worked on...</p>
                </Bounce>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Bounce bottom duration={1000}>
              <div className="col-lg-6">
                <img
                  className="images"
                  src={working}
                  alt=""
                  height={600}
                  width={1000}
                />
              </div>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              // color: theme ? "white" : "black"
            }}
            id="projectSection"
          >
            <Bounce right duration={1000}>
              <h1 id="projectHeading" className="purple">
                Artificial Intelligence and Deep Learning
              </h1>
            </Bounce>
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
                  "Key Technologies Used: ReactJS, TensorflowJS, and hosted on github pages.",
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
                  "Key technologies: Python 3.8.8, Numpy, Pandas, Matplotlib, Plotly, Kaplan-Meier estimates, Cox regression models XGBoost, and LightGBM ",
                ]}
                miscDescription="View Paper"
                image={heartAnalysisImg}
              />

              <Card
                title="Malaria Detection Using Deep Learning Techniques"
                srcLink="https://github.com/sauravmishra1710/Malaria-Detection-Using-Deep-Learning-Techniques"
                miscLink="https://doi.org/10.35882/jeeemi.v3i3.2"
                description={[
                  "This study aims to build a time efficient system by applying snapshot ensemble techniques based on deep learning to automate the detection of the parasite using whole slide images of thin blood smears.",
                  "Key technologies: Python, Tensorflow, OpenCV, Scikit-image, Matplotlib, Numpy, Pandas",
                ]}
                miscDescription="Journal Publication"
                image={malaria}
              />

              <Card
                title="Brain tumor segmentation using UNet++"
                srcLink="https://github.com/sauravmishra1710/UNet-Plus-Plus---Brain-Tumor-Segmentation"
                miscLink="https://github.com/sauravmishra1710/UNet-Plus-Plus---Brain-Tumor-Segmentation/blob/main/BrainTumorSegmentation.ipynb"
                description={[
                  "A systematic review and implementation of the UNet++, a convolutional neural network (nested U-Net architecture) dedicated for biomedical image segmentation.",
                  "Key technologies: Python, Tensorflow, OpenCV, Numpy, Matplotlib",
                ]}
                miscDescription="Demo Notebook"
                image={unetpp}
              />

              <Card
                title="Cellular Nuclei Image Segmentation using UNet"
                srcLink="https://github.com/sauravmishra1710/U-Net---Biomedical-Image-Segmentation"
                miscLink="https://github.com/sauravmishra1710/U-Net---Biomedical-Image-Segmentation/blob/main/UNet%20In%20Action.ipynb"
                description={[
                  "A systematic review and implementation of the UNet segmentation model, a convolutional neural network dedicated for biomedical image segmentation. Application of the model to segment and identify the cell nuclei.",
                  "Key technologies: Python, Tensorflow, OpenCV, Numpy, Matplotlib",
                ]}
                miscDescription="Demo Notebook"
                image={unet}
              />

              <Card
                title="EXPLAINABLE AI - Skin Cancer Detection Explained with GRADCAM"
                srcLink="https://github.com/sauravmishra1710/EXPLAINABLE-AI---Skin-Cancer-Detection-explained-with-GRADCAM"
                miscLink="https://github.com/sauravmishra1710/EXPLAINABLE-AI---Skin-Cancer-Detection-explained-with-GRADCAM/blob/main/Skin_Cancer_Detection%20(GRAD-CAM%20Activations).ipynb"
                description={[
                  "Diagnose the presence of skin cancer using CNN & explain the reasoning to arrive at the decision utilizing the Grad-CAM technique by using the gradients flowing into the final convolutional layer and highlighting the important regions considered for arriving at the decision.",
                  "Key technologies: Python, Tensorflow, OpenCV, Scikit-learn, Numpy, Pandas",
                ]}
                miscDescription="Demo Notebook"
                image={gradcam}
              />

              <Card
                title="Covid-19: Detection using Deep Learning"
                srcLink="https://github.com/sauravmishra1710/Covid-19-Detection-using-Deep-Learning"
                miscLink="https://github.com/sauravmishra1710/Covid-19-Detection-using-Deep-Learning/blob/main/Covid-19%20Detection%20using%20Pretrained%20Model.ipynb"
                description={[
                  "A Deep Learning based AI solution to help diagnose the presence of Covid-19 infection by analyzing the chest X-Ray images.",
                  "Key technologies: Python, Tensorflow, OpenCV, Scikit-image, Matplotlib, Numpy, Pandas",
                ]}
                miscDescription="Demo Notebook"
                image={covid19}
              />

              <Card
                title="Covid-19: Face Mask Detection"
                srcLink="https://github.com/sauravmishra1710/Face-Mask-Detection"
                miscLink="https://github.com/sauravmishra1710/Face-Mask-Detection/blob/master/Demo/FaceMask.gif"
                description={[
                  "AI based application to automatically detect if a person is wearing mask or not. It will be beneficial in places which deploy automated entry gates at malls, theatres, stadiums, indoor arena, gyms, station, airports.",
                  "Key technologies: Python, Tensorflow, Matplotlib, Numpy, Scikit-image",
                ]}
                miscDescription="Demo"
                image={facemask}
              />

              <Card
                title="Covid-19: A Geo Statistical Analysis"
                srcLink="https://github.com/sauravmishra1710/Covid-19---A-Geo-Statistical-Analysis"
                miscLink="https://www.kaggle.com/code/sauravmishra1710/covid-19-sars-cov-2-a-geographical-analysis/notebook"
                description={[
                  "A comprehensive analysis on the spread of the corona virus worldwide. The statistical analysis shows the spread using interactive charts and figures. The geographical analysis shows the spread on the geo maps of the majorly affected countries.",
                  "Key technologies: Python, Matplotlib, Plotly, folium, Numpy, Pandas",
                ]}
                miscDescription="Demo"
                image={covid19Analysis}
              />
            </div>
          </div>
        </Row>

        {/* Paper Reviews */}
        <Row>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              // color: theme ? "white" : "black"
            }}
            id="projectSection"
          >
            <Bounce left duration={1000}>
              <h1 id="projectHeading" className="purple">
                Paper Publications & Reviews
              </h1>
            </Bounce>
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
                title="Artificial Intelligence: A Review of Progress and Prospects in Medicine and Healthcare"
                srcLink="https://github.com/sauravmishra1710/Artificial-Intelligence-A-Review-of-Progress-and-Prospects-in-Medicine-and-Healthcare"
                miscLink="https://doi.org/10.35882/jeeemi.v4i1.1"
                description={[
                  "This paper discusses about the progress AI has made in the healthcare domain and what the future of AI looks like. It also discusses about the implementation opportunities various AI technologies provide in various fields of healthcare & clinical workflow, how AI systems will boost healthcare to restore human touch in patient-physician encounters.",
                ]}
                miscDescription="Published Paper"
                image={healthcareAI}
              />

              <Card
                title="Inception - Going Deeper with Convolutions"
                srcLink="https://github.com/sauravmishra1710/Inception---Going-Deeper-with-Convolutions"
                miscLink="https://arxiv.org/abs/1409.4842"
                description={[
                  "A systematic review and implementation of the Inception v1, v2, and v3 papers.",
                  "Key technologies: Python 3.8.8",
                ]}
                miscDescription="Original Paper"
                image={inception}
              />

              <Card
                title="Batch Normalization: Accelerate Training by Reducing Internal Covariate Shift"
                srcLink="https://github.com/sauravmishra1710/Batch-Normalization-and-Internal-Covariate-Shift"
                miscLink="https://arxiv.org/abs/1502.03167"
                description={[
                  "A systematic review and understanding of the following papers -",
                  "[1] Batch Normalization: Accelerate Training by Reducing Internal Covariate Shift",
                  "[2] How Does Batch Normalization Help Optimization?",
                  "Key technologies: Python 3.8.8",
                ]}
                miscDescription="Original Paper"
                image={batchnorm}
              />

              <Card
                title="UNet++: A Nested U-Net Architecture for Medical Image Segmentation"
                srcLink="https://github.com/sauravmishra1710/UNet-Plus-Plus---Brain-Tumor-Segmentation"
                miscLink="https://arxiv.org/abs/1807.10165"
                description={[
                  "A systematic review and implementation of the UNet++, a convolutional neural network (nested U-Net architecture) dedicated for biomedical image segmentation.",
                  "Key technologies: Python, Tensorflow, OpenCV, Numpy, Matplotlib",
                ]}
                miscDescription="Original Paper"
                image={unetpp}
              />

              <Card
                title="U-Net: Convolutional Networks for Biomedical Image Segmentation"
                srcLink="https://github.com/sauravmishra1710/U-Net---Biomedical-Image-Segmentation"
                miscLink="https://arxiv.org/abs/1505.04597"
                description={[
                  "A systematic review and implementation of the UNet segmentation model, a convolutional neural network dedicated for biomedical image segmentation.",
                  "Key technologies: Python, Tensorflow, OpenCV, Numpy, Matplotlib",
                ]}
                miscDescription="Original Paper"
                image={unet}
              />

              <Card
                title="Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization"
                srcLink="https://github.com/sauravmishra1710/EXPLAINABLE-AI---Skin-Cancer-Detection-explained-with-GRADCAM/tree/main"
                miscLink="https://arxiv.org/abs/1610.02391"
                description={[
                  "A systematic review and implementation of the Grad-CAM: Visual Explanations, uses the gradients of any target concept, flowing into the final convolutional layer to produce a coarse localization map highlighting important regions in the image for predicting the concept.",
                  "Key technologies: Python, Tensorflow, OpenCV, Numpy, Matplotlib",
                ]}
                miscDescription="Original Paper"
                image={gradcam}
              />
            </div>
          </div>
        </Row>

        {/* Python GUI */}
        <Row>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              // color: theme ? "white" : "black"
            }}
            id="projectSection"
          >
            <Bounce right duration={1000}>
              <h1 id="projectHeading" className="purple">
                Python Frontend GUI using PySimpleGUI
              </h1>
            </Bounce>
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
                title="NotepadPy+"
                srcLink="https://github.com/sauravmishra1710/NotepadPy-using-PySimpleGUI"
                miscLink="https://github.com/sauravmishra1710/Python-GUI-with-PySimpleGUI/blob/main/Sample%20Executables/NotepadPy%2B/NotepadPy%2B%20Demo.gif"
                description={[
                  "A notepad like application developed using the Python and PySimpleGUI framework.",
                  "Key technologies: Python, PySimpleGUI, TKinter",
                ]}
                miscDescription="Demo"
                image={notepadpy}
              />

              <Card
                title="Tic Tac Toe"
                srcLink="https://github.com/sauravmishra1710/Tic-Tac-Toe-using-PySimpleGUI"
                miscLink="https://github.com/sauravmishra1710/Tic-Tac-Toe-using-PySimpleGUI#game-demo"
                description={[
                  "The classic tic tac toe board game developed using PySimpleGUI and TKinter python libraries.",
                  "Key technologies: PySimpleGUI, TKinter",
                ]}
                miscDescription="Demo"
                image={tictactoe}
              />

              <Card
                title="Image Viewer"
                srcLink="https://github.com/sauravmishra1710/Python-GUI-with-PySimpleGUI/blob/main/Sample%20GUI%20Implementation/image_viewer.py"
                miscLink="https://github.com/sauravmishra1710/Python-GUI-with-PySimpleGUI/blob/main/Sample%20Executables/PyImageViewer/PyImageViewer.JPG"
                description={[
                  "A simple image viewer application to load and display all images in the selected directory.",
                  "Key technologies: PySimpleGUI, TKinter",
                ]}
                miscDescription="Demo"
                image={imageviewer}
              />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
