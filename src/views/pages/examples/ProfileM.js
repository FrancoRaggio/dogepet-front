import React, { useState, useEffect } from "react";

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
import { RepositoryFactory } from "../../../repositories/RepositoryFactory";
const petRepository = RepositoryFactory.get("pet");

function ProfileM() {
  const [state, setState] = React.useState({});
  const [picture, setPicture] = React.useState({});
  const [pet, setPet] = React.useState({});

  useEffect(() => {
    getPet()
  }, [])

  const uploadPicture = (target) => {
    setPicture({
      /* this contains the file we want to send */
      pictureAsFile: target.files[0],
    });
  };
  const valueToState = (target) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };
  const onSubmit = () => {
    console.log(state, picture);
  };

  const getPet = async () => {
    let path = window.location.pathname.split("/");
    let data = await petRepository.getPet(path[path.length - 1])
    setPet(data);
  };

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
                        width="500"
                        height="150"
                        src={require("assets/img/theme/titan.jfif").default}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0">
                <div className="text-center">
                  <h5 className="h3">
                    Titan
                    <span className="font-weight-light">, 3</span>
                  </h5>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Editar Mascota</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      // href="http://localhost:3000/admin/MenuMascota"
                      onClick={(e) =>
                        (window.location.href = "/admin/MenuMascota")
                      }
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
                            name="name"
                            defaultValue={pet.name}
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            onChange={(event) => valueToState(event.target)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="5">
                        <div class="form-group">
                          {/* <label for="inputState" class="col-xs-2 col-form-label">Raza</label> */}
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Color
                          </label>
                          <div class="col-xs-10">
                            <select
                              id="inputState"
                              class="form-control"
                              name="race"
                              onChange={(event) => valueToState(event.target)}
                            >
                              <option> Seleccionar</option>
                              <option value="Negro" selected>
                                Negro
                              </option>
                              <option value="Blanco">Blanco</option>
                              <option value="Marron">Marron</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Fecha de Nacimiento
                          </label>
                          <Input
                            name="birthdate"
                            onChange={(event) => valueToState(event.target)}
                            defaultValue={pet.date_birth}
                            id="input-first-name"
                            placeholder="3"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Mas datos...
                  </h6>
                  <Row className="pl-lg-4">
                    <Col md="12">
                      <FormGroup>
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
                          name="img"
                          onChange={(event) => uploadPicture(event.target)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label className="form-control-label">
                        Más sobre tu mascota
                      </label>
                      <Input
                        placeholder="A few words about you ..."
                        rows="4"
                        type="textarea"
                        defaultValue="Le gustan las orejitas."
                        onChange={(event) => valueToState(event.target)}
                        name="description"
                      />
                    </FormGroup>
                  </div>
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
                    <Button
                      className="float-right"
                      color="default"
                      href=""
                      onClick={onSubmit()}
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
