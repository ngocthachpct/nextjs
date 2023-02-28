
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import * as Icon from 'react-feather';

export default function Employee (){
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12">
        <div className="breadcrumb-path mb-4">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <img
                  src="assets/dash.png"
                  className="mr-2"
                  alt="breadcrumb"
                />
                Home
              </a>
            </li>
            <li className="breadcrumb-item active"> Employees</li>
          </ul>
          <h3>Employees</h3>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="head-link-set">
          <ul>
            <li>
              <a className="active" href="#">
                Employees
              </a>
            </li>
            <li>
              <a href="Department">Departments</a>
            </li>
          </ul>
          <a className="btn-add" href="add-employee.html">
          <Icon.Plus /> Add Person
          </a>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-10 col-sm-8 col-12 ">
            <label className="employee_count">7 People</label>
          </div>
          
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="card">
          <div className="table-heading">
            <h2>Employees</h2>
          </div>
          <div className="table-responsive">
            <table className="table  custom-table no-footer">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Line Manager</th>
                  <th>Team</th>
                  <th>Office</th>
                  <th>Permissions</th>
                  {/* <th>Status</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-13.jpg"
                          alt="profile"
                          className="img-table"
                        />
                        <label>Sean Black</label>
                      </a>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">Design </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-16.jpg"
                          alt="profile"
                          className="img-table"
                        />
                        <label>Linda Craver</label>
                      </a>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">IOS </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-17.jpg"
                          alt="profile"
                          className="img-table"
                        />
                      </a>
                      <label>Jenni Sims</label>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">Android </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-19.jpg"
                          alt="profile"
                          className="img-table"
                        />
                      </a>
                      <label>Stacey Linville</label>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">Testing </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-14.jpg"
                          alt="profile"
                          className="img-table"
                        />
                      </a>
                      <label>Maria Cotton</label>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">PHP </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-18.jpg"
                          alt="profile"
                          className="img-table"
                        />
                      </a>
                      <label>John Gibbs</label>
                    </div>
                  </td>
                  <td>
                    <label className="action_label">Richard Wilson </label>
                  </td>
                  <td>
                    <label className="action_label2">PHP </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                 
                </tr>
                <tr>
                  <td>
                    <div className="table-img">
                      <a href="ProfileDetail">
                        <img
                          src="assets/avatar-10.jpg"
                          alt="profile"
                          className="img-table"
                        />
                      </a>
                      <label>Richard Wilson</label>
                    </div>
                  </td>
                  <td>
                    <label className="action_label in_active">No </label>
                  </td>
                  <td>
                    <label className="action_label2">Business </label>
                  </td>
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Super Admin</label>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );

}
