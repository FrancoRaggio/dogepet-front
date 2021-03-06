
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div className="header bg-info pt-0 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h1 className="display-2 text-white font-weight-bold mb-0">
                    DogePet 
                  </h1>
                  <h2 className="display-4 text-white font-weight-light">
                  Nuestra visión es proporcionar la mejor atención veterinaria en la zona, donde las mascotas y sus dueños son nuestra prioridad.
                  </h2>
                  <p className="text-white mt-4">
                  Nuestra misión proporcionar la asistencia médica de la más alta calidad a nuestros pacientes,
                  educando e informando a los propietarios lo mejor posible para garantizar
                   así que puedan tomar las mejores decisiones
                  </p>
                  <div className="mt-5">
                    <Button
                      className="btn-neutral my-2"
                      color="default"
                      to="/admin/dashboard"
                      tag={Link}
                    >
                      Explora el Inicio
                    </Button>
                    {/* <Button
                      className="my-2"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-auth-navbar"
                    >
                      Purchase now
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Row className="pt-5">
                  <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Turnos</h5>
                        <p>Mejora de administracion de turnos de la veterinaria, con un aumento en un 50%</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Chat</h5>
                        <p>
                        Mejora en la comunicación con los clientes de la veterinaria,
                        para disminuir un 50% las consultas recurrentes brindando un historial de consultas.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Historial Clinico</h5>
                        <p>
                        Crear libreta digital/historial del veterinario,
                        con la descarga del historial médico buscamos reducir al 60% la pérdida de los datos del animal.
                        </p>
                      </CardBody>
                    </Card>
                    {/* <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Documentacion</h5>
                        <p>You will love how easy is to to work with Argon.</p>
                      </CardBody>
                    </Card> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
