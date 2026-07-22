import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificatesCard from "./CertificatesCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

// ==========================================
// 1. IMPORTACIÓN DE INSIGNIAS CREDLY (INTOCABLE)
// ==========================================
import ibmBadge from "../../Assets/Certificates/cloud-computing-fundamentals.png";
import aiBadge from "../../Assets/Certificates/critical-career-skills-generative-ai-foundations.png";
import certiprofBadge from "../../Assets/Certificates/lifelong-learning-2026.png";
import pmiBadge from "../../Assets/Certificates/pmi-project-management-ready.png";
import python1Badge from "../../Assets/Certificates/python-essentials-1.1.png";
import python2Badge from "../../Assets/Certificates/python-essentials-2.png";

// ==========================================
// 2. IMPORTACIONES: IMÁGENES (PNG)
// ==========================================
import imgArduino from "../../Assets/Certificates/PNG/CERTIFICADO ARDUINO-1.png";
import imgUxUi from "../../Assets/Certificates/PNG/CERTIFICADO Bootcamp diseño UX UI aprende Design Thinking y Figma-1.png";
import imgJava from "../../Assets/Certificates/PNG/CERTIFICADO CURSO JAVA-1.png";
import imgLinux from "../../Assets/Certificates/PNG/CERTIFICADO DE LINUX UNHATED-1.png";
import imgDt from "../../Assets/Certificates/PNG/CERTIFICADO DESIGN THINKING-1.png";
import imgStartup from "../../Assets/Certificates/PNG/CERTIFICADO DESING THINKING AND GLOBAL STARTUP-1.png";
import imgDtMaestro from "../../Assets/Certificates/PNG/CERTIFICADO Design Thinking-De Cero a MAESTRO 2024-1.png";
import imgR from "../../Assets/Certificates/PNG/CERTIFICADO Estadística descriptiva e inferencial con R-1.png";
import imgInnovacion from "../../Assets/Certificates/PNG/CERTIFICADO Innovación Destilada de la Creatividad a los Resultados-1.png";
import imgCCero from "../../Assets/Certificates/PNG/CERTIFICADO Introducción a la Programación con el Lenguaje C desde Cero-1.png";
import imgUnity from "../../Assets/Certificates/PNG/CERTIFICADO La guía definitiva unity-1.png";
import imgAspNet from "../../Assets/Certificates/PNG/CERTIFICADO MASTER EN ASP.NET MVC ENTITY FRAMEWORK .NET-1.png";
import imgMatlab from "../../Assets/Certificates/PNG/CERTIFICADO MATLAB Onramp-1.png";
import imgMl from "../../Assets/Certificates/PNG/CERTIFICADO Machine Learning Onramp-1.png";
import imgMasterclass from "../../Assets/Certificates/PNG/CERTIFICADO Masterclass de Creatividad e Innovación en los Negocios-1.png";
import imgCEssentials from "../../Assets/Certificates/PNG/CERTIFICADO Programming Essentials in C-1.png";
import imgAgile from "../../Assets/Certificates/PNG/CERTIFICADO SOFTWARE PROCESSES AND AGILE PRACTICES-1.png";
import imgBusiness from "../../Assets/Certificates/PNG/CERTIFICADO UNDERSTAND AND ELICIT REQUIREMENTS WITH BUISNESS ANALYSIS-1.png";

