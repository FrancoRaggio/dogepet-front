
/*eslint-disable*/
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";

function Index() {
  return (
    <>
      <IndexNavbar />
      <div className="main-content">
        <IndexHeader />
        <section className="py-6 pb-9 bg-default">
          <Container fluid>
            <Row className="justify-content-center text-center">
              <Col md="6">
                <h2 className="display-3 text-white">
                 La solucion que venimos a realizar 
                </h2>
                <p className="lead text-white">
                Tener la disponibilidad en todo momento de la historia clínica de la mascota por parte de la veterinaria o del dueño de la misma.
                Gestionar eficientemente por parte de la veterinaria, turnos para evitar aglomeraciones innecesarias. 
                Optimizar la comunicación entre la veterinaria y sus clientes.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 mt--7">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h4 className="h3 text-info text-uppercase">
                        Basado en React y Laravel
                        </h4>
                        <p className="description mt-3">
                        Se utiliza lo ultimo en tecnologias para el conjunto de herramientas para desarrollar con HTML, CSS y JS.
                        </p>
                        <div>
                          <Badge color="info" pill>
                            react
                          </Badge>
                          <Badge color="info" pill>
                            Laravel
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h4 className="h3 text-success text-uppercase">
                        Notificaciones de Turnos
                        </h4>
                        <p className="description mt-3">
                          Modulo de notificaciones para no perderse los turnos agendados
                        </p>
                        <div>
                          <Badge color="success" pill>
                            Mail
                          </Badge>
                          <Badge color="success" pill>
                            Chat Tiempo Real
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h4 className="h3 text-warning text-uppercase">
                        SOPORTE COMPLETO
                        </h4>
                        <p className="description mt-3">
                        Dogepet estara disponible las 24hs para hacer que el proceso de administracion de clientes sea muy sencillo.
                        </p>
                        <div>
                          <Badge color="warning" pill>
                            Aws
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-7">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Tecnologias que utilizamos
                  </h4>
                  <Row className="justify-content-center">
                    <Col className="my-2" md="2" xs="3">
                      <a
                        href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpr-index-page"
                        id="tooltip170669606"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid rounded-circle shadow shadow-lg--hover"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip170669606">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                    </Col>
                    <Col className="my-2" md="2" xs="3">
                      <a
                        href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                        id="tooltip374813715"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid rounded-circle"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip374813715">
                        React - Biblioteca de JavaScript para crear interfaces de usuario
                      </UncontrolledTooltip>
                    </Col>
                    <Col className="my-2" md="2" xs="3">
                      <a
                        href="https://aws.amazon.com/es/co-marketing/"
                        id="tooltip374813716"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid rounded-circle"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip374813716">
                        Node.js - Construido en el motor de JavaScript V8 de Chrome
                      </UncontrolledTooltip>
                    </Col>
                    <Col className="my-2" md="2" xs="3">
                      <a
                        href="https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpr-index-page"
                        id="tooltip374813717"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid rounded-circle"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png"
                          style={{ backgroundColor: "white" }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip374813717">
                        Laravel - Framework de PHP
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <AuthFooter />
    </>
  );
}

export default Index;
