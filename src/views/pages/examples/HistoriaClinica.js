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

import { dataTable } from "variables/general";

// const pagination = paginationFactory({
//   page: 1,
//   alwaysShowAllBtns: true,
//   showTotal: true,
//   withFirstAndLast: false,
//   sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
//     <div className="dataTables_length" id="datatable-basic_length">
//       <label>
//         Show{" "}
//         {
//           <select
//             name="datatable-basic_length"
//             aria-controls="datatable-basic"
//             className="form-control form-control-sm"
//             onChange={(e) => onSizePerPageChange(e.target.value)}
//           >
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>
//         }{" "}
//         entries.
//       </label>
//     </div>
//   ),
// });
const { SearchBar } = Search;


function HistoriaClinica() {
  const [alert, setAlert] = React.useState(null);

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
                <Form >
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de Mascota
                  </h6>
                  {alert}
                  {/* <SimpleHeader name="React Tables" parentName="Tables" /> */}
                  {/* <Container > */}
                  <Row>
                    <div className="col">

                      <Card >
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
                            <div className="py-4 table-responsive"
                              ref={componentRef} >

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
                                bordered={false}
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
                                        style={{margin: 5}}
                                        id="copy-tooltip"
                                        onClick={() =>
                                          copyToClipboardAsTable(
                                            document.getElementById("react-bs-table")
                                          )
                                        }
                                      >
                                        <span>Copiar</span>
                                      </Button>
                                      <ReactToPrint
                                        trigger={() => (
                                          <Button
                                          style={{margin: 5}}
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
