/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AdminFooter() {
  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6">
              <div className="copyright text-center text-lg-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.youtube.com/watch?v=4qj5lRxSAWI"
                  target="_blank"
                >
                  DogePet
                </a>
              </div>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default AdminFooter;
