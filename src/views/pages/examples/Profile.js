
import React, {useState} from "react";

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
import { useSelector } from 'react-redux';
import { RepositoryFactory } from "repositories/RepositoryFactory";
const userRepository = RepositoryFactory.get('user');

function Profile() {
  const user = useSelector(state => state.auth.user)
  const [form, setForm] = useState({
    name: user?.name,
    lastname: user?.lastname,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    city: user?.city,
  })

  const updateUser = async () => {
    console.log(form)
    await userRepository.updateUser(form, user.id)
  }
  
  return (
    <>
      <ProfileHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-2" xl="4">
            <Card className="card-profile">
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg").default}
                top
              />
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4.jpg").default}
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
                        <span className="heading">-</span>
                        <span className="description"></span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h5 className="h3">
                    {form.name + ' ' + form.lastname }
                    <span className="font-weight-light"></span>
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
                    <h3 className="mb-0">Editar Perfil</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de usuario
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
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            value={form.name}
                            name="name"
                            onChange={(e) => setForm({
                              ...form,
                              [e.target.name]: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Apellido
                          </label>
                          <Input
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            value={form.lastname}
                            name="lastname"
                            onChange={(e) => setForm({
                              ...form,
                              [e.target.name]: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            value={form.email}
                            name="email"
                            onChange={(e) => setForm({
                              ...form,
                              [e.target.name]: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phone"
                          >
                            Telefono
                          </label>
                          <Input
                            id="input-phone"
                            placeholder="Telefono"
                            type="text"
                            value={form.phone}
                            name="phone"
                            onChange={(e) => setForm({
                              ...form,
                              phone: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Informacion de Contacto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Direccion
                          </label>
                          <Input
                            defaultValue="Calle 72 856"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            value={form.address}
                            name="address"
                            onChange={(e) => setForm({
                              ...form,
                              address: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Ciudad
                          </label>
                          <Input
                            defaultValue="La Plata"
                            id="input-city"
                            placeholder="City"
                            type="text"
                            value={form.city}
                            name="city"
                            onChange={(e) => setForm({
                              ...form,
                              city: e.target.value
                            })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => updateUser()}
                  >
                    Guardar
                  </Button>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
