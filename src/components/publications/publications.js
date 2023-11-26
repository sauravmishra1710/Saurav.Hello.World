import "./publications.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Bounce, Fade } from "react-reveal";
import Abstract from "./Abstract";
import CardBook from "./cardBook";
import publication from "../../img/page_logos/publications.jpg";
import BookNerd from "../../img/page_logos/BookNerd.png";

const journals = [
  {
    slNo: 1,
    title:
      "A Comparative Study for Time-to-Event Analysis and Survival Prediction for Heart Failure Condition using Machine Learning Techniques",
    publishedOn: "July 2022",
    jName: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/issue/view/12"
        target="_blank"
      >
        Journal of Electronics, Electromedical Engineering, and Medical
        Informatics Vol: 4, No: 3
      </a>
    ),
    linkToPdf: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/article/view/225/94"
        target="_blank"
      >
        Read Paper Online
      </a>
    ),
    codeRepo: (
      <a
        href="https://github.com/sauravmishra1710/Heart-Failure-Condition-And-Survival-Analysis"
        target="_blank"
      >
        Source Code
      </a>
    ),
    abstract:
      "Heart Failure, an ailment in which the heart isn’t functioning as effectively as it should, causing in an insufficient cardiac output. The effectual functioning of the human body is dependent on how well the heart is able to pump oxygenated, and nutrient rich blood to the tissues and cells. Heart failure falls into the category of cardiovascular diseases -the disorders of the heart and blood vessels. One of the leading causes of global deaths resulting in an estimated 17.9 million deaths globally every year. The condition of heart failure results out of structural changes to the cardiac muscles majorly in the left ventricle. The  weakened  muscles  cause  the  ventricle  to  lose  its  ability  to  contract  completely.  Since  the  left  ventricle  generates  the required pressure for blood circulation, any kind of a failure condition results in the reduction of cardiac power output. This study aims to conduct a thorough survival analysis and survival prediction on the data of 299 patients classified into the class III/IV ofheart failure and diagnosed with left ventricular systolic dysfunction. Survival analysis involves the study of the effect of a mediation assessed by measuring the number of subjects survived after that mediation over a period of time. The time starting  from  a  distinct  point  to  the  occurrence  of  a  certain  event,  for  example  death  is  known  as  survival  time  and  the corresponding analysis is known as survival analysis. The analysis was performed using the methods of Kaplan-Meier (KM) estimates and Cox Potential Hazard regression. KM plots showed the survival estimates as a function of each clinical feature and how each feature at various levels affect survival over the period of time. Cox regression modelled the hazard of death event around the clinical features used for the study. As a result of the analysis, ejection fraction, serum creatinine, time and age were identified as highly significant and major risk factors in the advanced stages of heart failure. Age and rise in level of serum creatinine have adeleterious effecton the survival chances. Ejection Fraction has a beneficial effect on survival and with a unit increase in the in the EF level the probability of death event decreases by ~5.2%. Higher rate of mortality is observed during the initial days post diagnosis and the hazard gradually decreases if patients have lived for a certain number of days. Hypertension  and  anemic  condition  also  seem  to  be  high  risk  factors.  Machine  learning  classification  models  for  survival prediction were built using the most significant variables found from survival analysis. SVM, decision tree, random forest, XGBoost,  and  LightGBM  algorithm  were  implemented,  and  all  the  models  seem  to  perform  well  enough.  However,    the availability of more data will make the models more stable and robust. Smart solutions, like this can reduce the risk of heart failure condition by providing accurate prognosis, survival projections, and risk predictions. Technology and data can combine together to address any disparities in treatment, design better care plan, and improve patient health outcomes. Smart health AI solutions would enhance healthcare policies, enable physicians to look beyond the conventional practices, and increase the patient satisfaction levels not only in case of heart failure conditions but healthcare in general.",
  },
  {
    slNo: 2,
    title:
      " Artificial Intelligence: A Review of Progress and Prospects in Medicine and Healthcare",
    publishedOn: "January 2022",
    jName: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/issue/view/9"
        target="_blank"
      >
        Journal of Electronics, Electromedical Engineering, and Medical
        Informatics Vol: 4, No: 1
      </a>
    ),
    linkToPdf: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/article/view/180/80"
        target="_blank"
      >
        Read Paper Online
      </a>
    ),
    codeRepo: "NA - This is a review paper.",
    abstract:
      "Andrew NG, a leading philosopher in the field of Artificial Intelligence (AI) once quoted“AI is the new electricity” which  has  the  potential  to  transform  and drive  every  industry.  The  most  important driving  factor for  the  AI  transformation  will  be  data.  Clive  Humby,  a  data  science  entrepreneur  was  once quoted saying “data is the new oil”and data analytics being the “combustion engine”will drive the AI led innovations. The rapid rise of Artificial Intelligence technologies in the past decade, has inspired industries to  invest  in  every  opportunity  for  integrating  AI  solutions  to  their  products.  Research,  development,  and innovation in the field of AI are shapingvarious industries like automobile, manufacturing, finance, retail, supply chain management, and education among others. The healthcare industry has also been adopting the ways  of  AI  into  various  workflows  within  the  domain.  With  the  evolution  in  computing  and  processing powers coupled with hardware modernizations, the adoption of AI looks more feasible than ever. Research and Innovations are happening in almost every field of healthcare and hospital workflows with the target of making  healthcare  processesmore  efficient  &  accessible,  increase  the  overall  state  of  healthcare,  reduce physician stress levels, and increase the patient satisfaction levels. The conventional ways in which healthcare and clinical workflows have been operating are now starting to see the change with the integration of many data driven AI solutions. The digital innovations are making life easy for healthcare professionals allowing them  to  spend  more  time  listening  to  the  problems  of  patients  and  consequently  increasing  the  patient satisfaction levels. However, there are limitations and concerns on security of Protected Health Information which have to be addressed for a seamless amalgamation of AI systems into the healthcare domain. Many papers have been published which mostly talk about one particular field/problemin the healthcare domain. No publications have covered the opportunities provided by AI technologies to the entire healthcare domain. This review paper discussesin detail about the progress AI has been able to make in the healthcare domain holistically and  what  the  future of  AI looks  like.  The  paper  also  discusses  about  the  implementation opportunities  various  AI  technologies  like  Machine  Learning,  Deep  Learning,  Reinforcement  Learning, Natural  Language  Processing,  ComputerVision  provide  in  different  fields  of  healthcare  and  clinical workflows and how Artificial Intelligence systems will boost the capabilities of healthcare professionals in restoring the human touch in patient-physician encounters. A physician’s intuition and judgement will always remain better suited since each case, each health condition, and each person is unique in its own way, but AI methods  can  help  enhance  the  accuracy  of  diagnosis,  assist  physicians  in  making  improved  and  precise clinical decisions.",
  },
  {
    slNo: 3,
    title: "Malaria Parasite Detection using Efficient Neural Ensembles",
    publishedOn: "October 2021",
    jName: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/issue/view/10"
        target="_blank"
      >
        Journal of Electronics, Electromedical Engineering, and Medical
        Informatics Vol: 3, No: 3
      </a>
    ),
    linkToPdf: (
      <a
        href="https://jeeemi.org/index.php/jeeemi/article/view/147/75"
        target="_blank"
      >
        Read Paper Online
      </a>
    ),
    codeRepo: (
      <a
        href="https://github.com/sauravmishra1710/Malaria-Detection-Using-Deep-Learning-Techniques"
        target="_blank"
      >
        Source Code
      </a>
    ),
    abstract:
      "Caused by the bite of the Anopheles mosquito infected with the parasite of genus Plasmodium, malaria has remained a major burden towards healthcare for years,with approximate 400,000 deaths reported globally every year. The traditional diagnosis process for malaria involves an examination of the blood smear slide  under  the  microscope.  This  process  is  not  only  time-consuming  but  also  requires  pathologists  to  be highly  skilled  in  their  work.  Timely  diagnosis  and  availability  of  robust  diagnostic  facilities  and  skilled laboratory technicians are very much vital to reduce the mortality rate. This study aims to build a system that help  in  timely  and  accurate  diagnosis  of  malaria  which  would  help  in  reducing  the  mortality  rate  and eventually help is attaining a malaria free environment. Applying deep learning techniques such as transfer learning  and  snapshot  ensembleto  automate  the  detection  of  the  parasite  in  the  thin  blood  smear  images. Snapshot ensemble, a technique to create better performing ensembles with a limited training budget. Instead of training multiple models, snapshots are recorded during the training phase,which are later ensembled to create one strong model. All the models were evaluated against the following metrics -F1 score, Accuracy, Precision,   Recall,   Mathews   Correlation   Coefficient   (MCC),   Area   Under   the   Receiver   Operating Characteristics  (AUC-ROC)  and  the  Area  under  the  Precision  Recall  curve  (AUC-PR).  The  snapshot ensemblemodel created by combining the snapshots of the EfficientNet-B0 pre-trained model outperformed every other model achieving a f1 score -99.37%, precision -99.52% and recall -99.23%. The results show the potential of modelensembles which combine the predictive power of multiple weal models to create a single  efficient  model  that  is  better  equipped  to  handle  the real-worlddata.  The  GradCAM  experiment displayed the gradient activation maps of the last convolution layer to visually explicate where and what a model sees in an image to classify them into a particular class. The models in this study correctly activate the stained  parasitic  region  of  interest  in  the  thin  blood  smear  images.  Such  visuals  make  the  model  more transparent, explainable, and trustworthy which are very much essential for deploying AI based models in the healthcare network.",
  },
];

