
import { useState } from 'react';
import LocationItem from '../../components/LocationItem';
import Pagination from '../../components/Pagination';
import * as Icon from 'react-feather';
import BranchFilter from '../../components/BranchFilter'; 

export default function Branch({branchs}) {

  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = branchs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12">
              <div className="breadcrumb-path mb-4">
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
                  <li className="breadcrumb-item active"> Branches</li>
                </ul>
                <h3>Branches</h3>
              </div>
            </div>
            <BranchFilter items={branchs} />
            {/*
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="row">
                <div className="col-xl-10 col-sm-8 col-12">
                  <label className="employee_count">{branchs.length} Branchs</label>
                </div>
                <div class="col-xl-1 col-sm-2 col-12 ">
                  <a href="#" class="btn-create "><Icon.Plus /> </a>
                </div>
              </div>
            </div>
            */}
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="card">
                <div className="table-heading">
                  <h2>Branches</h2>
                </div>
                <div className="table-responsive">
                  <table className="table  custom-table no-footer">

                    <thead>
                      <tr>
                        <th>Address</th>
                        <th>Province</th>
                        <th>City</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((branch) => (
                        <LocationItem branch={branch} key={branch.location_id} />
                      ))}

                    </tbody>
                  </table>
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={branchs.length}
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
  );

}

export async function getServerSideProps() {

  const branchs = await fetch('http://localhost:3001/locations/all');
  const data = await branchs.json();

  return {
    props: {
      branchs: data,
    },
  };
}