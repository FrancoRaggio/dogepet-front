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
  NavItem,
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


function MenuMascota() {
  return (
    <>
    <ProfileHeader />
      <Container className="mt--6" fluid>
      <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">MASCOTAS</h3>
                  </Col>
                  {/* <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Volver A Menu Mascota
                    </Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Información de mis mascotas
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col>

                      <table class="table table-bordered">
                      <thead>
                      <tr class="active">
                      <th scope="col" class= "text-center text-lg" align="center"><img
                        alt="..."
                        // class=" float-left" 
                        class="d-none d-lg-block ml-lg-4" 
                        width="20" height="20"
                        src={require("assets/img/theme/img.png").default}
                      /></th>
                    <th scope="col" class= "text-center text-lg" align="center" >Nombre</th>
                    <th scope="col" class= "text-center text-lg"  align="center">Acción</th>
                      </tr>
                      </thead>
                      <tbody class= "text-center" >
                        <tr>
                            <td> <img
                        alt="..."
                        class="rounded float-left" 
                        width="50" height="70"
                        src={require("assets/img/theme/titan.jfif").default}
                      /></td>
                            <td class= "text-center text-lg">Titan</td>
                            <td> 
                            <NavItem className="d-none d-lg-block ml-lg-4">
                              <Button
                                color="danger"
                                href="/admin/ProfileM"
                                // onClick={(e) => e.preventDefault(e)}
                                size="lg"
                              >
                                Editar
                              </Button>
                         <Button
                          color="primary"
                          href="/admin/HistoriaClinica"
                          // onClick={(e) => e.preventDefault()}
                          size="lg"
                          // Redirect to='/HistoriaClinica'
                        >
                          Historial
                        </Button>
                        </NavItem>
                        </td>
                        </tr>
                        <tr>
                        <td> <img
                        alt="..."
                        class="rounded float-left" 
                        width="50" height="70"
                        src={require("assets/img/theme/Kira.jpeg").default}
                      /></td>
                            <td class= "text-center text-lg">Kira</td>
                            <td> 
                            <NavItem className="d-none d-lg-block ml-lg-4">
                              <Button
                                color="danger"
                                href="/admin/ProfileM"
                                // onClick={(e) => e.preventDefault(e)}
                                size="lg"
                              >
                                Editar
                              </Button>
                         <Button
                          color="primary"
                          href="/admin/HistoriaClinica"
                          // onClick={(e) => e.preventDefault()}
                          size="lg"
                          // Redirect to='/HistoriaClinica'
                        >
                          Historial
                        </Button>
                        </NavItem>
                            </td>
                        </tr>
                        <tr>
                        <td> <img
                        alt="..."
                        class="rounded float-left" 
                        width="50" height="70"
                        src={require("assets/img/theme/ram.jpeg").default}
                      /></td>
                            <td class= "text-center text-lg"> Ram</td>
                            <td> 
                            <NavItem className="d-none d-lg-block ml-lg-4">
                              <Button
                                color="danger"
                                href="/admin/ProfileM"
                                // onClick={(e) => e.preventDefault(e)}
                                size="lg"
                              >
                                Editar
                              </Button>
                              <Button
                              color="primary"
                              href="/admin/HistoriaClinica"
                              // onClick={(e) => e.preventDefault()}
                              size="lg"
                              // Redirect to='/HistoriaClinica'
                            >
                              Historial
                            </Button>
                        </NavItem>
                            </td>
                        </tr>
                    </tbody>
                        
                      </table>
                        {/* <FormGroup>
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
                       
                        <div class="form-group">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >Raza</label>
                        <div class="col-xs-10">
                            <select id="inputState" class="form-control">
                                <option selected> Seleccionar</option>
                                <option value="value1">Pitbull</option>
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
                            defaultValue="2"
                            id="input-first-name"
                            placeholder="2"
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
                </div> */}
                </Col>
                </Row>
                </div>
                </Form>
              </CardBody>
            </Card>
          
              </Container>
              </>

  );
}

export default MenuMascota;