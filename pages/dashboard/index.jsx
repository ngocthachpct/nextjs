
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
                    <h4 className="m-0"><img src="/profile.jpg" className="mr-1" alt="profile" /> Welcome Admin</h4>
                    <label>Sun, 29 Nov 2019</label>
                </div>
                <div className="row mb-4">
                    <div className="col-xl-6 col-sm-12 col-12">
                        <div className="breadcrumb-path ">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><img src="/dash.png" className="mr-3" alt="breadcrumb" />Home</a>
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
                                    <img src="/dash1.png" alt="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card board1 fill2 ">
                            <div className="card-body">
                                <div className="card_widget_header">
                                    <label>Companies</label>
                                    <h4>30</h4>
                                </div>
                                <div className="card_widget_img">
                                    <img src="/dash2.png" alt="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card board1 fill3 ">
                            <div className="card-body">
                                <div className="card_widget_header">
                                    <label>Leaves</label>
                                    <h4>9</h4>
                                </div>
                                <div className="card_widget_img">
                                    <img src="/dash3.png" alt="card-img" />
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
                                    <img src="/dash4.png" alt="card-img" />
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
                <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 d-flex">
                        <div className="card card-list flex-fill">
                            <div className="card-header ">
                                <h4 className="card-title">Total Salary By Unit</h4>
                            </div>
                            <div className="card-body">
                                <div className="team-list">
                                    <div className="team-view">
                                        <div className="team-img">
                                            <img src="/avatar-03.jpg" alt="avatar" />
                                        </div>
                                        <div className="team-content">
                                            <label>Maria Cotton</label>
                                            <span>PHP</span>
                                        </div>
                                    </div>
                                    <div className="team-action">
                                        <ul>
                                            <li><a><i data-feather="trash-2" /></a></li>
                                            <li><a><i data-feather="edit-2" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-list">
                                    <div className="team-view">
                                        <div className="team-img">
                                            <img src="/avatar-04.jpg" alt="avatar" />
                                        </div>
                                        <div className="team-content">
                                            <label>Linda Craver</label>
                                            <span>IOS</span>
                                        </div>
                                    </div>
                                    <div className="team-action">
                                        <ul>
                                            <li><a><i data-feather="trash-2" /></a></li>
                                            <li><a><i data-feather="edit-2" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-list">
                                    <div className="team-view">
                                        <div className="team-img">
                                            <img src="/avatar-06.jpg" alt="avatar" />
                                        </div>
                                        <div className="team-content">
                                            <label>Jenni Sims</label>
                                            <span>Android</span>
                                        </div>
                                    </div>
                                    <div className="team-action">
                                        <ul>
                                            <li><a><i data-feather="trash-2" /></a></li>
                                            <li><a><i data-feather="edit-2" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-list">
                                    <div className="team-view">
                                        <div className="team-img">
                                            <img src="/avatar-11.jpg" alt="avatar" />
                                        </div>
                                        <div className="team-content">
                                            <label>Danny</label>
                                            <span>Design</span>
                                        </div>
                                    </div>
                                    <div className="team-action">
                                        <ul>
                                            <li><a><i data-feather="trash-2" /></a></li>
                                            <li><a><i data-feather="edit-2" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 col-12 d-flex">
                        <div className="card card-list flex-fill">
                            <div className="card-header">
                                <div className>
                                    <h4 className="card-title">Recent Activities</h4>
                                </div>
                            </div>
                            <div className="card-body dash-activity">
                                <div className="slimscroll activity_scroll">
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-02.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-05.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>3 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-07.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>4 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-08.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>5 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-09.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>6 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-10.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-12.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>3 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-set">
                                        <div className="activity-img">
                                            <img src="/avatar-13.jpg" alt="avatar" />
                                        </div>
                                        <div className="activity-content">
                                            <label>Lorem ipsum dolor sit amet,</label>
                                            <span>4 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="leave-viewall activit">
                                    <a>View all <img src="/right-arrow.png" className="ml-2" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 col-12 d-flex">
                        <div className="card card-list flex-fill">
                            <div className="card-header ">
                                <h4 className="card-title-dash">Your Upcoming Leave</h4>
                                <div className="dropdown">
                                    <button className="btn btn-action " type="button" id="roomsBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h" />
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="roomsBtn">
                                        <a className="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="leave-set">
                                    <span className="leave-inactive">
                                        <i className="fas fa-briefcase" />
                                    </span>
                                    <label>Mon, 16 Dec 2021</label>
                                </div>
                                <div className="leave-set">
                                    <span className="leave-active">
                                        <i className="fas fa-briefcase" />
                                    </span>
                                    <label>Fri, 20 Dec 2021</label>
                                </div>
                                <div className="leave-set">
                                    <span className="leave-active">
                                        <i className="fas fa-briefcase" />
                                    </span>
                                    <label>Wed, 25 Dec 2021</label>
                                </div>
                                <div className="leave-set">
                                    <span className="leave-active">
                                        <i className="fas fa-briefcase" />
                                    </span>
                                    <label>Fri, 27 Dec 2021</label>
                                </div>
                                <div className="leave-set">
                                    <span className="leave-active">
                                        <i className="fas fa-briefcase" />
                                    </span>
                                    <label>Tue, 31 Dec 2021</label>
                                </div>
                                <div className="leave-viewall">
                                    <a href="leave.html">View all <img src="/right-arrow.png" className="ml-2" alt="arrow" /></a>
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
