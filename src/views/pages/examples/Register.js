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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import { emailValidation, nameValidation, lastNameValidation, addressValidation, cityValidation, phoneValidation, dniValidation } from "../../../validations/Register";
import Validation from "../forms/Validation";
import { RepositoryFactory } from "api/RepositoryFactory";
const authRepository = RepositoryFactory.get('auth');


function Register() {
  const [focusedName, setfocusedName] = React.useState(false);
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [city, setCity] = React.useState("");
  const [validation, setValidation] = React.useState({ email: true, name: true, lastName: true, address: true, city: true, phone: true, dni: true });
  async function proof() {
    let emailV = await emailValidation(email);
    let nameV = await nameValidation(name);
    let lastNameV = await lastNameValidation(lastName);
    let addressV = await addressValidation(address);
    let cityV = await cityValidation(city);
    let phoneV = await phoneValidation(phone);
    let dniV = await dniValidation(dni);
    
    setValidation({
      ...validation,
      email: emailV,
      name: nameV,
      lastName: lastNameV,
      address: addressV,
      city: cityV,
      phone: phoneV,
      dni: dniV
    })

    let data = {
      email,
      name,
      lastname: lastName,
      password,
      address,
      phone,
      dni,
      city,
    }

    let response = await authRepository.signUp(data)
    
    window.location.href = "/auth/login"
  }
  return (
    <>
      <AuthHeader
        //lead="Use these awesome forms to login or create new account in your project for free."
        title="Registrarse"
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {validation.name ? null : <p>Nombre invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Apellido"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                      {validation.lastName ? null : <p>Apellido invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(false)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {validation.email ? null : <p>Email invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-square-pin" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Direccion"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {validation.address ? null : <p>Direccion invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-mobile-button" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Telefono"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {validation.phone ? null : <p>Telefono invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-badge" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="DNI"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setDni(e.target.value)}
                      />
                      {validation.dni ? null : <p>dni invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-building" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Ciudad"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      {validation.city ? null : <p>Ciudad invalido</p>}
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-muted font-italic">
                    <small>
                      Password Robusta:{" "}
                      <span className="text-success font-weight-700">
                        fuerte
                      </span>
                    </small>
                  </div>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span className="text-muted">
                            Estoy de acuerdo con la {" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Política de Privacidad
                            </a>
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" color="info" type="button" onClick={() => proof()}>
                      Confirmar
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

export default Register;
