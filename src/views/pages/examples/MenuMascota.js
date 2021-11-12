
import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  NavItem,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";
import { useSelector } from 'react-redux';
import { RepositoryFactory } from "repositories/RepositoryFactory";
const userRepository = RepositoryFactory.get('user')


function MenuMascota() {
  const userAux = useSelector(state => state.auth.user)
  const [user, setUser] = useState({})

  useEffect(() => {
    getUser(userAux.id)
  }, [])

  const getUser = async (id) => {
    let userA = await userRepository.getUser(id)
    setUser(userA);
  };

  return (
    <>
      <ProfileHeader />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">MASCOTAS</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                Información de mis mascotas
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col>

                    <table class="table table-bordered">
                      <thead>
                        <tr class="active">
                          <th scope="col" class="text-center text-lg" align="center"><img
                            alt="..."
                            // class=" float-left" 
                            class="d-none d-lg-block ml-lg-4"
                            width="20" height="20"
                            src={require("assets/img/theme/img.png").default}
                          /></th>
                          <th scope="col" class="text-center text-lg" align="center" >Nombre</th>
                          <th scope="col" class="text-center text-lg" align="center">Acción</th>
                        </tr>
                      </thead>
                      <tbody class="text-center" >
                        {user.pets?.map((pet) => (<tr>
                          <td> <img
                            alt="..."
                            class="rounded float-left"
                            width="50" height="70"
                            src={pet.photo}
                          /></td>
                          <td class="text-center text-lg">{pet.name}</td>
                          <td>
                            <NavItem className="d-none d-lg-block ml-lg-4">
                              <Button
                                color="danger"
                                href={"/admin/ProfileM/"+pet.id}
                                size="lg"
                              >
                                Editar
                              </Button>
                              <Button
                                color="primary"
                                href={"/admin/HistoriaClinica/"+pet.id}
                                size="lg"
                              >
                                Historial
                              </Button>
                            </NavItem>
                          </td>
                        </tr>))}
                      </tbody>

                    </table>
                    
                  </Col>
                </Row>
              </div>
            </Form>
          </CardBody>
        </Card>

      </Container>
    </>

  );
}

export default MenuMascota;