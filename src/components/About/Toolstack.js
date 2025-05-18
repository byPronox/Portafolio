import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiKaggle,
  SiGooglecolab,
  SiJupyter,
  SiGithub,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiWindows size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiKaggle size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Kaggle</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGooglecolab size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJupyter size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGithub size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPycharm size={40} />
        <div style={{ fontWeight: "bold", marginTop: "8px", fontSize: "0.85rem" }}>PyCharm</div>
      </Col>
    </Row>
  );
}

export default Toolstack;