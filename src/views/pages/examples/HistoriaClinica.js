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
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Collapse,
  Table,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";
import ReactToPrint from "react-to-print";


function HistoriaClinica() {
  return (
    <>
      <ProfileHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-2" xl="4">
            <Card className="card-profile">
              <CardImg
                alt="..."
                src={require("assets/img/theme/colagetit.jpeg").default}
                top
              />
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        class="rounded-circle" 
                        width="500" height="150"
                        src={require("assets/img/theme/titan.jfif").default}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading"></span>
                        <span className="description">-</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h5 className="h3">
                    Titan Mendez
                    <span className="font-weight-light"> , 3</span>
                  </h5>
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
          <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Historial Clinico</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="http://localhost:3000/admin/MenuMascota"
                      // onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Volver A Menu Mascota
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de Mascota
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre
                          </label>
                          <Input
                            defaultValue="Titan"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Edad
                          </label>
                          <Input
                            id="input"
                            placeholder="3"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Controles Peso
                  </h6>
                  {/* <div className="pl-lg-8"> */}
                  <table class="table table-responsive table-striped">
                  <thead>
                      <tr>
                          <th>Fecha</th>
                          <th>Peso</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>24/6/19</td>
                          <td>1,170 Kg</td>
                      </tr>
                      <tr>
                      <td>24/3/21</td>
                          <td>5,170 Kg</td>
                      </tr>
                      <tr>
                      <td>24/6/21</td>
                          <td>8,500 Kg</td>
                      </tr>
                     
                  </tbody>
              </table>       
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">
                    Vacunas
                  </h6>   
                  <tr class="collapse multi-collapse1" 
                   data-toggle="collapse"
                    data-target=".multi-collapse1"
                  aria-controls="multiCollapseExample1" id="">
                    <td>Child col 1</td>
                    <td>Child col 2</td>
                    <td>Child col 3</td>
                </tr>
               
               {/* </div> */}
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between">
                  {/* <Button
                    className="mr-4"
                    color="danger"
                    href=""
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Cancelar
                  </Button> */}
                   <div>
        {/* <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <HistoriaClinica ref={(el) => (this.componentRef = el)} /> */}
      </div>
                  <Button
                    className="float-left"
                    color="default"
                    href=""
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Imprimir
                  </Button>
                </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HistoriaClinica;
