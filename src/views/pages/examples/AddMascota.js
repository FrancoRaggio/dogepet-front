import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Search } from "react-bootstrap-table2-toolkit";
import { RepositoryFactory } from "repositories/RepositoryFactory";
import SimpleHeader from "components/Headers/SimpleHeader.js";
const userRepository = RepositoryFactory.get('user')

const AddMascota = () => {
  const { SearchBar } = Search;
  const [firstName, setfirstName] = React.useState("");
  const [firstNameState, setfirstNameState] = React.useState(null);
  const [username, setusername] = React.useState("");
  const [usernameState, setusernameState] = React.useState(null);
  const [race, setRace] = React.useState(0);
  const [date, setDate] = React.useState('');
  const [color, setColor] = React.useState('');
  const [gender, setGender] = React.useState(true);
  const [users, setUsers] = React.useState(true);

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    setUsers(await userRepository.getUsers())
  }

  const validateCustomStylesForm = () => {
    if (firstName === "") {
      setfirstNameState("invalid");
    } else {
      setfirstNameState("valid");
    }
    if (username === "") {
      setusernameState("invalid");
    } else {
      setusernameState("valid");
    }

    let data = {
      name: firstName,
      user_id: username,
      race_id: race,
      date: date,
      gender: gender,
    }

    console.log(data)


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
                      <Col className="mb-3 ml-7" style={{ marginTop: 30 }} md="4" >
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
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
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
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Ingrese color.
                        </div>
                      </Col>
                      <Col className="mb-3" md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationCustom05"
                          >
                            Seleccione Raza
                          </label>
                          <Input 
                            type="select"
                            id="validationCustom05"
                            placeholder="Selecciona"
                            valid={race}
                            onChange={(e) => {
                              setRace(parseInt(e.target.value));
                            }}>
                            <option selected>Seleccionar..</option>
                            <option value={2}>Pitbull</option>
                            <option value={3}>Dogo</option>
                            <option value={1}>Caniche</option>
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
                          <Input type="select"
                            id="validationCustom05"
                            placeholder="Selecciona"
                            aria-describedby="inputGroupPrepend"
                            id="validationCustomUsername"
                            placeholder="Dueño"
                            type="select"
                            onChange={(e) => setGender(parseInt(e.target.value))}>
                            <option selected>Seleccionar..</option>
                            <option value={1}>Macho</option>
                            <option value={0}>Hembra</option>
                          </Input>
                        </FormGroup>


                        <div className="invalid-feedback">
                          seleccione Genero!
                        </div>
                      </Col>
                    </div>

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
