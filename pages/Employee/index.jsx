import * as Icon from 'react-feather';
import React from 'react';
import EmployeeFilter from '../../components/EmployeeFilter';
import EmployeeItem from '../../components/EmployeeItem';
import Pagination from '../../components/Pagination';
import { useState } from 'react';



export default function Employee({ employees, departmentName }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

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
            <label className="employee_count">{currentItems.length} People</label>
          </div>
          <div className="col-xl-2 col-sm-2 col-12 ">
<a href="#" className="btn-create "><Icon.Plus />Add</a>
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
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentItems.map((employee) => (
                                                    <EmployeeItem employee={employee} key={employee.employee_id} />
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

export async function getServerSideProps({query}) {
    const department = query.department || 'All';
    const name = query.name || '';
    let qr ;
    if(name !=='' && department !=='All'){
        qr =`?name=${name}&department=${department}`
    }
    else if(name !== '' && department ==='All'){
        qr =`/name=${name}`
    }
    else if(name ==='' && department !=='All'){
        qr =`/department=${department}`
    }else {
        qr ='/all'
    }
    console.log(qr)
    const employees = await fetch(`http://localhost:3001/employee${qr}`);
    const departmentName = await fetch('http://localhost:3001/department/name');
    const data = await employees.json();
    const data1 = await departmentName.json();
    return {
        props: {
            employees: data, 
            departmentName: data1
        },
    };
}
