import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import marketing from "../../Assets/Projects/Marketing.png";
import emotion from "../../Assets/Projects/emotion.png";
import scinema from "../../Assets/Projects/SCinema.png";
import easypark from "../../Assets/Projects/EasyPark.png";
import resume from "../../Assets/Projects/Resume.png";
import thinkwell from "../../Assets/Projects/ThinkWell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easypark}
              isBlog={false}
              title="EasyPark"
              description="EasyPark is a React Native mobile app designed to simplify the process of renting and sharing private parking spots."
              ghLink="https://github.com/shalevg12/EasyPark"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thinkwell}
              isBlog={false}
              title="ThinkWell"
              description="ThinkWell is an interactive computer game developed in C# and Unity with the integration of Firebase Database. The primary objective of this project was to create the first interactive computer game designed specifically for children with autism."
              ghLink="https://github.com/shalevg12/ThinkWell"
              /* demoLink="https://blogs.soumya-jit.tech/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scinema}
              isBlog={false}
              title="SCinema"
              description=" This project is a React-based website designed to simplify the process of booking movie tickets for the cinema. The website utilizes Expo and Node.js technologies, with Firebase serving as the database."
              ghLink="https://github.com/shalevg12/Cinema"
              /* demoLink="https://editor.soumya-jit.tech/"     */          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketing}
              isBlog={false}
              title="Marketing"
              description="Gabay's is a React / Next.js landing page built with Tailwind CSS"
              ghLink="https://github.com/shalevg12/Gabay_Marketing"
              demoLink="https://gabaysmarketing.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Shalev-Web-Resume"
              description="React Resume is a responsive and customizable CV/Resume template designed to help you easily create a professional CV or Resume. Simply clone or fork the repository, edit the data.js file inside the schemas folder, and build your own CV."
              ghLink="https://github.com/shalevg12/Shalev_Resume"
              demoLink="https://shalevwebresume.netlify.app"
            />
          </Col>

{/*           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://shalevwebresume.netlify.app"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
