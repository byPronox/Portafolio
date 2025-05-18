import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTensorflow size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPytorch size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNumpy size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPandas size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMicrosoftsqlserver size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>SQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostgresql size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMongodb size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiHtml5 size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiCss3 size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Node.js</div>
      </Col>
    </Row>
  );
}

export default Techstack;