
import ProfileNav from '../../components/ProfileNav';
import cookie from 'cookie';
import { getData } from '../../utils/fetchData';

export default function ProfileReport({ attendances }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  }

  function formatTime(timeString) {
    const date = new Date(timeString);
    const formattedTime = `${date.getUTCHours().toString().padStart(2, "0")}:${date.getUTCMinutes().toString().padStart(2, "0")}:${date.getUTCSeconds().toString().padStart(2, "0")}`;
    return formattedTime;
  }

  function formatLateTime(timeString) {
    const date = new Date(timeString);
    const totalHours = date.getUTCHours() + (date.getUTCMinutes() / 60) + (date.getUTCSeconds() / 3600);
    const roundedTotalHours = parseFloat(totalHours.toFixed(2));
    return roundedTotalHours;
  }

  let totalLateTime = 0;

  attendances.forEach(item => {
    const lateTimeInMilliseconds = Date.parse(item.late_time);
    totalLateTime += lateTimeInMilliseconds;
  });

  // total late
  const seconds = Math.floor(totalLateTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const total = `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;

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
                              <span>You have been late for {total} in total this week.</span>
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
                            {attendances.map((attendance) => (
                              <tr>

                                <td>
                                  <span />{formatDate(attendance.date)}
                                </td>
                                <td>
                                  <span />{formatTime(attendance.arrived_time)}
                                </td>
                                <td>
                                  <span />{formatTime(attendance.leave_time)}
                                </td>
                                <td>
                                  <span />{formatLateTime(attendance.late_time)}
                                </td>
                              </tr>
                            ))}
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

export async function getServerSideProps({ req }) {
  const cookieHeader = req.headers.cookie;
  const cookies = cookie.parse(cookieHeader || '');
  const id = cookies.id;
  const token = cookies.token;
  const response = await getData(`attendance/AmountAttendace/${id}`, token)

  console.log(response)
  return {
    props: {
      attendances: response
    }
  };
}
