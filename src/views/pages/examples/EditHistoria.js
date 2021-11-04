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
  ButtonGroup,
  UncontrolledTooltip,
  Table,
  Form,
  Modal,
  Input,
  ListGroupItem,
  pagination,
  componentRef,
  copyToClipboardAsTable,
  ListGroup,
  Progress,
  Container,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";
import ReactToPrint from "react-to-print";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";

import SimpleHeader from "components/Headers/SimpleHeader.js";
import classnames from "classnames";

import { dataTable } from "variables/general";
import { RepositoryFactory } from "../../../repositories/RepositoryFactory";
import Select from "react-select";
const userRepository = RepositoryFactory.get("user");

const { SearchBar } = Search;

function EditHistoria() {
  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  const [state, setState] = React.useState({});
  const [picture, setPicture] = React.useState({});
  const [alert, setAlert] = React.useState(null);
  const [focusedEmail, setFocusedEmail] = React.useState(false);
  const [focusedPassword, setFocusedPassword] = React.useState(false);
  const [defaultModal, setdefaultModal] = React.useState(false);
  const [notificationModal, setnotificationModal] = React.useState(false);
  const [formModal, setformModal] = React.useState(false);
  const [formModal2, setformModal2] = React.useState(false);
  const [username, setusername] = React.useState("");
  const [users, setUsers] = React.useState(true);
  // Select de clientes
  const getUsers = async () => {
    let usersAux = await userRepository.getUsers();
    let aux = [];
    for (const user of usersAux) {
      aux.push({
        label: user.name + " " + user.lastname,
        value: user.id,
      });
    }
    setUsers(aux);
  };
  function handlerUser(e) {
    setusername(e.value);
  }
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
  // const [alert, setalert] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const componentRef = React.useRef(null);
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };

  return (
    <>
      <ProfileHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-12" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Editar Historial Clinico</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      // href="http://localhost:3000/admin/MenuMascota"
                      onClick={(e) =>
                        (window.location.href = "/admin/HistoriaClinicaVete")
                      }
                      size="sm"
                    >
                      Volver A Menu Clientes
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  {alert}
                  {/* <SimpleHeader name="React Tables" parentName="Tables" /> */}
                  {/* <Container > */}
                  <Row>
                    <div className="col">
                      <Card>
                        {/* <CardHeader>
                <h3 className="mb-0">Vacunas</h3>
                <p className="text-sm mb-0">
                  
                </p>
              </CardHeader> */}

                        <ToolkitProvider
                          data={dataTable}
                          keyField="name"
                          columns={[
                            {
                              dataField: "label",
                              text: "Imagen",
                              sort: true,
                            },

                            {
                              dataField: "office",
                              text: "Vacuna",
                              sort: true,
                            },
                            {
                              dataField: "start_date",
                              text: "Fecha",
                              sort: true,
                            },
                            {
                              dataField: "end_date",
                              text: "Vencimiento",
                              sort: true,
                            },
                          ]}
                          search
                        >
                          {(props) => (
                            <div className=" table-responsive">
                              {/* <hr className="my-0" /> */}
                              {/* //  */}

                              <Card>
                                {/* <CardHeader>
               <h3 className="mb-0">Modals</h3> 
              </CardHeader> */}
                                <CardBody>
                                  <div className="pl-lg-4">
                                    <Row>
                                      <div class="form-group">
                                        {/* <label for="inputState" class="col-xs-2 col-form-label">Raza</label> */}
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-email"
                                        >
                                          Nombre
                                        </label>
                                        <div class="col-xs-10">
                                          <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={users[0]}
                                            // isSearchable={isSearchable}
                                            name="name"
                                            options={users}
                                            onChange={(e) => handlerUser(e)}
                                          />
                                          {/* <select id="inputState" class="form-control">
                                            <option selected > Seleccionar</option>
                                            <option value="value1" >Titan</option>
                                            <option value="value2" >Kira</option>
                                            <option value="value3">Ram</option>
                                          </select> */}
                                        </div>
                                      </div>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col md="4">
                                      <Button
                                        block
                                        color="default"
                                        onClick={() => setformModal2(true)}
                                        style={{ marginBottom: 5 }}
                                      >
                                        Agregar Peso
                                      </Button>
                                      <Modal
                                        className="modal-dialog-centered"
                                        size="sm"
                                        isOpen={formModal2}
                                        toggle={() => setformModal2(true)}
                                      >
                                        <div className="modal-body p-0">
                                          <Card className="bg-secondary border-0 mb-0">
                                            <CardHeader className="bg-transparent pb-1">
                                              <div className="text text-center mt-2 mb-3">
                                                <large>Agregar Peso</large>
                                              </div>
                                            </CardHeader>
                                            <CardBody className="px-lg-5 py-lg-5">
                                              <div className="text-center text-muted mb-4">
                                                <small>Fecha </small>
                                              </div>
                                              <Form role="form">
                                                <FormGroup>
                                                  <InputGroup className="input-group-merge input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                      <InputGroupText>
                                                        <i className="ni ni-calendar-grid-58" />
                                                      </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                      name="date"
                                                      id="input-date"
                                                      placeholder="Fecha"
                                                      type="date"
                                                      onChange={(event) =>
                                                        valueToState(
                                                          event.target
                                                        )
                                                      }
                                                    />
                                                  </InputGroup>
                                                </FormGroup>
                                                <div className="text-center text-muted mb-4">
                                                  <small>Peso</small>
                                                </div>
                                                <FormGroup
                                                  className={classnames({
                                                    focused: focusedPassword,
                                                  })}
                                                >
                                                  <InputGroup className="input-group-merge input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                      <InputGroupText>
                                                        <i className="ni ni-ruler-pencil" />
                                                      </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                      name="name"
                                                      id="input-name"
                                                      placeholder="Peso"
                                                      type="text"
                                                      onChange={(event) =>
                                                        valueToState(
                                                          event.target
                                                        )
                                                      }
                                                    />
                                                  </InputGroup>
                                                </FormGroup>
                                                <div className="text-center">
                                                  <Button
                                                    className="my-4"
                                                    color="primary"
                                                    type="button"
                                                    onClick={onSubmit()}
                                                  >
                                                    Guardar
                                                  </Button>
                                                </div>
                                                <div className="text-center">
                                                  <Button
                                                    className="my-4"
                                                    color="danger"
                                                    type="button"
                                                    onClick={() =>
                                                      setformModal2(false)
                                                    }
                                                  >
                                                    Cancelar
                                                  </Button>
                                                </div>
                                              </Form>
                                            </CardBody>
                                          </Card>
                                        </div>
                                      </Modal>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md="4">
                                      <Button
                                        block
                                        color="default"
                                        onClick={() => setformModal(true)}
                                      >
                                        Agregar Vacuna
                                      </Button>
                                      <Modal
                                        className="modal-dialog-centered"
                                        size="sm"
                                        isOpen={formModal}
                                        toggle={() => setformModal(false)}
                                      >
                                        <div className="modal-body p-0">
                                          <Card className="bg-secondary border-0 mb-0">
                                            <CardHeader className="bg-transparent pb-1">
                                              <div className="text text-center mt-2 mb-3">
                                                <large>Agregar Vacuna</large>
                                              </div>
                                            </CardHeader>
                                            <CardBody className="px-lg-5 py-lg-5">
                                              <div className="text-center text-muted mb-4">
                                                <small>Fecha Aplicación</small>
                                              </div>
                                              <Form role="form">
                                                <FormGroup>
                                                  <InputGroup className="input-group-merge input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                      <InputGroupText>
                                                        <i className="ni ni-calendar-grid-58" />
                                                      </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                      name="dateApplication"
                                                      id="input-dateApplication"
                                                      placeholder="Fecha Aplicacion"
                                                      type="date"
                                                      onChange={(event) =>
                                                        valueToState(
                                                          event.target
                                                        )
                                                      }
                                                    />
                                                  </InputGroup>
                                                </FormGroup>
                                                <div className="text-center text-muted mb-4">
                                                  <small>
                                                    Fecha Vencimiento
                                                  </small>
                                                </div>
                                                <FormGroup>
                                                  <InputGroup className="input-group-merge input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                      <InputGroupText>
                                                        <i className="ni ni-calendar-grid-58" />
                                                      </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                      name="dateVto"
                                                      id="input-dateVto"
                                                      placeholder="Fecha Vencimiento"
                                                      type="date"
                                                      onChange={(event) =>
                                                        valueToState(
                                                          event.target
                                                        )
                                                      }
                                                    />
                                                  </InputGroup>
                                                </FormGroup>
                                                <div className="text-center text-muted mb-4">
                                                  <small>Vacuna</small>
                                                </div>
                                                <FormGroup
                                                  className={classnames({
                                                    focused: focusedPassword,
                                                  })}
                                                >
                                                  <InputGroup className="input-group-merge input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                      <InputGroupText>
                                                        <i className="ni ni-ruler-pencil" />
                                                      </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                      name="vacuna"
                                                      id="input-vacuna"
                                                      placeholder="Vacuna"
                                                      type="text"
                                                      onChange={(event) =>
                                                        valueToState(
                                                          event.target
                                                        )
                                                      }
                                                    />
                                                  </InputGroup>
                                                </FormGroup>

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
                                                    onChange={(event) =>
                                                      uploadPicture(
                                                        event.target
                                                      )
                                                    }
                                                  />
                                                </FormGroup>

                                                <div className="text-center">
                                                  <Button
                                                    className="my-4"
                                                    color="primary"
                                                    type="button"
                                                    onClick={onSubmit()}
                                                  >
                                                    Guardar
                                                  </Button>
                                                </div>
                                                <div className="text-center">
                                                  <Button
                                                    className="my-4"
                                                    color="danger"
                                                    type="button"
                                                    onClick={() =>
                                                      setformModal(false)
                                                    }
                                                  >
                                                    Cancelar
                                                  </Button>
                                                </div>
                                              </Form>
                                            </CardBody>
                                          </Card>
                                        </div>
                                      </Modal>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                              <hr className="my-4" />
                              <h6 className="heading-small text-muted mb-4 text-center">
                                Vacunas
                              </h6>
                              <hr className="my-4" />
                              <BootstrapTable
                                ref={componentRef}
                                {...props.baseProps}
                                bootstrap4={true}
                                // pagination={pagination}
                                bordered={false}
                                id="react-bs-table"
                              />
                            </div>
                          )}
                        </ToolkitProvider>
                      </Card>
                    </div>
                  </Row>

                  <></>

                  <hr className="my-4" />
                  <div className="d-flex justify-content-between"></div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditHistoria;
