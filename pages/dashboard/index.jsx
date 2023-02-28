
import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import CardBarChart from './barchart';
import Donutchart from './donutchart';



export default function Dashboard (){
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-name 	mb-4">
                    <h4 className="m-0"><img src="assets/profile.jpg" className="mr-1" alt="profile" /> Welcome Admin</h4>
                    <label>Sun, 29 Nov 2019</label>
                </div>
                <div className="row mb-4">
                    <div className="col-xl-6 col-sm-12 col-12">
                        <div className="breadcrumb-path ">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><img src="assets/dash.png" className="mr-3" alt="breadcrumb" />Home</a>
                                </li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                            <h3>Admin Dashboard</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-6 col-sm-6 col-12">
                                <a className="btn-dash" href="#"> Admin Dashboard</a>
                            </div>
                            <div className="col-xl-6 col-sm-6 col-12">
                                <a className="btn-emp" href="index-employee.html">Employee Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card board1 fill1 ">
                            <div className="card-body">
                                <div className="card_widget_header">
                                    <label>Employees</label>
                                    <h4>700</h4>
                                </div>
                                <div className="card_widget_img">
                                    <img src="assets/dash1.png" alt="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card board1 fill2 ">
                            <div className="card-body">
                                <div className="card_widget_header">
                                    <label>Departments</label>
                                    <h4>30</h4>
                                </div>
                                <div className="card_widget_img">
                                    <img src="assets/dash2.png" alt="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card board1 fill4 ">
                            <div className="card-body">
                                <div className="card_widget_header">
                                    <label>Salary</label>
                                    <h4>$5.8M</h4>
                                </div>
                                <div className="card_widget_img">
                                    <img src="assets/dash4.png" alt="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 d-flex mobile-h">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Total Employees</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <Donutchart />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Total Salary By Unit</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <CardBarChart />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );

}
