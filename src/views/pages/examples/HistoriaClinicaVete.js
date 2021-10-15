import React, {useState, useEffect} from "react";

// reactstrap components
import {
  CardHeader,
  UncontrolledTooltip,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Search } from "react-bootstrap-table2-toolkit";
import { RepositoryFactory } from "api/RepositoryFactory";
const userRepository = RepositoryFactory.get('user');

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
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    let data =  await userRepository.getUsers()
    setUsers(data)
    return
  }

  useEffect(() => {
    getUsers()
  }, [])

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

            {/* <Col xs={12} sm={6}>
              <div
                id="datatable-basic_filter"
                className="dataTables_filter px-9 pb-1 float-left "
              >
                <label>
                  Search:
                  <SearchBar
                    className="form-control-sm"
                  // placeholder=""
                  // {...props.searchProps}
                  />
                </label>
              </div>
            </Col> */}
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
                {users.map((user) => (<tr>
                  <td className="table-user">
                    <img
                      alt="..."
                      className="avatar rounded-circle mr-3"
                      src={require("assets/img/theme/team-m.png").default}
                    />
                    <b>{user.name + ' ' + user.lastname}</b>
                  </td>
                  <td>
                    {/* <span className="text-muted">
                    10/09/{new Date().getFullYear()}
                  </span> */}
                    <span className="text-muted">
                    {user.dni}
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
                </tr>))}
              </tbody>
            </Table>
          </div>
        </row>
      </Container>
    </>
  );
}

export default HistoriaClinica;
