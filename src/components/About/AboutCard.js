import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Stefan Jativa</span> from
            <span className="purple"> Quito, Ecuador.</span>
            <br />
            I'm currently studying Software Engineering and focusing on becoming a
            <span className="purple"> Machine Learning Engineer.</span>
            <br />
            I’m passionate about AI, Machine Learnings, Deep Learning, and Data Science, working with tools like
            <span className="purple"> Python, TensorFlow, Keras, Scikit-learn, and Pandas.</span>
            <br />
            I'm also preparing for AWS certification to boost my cloud skills for deploying ML models.
            <br />
            <br />
            Outside of tech, some things I really enjoy include:
          </p>
          <ul>
            <li className="about-activity">✦ Playing video games 🎮</li>

            <li className="about-activity">
              ✦ Playing chess ♟️
            </li>
            <li className="about-activity">
              ✦ Reading books 📚
            </li>
            <li className="about-activity">
              ✦ Going to the gym 💪
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
