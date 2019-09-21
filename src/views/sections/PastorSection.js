import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div className="section " data-background-color="black"  id="download-section">
        
          <Row className="">
          <Col className="text-center" lg="6" md="6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31390.27821819506!2d7.416441022292986!3d10.438646223270474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d4a3b8356f051%3A0x81e421d807e5aaf5!2sAscension%20Church!5e0!3m2!1sen!2sng!4v1569065215763!5m2!1sen!2sng" width="600" height="450" frameborder="0" style={{ border:0}} allowfullscreen=""></iframe>
            </Col>
            <Col className="text-center" lg="6" md="6">
              <h3 className="title">Venue</h3>
              <h5 className="description">
                Ascension Anglican Church Angwan Boro. NJ Shaba Street
              </h5>
              <h3 className="title">Date</h3>
              <h5 className="description" >Wednesday 9th to Sunday 13th October</h5>
              <h3 className="title">Time</h3>
              <h5 className="description" >Wednesday - Friday <span style={{ color:"white"}}>5pm to 7pm</span> | Saturday <span style={{ color:"white"}}>9AM</span>  | Sunday <span style={{ color:"white"}}>9AM</span></h5>
            </Col>
          </Row>
         
         
      </div>
    </>
  );
}

export default Download;
