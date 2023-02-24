import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const service = () => {
  return (
    <div className="text-white py-lg-5 py-3 services about-sec">
      <Container className="">
        <div className="section-title mb-4">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <Row>
          <Col md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx fa fa-certificate"></i>
              </div>
              <h4>
                <Link href="" className="text-decoration-none">
                  Website Designing
                </Link>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </Col>

          <Col md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx fa fa-certificate"></i>
              </div>
              <h4>
                <Link href="" className="text-decoration-none">
                  UI/UX Designing
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </Col>

          <Col md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx fa fa-certificate"></i>
              </div>
              <h4>
                <Link href="" className="text-decoration-none">
                  Website Development
                </Link>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default service;
