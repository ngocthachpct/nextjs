
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Searchbar from './../../components/Searchbar';
import * as Icon from 'react-feather';

export default function Company (){
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12">
        <div className="breadcrumb-path mb-4">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <img
                  src="assets/dash.png"
                  className="mr-2"
                  alt="breadcrumb"
                />
                Home
              </a>
            </li>
            <li className="breadcrumb-item active"> Companies</li>
          </ul>
          <h3>Companies</h3>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
          <div className="head-link-set">
            <Searchbar />
            {/* <div className="col-xl-2 col-sm-6 col-6 ">
                  <a href="#" className="btn-create ">
                  Add Person{" "}
                  </a>
                </div> */}
          </div>
        </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="row">
          <div className="col-xl-10 col-sm-8 col-12">
            <label className="employee_count">7 Companies</label>
          </div>
          <div class="col-xl-1 col-sm-2 col-12 ">
<a href="#" class="btn-create "><Icon.Plus /> </a>
</div>
        </div>
      </div>
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="card">
          <div className="table-heading">
            <h2>Companies</h2>
          </div>
          <div className="table-responsive">
            <table className="table  custom-table no-footer">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Region</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                  
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                  
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                 
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                  
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                  
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Team Lead</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                 
                </tr>
                <tr>
                <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  
                  <td>
                    <label>Focus Technologies </label>
                  </td>
                  <td>
                    <label>Super Admin</label>
                  </td>
                  <td className="tab-select">
                    <select className="select">
                      <option value="active">Update</option>
                      <option value="inactive">Delete</option>
                    </select>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );

}
