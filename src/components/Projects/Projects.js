import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gallery from "../../Assets/Projects/unsplash.png";
import gpt from "../../Assets/Projects/gpt.png";
import hooBank from "../../Assets/Projects/hooBank.png";
import chatify from "../../Assets/Projects/chatify.png";
import portfolio from "../../Assets/Projects/cyportfolio.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify Clone"
              description="A web-based chat application replicating Chatify's core features. Enables real-time messaging with user authentication and chat rooms."
              ghLink="https://github.com/"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog "
              description="A digital platform for writers and readers. Features include post creation, categorization, comments, and user profiles."
              ghLink="https://github.com/"
              demoLink="https://blogs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hooBank}
              isBlog={false}
              title="Modern UI/UX Build - HooBank"
              description="A user-centric banking website with intuitive navigation, secure login, and dashboard. Showcases financial products and account management tools."
              ghLink="https://github.com/"
              demoLink="https://hoobank.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Unsplash Masonry Gallery"
              description="A simple web gallery displaying images from Unsplash.com in a masonry layout. Built with a focus on API integration and responsive design."
              ghLink="https://github.com/CircuitWizard01/imageSearch"
              demoLink="https://circuitwizard01.github.io/imageSearch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Copywriter Portfolio"
              description="A professional showcase of written content. Highlights include ad campaigns, web content, articles, and client testimonials."
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt}
              isBlog={false}
              title="GPT SAAS"
              description="A visually striking frontend design showcasing a GPT-based service. Emphasizes modern UI/UX principles without backend functionalities."
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
