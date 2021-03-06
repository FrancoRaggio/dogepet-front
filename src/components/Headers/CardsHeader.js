
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import Slhead from './Slhead';


// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  //  Card,
  // CardBody,
  //  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function CardsHeader({ name, parentName }) {
  return (
    <>
      <div className="header bg-info pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                {/* <h6 className="h2 text-white d-inline-block mb-0">{name}</h6>{" "} */}
                <h6 className="h2 text-white d-inline-block mb-0">DogePet </h6>{" "}

                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {/* {name} */}
                    DogePet
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>


             <Row style={{ alignContent:"center" }}>
              <Col md="12" xl="12" className="slid" style={{  maxWidth:'100vw', overflow:'hidden' , display : 'block' , 
            textAlign: 'center', marginLeft: '3%'}}>
              
                <Slhead />
                </Col>
                </Row> 
               {/* <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Turnos
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </Col>
                    </Row> */}
                    {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 12.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                  {/* </CardBody>
                </Card>
              </Col> */}
              {/* <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Usuarios
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">8</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 33.48%
                      </span>{" "}
                      <span className="text-nowrap">Ultimo Mes</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>  */}
          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
