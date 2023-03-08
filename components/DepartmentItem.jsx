import Link from "next/link"
import * as Icon from 'react-feather';

export default function DepartmentItem({ department }) {
    return(
        <div className="col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <div className="employee-head">
                      <h2>{department.department_name}</h2>
                      {/* <ul>
                        <li>
                          <a
                            className="edit_employee"
                            data-toggle="modal"
                            data-target="#edit"
                          >
                            <Icon.Edit />
                          </a>
                        </li>
                        <li>
                          <a
                            className="edit_delete"
                            data-toggle="modal"
                            data-target="#delete"
                          >
                            <Icon.Trash2 />
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="employee-content">
                      <div className="employee-image">
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
                              src="/avatar-15.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <a
                        className="btn-addmember"
                        data-toggle="modal"
                        data-target="#addteam"
                      >
                        Add Members
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
    )

}