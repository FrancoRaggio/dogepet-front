
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { useSelector } from 'react-redux';
import { RepositoryFactory } from "repositories/RepositoryFactory";
import Select from 'react-select';
const userRepository = RepositoryFactory.get('user')

const turnRepository = RepositoryFactory.get('turn')
const petRepository = RepositoryFactory.get('pet')

// import { events } from '../../variables/general'

let calendar;

function CalendarView() {

  const user = useSelector(state => state.auth.user)

  const [events, setEvents] = React.useState([]);
  const [alert, setAlert] = React.useState(null);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalChange, setModalChange] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [radios, setRadios] = React.useState(null);
  const [eventId, setEventId] = React.useState(null);
  const [eventTitle, setEventTitle] = React.useState(null);
  const [eventClient, setEventClient] = React.useState(null);
  const [eventPet, setEventPet] = React.useState(null);
  const [eventDescription, setEventDescription] = React.useState(null);
  // eslint-disable-next-line
  const [event, setEvent] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);
  const calendarRef = React.useRef(null);
  const [username, setusername] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [pets, setPets] = React.useState([]);


  React.useEffect( () => {
    getEvents();
    getUsers()
    // eslint-disable-next-line
  }, []);

  // Select de clientes 
  const getUsers = async () => {
    let usersAux = await userRepository.getUsers()
    let petsAux = await petRepository.getPets()
    let aux = []
    let aux2 = []
    for (const user of usersAux) {
      aux.push({
        label: user.name + " " + user.lastname,
        value: user.id
      })
    }
    aux2.push({
      label: 'Seleccione',
      value: null
    })
    for (const pet of petsAux) {
      aux2.push({
        label: pet.name,
        value: user.id
      })
    }
    setUsers(aux)
    setPets(aux2)
  }

  async function handlerUser(e) {
    setusername(e.value)
    let aux2 = []
    let usersAux = await userRepository.getUsers()

    aux2.push({
      label: 'Seleccione',
      value: null
    })
    for (const user of usersAux) {
      if (user.id == e.value) {
        for (const pet of user?.pets) {
          aux2.push({
            label: pet.name,
            value: pet.id
          })
        }
      }
    }
    setPets(aux2)
  }
  function handlerPet(e) {
    setEventPet(e.value)
  }


  const getEvents = async () => {
    let response
    if (user?.role?.id == 2) {
      response = await turnRepository.turnsByUser(user?.id)
    } else {
      response = await turnRepository.getTurns()
    }

    for (const r of response) {
      let date = r.start.split('-')
      r.start = new Date(date[0],(date[1]-1),date[2])
    }

    createCalendar(response);
    setEvents(response)
  }

  const createCalendar = (response) => {
    calendar = new Calendar(calendarRef.current, {
      plugins: [interaction, dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: response,
      headerToolbar: "",
      // Add new event
      select: (info) => {
        if(user?.role?.id == 1){
          setModalAdd(true);
          setStartDate(info.startStr);
          setEndDate(info.endStr);
          setRadios("bg-info");
        }
      },
      // Edit calendar event action
      eventClick: ({ event}) => {
        setEventId(event.id);
        setEventTitle(event.title);
        setEventDescription(event.extendedProps.description);
        setRadios("bg-info");
        setEvent(event);
        setModalChange(true);
      },
    });
    calendar.render();

    setCurrentDate(calendar.view.title);
  };
  
  const changeView = (newView) => {
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };

  const addNewEvent = async () => {

    let calendarInfo = {
      title: eventTitle,
      client_id: username,
      pet_id: eventPet,
      vet_id: user.id,
      className: radios,
      start: startDate,
    }

    await turnRepository.createTurn(calendarInfo)

    window.location.reload()
    var newEvents = events;
    newEvents.push({
      title: eventTitle,
      start: startDate,
      end: endDate,
      className: radios,
    });
    calendar.addEvent({
      title: eventTitle,
      start: startDate,
      end: endDate,
      className: radios,
    });
    setModalAdd(false);
    setEvents(newEvents);
    setStartDate(undefined);
    setEndDate(undefined);
    setRadios("bg-info");
    setEventTitle(undefined);
  };
  const changeEvent = () => {
    var newEvents = events.map((prop, key) => {
      if (prop.id + "" === eventId + "") {
        setEvent(undefined);
        calendar.getEventById(eventId).remove();
        let saveNewEvent = {
          ...prop,
          title: eventTitle,
          className: radios,
          description: eventDescription,
        };
        calendar.addEvent(saveNewEvent);
        return {
          ...prop,
          title: eventTitle,
          className: radios,
          description: eventDescription,
        };
      } else {
        return prop;
      }
    });
    setModalChange(false);
    setEvents(newEvents);
    setRadios("bg-info");
    setEventTitle(undefined);
    setEventDescription(undefined);
    setEventId(undefined);
    setEvent(undefined);
  };
  const deleteEventSweetAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Estas seguro de eliminar el turno?"
        onConfirm={() => {
          setAlert(false);
          setRadios("bg-info");
          setEventTitle(undefined);
          setEventDescription(undefined);
          setEventId(undefined);
        }}
        onCancel={async () => {
          await turnRepository.deleteTurn(eventId)
          window.location.reload()
        }}
        confirmBtnCssClass="btn-secondary"
        cancelBtnBsStyle="danger"
        confirmBtnText="Cancelar"
        cancelBtnText="Si, eliminar"
        showCancel
        btnSize=""
      >
        ??No podr??s revertir esto!
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0 mr-1">
                  {currentDate}
                </h6>
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Inicio
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    Calendario
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                <Button
                  className="fullcalendar-btn-prev btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.next();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-left" />
                </Button>
                <Button
                  className="fullcalendar-btn-next btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.prev();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-right" />
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="month"
                  onClick={() => changeView("dayGridMonth")}
                  size="sm"
                >
                  Mes
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicWeek"
                  onClick={() => changeView("dayGridWeek")}
                  size="sm"
                >
                  Semana
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicDay"
                  onClick={() => changeView("dayGridDay")}
                  size="sm"
                >
                  Dia
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card className="card-calendar">
              <CardHeader>
                <h5 className="h3 mb-0">Calendario</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div
                  className="calendar"
                  data-toggle="calendar"
                  id="calendar"
                  ref={calendarRef}
                />
              </CardBody>
            </Card>
            <Modal
              isOpen={modalAdd}
              toggle={() => setModalAdd(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <form className="new-event--form">
                  <FormGroup>
                    <label className="form-control-label">Turno</label>
                    <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Nombre del turno"
                      type="text"
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <label className="form-control-label d-block mb-3">
                      Color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Cliente</label>
                    {/* <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Nombre del cliente"
                      type="text"
                      onChange={(e) => setEventClient(e.target.value)}
                    /> */}
                     <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={users[0]}
                        // isSearchable={isSearchable}
                        name="color"
                        options={users}
                        onChange= {(e) => handlerUser(e)}
                      />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Mascota</label>
                    {/* <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Nombre de la Mascota"
                      type="text"
                      onChange={(e) => setEventPet(e.target.value)}
                    /> */}
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={pets.length > 0 ? pets[0] : {}}
                        // isSearchable={isSearchable}
                        name="color"
                        options={pets}
                        onChange= {(e) => handlerPet(e)}
                    />
                  </FormGroup>
                  
                </form>
              </div>
              <div className="modal-footer">
                {user?.role?.id == 1 ? <Button
                  className="new-event--add"
                  color="primary"
                  type="button"
                  onClick={addNewEvent}
                >
                  Agregar Turno
                </Button> : null}
                <Button
                  className="ml-auto"
                  color="link"
                  type="button"
                  onClick={() => setModalAdd(false)}
                >
                  Cerrar
                </Button>
              </div>
            </Modal>
            <Modal
              isOpen={modalChange}
              toggle={() => setModalChange(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <Form className="edit-event--form">
                  <FormGroup>
                    <label className="form-control-label">Turno</label>
                    {user?.role?.id == 1 ? <Input
                      className="form-control-alternative edit-event--title"
                      placeholder="Nombre del turno"
                      type="text"
                      defaultValue={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    /> : <p className="form-control-label">{eventTitle}</p>}
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label d-block mb-3">
                      Color
                    </label>
                    {user?.role?.id == 1 ? <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag mb-0"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup> : <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        disabled
                      />}
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Descripcion</label>
                    {user?.role?.id == 1 ? <Input
                      className="form-control-alternative edit-event--description textarea-autosize"
                      placeholder="Event Desctiption"
                      type="textarea"
                      defaultValue={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    /> : <p>{eventDescription}</p>}
                    <i className="form-group--bar" />
                  </FormGroup>
                  <input className="edit-event--id" type="hidden" />
                </Form>
              </div>
              <div className="modal-footer">
                {/* <Button color="primary" onClick={changeEvent}>
                  Update
                </Button> */}
                {user?.role?.id == 1 ? <Button
                  color="primary"
                  onClick={() => {
                    setModalChange(false);
                    changeEvent();
                  }}
                >
                  Cambiar turno
                </Button> : null}
                <Button
                  color="danger"
                  onClick={(e) => {
                    setModalChange(false);
                    deleteEventSweetAlert(e);
                  }}
                >
                  Cancelar Turno
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  onClick={() => setModalChange(false)}
                >
                  Cerrar
                </Button>
              </div>
            </Modal>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CalendarView;
