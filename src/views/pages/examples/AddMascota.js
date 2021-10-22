


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
import { Search } from "react-bootstrap-table2-toolkit";


import SimpleHeader from "components/Headers/SimpleHeader.js";

function AddMascota() {
    const { SearchBar } = Search;
  const [focused, setFocused] = React.useState(false);
  const [firstName, setfirstName] = React.useState("");
  const [firstNameState, setfirstNameState] = React.useState(null);
  const [lastName, setlastName] = React.useState("");
  const [lastNameState, setlastNameState] = React.useState(null);
  const [username, setusername] = React.useState("");
  const [usernameState, setusernameState] = React.useState(null);
  const [city, setcity] = React.useState("");
  const [cityState, setcityState] = React.useState(null);
  const [state, setstate] = React.useState("");
  const [stateState, setstateState] = React.useState(null);
  const [zip, setzip] = React.useState("");
  const [zipState, setzipState] = React.useState(null);
  const [checkbox, setcheckbox] = React.useState(false);
  const [checkboxState, setcheckboxState] = React.useState(null);
  const validateCustomStylesForm = () => {
    if (firstName === "") {
      setfirstNameState("invalid");
    } else {
      setfirstNameState("valid");
    }
    if (lastName === "") {
      setlastNameState("invalid");
    } else {
      setlastNameState("valid");
    }
    if (username === "") {
      setusernameState("invalid");
    } else {
      setusernameState("valid");
    }
    if (city === "") {
      setcityState("invalid");
    } else {
      setcityState("valid");
    }
    if (state === "") {
      setstateState("invalid");
    } else {
      setstateState("valid");
    }
    if (zip === "") {
      setzipState("invalid");
    } else {
      setzipState("valid");
    }
    if (checkbox === false) {
      setcheckboxState("invalid");
    } else {
      setcheckboxState("valid");
    }
  };


  return (
    <>
         <SimpleHeader name="Form validation" parentName="Forms" />

      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <div className="card-wrapper">
                <Card>
                <CardHeader>
                  <h3 className="mb-0">Agregar Mascota</h3>
                </CardHeader>
                <CardBody>
                 
                  <Form className="needs-validation" noValidate>
                    <div className="form-row">
                      <Col className="mb-3" md="4">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom01"
                        >
                          Nombre
                        </label>
                        <Input
                        //   defaultValue="Mark"
                          id="validationCustom01"
                          placeholder="Nombre"
                          type="text"
                          valid={firstNameState === "valid"}
                          invalid={firstNameState === "invalid"}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                            if (e.target.value === "") {
                              setfirstNameState("invalid");
                            } else {
                              setfirstNameState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Cargar Nombre!</div>
                      </Col>
                      <Col className="mb-3" md="4">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom02"
                        >
                          Apellido
                        </label>
                        <Input
                        //   defaultValue="Otto"
                          id="validationCustom02"
                          placeholder="Apellido"
                          type="text"
                          valid={lastNameState === "valid"}
                          invalid={lastNameState === "invalid"}
                          onChange={(e) => {
                            setlastName(e.target.value);
                            if (e.target.value === "") {
                              setlastNameState("invalid");
                            } else {
                              setlastNameState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Cargar Apellido!</div>
                      </Col>
                      <Col className="mb-3" md="4">
                       
                        <label
                          className="form-control-label"
                          htmlFor="validationCustomUsername"
                        >
                          Dueño
                        </label>
                        <SearchBar
                                    className="form-control-label"
                                    htmlFor="validationCustomUsername"
                                 placeholder="Buscar"
                                 aria-describedby="inputGroupPrepend"
                          id="validationCustomUsername"
                          valid={usernameState === "valid"}
                          invalid={usernameState === "invalid"}
                          onChange={(e) => {
                            setusername(e.target.value);
                            if (e.target.value === "") {
                              setusernameState("invalid");
                            } else {
                              setusernameState("valid");
                            }
                          }}
                          />
                        
                        <div className="invalid-feedback">
                          Carga Un Dueño!
                        </div>
                      </Col>
                    </div>
                    <div className="form-row">
                      <Col className="mb-3" md="6">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom03"
                        >
                          Fecha Nacimiento
                        </label>
                        <Input
                          id="validationCustom03"
                          placeholder="Edad"
                          type="date"
                          valid={cityState === "valid"}
                          invalid={cityState === "invalid"}
                          onChange={(e) => {
                            setcity(e.target.value);
                            if (e.target.value === "") {
                              setcityState("invalid");
                            } else {
                              setcityState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Ingrese fecha de nacimiento.
                        </div>
                      </Col>
                      <Col className="mb-3" md="3">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom04"
                        >
                          Color
                        </label>
                        <Input
                          id="validationCustom04"
                          placeholder="Color"
                          type="text"
                          valid={stateState === "valid"}
                          invalid={stateState === "invalid"}
                          onChange={(e) => {
                            setstate(e.target.value);
                            if (e.target.value === "") {
                              setstateState("invalid");
                            } else {
                              setstateState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Ingrese color.
                        </div>
                      </Col>
                      <Col className="mb-3" md="3">
                        {/* <label
                          className="form-control-label"
                          htmlFor="validationCustom05"
                        >
                          Raza
                        </label> */}
                        <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="validationCustom05"
                      >
                        Seleccione Raza
                      </label>
                      <Input  type="select"   
                      id="validationCustom05"
                          placeholder="Selecciona"
                         
                          valid={zipState === "valid"}
                          invalid={zipState === "invalid"}
                          onChange={(e) => {
                            setzip(e.target.value);
                            if (e.target.value === "") {
                              setzipState("invalid");
                            } else {
                              setzipState("valid");
                            }
                          }}>
                        <option selected>Seleccionar..</option>
                        <option>Pitbull</option>
                        <option>Dogo</option>
                        <option>Caniche</option>
                      </Input>
                    </FormGroup>

                        
                        <div className="invalid-feedback">
                          seleccione Raza.
                        </div>
                      </Col>
                      <Col className="mb-3" md="4">
                      <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="validationCustomUsername"
                      >
                        Seleccione Genero
                      </label>
                      <Input  type="select"   
                      id="validationCustom05"
                          placeholder="Selecciona"
                         
                          aria-describedby="inputGroupPrepend"
                          id="validationCustomUsername"
                          placeholder="Dueño"
                          type="select"
                          valid={usernameState === "valid"}
                          invalid={usernameState === "invalid"}
                          onChange={(e) => {
                            setusername(e.target.value);
                            if (e.target.value === "") {
                              setusernameState("invalid");
                            } else {
                              setusernameState("valid");
                            }
                          }}>
                        <option selected>Seleccionar..</option>
                        <option>Macho</option>
                        <option>Hembra</option>
                      </Input>
                    </FormGroup>

                        
                        <div className="invalid-feedback">
                          seleccione Genero!
                        </div>
                      </Col>
                      {/* //----- 
                      
                      */}

                      
                    </div>
                    
                    <FormGroup>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          defaultValue=""
                          id="invalidCheck"
                          type="checkbox"
                          valid={(checkboxState === "valid").toString()}
                          invalid={(checkboxState === "invalid").toString()}
                          onChange={(e) => {
                            setcheckbox(e.target.value);
                            if (e.target.value === "") {
                              setcheckboxState("invalid");
                            } else {
                              setcheckboxState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          
                        </div>
                      </div>
                    </FormGroup>
                    
                    <Button
                      color="primary"
                      type="button"
                      onClick={validateCustomStylesForm}
                    >
                      Guardar
                    </Button>
                  </Form>
                </CardBody>
              </Card>
              </div>
              </div>
              </Row>
              </Container>
            
              </>
  );
}


export default AddMascota;
