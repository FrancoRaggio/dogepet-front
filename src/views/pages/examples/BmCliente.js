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
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";

import classnames from "classnames";

import { dataTable } from "variables/general";


function BmCliente() {
  
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
                    <h3 className="mb-0">Cliente</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      // href="http://localhost:3000/admin/MenuMascota"
                      onClick={(e) => window.location.href = "/admin/HistoriaClinicaVete"}
                      size="sm"
                    >
                      Volver A Menu Clientes
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form >
                  
                  {alert}
     
        <Row>
          <div className="col"> 
            
            <Card >
              
              
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
                  <div className=" table-responsive" >
                    
                  <Card>
              
              <CardBody>
              <div className="pl-lg-4">
                    <Row>
                    <div class="form-group">
                       
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >Nombre</label>
                    </div>
                    </Row>
                  </div>
                  <Row>
                  <Col md="4">
                    <Button
                      block
                      color="default"
                      onClick={(e) => window.location.href = "/admin/Profile"}
                      style={{marginBottom: 5}}
                    >
                      Editar Cliente 
                    </Button>
                    
                    </Col>
                    </Row>
                <Row>
                  <Col md="4">
                    <Button
                      block
                      color="default"
                      onClick={(e) => window.location.href = "/admin/EditHistoria"}
                    >
                      Agregar Historia Clinica
                    </Button>
                   
                  </Col>
                </Row>
              </CardBody>
            </Card>
             
                   
                    </div>
                  
                )}
              </ToolkitProvider>
            </Card>
          </div> 
        </Row>
                  

    <>
     
    </>
 
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between">
                 
               
                  
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
                


export default BmCliente;
