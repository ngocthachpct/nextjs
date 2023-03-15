

import * as Icon from 'react-feather';
import Pagination from './../../components/Pagination';
import DepartmentItem from '../../components/DepartmentItem';
import { useState } from 'react';
import React from 'react';
import DepartmentFilter from '../../components/DepartmentFilter';

export default function Department({ departmentAllName, departmentByName }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = departmentByName.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>



      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="breadcrumb-path ">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <img
                        src="/dash.png"
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
            <div className="col-xl-12 col-sm-12 col-12 mb-4"><DepartmentFilter allName={departmentAllName} byName={departmentByName} /></div>
            
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card m-0">
                <div className="card-body pb-0">
                  <div className="row">
                    {currentItems.map((department) => (
                      <DepartmentItem department={department} key={department.department_id}/>
                    ))}
                  </div>
                </div>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={departmentByName.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
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
    </div>
  );

}

export async function getServerSideProps({ query }) {
  const name = query.department || 'All';

  let qr;
  if (name !== 'All') {
      qr = `?department=${name}`
  }else {
      qr = '/allname'
  }

  const departmentAllName = await fetch('http://localhost:3001/department/allname');
  const departmentByName = await fetch(`http://localhost:3001/department${qr}`);
  const data = await departmentAllName.json();
  const data1 = await departmentByName.json();
  return {
    props: {
      departmentAllName: data,
      departmentByName: data1
    },
};
 
}