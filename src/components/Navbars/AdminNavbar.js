import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import UserRepository from "repositories/UserRepository";
import { useSelector } from "react-redux";

function AdminNavbar({ theme, sidenavOpen, toggleSidenav }) {
  const user = useSelector((state) => state.auth.user);
  // function that on mobile devices makes the search open
  const openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  };
  // function that on mobile devices makes the search close
  const closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };

  const logout = () => {
    localStorage.removeItem("auth");

    window.location.href = "/auth/login";
  };

  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom",
          { "navbar-dark bg-info": theme === "dark" },
          { "navbar-light bg-secondary": theme === "light" }
        )}
      >
        <Container fluid>
          <Collapse navbar isOpen={true}>
            <Form
              className={classnames(
                "navbar-search form-inline mr-sm-3",
                { "navbar-search-light": theme === "dark" },
                { "navbar-search-dark": theme === "light" }
              )}
            >
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={closeSearch}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </Form>

            <Nav className="align-items-center ml-md-auto" navbar>
              <NavItem className="d-xl-none">
                <div
                  className={classnames(
                    "pr-3 sidenav-toggler",
                    { active: sidenavOpen },
                    { "sidenav-toggler-dark": theme === "dark" }
                  )}
                  onClick={toggleSidenav}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink onClick={openSearch}>
                  <a href="#" style={{ color: "white" }}>
                    <i className="ni ni-zoom-split-in" />
                  </a>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <a href="#" style={{ color: "white" }}>
                    <i className="ni ni-send" />
                  </a>
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-xl py-0 overflow-hidden"
                  right
                >
                  <ListGroup flush>
                    <a href="#" style={{ color: "white" }}>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={
                                require("assets/img/theme/team-4.jpg").default
                              }
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">Franco Raggio</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 hs</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Necesitaria un turno para la semana que viene
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={
                                require("assets/img/theme/team-2.jpg").default
                              }
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">Ever Pippino</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>22 hs</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              La medicacion le hizo bien a mi mascota
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={
                                require("assets/img/theme/team-3.jpg").default
                              }
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">
                                  Carolina Mendez
                                </h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 dias</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Ayer mi mascota tuvo un problema
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={
                                require("assets/img/theme/team-1.jpg").default
                              }
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">Martin Tito</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 dias</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Habria un turno disponible?
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                    </a>
                  </ListGroup>
                  <DropdownItem
                    className="text-center text-info font-weight-bold py-3"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Ver todos
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-ungroup" />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-lg dropdown-menu-dark bg-default"
                  right
                >
                  <Row className="shortcuts px-4">
                    <Col
                      className="shortcut-item"
                      onClick={(e) => window.location.href = "/admin/calendar"}
                      xs="4"
                      tag="a"
                    >
                      <a href="#" className="shortcut-media avatar rounded-circle bg-gradient-red">
                        <i className="ni ni-calendar-grid-58" />
                      </a>
                      <small>Calendar</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      onClick={(e) => window.location.href = "http://3.131.200.100/chat"}
                      xs="4"
                      tag="a"
                    >
                      <a href="#" className="shortcut-media avatar rounded-circle bg-gradient-orange">
                        <i className="ni ni-email-83" />
                      </a>
                      <small>Chat</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      onClick={(e) => window.location.href = "/admin/HistoriaClinicaVete"}
                      xs="4"
                      tag="a"
                    >
                      <a href="#" className="shortcut-media avatar rounded-circle bg-gradient-info">
                        <i className="ni ni-credit-card" />
                      </a>
                      <small>Historial clinico</small>
                    </Col>
                  </Row>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <Nav className="align-items-center ml-auto ml-md-0" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link pr-0" color="" tag="a">
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/loginblanc.png").default}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "white" }}
                        className="mb-0 text-sm font-weight-bold"
                      >
                        Usuario
                      </a>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Bienvenido</h6>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      (window.location.href = "/admin/profile/" + user?.id)
                    }
                  >
                    <i className="ni ni-single-02" />
                    <span>Mi Perfil</span>
                  </DropdownItem>
                  <DropdownItem onClick={(e) => logout()}>
                    <i className="ni ni-curved-next" />
                    <span>Cerrar sesion</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark",
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AdminNavbar;
