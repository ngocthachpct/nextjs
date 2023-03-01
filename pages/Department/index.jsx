
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Searchbar from './../../components/Searchbar';
import * as Icon from 'react-feather';

export default function Department (){
    return (
        <div>
        <Header/>
        <Sidebar/>
        <>
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="col-xl-12 col-sm-12 col-12 mb-4">
          <div className="breadcrumb-path ">
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
              <li className="breadcrumb-item active"> Departments</li>
            </ul>
            <h3>Departments</h3>
          </div>
        </div>
        <div className="col-xl-12 col-sm-12 col-12 mb-4">
          <div className="head-link-set">
            <Searchbar />
            {/* <div className="col-xl-2 col-sm-6 col-6 ">
                  <a href="#" className="btn-create ">
                  Add Person{" "}
                  </a>
                </div> */}
          </div>
        </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-10 col-sm-8 col-12">
            <label className="employee_count">7 Departments</label>
          </div>
          <div class="col-xl-1 col-sm-2 col-12 ">
<a href="#" class="btn-create "><Icon.Plus /> </a>
</div>
        </div>
      </div>
      </div>
      
      
      <div className="row">
        <div className="col-xl-12 col-sm-12 col-12 ">
          <div className="card">
            <div className="card-header create-formhead">
              <h2 className="card-titles">
                Focus Technologies<span>Head Office</span>
              </h2>
              <a data-toggle="modal" data-target="#edit" className="edit-link">
                <Icon.Edit />{" "}
              </a>
            </div>
            <div className="card-body">
              <div className="member-formcontent member-row">
                <div className="member-head">
                  <h2>Members</h2>
                  <div className="avatar-group">
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-10.jpg"
                      />
                    </div>
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-15.jpg"
                      />
                    </div>
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-16.jpg"
                      />
                    </div>
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-17.jpg"
                      />
                    </div>
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-14.jpg"
                      />
                    </div>
                    <div className="avatar avatar-xs group_img group_header">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/avatar-18.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="member_link">
                  <a
                    data-toggle="collapse"
                    href="#table"
                    role="button"
                    aria-expanded="false"
                    aria-controls="table"
                  >
                    <Icon.ChevronDown />
                  </a>
                </div>
              </div>
              <div className="table-responsive collapse show" id="table">
                <table className="table  custom-table  no-footer">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Line Manager</th>
                      <th>Team</th>
                      <th>Office</th>
                      <th>Permissions</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
                            <img
                              src="assets/avatar-13.jpg"
                              alt="profile"
                              className="img-table"
                            />
                          </a>
                          <label>Sean Black</label>
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                      
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
                            <img
                              src="assets/avatar-16.jpg"
                              alt="profile"
                              className="img-table"
                            />
                          </a>
                          <label>Linda Craver</label>
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                      
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                      
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                      
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                      
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                     
                    </tr>
                    <tr>
                      <td>
                        <div className="table-img">
                          <a href="profile.html">
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
                      <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
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
  <div className="customize_popup">
    <div
      className="modal fade"
      id="edit"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit Office
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
                <label>Office Name</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-apply">
              Apply
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
</>


        </div>
    );

}
