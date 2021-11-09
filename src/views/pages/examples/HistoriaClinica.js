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
  Collapse,
  ButtonGroup,
  UncontrolledTooltip,
  Table,
  Form,
  Input,
  ListGroupItem,
  pagination,
  componentRef,
  copyToClipboardAsTable,
  ListGroup,
  Progress,
  Container,
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

import { RepositoryFactory } from "../../../repositories/RepositoryFactory";
const petRepository = RepositoryFactory.get("pet");

const { SearchBar } = Search;

function HistoriaClinica() {
  const [alert, setAlert] = React.useState(null);
  const [vaccines, setVaccines] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);
  const [pet, setPet] = React.useState(null);


  useEffect(() => {
    getVaccines()
    getSizes()
  }, [])

  const getVaccines = async () => {
    let vaccinesAux = await petRepository.getVaccines()
    setVaccines(vaccinesAux);
  };

  const getSizes = async () => {
    let path = window.location.pathname.split("/");
    let data = await petRepository.getPet(path[path.length - 1])

    let vaccinesAux = await petRepository.getFeatures(path[path.length - 1])
    setSizes(vaccinesAux);
    setPet(data);
  };

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
        title="Ok!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copiado a portapepeles!
      </ReactBSAlert>
    );
  };

  console.log(vaccines)
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
                    {pet?.name}
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
                    Informacion de Mascota
                  </h6>
                  {alert}
                  {/* <SimpleHeader name="React Tables" parentName="Tables" /> */}
                  {/* <Container > */}
                  <Row>
                    <div className="col ">
                      <Card>
                        {/* <CardHeader>
                <h3 className="mb-0">Vacunas</h3>
                <p className="text-sm mb-0">
                  
                </p>
              </CardHeader> */}

                        <ToolkitProvider
                          data={vaccines}
                          keyField="name"
                          columns={[
                            {
                              dataField: "vaccine_type.name",
                              text: "Vacuna",
                              sort: true,
                            },
                            {
                              dataField: "date",
                              text: "Fecha",
                              sort: true,
                            },
                            {
                              dataField: "next_date",
                              text: "Vencimiento",
                              sort: true,
                            },
                          ]}
                          search
                        >
                          {(props) => (
                            <div
                              className="py-4 px--1 table-responsive overflow-hidden"
                              id="imp"
                              ref={componentRef}
                            >
                              {/* <hr className="my-0" /> */}
                              {/* //  */}
                              <div className="pl-lg-4">
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-username"
                                      >
                                        Nombre: <span
                                          id="input-username"
                                          type="text"
                                        >
                                          {pet?.name}
                                        </span>
                                      </label>

                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                              <hr className="my-4" />
                              {/* { Peso}  */}
                              <h6 className="heading-small text-muted mb-4 text-center">
                                Controles Peso
                              </h6>
                              <div className="pl-lg-9  ">
                                <table class="table table-responsive table-striped text-center">
                                  <thead>
                                    <tr>
                                      <th>Fecha</th>
                                      <th>Peso</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {sizes.map((size) => (
                                      <tr>
                                        <td>{size.date}</td>
                                        <td>{size.size} Kg</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
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
                                bordered={true}
                                id="react-bs-table"
                              />
                              <Container fluid>
                                <Row>
                                  <Col xs={12} sm={6}>
                                    <ButtonGroup>
                                      <Button
                                        className="buttons-copy buttons-html5"
                                        color="default"
                                        size="sm"
                                        style={{ margin: 5 }}
                                        id="copy-tooltip"
                                        onClick={() =>
                                          copyToClipboardAsTable(
                                            document.getElementById(
                                              "react-bs-table"
                                            )
                                          )
                                        }
                                      >
                                        <span>Copiar</span>
                                      </Button>
                                      <ReactToPrint
                                        pageStyle="@page { size: auto; margin: 10mm; }
                                        @media print { body 
                                        {   -webkit-print-color-adjust: exact; padding: 50px !important; } 
                                        #imp { margin: 10px;
                                          border: medium double #FFFF;
                                          border-bottom-width: 1px;     
                                          border-bottom-style: solid;
                                          } }"
                                        // background-image: url("https://cdn-icons-png.flaticon.com/512/603/603272.png");
                                        // background-repeat: no-repeat;
                                        // opacity:0,6
                                        // background-image: url("D:/Codigo/dogepet-front/src/assets/img/brand/dogepet.png");

                                        trigger={() => (
                                          <Button
                                            style={{ margin: 5 }}
                                            color="default"
                                            size="sm"
                                            className="buttons-copy buttons-html5"
                                            id="print-tooltip"
                                          >
                                            Imprimir
                                          </Button>
                                        )}
                                        content={() => componentRef.current}
                                      />
                                    </ButtonGroup>
                                  </Col>
                                  <Col xs={12} sm={6}>
                                    <div
                                      id="datatable-basic_filter"
                                      className="dataTables_filter px-4 pb-1 float-right "
                                    >
                                      <label>
                                        Buscar:
                                        <SearchBar
                                          className="form-control-sm"
                                          placeholder="Buscar"
                                          {...props.searchProps}
                                        />
                                      </label>
                                    </div>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          )}
                        </ToolkitProvider>
                      </Card>
                    </div>
                  </Row>
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
