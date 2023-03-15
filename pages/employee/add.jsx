import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState';

export default function AddEmployee({ departmentName, managerName, jobsNames }) {
    const { state, dispatch } = useContext(DataContext)
    const router = useRouter()

    const department_name = departmentName?.map(department => ({ department_id: department?.department_id, department_name: department?.department_name })) || []
    const manager_name = managerName?.map(manager => ({ manager_name: manager?.manager_name, manager_id: manager?.manager_id })) || []
    const jobs_name = jobsNames?.map(jobs => ({ JOB_TITLE: jobs?.JOB_TITLE, JOB_ID: jobs?.JOB_ID })) || []
    const initialState = { first_name: '', last_name: '', email: '', phone_number: '', hire_date: '', job_id:'', salary: '', manager_id: '', department_id: '' }
    const [employeeData, setEmployeeData] = useState(initialState)
    //const {first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id} = employeeData
   
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
                const response = await fetch('http://localhost:3001/employee/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(employeeData)
                });
                const data = await response.json();
                //console.log(data); // In kết quả trả về từ API ra console để kiểm tra
                // Do something with the data here
                if (response.ok) {
                    router.reload(window.location.pathname)

                } else {
                    dispatch({ type: 'NOTIFY', payload: { loading: false } })
                 

                }
            } catch (error) {
                console.error(error);

            }
        })()

    }
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row">
                    {/* <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="breadcrumb-path mb-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active"> Employees</li>
                            </ul>
                            <h3>Create Employees</h3>
                        </div>
                    </div> */}
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-titles">Add Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                        <input  type="text" placeholder="First Name" name="first_name" onChange={handleInputChange} value={employeeData.first_name} />
                                
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" name="last_name" placeholder="Last Name" onChange={handleInputChange} value={employeeData.last_name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={employeeData.email} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleInputChange} value={employeeData.phone_number} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="date" name="hire_date" placeholder="Hire Date" onChange={handleInputChange} value={employeeData.hire_date} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <input type="number" min="0" name="salary" placeholder="salary" onChange={handleInputChange} value={employeeData.salary} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <label className="employee_count" style={{ ["padding"]: "17px" }}>
                                                <select id="inputDepartment" className="form-control" name="department_id" onChange={handleInputChange} value={employeeData.department_id} >
                                                    <option>Department</option>
                                                    <option>No</option>
                                                    {department_name.map((department) => (
                                                        <option key={department.department_name} value={department.department_id}>
                                                            {department.department_name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <label className="employee_count" style={{ ["padding"]: "17px" }}>
                                                <select id="inputDepartment" className="form-control" name="job_id" onChange={handleInputChange} value={employeeData.job_id} >
                                                    <option>Jobs</option>
                                                    {jobs_name.map((jobs) => (
                                                        <option key={jobs.JOB_TITLE} value={jobs.JOB_ID}>
                                                            {jobs.JOB_TITLE}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 col-12 ">
                                        <div className="form-group">

                                            <label className="employee_count" style={{ ["padding"]: "17px" }}>
                                                <select id="inputDepartment" className="form-control" name="manager_id"  onChange={handleInputChange} value={employeeData.manager_id}>
                                                <option>No</option>
                                                {manager_name.map((manager) => (
                                                    <option key={manager.manager_name} value={manager.manager_id}>
                                                        {manager.manager_name}
                                                    </option>
                                                ))}
                                            </select></label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="row">
                            <div className="col-xl-12 col-sm-12 col-12 ">
                                <div className="form-btn">
                                    <a onClick={handleSubmit} className="btn btn-apply w-auto">Add Employee</a>
                                    {/* <a href="#" className="btn btn-secondary">Cancel</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const departmentName = await fetch('http://localhost:3001/department/allname');
    const managerName = await fetch('http://localhost:3001/employee/manager');
    const jobsName = await fetch('http://localhost:3001/jobs/all');
    const data1 = await departmentName.json();
    const data2 = await managerName.json();
    const data3 = await jobsName.json();
    console.log(data3)
    return {
        props: {
            departmentName: data1,
            managerName: data2,
            jobsNames: data3
        },
    };


}