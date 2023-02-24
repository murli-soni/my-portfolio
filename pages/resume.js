import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const resume = () => {
  return (
    <div className="text-white py-lg-5 py-3 resume about-sec">
      <Container>
        <div className="section-title">
          <h2>Resume</h2>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-3">Check My Resume</p>
            <a
              href={"/img/resume.pdf"}
              download
              className="btn bg-success border text-white"
            >
              Export{" "}
            </a>
          </div>
        </div>

        <Row>
          <Col md={6}>
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Murli Manohar Soni</h4>
              <p>
                <span>
                  Around 2 years of experience in Enterprise application
                  Integration projects. Have executed scratch till delivery
                  projects. Experience and interests #ReactJs #ReactNative
                  #NodeJs #NestJs #NextJs #HTML #CSS #JavaScript
                </span>
              </p>

              <ul>
                <li>Peer ka kuwa, maliyo ka mohalla, Sambhar Lake</li>
                <li>+91 8233481440</li>
                <li>manoharsonimurli26@gmail.com</li>
              </ul>
            </div>
            <div className="resume-item pb-0">
              <h4>CAREER OBJECTIVE</h4>
              <p>
                <span>
                  To enhance my knowledge and capabilities by working in a
                  dynamic organization that prides itself in giving substantial
                  responsibility to new talent.
                </span>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>MASTER OF COMPUTER APPLICATION</h4>
              <h5>2016 - 2018</h5>
              <p>
                <em>JAIPUR NATIONAL UNIVERSITY, JAIPUR</em>
              </p>
              <p>
                I have completed my masters from JNU university during August
                2016 - May 2020 with aggregate 70%.
              </p>
            </div>
            <div className="resume-item">
              <h4>BACHELOR OF COMPUTER APPLICATIONS</h4>
              <h5>2014 - 2016</h5>
              <p>
                <em>JAIPUR NATIONAL UNIVERSITY, JAIPUR</em>
              </p>
              <p>
                I have completed my BCA from JNU university during July 2014 -
                May 2016 with aggregate 68%.
              </p>
            </div>

            <div className="resume-item">
              <h4>SENIOR SECONDRY</h4>
              <h5>2011 - 2012</h5>
              <p>
                <em>GOVT,DARBAR SEN. SEC. SCHOOL, SAMBHAR LAKE</em>
              </p>
              <p>
                I have completed my senior secondry from Darbar Sen Sec School
                School during April 2011 - June 2012 with 68%
              </p>
            </div>

            <div className="resume-item">
              <h4>High School</h4>
              <h5>2009 - 2010</h5>
              <p>
                <em>GOVT,DARBAR SEN. SEC. SCHOOL, SAMBHAR LAKE</em>
              </p>
              <p>
                I have completed my High secondry from Darbar Sen Sec School
                School during April 2009 - June 2010 with 50%
              </p>
            </div>
          </Col>

          <Col md={6}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>Experion, New York, NY </em>
              </p>

              <ul>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.{" "}
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>

              <ul>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default resume;
