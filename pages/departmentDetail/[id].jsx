
import * as Icon from 'react-feather';
import Link from "next/link"


export default function DepartmentDetail({ departments }) {

  return (
    <div>

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">

            <div className="col-xl-12 col-sm-12 col-12">
              <div className="breadcrumb-path mb-4">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/dashboard"><img src="/dash.png" className="mr-2" alt="breadcrumb" />Home</a>
                  </li>
                  <li className="breadcrumb-item active"> Departments</li>
                </ul>
                <h3>Departments</h3>
              </div>
            </div>

            <h1 className="mb-4"> Department Detail</h1>

            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-xl-12 col-sm-12 col-12 d-flex">
                  <div className="card card-lists flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles">Basic Information</h2>
                      <a className="edit-link">
                        <Icon.Edit />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="member-info">
                        <ul>
                          <li>
                            <label>Department ID </label>

                            <span><input defaultValue={departments[0].department_id}></input></span>
                          </li>
                          <li>
                            <label>Department Name </label>
                            <span><input defaultValue={departments[0].dapartment_name}></input></span>
                          </li>
                          <li>
                            <label>Line manager </label>
                            <span><input defaultValue={departments[0].line_manager}></input></span>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="table-responsive">
                      <table className="table  custom-table no-footer">
                      <thead>
                        <tr>
                            <th>Department ID</th>
                            <th>Department Name</th>
                            <th>Line Manager</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
            <td>
                <label className="action_label">DepartmentID</label>
            </td>
            <td>
                <label className="action_label2">Department Name </label>
            </td>
            <td><label className="action_label">Line Manager</label></td>
            <td className="tab-select">
                <select className="select">
                    <option value="default">default</option>
                    <option value="delete">delete</option>
                    <option value="update">update</option>
                </select>
            </td>
        </tr>
        </tbody>
        </table>
        </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-sm-12 col-12 d-flex">
                  <div className="card card-lists flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles">Location</h2>
                      {/* <a className="edit-link">
                        <Icon.Edit />
                      </a> */}
                    </div>
                    <div className="card-body">
                      {/* <div className="member-info">
                        <ul>
                          <li>
                            <label>address </label>
                            <span>cc</span>
                          </li>
                          <li>
                            <label>city</label>
                            <span>cc</span>
                          </li>
                          <li>
                            <label>nation</label>
                            <span>cc</span>
                          </li>
                        </ul>
                      </div> */}

                      <div className="table-responsive">
                        <table className="table  custom-table no-footer">
                          <thead>
                            <tr>
                              <th>Address</th>
                              <th>City</th>
                              <th>Nation</th>                    
                            </tr>
                          </thead>
                          <tbody>
                            {departments.map((department) => (
                              <tr>

                                <td>
                                  <span />{department.address}
                                </td>
                                <td>
                                <span />{department.city}
                                </td>
                                <td>
                                <span />{department.nation}
                                </td>    
                              </tr>
                            ))}

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );

}

export async function getServerSideProps({ params: { id } }) {
  const departments = await fetch(`http://localhost:3001/department/id=${id}`);
  const data = await departments.json();
  console.log(data)

  return {
    props: {
      departments: data,
    },
  };

}