// ==========================================
// 3. IMPORTACIONES: DOCUMENTOS (PDF)
// ==========================================
import pdfArduino from "../../Assets/Certificates/PDF/CERTIFICADO ARDUINO.pdf";
import pdfUxUi from "../../Assets/Certificates/PDF/CERTIFICADO Bootcamp diseño UX UI aprende Design Thinking y Figma.pdf";
import pdfJava from "../../Assets/Certificates/PDF/CERTIFICADO CURSO JAVA.pdf";
import pdfLinux from "../../Assets/Certificates/PDF/CERTIFICADO DE LINUX UNHATED.pdf";
import pdfDt from "../../Assets/Certificates/PDF/CERTIFICADO DESIGN THINKING.pdf";
import pdfStartup from "../../Assets/Certificates/PDF/CERTIFICADO DESING THINKING AND GLOBAL STARTUP.pdf";
import pdfDtMaestro from "../../Assets/Certificates/PDF/CERTIFICADO Design Thinking-De Cero a MAESTRO 2024.pdf";
import pdfR from "../../Assets/Certificates/PDF/CERTIFICADO Estadística descriptiva e inferencial con R.pdf";
import pdfInnovacion from "../../Assets/Certificates/PDF/CERTIFICADO Innovación Destilada de la Creatividad a los Resultados.pdf";
import pdfCCero from "../../Assets/Certificates/PDF/CERTIFICADO Introducción a la Programación con el Lenguaje C desde Cero.pdf";
import pdfUnity from "../../Assets/Certificates/PDF/CERTIFICADO La guía definitiva unity.pdf";
import pdfAspNet from "../../Assets/Certificates/PDF/CERTIFICADO MASTER EN ASP.NET MVC ENTITY FRAMEWORK .NET.pdf";
import pdfMatlab from "../../Assets/Certificates/PDF/CERTIFICADO MATLAB Onramp.pdf";
import pdfMl from "../../Assets/Certificates/PDF/CERTIFICADO Machine Learning Onramp.pdf";
import pdfMasterclass from "../../Assets/Certificates/PDF/CERTIFICADO Masterclass de Creatividad e Innovación en los Negocios.pdf";
import pdfCEssentials from "../../Assets/Certificates/PDF/CERTIFICADO Programming Essentials in C.pdf";
import pdfAgile from "../../Assets/Certificates/PDF/CERTIFICADO SOFTWARE PROCESSES AND AGILE PRACTICES.pdf";
import pdfBusiness from "../../Assets/Certificates/PDF/CERTIFICADO UNDERSTAND AND ELICIT REQUIREMENTS WITH BUISNESS ANALYSIS.pdf";

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
  // SECCIÓN 1: INTOCABLE (TUS 6 INSIGNIAS CREDLY)
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

  // SECCIÓN 2: CURSOS COMPLEMENTARIOS Y UDEMY (18 CERTIFICADOS COMPLETOS)
  const udemyCertificates = [
    {
      title: "Design Thinking and Global Startup",
      issuer: "KAIST (via Coursera)",
      description: "Verified certificate focusing on startup methodologies, innovation strategies, and user-centric design principles.",
      link: pdfStartup,
      imgPath: imgStartup
    },
    {
      title: "Software Processes and Agile Practices",
      issuer: "University of Alberta (via Coursera)",
      description: "Software engineering processes, agile frameworks, scrum methodologies, and iterative delivery practices.",
      link: pdfAgile,
      imgPath: imgAgile
    },
    {
      title: "NDG Linux Unhatched",
      issuer: "Cisco Networking Academy",
      description: "Basic command-line operations, file system navigation, and fundamental administration concepts in Linux.",
      link: pdfLinux,
      imgPath: imgLinux
    },
    {
      title: "Master en ASP.NET MVC Entity Framework .NET",
      issuer: "Udemy",
      description: "Backend architecture, database modeling, and enterprise web development using the .NET ecosystem.",
      link: pdfAspNet,
      imgPath: imgAspNet
    },
    {
      title: "UX/UI Design Bootcamp (Design Thinking & Figma)",
      issuer: "Udemy",
      description: "User experience principles, interface design workflows, wireframing, and interactive prototyping in Figma.",
      link: pdfUxUi,
      imgPath: imgUxUi
    },
    {
      title: "Design Thinking - From Zero to Master",
      issuer: "Udemy",
      description: "Advanced problem-solving framework focused on empathy mapping, ideation, and rapid prototyping.",
      link: pdfDtMaestro,
      imgPath: imgDtMaestro
    },
    {
      title: "Design Thinking",
      issuer: "Udemy",
      description: "Foundational concepts and methodologies for creative problem solving and innovation.",
      link: pdfDt,
      imgPath: imgDt
    },
    {
      title: "Java Masterclass",
      issuer: "Udemy",
      description: "Object-oriented programming principles, data structures, and core backend development logic in Java.",
      link: pdfJava,
      imgPath: imgJava
    },
    {
      title: "The Ultimate Unity Guide",
      issuer: "Udemy",
      description: "Game development fundamentals, C# scripting, and interactive 2D/3D environment design.",
      link: pdfUnity,
      imgPath: imgUnity
    },
    {
      title: "Programming Essentials in C",
      issuer: "Cisco Networking Academy / Udemy",
      description: "Procedural programming, memory management, pointers, and algorithm design using the C language.",
      link: pdfCEssentials,
      imgPath: imgCEssentials
    },
    {
      title: "Introduction to C Programming from Scratch",
      issuer: "Udemy",
      description: "Foundational logic structures, loops, conditionals, and syntax fundamentals in C.",
      link: pdfCCero,
      imgPath: imgCCero
    },
    {
      title: "Descriptive and Inferential Statistics with R",
      issuer: "Udemy",
      description: "Data analysis, probability models, hypothesis testing, and statistical computing using R.",
      link: pdfR,
      imgPath: imgR
    },
    {
      title: "Machine Learning Onramp",
      issuer: "MathWorks",
      description: "Introductory training on data processing, predictive modeling algorithms, and machine learning workflows.",
      link: pdfMl,
      imgPath: imgMl
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      description: "Foundational training in the MATLAB environment for mathematical computing and engineering.",
      link: pdfMatlab,
      imgPath: imgMatlab
    },
    {
      title: "Elicit Requirements with Business Analysis",
      issuer: "Udemy",
      description: "Techniques for stakeholder interviewing, functional specification writing, and process mapping.",
      link: pdfBusiness,
      imgPath: imgBusiness
    },
    {
      title: "Distilled Innovation: From Creativity to Results",
      issuer: "Udemy",
      description: "Business innovation models, creative problem-solving methodologies, and value proposition design.",
      link: pdfInnovacion,
      imgPath: imgInnovacion
    },
    {
      title: "Business Creativity and Innovation Masterclass",
      issuer: "Udemy",
      description: "Advanced masterclass in fostering creativity and strategic innovation within organizations.",
      link: pdfMasterclass,
      imgPath: imgMasterclass
    },
    {
      title: "Arduino & Milo Space",
      issuer: "Specialized Training",
      description: "Embedded systems programming, hardware integration, sensor interfacing, and microcontrollers.",
      link: pdfArduino,
      imgPath: imgArduino
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
                    imgPath={cert.imgPath}
                    isBlog={false}
                    title={cert.title}
                    description={`${cert.issuer}\n\n${cert.description}`}
                    demoLink={cert.link}
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