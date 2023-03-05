
import * as Icon from 'react-feather';




export default function ProfileTimeoff (){
    return (
        <div>
   
   <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12 ">
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
            <li className="breadcrumb-item active"> Profile</li>
          </ul>
          <h3>Profile </h3>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="head-link-set">
          <ul>
          <li>
                <a href="Profile">
                  Employement
                </a>
              </li>
              <li>
                <a href="ProfileDetail">Detail</a>
              </li>
              <li>
                <a href="ProfileSetting">Settings</a>
              </li>
              <li>
                <a className = "active" href="ProfileTimeoff">TimeOff</a>
              </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h2 className="card-titles">Holidays List</h2>
              </div>
              <div className="card-body">
                <div className="col-xl-12 col-sm-12 col-12 mb-5 ">
                  <div className="row">
                    <div className="col-xl-8 col-sm-12 col-12 p-0">
                      <div className="head-link-set">
                        <ul>
                          <li>
                            <a className="active" href="#">
                              Upcoming
                            </a>
                          </li>
                          <li>
                            <a href="#">History</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-12 col-12 p-0 select-path">
                      <select className="select">
                        <option value="inactive">In Progress</option>
                        <option value="active">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table table-responsive custimze-table">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Leave Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mon, 26 Aug 2019</td>
                        <td>Bank Holiday</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Wed, 25 Dec 2019</td>
                        <td> Christmas Day</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Thu, 26 Dec 2019</td>
                        <td>Bank Holiday</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Wed, 1 Jan 2020</td>
                        <td>Bank Holiday</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Mon, 1 Jan 2020</td>
                        <td> Epiphany</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Fri, 17 Jan 2020 </td>
                        <td> Presidents' Day</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Mon, 9 Mar 2020</td>
                        <td>Holi</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Wed, 1 Mar 2020 </td>
                        <td>Independence Day</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Sat, 4 Jul 2020 </td>
                        <td>Bank Holiday</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Mon, 11 Nov 2020 </td>
                        <td> Veterans Day</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Fri, 25 Dec 2020</td>
                        <td> Christmas Day</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Mon, 1 Jan 2020</td>
                        <td> Epiphany</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h2 className="card-title">Leave Off Details</h2>
              </div>
              <div className="card-body p-0">
                <div className="card-body-inner">
                  <h3>Year</h3>
                  <label>01 January – 31 December</label>
                </div>
                <div className="card-body-inner">
                  <h3>Days Used</h3>
                  <div className="card-range">
                    <div className="card-set">
                      <div className="card-days">5 days</div>
                    </div>
                  </div>
                  <h3>Days</h3>
                  <label>5 Used</label>
                </div>
                <div className="card-body-inner">
                  <h3>Non Deductible Days</h3>
                  <ul>
                    <li>
                      <a className="btn btn-approved">5 Approved</a>
                    </li>
                    <li>
                      <a className="btn btn-approved">7 Pending</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body-inner">
                  <h3>Attendance</h3>
                  <label>3 Sick Days</label>
                  <label>2 Working from Home</label>
                </div>
                <div className="card-body-inner select-path border-0">
                  <h3>Time Off Approvers</h3>
                  <div className="form-group">
                    <select className="select">
                      <option value="inactive">Choose Approver</option>
                      <option value="active">Approved</option>
                    </select>
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


        </div>
    );

}
