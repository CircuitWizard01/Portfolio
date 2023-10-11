import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings everyone, I am <span className="purple">Elijah Barnes </span>
            from <span className="purple"> Indianapolis, USA.</span>
            <br /> I am a programmer with 1 year of experience, currently based in Pheonix and guided by a multitude of platforms to get where I am today. 
            <br />
            An emerging student of <span className="purple"> Arizona State University</span> and <span className="purple"> Devslopes Web Academy</span>. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Engineering gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If I have seen further, it is by standing on the shoulders of giants."{" "}
          </p>
          <footer className="blockquote-footer">Issac Newton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