const Publications = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "slNo",
        header: "Sl No.",
        size: 2,
      },
      {
        accessorKey: "title",
        header: "Paper Title",
        size: 150,
      },
      {
        accessorKey: "publishedOn",
        header: "Published On",
        size: 50,
      },
      {
        accessorKey: "jName",
        header: "Journal Name",
        size: 100,
      },
      {
        accessorKey: "linkToPdf",
        header: "Paper Link",
        size: 50,
      },
      {
        accessorKey: "codeRepo",
        header: "Code Repository",
        size: 50,
      },
    ],
    []
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [abstract, setAbstract] = useState("");
  const [title, setTitle] = useState("");
  const [fullPaperLink, setfullPaperLink] = useState("");
  let articleAbstract;
  let articleTitle;
  let pdfLink;

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="col-lg-10" style={{ marginTop: "60px" }}>
              <Bounce top duration={1000}>
                <h1 id="heading" className="purple">
                  Peer Reviewed Publications
                </h1>
              </Bounce>
              <div className="publications-text">
                <Bounce right duration={1000}>
                  <p>
                    The inspiration to write peer reviewed papers arose during
                    the days of my masters in AI & ML where I had to do my
                    dissertation for the end project. The process of writing
                    long thesis was something{" "}
                    <span className="purple">
                      <b> completely new to me, the learnings involved</b>
                    </span>{" "}
                    inspired me to continue the process so that knowledge
                    sharing is available to every one. It is also a way to make
                    my work available to the{" "}
                    <span className="purple">
                      <b>
                        larger tech community and access to new learning is
                        seamlessly available across domains
                      </b>
                    </span>
                    .
                  </p>{" "}
                </Bounce>
                <Bounce left duration={1000}>
                  <p>
                    Also,{" "}
                    <span className="purple">
                      <b>
                        the fact that my work could help others in some ways
                        also motivates to continue writing, publishing, and
                        sharing
                      </b>
                    </span>
                    .
                  </p>{" "}
                </Bounce>
                <Bounce right duration={1000}>
                  <p>All of my recently published papers are listed below.</p>
                </Bounce>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Fade bottom diatance="500px">
              <img
                className="image"
                src={publication}
                alt=""
                height={600}
                width={800}
              />
            </Fade>
          </Col>
        </Row>
        <Row>
          <div className="publications">
            <h1 id="heading" className="purple">
              {" "}
              Recent Publications{" "}
            </h1>
            <p style={{ fontSize: "10px", color: "red", fontWeight: "800" }}>
              <sup>*</sup>Click anywhere in the row to view the abstract.
            </p>
            <MaterialReactTable
              columns={columns}
              data={journals}
              enableSorting={false}
              enableFilters={false}
              enableTopToolbar={false}
              enableBottomToolbar={false}
              enableDensityToggle={false}
              enableFullScreenToggle={false}
              enableColumnResizing={false}
              enableColumnActions={false}
              enableColumnFilters={false}
              // muiTableContainerProps={{ sx: { maxWidth: '100%', maxHeight: '50%' }, }}
              muiTableBodyRowProps={{
                onClick: (event) => {
                  // disable the row click when clicked on a genuine href link
                  if (event.target.tagName.toLowerCase() !== "a") {
                    articleAbstract =
                      journals[
                        Number(
                          event.target.parentNode.childNodes[0].innerText
                        ) - 1
                      ].abstract;
                    articleTitle =
                      journals[
                        Number(
                          event.target.parentNode.childNodes[0].innerText
                        ) - 1
                      ].title;
                    pdfLink =
                      journals[
                        event.target.parentNode.childNodes[0].innerText - 1
                      ].linkToPdf.props.href;
                    setAbstract(articleAbstract);
                    setTitle(articleTitle);
                    setfullPaperLink(pdfLink);
                    handleShow();
                  }
                },
              }}
            />
          </div>
        </Row>
        <Row>
          <Abstract
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            abstract={abstract}
            title={title}
            fullPaperLink={fullPaperLink}
          />
        </Row>
        <Row>
          <Col md={9}>
            <div className="col-lg-10" style={{ marginTop: "20px" }}>
              <Bounce right duration={1000}>
                <h1 id="heading" className="purple">
                  Books I have Read
                </h1>
              </Bounce>

              <div className="publications-text">
                <Bounce right duration={1000}>
                  <p>
                    Not a book nerd as the picture would suggest but I am more
                    kind of a seasonal reader. But once I get into my reading
                    mode, I want to finish it off in a sitting or two. Starting
                    with the exchange of the Enid Blyton's & the Agatha
                    Christie's while in high school to now reading books on
                    space-science & universe, to impact of AI in healthacre, my
                    reading journey has been a mix of multiple start & stop kind
                    of phases.
                  </p>
                </Bounce>
                <Bounce left duration={1000}>
                  <p>
                    Starting with Enid Blyton's The famous Five & The Secret
                    Seven to J. K. Rowling's portrayl of characters Harry,
                    Hermione, & Ron had been a major motivation back then to be
                    glued to The Harry Potter series and getting me addicted to
                    novels. It then transitioned me to the next phase of
                    enjoying my engineering days reading about what not to do at{" "}
                    <s>engineering colleges</s> IITs? with Five Point Someone,
                    and which 3 mistakes to not repeat with the 3 Mistakes of My
                    Life from Chetan Bhagat's leafs. And more recently, the
                    curious neurons in me have made me reading about the The Big
                    Bang and the events that followed leading to the creation of
                    our Universe which with it's continuous state of infinite
                    expansion opens us to a source of infinite knowledge.
                  </p>
                  <p></p>
                </Bounce>
                <Bounce right duration={1000}>
                  <p>Below are a few books I have read...</p>
                </Bounce>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <Bounce top>
              <div style={{ marginTop: "30px", marginRight: "30px" }}>
                <img
                  // className="image"
                  src={BookNerd}
                  alt=""
                  height={400}
                  width={400}
                />
              </div>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <div>
            <CardBook />
            <p>
              Starting with Enid Blyton's The famous Five & The Secret Seven to
              J. K. Rowling's portrayl of characters Harry, Hermione, & Ron had
              been a major motivation back then to be glued to The Harry Potter
              series and getting me addicted to novels.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Publications;
