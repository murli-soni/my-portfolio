import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const about = () => {
  return (
    <div className="about-sec text-white py-lg-5 py-3">
      <Container className="about-me">
        <div className="section-title mb-4">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <Row className="align-items-center mb-4">
          <Col md={4}>
            <div className="border port-photo">
              <img src="/img/my-photo.png" className="img-fluid w-100" alt="" />
            </div>
          </Col>
          <Col lg={8} className="pt-4 pt-lg-0 content about-para">
            <div className="ps-lg-4">
              <h3>Software Developer</h3>
              <p className="fst-italic">
                Around 4+ years of experience in Enterprise application
                Integration projects. Have executed scratch till delivery
                projects. Experience and interests #ReactJs #ReactNative #NodeJs
                #NestJs #NextJs #HTML #CSS #JavaScript
              </p>

              <Row>
                <Col lg={6}>
                  <ul>
                    <li>
                      <strong>Birthday:</strong> <span>17 November 1995 </span>
                    </li>
                    <li>
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <strong>Phone:</strong> <span>+91 8233481440</span>
                    </li>
                    <li>
                      <strong>City:</strong> <span>Sambhar Lake </span>
                    </li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <ul>
                    <li>
                      <strong>Age:</strong> <span>30</span>
                    </li>
                    <li>
                      <strong>Degree:</strong> <span>MCA</span>
                    </li>
                    <li>
                      <strong>Email:</strong>{" "}
                      <span>manoharsonimurli26@gmail.com</span>
                    </li>
                    <li>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </Col>
              </Row>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="counts">
          <Col sm={6} lg={3} className="mt-5">
            <div className="count-box">
              <i className="fa fa-smile-o" aria-hidden="true"></i>

              <span>6</span>
              <p>Happy Clients</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className="mt-5">
            <div className="count-box">
              <i className="fa fa-file-archive-o" aria-hidden="true"></i>
              <span>6</span>
              <p>Projects</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className="mt-5">
            <div className="count-box">
              <i className="fa fa-keyboard-o" aria-hidden="true"></i>
              <span>6</span>
              <p>Hours Of Support</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className="mt-5">
            <div className="count-box">
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <span>6</span>
              <p>Awards</p>
            </div>
          </Col>
        </Row>

        <div className="skills mb-5">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <Row className="skills-content">
            <Col sm={6}>
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={100} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={100} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Bootstrap <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={100} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Adobe xd <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={60} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={70} />
                </div>
              </div>
            </Col>

            <Col sm={6}>
              <div className="progress">
                <span className="skill">
                  Figma <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={60} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={50} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  React js <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={80} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Angular js (Design) <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={100} />
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Nex js (Design) <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={100} />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="interests">
          <div className="section-title mb-3">
            <h2>Interests</h2>
          </div>

          <Row>
            <Col md={3} sm={6} className="mb-md-0 mb-3">
              <div className="icon-box">
                <i class="fa fa-music" style={{ color: "#ffbb2c" }}></i>
                <h3>Singing</h3>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-md-0 mb-3">
              <div className="icon-box">
                <i className="fa fa-angellist" style={{ color: "#5578ff" }}></i>
                <h3>Dancing</h3>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-md-0 mb-3">
              <div className="icon-box">
                <i
                  className="fa fa-file-video-o"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>Watching Movies</h3>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-md-0 mb-3">
              <div className="icon-box">
                <i
                  className="fa fa-camera"
                  style={{ color: "rgb(41, 204, 97)" }}
                ></i>
                <h3>Photo Shoot</h3>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default about;
