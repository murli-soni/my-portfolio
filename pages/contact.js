import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const contact = () => {
  return (
    <div className="text-white contact about-sec py-lg-5 py-3">
      <Container>
        <div className="section-title mb-4">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <Row className="mt-2">
          <Col md={6} className="d-flex align-items-stretch">
            <div className="info-box">
              <i class="fa fa-map-marker bx" aria-hidden="true"></i>
              <h3>My Address</h3>
              <p>Peer ka kuwa , maliyo ka mohalla sambhar lake.</p>
            </div>
          </Col>

          <Col md={6} className="mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i class="fa fa-share-alt-square bx" aria-hidden="true"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <Link href="#" className="twitter text-decoration-none">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link href="#" className="facebook text-decoration-none">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link href="#" className="instagram text-decoration-none">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link href="#" className="linkedin text-decoration-none">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={6} className="mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="fa fa-envelope bx" aria-hidden="true"></i>
              <h3>Email Me</h3>
              <p>manoharsonimurli26@gmail.com</p>
            </div>
          </Col>
          <Col md={6} className="mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="fa fa-phone bx" aria-hidden="true"></i>
              <h3>Call Me</h3>
              <p>+91 8233481440</p>
            </div>
          </Col>
        </Row>

        <Form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form mt-4"
        >
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  className="py-3"
                  id="name"
                  placeholder="Your Name"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  className="py-3"
                  id="name"
                  placeholder="Your Email"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  name="subject"
                  className="py-3"
                  id="subject"
                  placeholder="Subject"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button className="theme-btn">Send Message</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default contact;
