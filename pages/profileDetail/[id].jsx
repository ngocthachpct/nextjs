import * as Icon from 'react-feather';
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState';

export default function ProfileDetail({ employees, departmentName, managerName, jobsNames }) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-4);
    return `${year}-${month}-${day}`;
  }
  const department_name = departmentName?.map(department => ({ department_id: department?.department_id, department_name: department?.department_name })) || []
  const manager_name = managerName?.map(manager => ({ manager_name: manager?.manager_name, manager_id: manager?.manager_id })) || []
  const jobs_name = jobsNames?.map(jobs => ({ JOB_TITLE: jobs?.JOB_TITLE, JOB_ID: jobs?.JOB_ID })) || []


  const initialState = {
    employee_id: employees[0].employee_id,
    first_name: employees[0].first_name,
    last_name:  employees[0].last_name,
    mail:  employees[0].email,
    phone_number:  employees[0].phone_number,
    hire_date:  employees[0].hire_date,
    job_id:  employees[0].job_id,
    manager_id:  employees[0].MANAGER_ID,
    department_id:  employees[0].department_id
  }
  
  const [employeeData, setEmployeeData] = useState(initialState)
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
    //dispatch({ type: 'NOTIFY', payload: {} })
    //console.log(value);
  }
  console.log(employeeData)

  const handleSubmit = async e => {
    e.preventDefault()
    //const errMsg = validAll(employee_id, email, password)
    //if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    (async () => {

      await sleep(3000)
      try {
        const response = await fetch('http://localhost:3001/employee/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(employeeData)
        });
        const data = await response.json();
        //console.log(data); // In kết quả trả về từ API ra console để kiểm tra
        // Do something with the data here
        if (response.ok) {
          //router.reload(window.location.pathname)
          console.log(data)
          router.reload(window.location.pathname)

        } else {
          dispatch({ type: 'NOTIFY', payload: { loading: false } })


        }
      } catch (error) {
        console.error(error);

      }
    })()

  }
 
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

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
            <form onSubmit={handleSubmit}>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Basic Information</h2>
                        {/* <a className="edit-link">
                          <Icon.Edit />
                        </a> */}
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Employee ID </label>

                              <span className='text-danger' name="employee_id"   key={employees[0].employee_id}>{employees[0].employee_id}</span>
                            </li>
                            <li>
                              <label>First Name </label>
                              <span><input  name="first_name" onChange={handleInputChange} value={employeeData.first_name} /></span>
                            </li>
                            <li>
                              <label>Last Name </label>
                              <span><input  name="last_name" onChange={handleInputChange} value={employeeData.last_name} /></span>
                            </li>
                            <li>
                              <label>Hire date </label>
                              <span><input type="date" value={formatDate(employeeData.hire_date)} name="hire_date" onChange={handleInputChange} /></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Job Information</h2>
                        {/* <a className="edit-link">
                          <Icon.Edit />
                        </a> */}
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            
                            <li>
                              {/*<label>Department</label>
                            <span><input placeholder={employees[0].DEPARTMENT_NAME} name="last_name" onChange={handleInputChange} value={employeeData.DEPARTMENT_NAME} /></span>
                            */}
                              <label className="employee_count" style={{ ["padding"]: "17px" }}>Department
                                <select id="inputDepartment" className="form-control" name="department_id" onChange={handleInputChange} value={employeeData.department_id} >

                                  <option>No</option>
                                  {department_name.map((department) => (
                                    <option key={department.department_name} value={department.department_id}>
                                      {department.department_name}
                                    </option>
                                  ))}
                                </select>
                              </label>
                            </li>
                            <li>
                              {/*<label>Job </label>
                            <span><input placeholder={employees[0].job_title} name="job_title" onChange={handleInputChange} value={employeeData.job_title} /></span>
                           */}
                              <label className="employee_count" style={{ ["padding"]: "17px" }}>Jobs
                                <select id="inputDepartment" className="form-control" name="job_id" onChange={handleInputChange} value={employeeData.job_id} >
                                  <option >No</option>
                                  {jobs_name.map((jobs) => (
                                    <option key={jobs.JOB_ID} value={jobs.JOB_ID} >
                                      {jobs.JOB_TITLE}
                                    </option>
                                  ))}
                                </select>
                              </label>
                            </li>
                            <li>
                              {/*}
                            <label>Line manager</label>
                            <span><input placeholder={employees[0].MANAGER} name="MANAGER" onChange={handleInputChange} value={employeeData.MANAGER} />   </span>
                            */}
                              <label className="employee_count" style={{ ["padding"]: "17px" }}>Line Manager
                                <select className="form-control" name="manager_id" onChange={handleInputChange} value={employeeData.manager_id} >
                                  <option >No</option>
                                  {manager_name.map((manager) => (
                                    <option key={manager.manager_id} value={manager.manager_id} >
                                      {manager.manager_name}
                                    </option>
                                  ))}

                                </select></label>
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
                        {/* <a className="edit-link">
                          <Icon.Edit />
                        </a> */}
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Phone Number </label>
                              <span><input placeholder={employees[0].phone_number} name="phone_number" onChange={handleInputChange} value={employeeData.phone_number} /></span>
                            </li>
                            <li>
                              <label>Personal Email</label>
                              <span><input placeholder={employees[0].email} name="email" onChange={handleInputChange} value={employeeData.email} /> </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-apply w-auto" type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export async function getServerSideProps({ params: { id } }) {
  const employees = await fetch(`http://localhost:3001/employee/detail=${id}`);
  const data = await employees.json();
  const departmentName = await fetch('http://localhost:3001/department/allname');
  const managerName = await fetch('http://localhost:3001/employee/manager');
  const jobsName = await fetch('http://localhost:3001/jobs/all');
  const data1 = await departmentName.json();
  const data2 = await managerName.json();
  const data3 = await jobsName.json();
  console.log(data)
  return {
    props: {
      employees: data,
      departmentName: data1,
      managerName: data2,
      jobsNames: data3
    },
  };

}