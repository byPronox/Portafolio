import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Hi! I'm Stefan Jativa, a passionate Software Engineering student from Quito, Ecuador, with a deep enthusiasm for <b className="purple">Artificial Intelligence</b>, <b className="purple">Machine Learning</b>, and <b className="purple">Deep Learning</b>.
                <br />
                <br />
                My journey is driven by curiosity and the desire to solve real-world problems through technology. I love building intelligent systems and exploring how data and algorithms can create meaningful impact.
                <br />
                <br />
                My main stack includes
                <i>
                  <b className="purple"> Python, JavaScript, C#, SQL Server, and React.js</b>
                </i>
                , and I am always eager to learn new tools and frameworks in the AI/ML ecosystem.
                <br />
                <br />
                I am currently working on projects that combine software engineering with AI, such as a catechesis management system for churches in Ecuador, and I am constantly seeking new challenges in <b className="purple">machine learning</b> and <b className="purple">cloud computing</b>.
                <br />
                <br />
                My goal is to become a <b className="purple">Machine Learning Engineer</b> and contribute to innovative solutions that make a difference. This portfolio is a reflection of my journey, my passion for AI, and my commitment to continuous growth.
              </p>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/byPronox"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/stefanjativa/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://discordapp.com/users/485218321952800774"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/stefanjativa/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:stefanjativa@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <MdEmail />
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;