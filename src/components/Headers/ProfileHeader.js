
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function ProfileHeader() {
  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "50px",
          backgroundImage:
            'url("' +
            require("assets/img/theme/profile-cover.jpg").default +
            '")',
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />

        <Container className="d-flex align-items-center" fluid>
          {/* <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <Button
                className="btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default ProfileHeader;
