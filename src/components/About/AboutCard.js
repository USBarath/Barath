import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Barath Uthamasathish </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br /> Myself I was Completed B.E. Mechanical Engineering from Coimbatore Institute of Technology 
            looking for an entry level role to kick-start my career. Start to learning about Mechanical Engineering and 
            Other technology to study practically and Developing my Knowledge in Cloud and DevOps Technologies
            <br />
            Additionally, I am currently employed as a software developer at
            Avasoft.
            <br />
            <br />
            Apart from Cloud and DevOps, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
              </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
            "Take it easy, Make it easy!"{" "}
          </p>
          <footer className="blockquote-footer">Barath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
