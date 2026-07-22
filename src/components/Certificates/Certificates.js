import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificatesCard from "./CertificatesCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

// IMPORTACIÓN DE TUS INSIGNIAS CREDLY
import ibmBadge from "../../Assets/Certificates/cloud-computing-fundamentals.png";
import aiBadge from "../../Assets/Certificates/critical-career-skills-generative-ai-foundations.png";
import certiprofBadge from "../../Assets/Certificates/lifelong-learning-2026.png";
import pmiBadge from "../../Assets/Certificates/pmi-project-management-ready.png";
// NUEVAS INSIGNIAS DE PYTHON
import python1Badge from "../../Assets/Certificates/python-essentials-1.1.png";
import python2Badge from "../../Assets/Certificates/python-essentials-2.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Certificates() {
  // 1. Certificaciones Profesionales Principales (CON PYTHON 1 Y 2 AÑADIDOS)
  const mainCertificates = [
    {
      title: "Cloud Computing Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Issued Nov 2025",
      description: "Fundamental concepts of cloud computing, deployment models, and cloud architecture basics provided by IBM.",
      link: "https://www.credly.com/badges/ed2ebc24-7944-4563-b6fd-d7e4a0a35edf/public_url",
      imgPath: ibmBadge
    },
    {
      title: "Critical Career Skills - Generative AI Foundations",
      issuer: "Certiport, a Pearson VUE business",
      date: "Expires Dec 2030",
      description: "Foundational knowledge and core competencies in generative artificial intelligence technologies.",
      link: "https://www.credly.com/badges/da42c43b-96e4-460d-839f-ce46346e15b4/public_url",
      imgPath: aiBadge
    },
    {
      title: "PMI Project Management Ready™",
      issuer: "Project Management Institute (PMI)",
      date: "Expires Jul 2031",
      description: "Comprehensive introduction to project management principles, traditional methodologies, and agile frameworks.",
      link: "https://www.credly.com/badges/b5c9800f-3b72-4f9a-b408-659cff234b70/public_url",
      imgPath: pmiBadge
    },
    {
      title: "Lifelong Learning 2026",
      issuer: "Certiprof",
      date: "Expires Jan 2027",
      description: "Professional certification focused on continuous professional development, adaptability, and modern methodologies.",
      link: "https://www.credly.com/badges/25b5167d-72b8-46bc-9279-c7cb2a37919a/public_url",
      imgPath: certiprofBadge
    },
    {
      title: "Python Essentials 1",
      issuer: "Python Institute / Cisco",
      date: "Verified Credential",
      description: "Fundamental concepts of Python programming, data types, formatting, control flow, and basic logic structures.",
      link: "https://www.credly.com/badges/b4b9e40f-e093-48da-b83c-1f9a6d7e2129/public_url",
      imgPath: python1Badge
    },
    {
      title: "Python Essentials 2",
      issuer: "Python Institute / Cisco",
      date: "Verified Credential",
      description: "Advanced Python concepts including object-oriented programming, exceptions, file processing, and modules.",
      link: "https://www.credly.com/badges/4d01892f-a75c-45f7-b96d-55f7121f4e9d/public_url",
      imgPath: python2Badge
    },
  ];

  // 2. Cursos Complementarios (Udemy y Especializaciones Técnicas)
  const udemyCertificates = [
    {
      title: "Master en ASP.NET MVC Entity Framework .NET",
      issuer: "Udemy",
      description: "Backend architecture, database modeling, and enterprise web development using .NET ecosystem."
    },
    {
      title: "Bootcamp Diseño UX/UI (Design Thinking y Figma)",
      issuer: "Udemy",
      description: "User experience principles, interface design workflows, wireframing, and interactive prototyping in Figma."
    },
    {
      title: "Design Thinking - De Cero a Maestro",
      issuer: "Udemy",
      description: "Advanced problem-solving framework focused on empathy mapping, ideation, and rapid prototyping."
    },
    {
      title: "Curso de Java",
      issuer: "Udemy",
      description: "Object-oriented programming principles, data structures, and core backend development logic in Java."
    },
    {
      title: "La Guía Definitiva Unity",
      issuer: "Udemy",
      description: "Game development fundamentals, C# scripting, and interactive 2D/3D environment design."
    },
    {
      title: "Programming Essentials in C",
      issuer: "Udemy / Cisco Networking",
      description: "Procedural programming, memory management, pointers, and algorithm design using the C language."
    },
    {
      title: "Introducción a la Programación con C desde Cero",
      issuer: "Udemy",
      description: "Foundational logic structures, loops, conditionals, and syntax fundamentals."
    },
    {
      title: "Estadística Descriptiva e Inferencial con R",
      issuer: "Udemy",
      description: "Data analysis, probability models, hypothesis testing, and statistical computing using R."
    },
    {
      title: "Machine Learning Onramp & MATLAB Onramp",
      issuer: "MathWorks",
      description: "Introductory training on data processing, predictive modeling algorithms, and MATLAB environment workflows."
    },
    {
      title: "Understand and Elicit Requirements with Business Analysis",
      issuer: "Udemy",
      description: "Techniques for stakeholder interviewing, functional specification writing, and process mapping."
    },
    {
      title: "Innovación Destilada y Creatividad en los Negocios",
      issuer: "Udemy",
      description: "Business innovation models, creative problem-solving methodologies, and value proposition design."
    },
    {
      title: "Certificado Arduino & Milo Space",
      issuer: "Specialized Training",
      description: "Embedded systems programming, hardware integration, sensor interfacing, and microcontrollers."
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <h1 className="project-heading">
            My Professional <strong className="purple">Certificates</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
            Official credentials, professional licenses, and specialized training programs I have completed.
          </p>

          <h2 style={{ color: "white", fontSize: "1.8em", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
            Featured & <strong className="purple">Professional Badges</strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            {mainCertificates.map((cert, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div variants={cardVariants} style={{ height: "100%" }}>
                  <CertificatesCard
                    imgPath={cert.imgPath}
                    isBlog={false}
                    title={cert.title}
                    description={`${cert.issuer} — ${cert.date}\n\n${cert.description}`}
                    demoLink={cert.link !== "#" ? cert.link : null}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <h2 style={{ color: "white", fontSize: "1.8em", marginTop: "30px", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
            Specialized Courses & <strong className="purple">Udemy Training</strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {udemyCertificates.map((cert, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div variants={cardVariants} style={{ height: "100%" }}>
                  <CertificatesCard
                    isBlog={false}
                    title={cert.title}
                    description={`${cert.issuer}\n\n${cert.description}`}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Certificates;