
import * as Icon from 'react-feather';
import ProfileNav from '../../components/ProfileNav';

export default function ProfileDetail({ employees }) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-4);
    return `${day}:${month}:${year}`;
  }

  return (
    <div>
      
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            {/* <ProfileNav></ProfileNav> */}
            <div className="col-xl-12 col-sm-12 col-12">
                                <div className="breadcrumb-path mb-4">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/dashboard"><img src="/dash.png" className="mr-2" alt="breadcrumb" />Home</a>
                                        </li>
                                        <li className="breadcrumb-item active"> Employees</li>
                                    </ul>
                                    <h3>Employees</h3>
                                </div>
                            </div>

            <h1 className="mb-4">{employees[0].first_name} {employees[0].last_name}'s Profile Detail</h1>
            
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-xl-4 col-sm-12 col-12 d-flex">
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
                            <label>Employee ID </label>
                            <span>{employees[0].employee_id}</span>
                          </li>
                          <li>
                            <label>First Name </label>
                            <span>{employees[0].first_name}</span>
                          </li>
                          <li>
                            <label>Last Name </label>
                            <span>{employees[0].last_name}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12 d-flex">
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
                            <label>Hire date </label>
                            <span>{formatDate(employees[0].hire_date)}</span>
                          </li>
                          <li>
                            <label>Department</label>
                            <span>{employees[0].DEPARTMENT_NAME}</span>
                          </li>
                          <li>
                            <label>Job </label>
                            <span>{employees[0].job_title}</span>
                          </li>
                          <li>
                            <label>Line manager</label>
                            <span> {employees[0].MANAGER}  </span>
                          </li>
                          <li>
                            <label>Address </label>
                            <span>{employees[0].STREET_ADDRESS}</span>
                          </li>
                          <li>
                            <label>Country</label>
                            <span>{employees[0].COUNTRY_NAME}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12 ">
                  <div className="card card-lists flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles">Contact</h2>
                      <a className="edit-link">
                        <Icon.Edit />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="member-info">
                        <ul>
                          <li>
                            <label>Phone Number </label>
                            <span>{employees[0].phone_number}</span>
                          </li>
                          <li>
                            <label>Personal Email</label>
                            <span>{employees[0].email} </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customize_popup">
        <div
          className="modal fade"
          id="editinformation"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Basic Information
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className=" col-md-12 p-0">
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Preferred Name" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Nationality" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Date of Birth" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Gender" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Blood Group" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customize_popup">
        <div
          className="modal fade"
          id="editinformations"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabels"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabels">
                  Add Contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className=" col-md-12 p-0">
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Phone Number" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Login Email" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Personal Email" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Secondary Phone Number" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Add Web Site" />
                  </div>
                  <div className=" form-popup">
                    <input type="text" placeholder="Connect Your Linkedin" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customize_popup">
        <div
          className="modal fade"
          id="delete"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabels1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header text-centers border-0">
                <h5 className="modal-title text-center" id="staticBackdropLabels1">
                  Are You Sure Want to Delete?
                </h5>
              </div>
              <div className="modal-footer text-centers">
                <button type="button" className="btn btn-primary">
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );

}

export async function getServerSideProps({ params: { id } }) {
  const employees = await fetch(`http://localhost:3001/employee/detail=${id}`);
  const data = await employees.json();
  console.log(data)
  return {
    props: {
      employees: data,
    },
  };

}