
import * as Icon from 'react-feather';
import ProfileNav from '../../components/ProfileNav';
import cookie from 'cookie';
import { getData } from '../../utils/fetchData';
import { useState, useEffect } from 'react';


export default function Profile({ check, id, token, employees }) {

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

  const today = new Date().toISOString().slice(0, 10);
  let mess;
  if (today === formatDate(check.date) && check.arrived_time !== null) {
    if(check.leave_time ===null){
    mess = `You have just checked your attendance at ${formatTime(check.arrived_time)}`
  }else{
    mess = `You have just checked out at ${formatTime(check.leave_time)}`
  }
  } else {
    mess = 'you have not checked in'
  }

  const [message, setMessage] = useState(mess)
  const checkAttendance = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:3001/attendance?id=${id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await response.json();
    if(data.arrivedTime !== null){
      mess = `You have just checked your attendance at ${data.arrivedTime}`
      setMessage(mess )
    }else{
      mess = `You have just checked out at ${data.leave_time}`
      setMessage(mess )
    }

  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <ProfileNav></ProfileNav>
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="row">

                <div className="col-xl-12 col-sm-12 col-12 ">
                  <div className="card card-lists flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles">Check Attendance</h2>
                      <span> {message}</span>

                      <ul>
                        <li>
                          <a onClick={checkAttendance}
                            className="edit-link"
                            data-toggle="modal"
                            data-target="#edit_working"
                          >
                            <Icon.CheckCircle />
                          </a>
                        </li>
                        {/* <li>
                      <a
                        className="delete-link"
                        data-toggle="modal"
                        data-target="#delete"
                      >
                        <Icon.Trash2 />
                      </a>
                    </li> */}
                      </ul>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="member-img">
                        <img
                          src="/avatar-14.jpg"
                          alt="profile"
                          className="mr-3"
                        />
                        <label>{employees[0].first_name} {employees[0].last_name} </label>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card card-lists flex-fill">
                <div className="card-header">
                  <h2 className="card-titles">
                    Focus Technologies<span>Head Office</span>
                  </h2>
                  {/* <a
                className="btn btn-header"
                data-toggle="modal"
                data-target="#changeoffice"
              >
                Change Office
              </a> */}
                </div>
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="member-head employee-image">
                    <h2>Members</h2>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-10.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-15.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-16.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-17.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-14.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/avatar-18.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="member_link">
                    {/* <a className="btn btn-visit">Visit Office</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-xl-6 col-sm-12 col-12 d-flex">
                  <div className="card card-lists flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles"> Manager</h2>
                      {/* <ul>
                    <li>
                      <a
                        className="edit-link"
                        data-toggle="modal"
                        data-target="#changemanager"
                      >
                        <Icon.Edit />
                      </a>
                    </li>
                    <li>
                      <a
                        className="delete-link"
                        data-toggle="modal"
                        data-target="#delete"
                      >
                        <Icon.Trash2 />
                      </a>
                    </li>
                  </ul> */}
                    </div>
                    <div className="card-body">
                      <div className="member-formcontent  border-0 ">
                        <div className="member-imgs">
                          <img
                            src="/avatar-14.jpg"
                            alt="profile"
                          />
                          <div className="member-name">
                            <label>{employees.MANAGER || 'No'}</label>
                            {/* <span>
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="056864776c64666a71716a6b45607d64687569602b666a68"
                          >
                            [email&nbsp;protected]
                          </a>
                        </span> */}
                          </div>
                        </div>
                        <div className="member-btn">
                          {/* <a
                        href="#"
                        className="btn btn-applys"
                        data-toggle="modal"
                        data-target="#changemanager"
                      >
                        Change Manager
                      </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-12 col-12 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h2 className="card-titles">Who Reports to Maria Cotton</h2>
                    </div>
                    <div className="card-body">
                      <div className="member-formcontent ">
                        <div className="avatar-group">
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/avatar-14.jpg"
                            />
                          </div>
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/avatar-10.jpg"
                            />
                          </div>
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/avatar-15.jpg"
                            />
                          </div>
                        </div>
                        <div className="member-btn">
                          {/* <a href="#" className="btn btn-applys">
                        Add people
                      </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-12 col-sm-12 col-12 ">
          <div className="row">
            <div className="col-xl-6 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h2 className="card-titles">Position</h2>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" placeholder="Job Title" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Permanent" />
                  </div>
                  <div className="form-btn">
                    <a href="#" className="btn btn-applys">
                      PHP Team Lead
                    </a>
                    <a href="#" className="btn btn-applys">
                      Permanent
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-12 d-flex">
              <div className="card card-lists flex-fill">
                <div className="card-header">
                  <h2 className="card-titles">
                    Working Week
                    <span>Set the dates that your company works.</span>
                  </h2>
                  <a
                    className="edit-link"
                    data-toggle="modal"
                    data-target="#edit_workings"
                  >
                    <Icon.Edit />
                  </a>
                </div>
                <div className="card-body d-flex ">
                  <div className="form-week">
                    <ul>
                      <li>
                        <a className="active">Mon</a>
                      </li>
                      <li>
                        <a className="active">Tue</a>
                      </li>
                      <li>
                        <a className="active">Wed</a>
                      </li>
                      <li>
                        <a className="active">Thur</a>
                      </li>
                      <li>
                        <a className="active">Fri</a>
                      </li>
                      <li>
                        <a className="inactive">Sat</a>
                      </li>
                      <li>
                        <a className="inactive">Sun</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
  const response = await getData(`attendance/today/${id}`, token)
  const employees = await fetch(`http://localhost:3001/employee/detail=${id}`);
  const data = await employees.json();
  console.log(data)
  return {
    props: {
      employees: data,
      check: response,
      id,
      token
    }
  };
}