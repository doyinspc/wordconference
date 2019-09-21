import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Ministers() {
  return (
    <>
    <div className="section section-team text-center">
          <Container>
            <h2 className="title">Ministering</h2>
            <div className="team">
              <Row className="justify-content-center">
                <Col md="5">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a1.png' style={{ height:400}} ></img>
                    <h4 className="title">Rt. Revd. Timothy Yahaya</h4>
                    <p className="category text-danger">Chief Host</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      <div className="section section-team text-center">
          <Container>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a2.png' style={{ height:300}} ></img>
                    <h4 className="title">Revd. Can. Barnarbas Bulus</h4>
                    <p className="category text-danger">Host</p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a6.png' style={{ height:300}} ></img>
                    <h4 className="title">Revd. Engr. Peter Twaki</h4>
                    <p className="category text-danger">Assistant</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a4.png' style={{ height:300}} ></img>
                    <h4 className="title">Pastor Peter J. Lar</h4>
                    <p className="category text-danger">Jos</p>
                  </div>
                </Col>
                
              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Ministering in Songs</h2>
            <div className="team">
              <Row className="justify-content-center">
                <Col md="5">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a3.png' style={{ height:350}} ></img>
                    <h4 className="title">Michealwise Oyebisi</h4>
                  </div>
                </Col>
                <Col md="5">
                  <div className="team-player">
                    <img alt="..." className="rounded-circle img-fluid img-raised" src='a31.jpg' style={{ height:350}} ></img>
                    <h4 className="title">Aisha A. J.</h4>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    </>
  );
}

export default Ministers;
