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

function ProfileM() {
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
                 
                </Row>
                
              </CardBody>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                
              </CardHeader>
              <CardBody className="pt-0">
                <Row>
                  {/* <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div> */}
                </Row>
                <div className="text-center">
                  <h5 className="h3">
                    Titan 
                    <span className="font-weight-light">, 3</span>
                  </h5>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    
                  </div>
                  {/* <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div> */}
                </div>
              </CardBody>
            </Card>

            {/* <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Progress track</h5>
              </CardHeader>

              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("assets/img/theme/bootstrap.jpg").default
                            }
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Argon Design System</h5>
                        <Progress
                          className="progress-xs mb-0"
                          max="100"
                          value="60"
                          color="warning"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("assets/img/theme/angular.jpg").default
                            }
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Angular Now UI Kit PRO</h5>
                        <Progress
                          className="progress-xs mb-0"
                          max="100"
                          value="100"
                          color="success"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/sketch.jpg").default}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Black Dashboard</h5>
                        <Progress
                          className="progress-xs mb-0"
                          max="100"
                          value="72"
                          color="danger"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/react.jpg").default}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>React Material Dashboard</h5>
                        <Progress
                          className="progress-xs mb-0"
                          max="100"
                          value="90"
                          color="info"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/vue.jpg").default}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Vue Paper UI Kit PRO</h5>
                        <Progress
                          className="progress-xs mb-0"
                          max="100"
                          value="100"
                          color="success"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card> */}
          </Col>
          <Col className="order-xl-1" xl="8">
            {/* <Row> */}
              {/* <Col lg="6">
                <Card className="bg-gradient-success border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          className="text-uppercase text-muted mb-0 text-white"
                          tag="h5"
                        >
                          Total traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-white mr-2">
                        <i className="fa fa-arrow-up" />
                        3.48%
                      </span>
                      <span className="text-nowrap text-light">
                        Since last month
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
              {/* <Col lg="6"> */}
                {/* <Card className="bg-gradient-danger border-0" tag="h5">
                  <CardBody> */}
                    {/* <Row>
                      <div className="col">
                        <CardTitle className="text-uppercase text-muted mb-0 text-white">
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          49,65%
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                          <i className="ni ni-spaceship" />
                        </div>
                      </Col>
                    </Row> */}
                    {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-white mr-2">
                        <i className="fa fa-arrow-up" />
                        3.48%
                      </span>
                      <span className="text-nowrap text-light">
                        Since last month
                      </span>
                    </p> */}
                  {/* </CardBody>
                </Card> */}
              {/* </Col>
            </Row> */}
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Edit profile</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      // href="http://localhost:3000/admin/MenuMascota"
                      onClick={(e) => window.location.href = "/admin/MenuMascota"}
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
                    Información Mascota
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
                      <Col lg="5">
                        {/* <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Raza
                          </label>
                         <select name="select">
                         <option value="value1">Pitbull</option>
                         <option value="value2" >Dogo</option>
                         <option value="value3">Caniche Toy</option>
                         <option value="value4" selected >Seleccionar</option>
                        </select>
                         <Input
                            id="input-email"
                            placeholder="checkbox"
                            type="email"
                          /> 
                        </FormGroup> */}
                        <div class="form-group">
                        {/* <label for="inputState" class="col-xs-2 col-form-label">Raza</label> */}
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >Raza</label>
                        <div class="col-xs-10">
                            <select id="inputState" class="form-control">
                                <option > Seleccionar</option>
                                <option value="value1" selected>Pitbull</option>
                         <option value="value2" >Dogo</option>
                         <option value="value3">Caniche Toy</option>
                            </select>
                        </div>
                    </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Apellido
                          </label>
                          <Input
                            defaultValue="Mendez"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Edad
                          </label>
                          <Input
                            defaultValue="3"
                            id="input-first-name"
                            placeholder="3"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                   Mas datos...
                  </h6>
                  <Row className="pl-lg-4" >
                      <Col md="12" >
                        <FormGroup >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Cargar Imagen
                          </label>
                          <Input
                            id="input-ph"
                            placeholder=""
                            type="file"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  {/* <div className="pl-lg-4">
                    
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div> 
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">About me</h6>*/}
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label className="form-control-label">Más sobre tu mascota</label>
                      <Input
                        placeholder="A few words about you ..."
                        rows="4"
                        type="textarea"
                        defaultValue="Le gustan las orejitas."
                      />
                    </FormGroup>
                  </div>
                  <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="danger"
                    href=""
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href=""
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Guardar
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

export default ProfileM;