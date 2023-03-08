
import * as Icon from 'react-feather';
import ProfileNav from '../../components/ProfileNav';



export default function ProfileReport (){
    return (
        <div>
   
   <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      
    <ProfileNav></ProfileNav>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-12 col-sm-12 col-12">
            <div className="card flex-fill">
              <div className="card-header">
                <h2 className="card-titles">Attendance Report</h2>
              </div>
              <div className="card-body">
                <div className="col-xl-12 col-sm-12 col-12 mb-5 ">
                  <div className="row">
                    
                    <div className="col-xl-10 col-sm-12 col-12 p-0">
                      <div className="head-link-set">
                      
                        {/* <ul>
                          <li>
                            <a className="active" href="#">
                              Total Week
                            </a>
                          </li>
                          <li>
                            <a href="#">Total Month</a>
                          </li>
                        </ul> */}
                        <span>You have been late for 55 minutes in total this week.</span>
                      </div>
                    </div>
                    
                    {/* <div className="col-xl-4 col-sm-12 col-12 p-0 select-path">
                      <select className="select">
                        <option value="inactive">In Progress</option>
                        <option value="active">Completed</option>
                      </select>
                    </div> */}
                  </div>
                </div>
                <div className="table table-responsive custimze-table">
                  <table>
                    <thead>
                      <tr>
                        
                        <th>Date</th>
                        <th>Arrived</th>
                        <th>Leaved</th>
                        <th>Late Time</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>Mon, 26 Aug 2019</td>
                        <td>8:00AM (on time)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                  
                        <td>Wed, 25 Dec 2019</td>
                        <td> 9:00AM (late)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                       
                        <td>Thu, 26 Dec 2019</td>
                        <td>8:00AM (on time)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                       
                        <td>Wed, 1 Jan 2020</td>
                        <td>10:00AM (late)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                     
                        <td>Mon, 1 Jan 2020</td>
                        <td> 8:00AM (on time)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                        
                        <td>Fri, 17 Jan 2020 </td>
                        <td> 8:00AM (on time)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      <tr>
                        
                        <td>Mon, 9 Mar 2020</td>
                        <td>8:11AM (late)</td>
                        <td>5:00PM</td>
                        <td>10 Minutes</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-6 col-sm-12 col-12 d-flex">
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
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    );

}
