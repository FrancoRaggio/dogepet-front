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
     <Container className="mt--0" >
       <row>
       <Col className="order-xl-1" xl="13">
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Historial Clinico</h3>
                  </Col>
                </Row>
              </CardHeader>

              <Col xs={12} sm={6}>
                          <div
                            id="datatable-basic_filter"
                            className="dataTables_filter px-9 pb-1 float-left "
                          >
                            <label>
                              Search:
                              <SearchBar
                                className="form-control-sm"
                                placeholder=""
                                // {...props.searchProps}
                              />
                            </label>
                          </div>
                        </Col>
              </Col>
              <div className="pl-lg-3 bg-white  "> 
     <Table class="table table-responsive table-striped text-center">
            <thead className="thead-light">
              <tr>
                <th>Cliente</th>
                <th>DNI</th>
                {/* <th>Product</th> */}
                <th />
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="table-user">
                  <img
                    alt="..."
                    className="avatar rounded-circle mr-3"
                    src={require("assets/img/theme/team-m.png").default}
                  />
                  <b>Carolina Mendez</b>
                </td>
                <td>
                  {/* <span className="text-muted">
                    10/09/{new Date().getFullYear()}
                  </span> */}
                  <span className="text-muted">
                    38909794
                  </span>
                </td>
                {/* <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td> */}
                <td className="table-actions">
                  <a
                    className="table-action"
                    href="/admin/EditHistoria"
                    id="tooltip123539273"
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-user-edit" />
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip123539273">
                    Editar Historial Mascota
                  </UncontrolledTooltip>
                  
                </td>
              </tr>
              <tr>
                <td className="table-user">
                  <img
                    alt="..."
                    className="avatar rounded-circle mr-3"
                    src={require("assets/img/theme/team-mas.png").default}
                  />
                  <b>Martin Tito Giras</b>
                </td>
                <td>
                  {/* <span className="text-muted">
                    08/09/{new Date().getFullYear()}
                  </span> */}
                  <span className="text-muted">
                    35909764
                  </span>
                </td>
                {/* <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Design System
                  </a>
                </td> */}
                <td className="table-actions">
                  <a
                    className="table-action"
                    href="#pablo"
                    id="tooltip123539273"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-user-edit" />
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip123539273">
                    Editar Historial Mascota
                  </UncontrolledTooltip>
                  
                </td>
              </tr>
              <tr>
                <td className="table-user">
                  <img
                    alt="..."
                    className="avatar rounded-circle mr-3"
                    src={require("assets/img/theme/team-m.png").default}
                  />
                  <b>Samantha Ivy</b>
                </td>
                <td>
                  {/* <span className="text-muted">
                    30/08/{new Date().getFullYear()}
                  </span> */}
                  <span className="text-muted">
                    33900069
                  </span>
                </td>
                {/* <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Black Dashboard
                  </a>
                </td> */}
                <td className="table-actions">
                  <a
                    className="table-action"
                    href="#pablo"
                    id="tooltip123539273"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-user-edit" />
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip123539273">
                    Editar Historial Mascota
                  </UncontrolledTooltip>
                  
                </td>
              </tr>
              <tr>
                <td className="table-user">
                  <img
                    alt="..."
                    className="avatar rounded-circle mr-3"
                    src={require("assets/img/theme/team-m.png").default}
                  />
                  <b>Marcel Ivy</b>
                </td>
                <td>
                  {/* <span className="text-muted">
                    10/09/{new Date().getFullYear()}
                  </span> */}
                  <span className="text-muted">
                    11908772
                  </span>
                </td>
                {/* <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td> */}
               <td className="table-actions">
                  <a
                    className="table-action"
                    href="#pablo"
                    id="tooltip123539273"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-user-edit" />
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip123539273">
                    Editar Historial Mascota
                  </UncontrolledTooltip>
                  
                </td>
              </tr>
              <tr>
                <td className="table-user">
                  <img
                    alt="..."
                    className="avatar rounded-circle mr-3"
                    src={require("assets/img/theme/team-mas.png").default}
                  />
                  <b>John Michael</b>
                </td>
                <td>
                  {/* <span className="text-muted">
                    10/09/{new Date().getFullYear()}
                  </span> */}
                   <span className="text-muted">
                    38909764
                  </span>
                </td>
                {/* <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                </td> */}
                <td className="table-actions">
                  <a
                    className="table-action"
                    href="#pablo"
                    id="tooltip123539273"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-user-edit" />
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip123539273">
                    Editar Historial Mascota
                  </UncontrolledTooltip>
                  
                </td>
              </tr>
            </tbody>
          </Table>
          </div>
          </row>
          </Container>
    </>
  );
}

export default HistoriaClinica;
