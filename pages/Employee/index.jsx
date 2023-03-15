import * as Icon from 'react-feather';
import React from 'react';
import EmployeeFilter from '../../components/EmployeeFilter';
import EmployeeItem from '../../components/EmployeeItem';
import Pagination from '../../components/Pagination';
import { useState, useEffect } from 'react';


export default function Employee({ employees, departmentName }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);


    const [employs, setEmploys] = useState(employees)
    const [isCheck, setIsCheck] = useState(false)
    useEffect(() => {
        setEmploys(employees)
    }, [employees])

    const handleCheck = (id) => {
        employs.forEach(employ => {
            if (employ.employee_id === id) employ.checked = !employ.checked
        })
        setEmploys([...employs])
    }

    const handleCheckALL = () => {
        employs.forEach(employ => employ.checked = !isCheck)
        setEmploys([...employs])
        setIsCheck(!isCheck)
    }

    const handleDeleteAll =async e  => {
        e.preventDefault()
        let deleteArr = [];
        employs.forEach(employ => {
            if (employ.checked) {
                deleteArr.push({
                    employee_id: employ.employee_id,
                })
            }
        })
        console.log(deleteArr)

        const response = await fetch('http://localhost:3001/employee/delete', {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(deleteArr)
              });
              const data = await response.json();
              console.log(data)
              window.location.reload();
       
    }


    
    return (
        <div>

            <div className="main-wrapper">
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="row">
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
                            {/* <div className="col-xl-12 col-sm-12 col-12 mb-4">
                                <div className="head-link-set">
                                    <a className="btn-add" href="/add-employee"><Icon.Plus /> Add Person</a>
                                </div>
                            </div> */}
                            <div className="col-xl-12 col-sm-12 col-12 mb-4"><EmployeeFilter items={departmentName} /></div>
                            <div className="col-xl-12 col-sm-12 col-12 mb-4 ">
                                <div className="row">
                                    <div className="col-xl-10 col-sm-10 col-12">
                                        <label className="employee_count">{employees.length} People</label>
                                    </div>
                                    <div className="col-xl-2 col-sm-2 col-12 ">
                                        <a  href='/employee/add' className="btn-create "><Icon.Plus />Add</a>
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
                                                    <th>Name</th>
                                                    <th>Line Manager</th>
                                                    <th>Department</th>
                                                    <th>Job</th>
                                                    <th>Office</th>
                                                    <th><div className="delete_all btn btn-danger mt-2" style={{ marginBottom: '-10px' }}>
                                                        <input type="checkbox" checked={isCheck} onChange={handleCheckALL}
                                                            style={{ width: '25px', height: '25px', transform: 'translateY(8px)' }} />

                                                        <button className="btn btn-danger ml-2"
                                                            data-toggle="modal" 
                                                            onClick={handleDeleteAll}>
                                                            DELETE ALL
                                                        </button>
                                                    </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentItems.map((employee) => (
                                                    <EmployeeItem employee={employee} key={employee.employee_id} handleCheck={handleCheck} />
                                                ))}
                                            </tbody>
                                        </table>
                                        <Pagination
                                            itemsPerPage={itemsPerPage}
                                            totalItems={employees.length}
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}
                                        />
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

export async function getServerSideProps({ query }) {
    const department = query.department || 'All';
    const name = query.name || '';
    let qr;
    if (name !== '' && department !== 'All') {
        qr = `?name=${name}&department_name=${department}`
    }
    else if (name !== '' && department === 'All') {
        qr = `/name=${name}`
    }
    else if (name === '' && department !== 'All') {
        qr = `/department=${department}`
    } else if (name === '' && department === 'All'){
        qr = '/all'
    }

    console.log(qr)
    const employees = await fetch(`http://localhost:3001/employee${qr}`);
    const departmentName = await fetch('http://localhost:3001/department/allname');
    const data = await employees.json();
    const data1 = await departmentName.json();
    return {
        props: {
            employees: data,
            departmentName: data1
        },
    };
}
