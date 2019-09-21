import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

import Words from "./Words.js";

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2>About Word Conference</h2>
              <p className="description">
              Word Conference is birthed by a deep hunger to empower through 
              teaching, raising disciples and leaders to take position in fulfilling 
              their lives to the glory of God. It is a programme designed to continue 
              to disciple many for the purpose of kingdom building and expansion. This 
              is in direct obedience to the injunction from God’s word: “Then said Jesus
              to those Jews which believed on him, If ye continue in my word, then are 
              ye my disciples indeed; And ye shall know the truth, and the truth shall 
              make you free. John 8:31-32 It is in the place of continuity that leaders 
              are raise. Join us in this great event to hear God speak to us through His 
              great vessels. 
            </p>
            <p>
              This year 2019, the theme is “The Power of the Word” and it is promised to be 
              an eye opener into the depth of God’s Word.
              </p>
            </Col>
            <Col lg="6" md="12">
              <Words/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
